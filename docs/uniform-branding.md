# Uniform branding correction

Reviewed the public image inventory and the four homepage banners. The 17 generated service photos and four hero photos lacked United Securitas uniform branding. Original company photographs already show branded uniforms and are retained.

Built-in image generation edits preserve each scene and add company chest patches, visible sleeve shields and badges on existing caps. Bareheaded officers retain their original appearance. The company artwork in `public/logo.png` is the branding reference, with the user's uniform photograph guiding placement. Small photographic lettering may vary at this scale.

## Assets

- Homepage: `public/images/hero/hero-01.jpg` through `hero-04.jpg`.
- Services and industries: all 17 primary files in `public/images/site/`, with matching 640 and 1000 pixel responsive exports.
- Originals: `_old-design/uniform-branding/`.
- Before review: `docs/uniform-review-before.jpg`.
- After review: `docs/uniform-review-after.jpg`.
- Generated source manifest: `docs/uniform-image-sources.json`.

## Prompt set

Built-in tool mode, one edit per source image, using the original photo as edit target and `public/logo.png` as branding reference:

"Use case: precise-object-edit. Edit image 1 photograph using image 2 company logo reference. Preserve EXACT photograph, framing, wide aspect ratio, faces, identities, poses, scene, actions, colors and lighting. ONLY add realistic United Securitas uniform branding to every security guard: small navy gold-bordered embroidered chest patch reading UNITED SECURITAS in white on left breast pocket wherever visible, matching small US shield sleeve patches on visible upper arms, and US shield badge on each existing cap replacing generic cap emblems. Respect realistic patch size, fabric folds, perspective and occlusion. On safety vest add company chest patch to vest. Keep bareheaded people bareheaded. Do not alter visitors. No captions, floating logos, watermarks or other changes. Return one edited image, original dimensions."

The first hero uses the same constraints, explicitly identifying its three guards and the left breast pocket as viewer-right. Source generation comments in `src/data/home.js` now request company branding.

## Review and validation

All 21 edited photographs were reviewed together after export. The CCTV image received a targeted second edit to remove an incorrectly placed back pocket and patch while retaining its sleeve and cap badges. All 55 JPEG exports decoded successfully and retained their expected widths and 16:9 framing. Production build passed with `npm run build`. Existing image URLs remain valid. Browser layout testing was not performed.
