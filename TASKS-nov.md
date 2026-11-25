# Tasks - November

## Task 1: Access the generated CVs from the phone (Google Drive sync)

Goal: read and send the PDFs in `buildCVs/` from the phone when away from home, without the PC being on. Chosen approach: sync the folder to Google Drive with `rclone` (a tunnel or endpoint would need the PC running). The PDFs contain personal data, so keep the Drive folder private.

[] **[D1 P4]** Install rclone in WSL: `curl https://rclone.org/install.sh | sudo bash`.
[] **[D1 P4]** Authorize Google Drive once (manual, opens a browser): `rclone config`, new remote named `gdrive`, type `drive`, scope `drive.file` or `drive`.
[] **[D1 P4]** Add the script `"sync-cvs": "rclone copy buildCVs gdrive:CVs --include \"*.pdf\""` to `package.json`.
[] **[D1 P3]** Run `npm run sync-cvs` and check the PDFs in the Drive app on the phone.
[] **[D2 P2]** Optional: run the sync at the end of `generate-pdf.js` (flag `--sync`) so every generated CV is uploaded automatically.
[] **[D1 P2]** Document the command in `CLAUDE.md` > PDF generation.

Notes:
- `buildCVs/` is in `.gitignore`, so the PDFs are not committed.
- Use `rclone copy`, not `rclone sync`: `sync` deletes in Drive whatever is missing locally.
