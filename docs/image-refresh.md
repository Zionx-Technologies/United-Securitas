# Image refresh

Reviewed all 88 public raster images. Replaced the 17 service/industry photographs with AI-generated marketing illustrations using the built-in image generation tool. Retained the four existing hero images, original company/team/training photographs, and brand artwork. Generated scenes do not document actual client sites or staff.

## Saved assets

All final assets: `public/images/site/{name}.jpg`, with `{name}-640.jpg` and `{name}-1000.jpg` responsive exports. Main exports are 1600 pixels wide, converted from 1672 pixel generated masters at JPEG quality 90 without upscaling. The original 17 images are backed up in `_old-design/image-refresh-originals/site/`.

The existing 88-image inventory and decisions are in [image-audit.csv](image-audit.csv). [Before](image-review-before.jpg) and [after](image-review-after.jpg) contact sheets support visual review.

## Integration

Service and industry cards, detail introductions, and corresponding banners use the replacements. Updated the About CCTV photo, services/FAQ banners, and quote form background. Responsive exports serve smaller images on mobile. Framed documentary images retain their natural aspect ratio. The authentic gallery and logos are preserved.

## Final prompt set

Validation: production build passed with `npm run build`; all 51 responsive exports were decoded, checked for their expected widths, and confirmed present in `dist`. Static image references resolve. The completed replacement set was visually reviewed together. Browser layout testing was not available in this session.

Built-in image generation mode. One image per subject. Exact common prompt, replacing `{subject}` with each subject below:

Use case: photorealistic-natural. Asset type: professional security company website service photograph. Create a single high resolution landscape 16:9 editorial photograph of {subject}. Authentic Chennai, India setting. Private security uniform: light sky blue shirt with navy epaulettes, navy trousers, black belt, polished black shoes, navy cap where appropriate, simple blue ID lanyard. Crisp natural skin and fabric detail, credible anatomy, realistic architecture, professionally composed medium wide shot, subject clearly visible and safely inside center 70 percent for responsive crops. Natural light, restrained navy and cool neutral tones with subtle warm brass accents. Premium commercial photography with realistic depth, sharp main subject, no excessive blur. No text, no watermark, no logos, no composite collage.

- **corporate-guarding**: South Indian security officer checking a visitor pass at a modern corporate office reception, glass lobby and turnstiles
- **residential-security-and-house-guards**: South Indian security officer operating a boom barrier at a clean gated residential community entrance, arriving car
- **entry-and-exit-control**: South Indian security guard checking a driver at a vehicle entry checkpoint, boom barrier and security cabin
- **cctv-operations**: South Indian security operator seated at a professional CCTV control desk, clear realistic surveillance monitors showing building corridors and entrances, viewed from behind and side
- **patrolling-services**: South Indian security guard walking a patrol through a bright modern building concourse, holding a radio
- **event-management-operations**: South Indian security staff politely checking visitors at an event entrance with a walk-through metal detector, orderly queue
- **high-raised-building-apartments**: two South Indian security officers at the entrance gate of a modern high rise apartment complex, landscaped grounds
- **bungalows-guarding**: South Indian security guard stationed at the gate of an elegant Chennai bungalow with palms and garden
- **villas**: South Indian security guard at the security cabin and entry gate of a modern villa community
- **row-houses**: South Indian security officer patrolling a clean row house community with contemporary homes
- **bank-atm-guarding**: South Indian unarmed private security guard standing at a modern bank branch entrance beside an ATM vestibule
- **malls-guarding**: South Indian security guard with a handheld radio standing in a modern shopping mall atrium
- **retail-showroom-guarding**: South Indian security officer politely checking a customer bag at a bright modern retail showroom entrance
- **warehouse-guarding**: South Indian security guard in a reflective safety vest over light blue uniform checking a clipboard beside neat warehouse loading bays
- **hotels-and-hospitals-guarding**: two South Indian security guards walking a bright premium institutional corridor with reception and clear sightlines
- **cinema-halls**: South Indian uniformed private security staff politely checking tickets and bags at a cinema entrance, warm lobby lighting
- **vacant-land-guarding**: South Indian security guard patrolling the boundary of a vacant development plot with a fence, Chennai palms and distant buildings

