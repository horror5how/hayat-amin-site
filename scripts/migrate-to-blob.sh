#!/usr/bin/env bash
# Migrate local assets to Vercel Blob (store: hayat-assets).
# Uploads source photos, author photos, and blog hero images to one unified bucket.
# Retries each upload 3x with backoff (routine resilience rule).
set -u

LOG=/tmp/blob-migration-$(date +%Y%m%d-%H%M%S).log
MANIFEST=/tmp/blob-manifest.json
BASE_URL="https://vgdqc90ld6yys4op.public.blob.vercel-storage.com"
TOKEN="$(grep BLOB_READ_WRITE_TOKEN /tmp/blob-env.txt | cut -d'"' -f2)"
export BLOB_READ_WRITE_TOKEN="$TOKEN"

echo "[]" > "$MANIFEST"
echo "Migration started $(date -u)" | tee "$LOG"

put_with_retry() {
  local src="$1"
  local dest="$2"
  local content_type="${3:-}"
  local attempt=1
  local extra_flags=""
  [ -n "$content_type" ] && extra_flags="--content-type $content_type"
  while [ $attempt -le 3 ]; do
    if vercel blob put "$src" --pathname "$dest" --access public --allow-overwrite true $extra_flags 2>&1 | tee -a "$LOG" | grep -q "https://"; then
      local url="${BASE_URL}/${dest}"
      # Append to manifest
      python3 -c "
import json, sys
data = json.load(open('$MANIFEST'))
data.append({'src': '$src', 'dest': '$dest', 'url': '$url'})
json.dump(data, open('$MANIFEST','w'), indent=2)
"
      echo "OK   $dest" | tee -a "$LOG"
      return 0
    fi
    echo "RETRY $attempt for $dest" | tee -a "$LOG"
    sleep $((attempt * 3))
    attempt=$((attempt + 1))
  done
  echo "FAIL $dest after 3 attempts" | tee -a "$LOG"
  return 1
}

# 1. Source photos (Hayat Amin information folder) -> people/hayat/
SRC1="/Users/hayatamin/Documents/Hayat Amin information"
if [ -d "$SRC1" ]; then
  echo "--- Migrating source photos ---" | tee -a "$LOG"
  while IFS= read -r f; do
    base="$(basename "$f")"
    # Sanitize: replace spaces, lowercase
    safe="$(echo "$base" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')"
    put_with_retry "$f" "people/hayat/${safe}"
  done < <(find "$SRC1" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \))
fi

# 2. Author photos -> people/hayat/authors/
SRC2="/Users/hayatamin/Documents/hayat-amin-site/public/authors/hayat-amin"
if [ -d "$SRC2" ]; then
  echo "--- Migrating author photos ---" | tee -a "$LOG"
  while IFS= read -r f; do
    base="$(basename "$f")"
    safe="$(echo "$base" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')"
    put_with_retry "$f" "people/hayat/authors/${safe}"
  done < <(find "$SRC2" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \))
fi

# 3. Blog hero images -> blog/heroes/
SRC3="/Users/hayatamin/Documents/hayat-amin-site/public"
echo "--- Migrating blog hero images ---" | tee -a "$LOG"
for f in "$SRC3"/*.jpg; do
  [ -f "$f" ] || continue
  base="$(basename "$f")"
  safe="$(echo "$base" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')"
  put_with_retry "$f" "blog/heroes/${safe}"
done

echo "Migration complete $(date -u)" | tee -a "$LOG"
echo "Manifest: $MANIFEST"
echo "Log: $LOG"
python3 -c "
import json
data = json.load(open('$MANIFEST'))
print(f'Total uploaded: {len(data)}')
for d in data[:5]:
    print(f\"  {d['dest']} -> {d['url']}\")
"
