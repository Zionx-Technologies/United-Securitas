// All Home page copy lives here, taken from the client's content document.
// Edit text in this file; the section components only handle layout.
// Shared content (contact, nav, footer, client logos) lives in site.js.

export const hero = {
  eyebrow: 'United Securitas, Chennai',
  title: 'Trusted Security Services in Chennai',
  subline:
    'Trained, supervised and fully compliant security guards for apartments, offices, factories, hospitals and events. United Securitas has delivered security services in Chennai since 2004.',
  primaryCta: 'Get a Free Quote',
  trust: ['Since 2004', 'Ex-SPG-led training', 'Ex-Army & Police officers', '24/7 support'],
}

/* ----------------------------------------------------------------------------
   Hero banner carousel (sections/home/Hero.jsx)

   Slides advance on their own every `heroInterval` ms and do NOT pause on hover.
   (Visitors can still pause with the pause button — accessibility requirement.)

   IMAGES — generate with Codex, then save as the `image` path below:
     public/images/hero/hero-01.jpg … hero-04.jpg
   Until a file exists, the slide shows its template (public/images/hero/hero-0X-template.svg),
   which marks the text-safe zone. Nothing else needs changing once the JPG is saved.

   Spec for every image:
     • Landscape 16:9, 1920×1080 (if Codex gives 1536×1024, crop to 16:9 — keep the subject right).
     • Subject in the RIGHT half. LEFT 45% calm, darker, uncluttered — the headline sits there.
     • Export JPG, quality ~80, under ~350 KB.
     • `focus` = CSS object-position used on phones (where the image is cropped to portrait).

   Common style line (already included in each prompt below):
     "Photorealistic editorial photograph, natural light, shot on a 35mm lens, shallow depth of
      field, muted cool tones with warm brass highlights, United Securitas chest and sleeve patches, US shield cap badges, no watermark."

   Uniform (match the real guards): light sky-blue short/long-sleeve shirt with navy epaulettes,
   navy trousers, black belt with silver buckle, navy peaked cap with a small metal badge, blue
   lanyard with ID card, black polished shoes. South Indian men and women, ages 25–45.
   ---------------------------------------------------------------------------- */
export const heroInterval = 6500

export const heroSlides = [
  {
    // PROMPT hero-01:
    // "Wide 16:9 photorealistic editorial photograph of three South Indian private security guards
    //  standing at attention at the entrance gate of a modern gated apartment complex in Chennai at
    //  golden hour. Guards wear light sky-blue shirts with navy epaulettes, navy trousers, navy
    //  peaked caps with a small metal badge and blue lanyard ID cards. Guards placed in the right
    //  half of the frame, confident and disciplined; a clean security cabin and boom barrier behind
    //  them, palm trees, warm low sun. Left 45% of the frame is soft, darker, out-of-focus driveway
    //  and sky with no detail, leaving space for a headline. Natural light, 35mm lens, shallow depth
    //  of field, muted cool tones with warm brass highlights, United Securitas chest and sleeve patches, US shield cap badges, no watermark."
    label: 'Chennai',
    eyebrow: 'United Securitas, Chennai',
    title: 'Trusted Security Services in Chennai',
    accent: 'Security Services',
    subline: hero.subline,
    image: '/images/hero/hero-01.jpg',
    template: '/images/hero/hero-01-template.svg',
    alt: 'United Securitas guards on duty at the gate of a Chennai apartment complex',
    focus: '70% center',
  },
  {
    // PROMPT hero-02:
    // "Wide 16:9 photorealistic editorial photograph inside the bright glass-and-stone lobby of a
    //  modern corporate office tower in Chennai. A well-groomed South Indian security officer in a
    //  light sky-blue shirt with navy epaulettes, navy trousers and blue lanyard ID stands at a sleek
    //  reception desk, politely checking a visitor's pass; turnstiles and a lift lobby softly blurred
    //  behind. Officer in the right half of the frame. Left 45% is a calm, darker, blurred marble
    //  wall and glass facade with no detail. Morning daylight, 35mm lens, shallow depth of field,
    //  muted cool tones with warm brass highlights, professional and premium, United Securitas chest and sleeve patches, US shield cap badges,
    //  no watermarks."
    label: 'Corporate',
    eyebrow: 'Corporate Guarding',
    title: 'Security That Looks the Part and Does the Job',
    accent: 'Does the Job',
    subline: 'Professional guards who protect your people, your assets and the first impression your workplace makes.',
    link: { label: 'Corporate security', to: '/services/corporate-security-chennai' },
    image: '/images/hero/hero-02.jpg',
    template: '/images/hero/hero-02-template.svg',
    alt: 'Security officer checking a visitor pass at a corporate office reception',
    focus: '72% center',
  },
  {
    // PROMPT hero-03:
    // "Wide 16:9 photorealistic editorial photograph of a South Indian security guard on a night
    //  round in a quiet, well-lit residential gated community in Chennai. The guard wears a light
    //  sky-blue shirt with navy epaulettes, navy trousers and a navy peaked cap, holding a torch and
    //  a duty register, walking past parked cars and villa gates with warm porch lights. Guard in
    //  the right half of the frame. Left 45% is deep blue night sky and dark, softly blurred trees
    //  with no detail. Blue-hour light with warm lamp glow, 35mm lens, shallow depth of field,
    //  reassuring and calm mood, United Securitas chest and sleeve patches, US shield cap badges, no watermark."
    label: 'Residential',
    eyebrow: 'Residential Security',
    title: 'Security That Feels Like Part of the Home',
    accent: 'Part of the Home',
    subline: 'Trained house guards who protect your home, your family and your peace of mind, day and night.',
    link: { label: 'Residential security', to: '/services/residential-security-chennai' },
    image: '/images/hero/hero-03.jpg',
    template: '/images/hero/hero-03-template.svg',
    alt: 'Guard on a night round in a residential community',
    focus: '68% center',
  },
  {
    // PROMPT hero-04:
    // "Wide 16:9 photorealistic editorial photograph of a security guard training session on an
    //  open training ground in Chennai. A row of South Indian security guards in light sky-blue
    //  shirts with navy epaulettes and navy trousers practise with red fire extinguishers under the
    //  watch of a stern, fit instructor with a former-commando bearing, wearing a navy polo and cap.
    //  Light white extinguisher spray in the air, disciplined and focused. Group in the right half of
    //  the frame. Left 45% is soft, darker, blurred open ground and sky with no detail. Late-
    //  afternoon light, 35mm lens, shallow depth of field, muted cool tones with warm brass
    //  highlights, United Securitas chest and sleeve patches, US shield cap badges, no watermark."
    label: 'Training',
    eyebrow: 'Ex-SPG-led training',
    title: 'Trained Before Day One. Retrained Every Quarter.',
    accent: 'Retrained Every Quarter.',
    // Training page hero subline (Training & Quality document)
    subline:
      'Every United Securitas guard learns under a former SPG Special Commando, trains for your site before deployment and comes back for a refresher every three months.',
    link: { label: 'Our training programme', to: '/training' },
    image: '/images/hero/hero-04.jpg',
    template: '/images/hero/hero-04-template.svg',
    alt: 'Security guards practising fire fighting with extinguishers during training',
    focus: '70% center',
  },
]

export const about = {
  title: 'A Security Agency in Chennai Built on Discipline',
  paragraphs: [
    'Since 2004, United Securitas has protected homes, workplaces and sites across the city. Among the many security companies in Chennai, we stand apart for one reason: discipline.',
    "Our guard training is led by a professionally qualified Training Manager who served as a Special Commando with the Prime Minister's SPG team. Our security officers come from the army and the police. Every guard is trained before deployment, supervised on the job and paid every statutory due, so the people protecting your site are well looked after.",
  ],
  points: [
    'Training led by a former SPG commando',
    'Security officers with army and police backgrounds',
    'Guards trained for your site before day one',
  ],
  link: 'Read our story',
}

export const iconStrip = [
  { icon: 'calendar', label: 'Serving Chennai since 2004' },
  { icon: 'medal', label: 'Ex-SPG-led training' },
  { icon: 'clock', label: '24/7 guarding and supervision' },
  { icon: 'refresh', label: 'Refresher training every 3 months' },
  { icon: 'clipboard', label: 'Free site survey' },
  { icon: 'receipt', label: 'Clear quotes, no hidden charges' },
]

export const services = {
  title: 'Our Security Services in Chennai',
  intro:
    'From a single guard at a villa gate to a full team at a factory, we plan every deployment around your site, your hours and your risks.',
  items: [
    {
      icon: 'guard',
      to: '/services',
      title: 'Security Guard Services',
      text: 'Trained, uniformed guards for day, night and round-the-clock shifts, with supervisors who check every post.',
    },
    {
      icon: 'home',
      to: '/services/residential-security-chennai',
      title: 'Residential & Apartment Security',
      text: 'Gate control, visitor logs and night rounds for apartments, gated communities, villas and bungalows.',
    },
    {
      icon: 'building',
      to: '/services/corporate-security-chennai',
      title: 'Corporate & IT Office Security',
      text: 'Reception, access control and asset protection that keeps your workplace safe and professional.',
    },
    {
      icon: 'factory',
      to: '/services',
      title: 'Industrial & Warehouse Security',
      text: 'Material gate checks, vehicle logs and perimeter patrols for factories, warehouses and godowns.',
    },
    {
      icon: 'flashlight',
      to: '/services/patrolling-chennai',
      title: 'Patrolling & Night Supervision',
      text: 'Scheduled patrols and surprise night checks that keep every guard alert, every shift.',
    },
    {
      icon: 'gate',
      to: '/services/access-control-chennai',
      title: 'Entry, Exit & Access Control',
      text: 'Every visitor, vehicle and staff movement checked, recorded and controlled at the gate.',
    },
    {
      icon: 'cctv',
      to: '/services/cctv-monitoring-chennai',
      title: 'CCTV Monitoring',
      text: 'Trained operators who watch your cameras and act quickly on what they see.',
    },
    {
      icon: 'users',
      to: '/services/event-security-chennai',
      title: 'Event Security',
      text: 'Crowd management, entry screening and VIP movement for corporate, social and public events.',
    },
  ],
  button: 'View all United Securitas services',
}

export const whyUs = {
  title: 'Why Clients Trust Our Security Agency in Chennai',
  intro:
    'Any agency can send a guard. We send one who is trained, checked and backed by people who have served in uniform.',
  items: [
    {
      title: 'Trained by an ex-SPG commando',
      text: "Our guards learn from a former Special Commando of the Prime Minister's SPG team. That level of discipline shows at every gate we guard.",
    },
    {
      title: 'Supervised by ex-Army and Police officers',
      text: 'Our security officers bring military and police experience to every site they oversee, and they know what real vigilance looks like.',
    },
    {
      title: 'Trained for your site, not just the job',
      text: 'Before deployment, we study your premises and train guards on your exact entry points, routines and risks.',
    },
    {
      title: 'Checked at night, without warning',
      text: 'Officers patrol after dark and make surprise checks, so a slack post is caught before it becomes your problem.',
    },
    {
      title: 'Ready for emergencies',
      text: 'Every guard is trained in firefighting and first aid, with a refresher course every three months.',
    },
    {
      title: 'Two decades of trust in Chennai',
      text: 'Since 2004, builders, hospitals, showrooms, cinemas and residential communities have trusted us with their sites.',
    },
  ],
}

export const industries = {
  title: 'Security for Every Kind of Site',
  intro: 'Every site has different risks. Our teams are trained for the one they protect.',
  // Nine site types, in the order of the Home page document. Photos are from the current
  // unitedsecuritas.com site (their baked-in captions cropped off).
  items: [
    {
      icon: 'apartment',
      title: 'High-Rise Apartments & Gated Communities',
      text: 'Gate control, visitor logs and night rounds for high-rise buildings and apartment complexes.',
      image: '/images/site/high-raised-building-apartments.jpg',
    },
    {
      icon: 'home',
      title: 'Villas, Bungalows & Row Houses',
      text: 'Trusted house guards who protect your home and family, day and night.',
      image: '/images/site/bungalows-guarding.jpg',
    },
    {
      icon: 'construction',
      title: 'Builders, Construction & Vacant Land',
      text: 'Materials, equipment and open plots protected round the clock.',
      image: '/images/site/vacant-land-guarding.jpg',
    },
    {
      icon: 'store',
      title: 'Retail Showrooms',
      text: 'Courteous, watchful guarding that protects stock and welcomes every customer.',
      image: '/images/site/retail-showroom-guarding.jpg',
    },
    {
      icon: 'factory',
      title: 'Factories & Warehouses',
      text: 'Gate checks and patrols that keep material from walking out.',
      image: '/images/site/warehouse-guarding.jpg',
    },
    {
      icon: 'bank',
      title: 'Banks & ATMs',
      text: 'Alert, disciplined guarding for cash, customers and staff.',
      image: '/images/site/bank-atm-guarding.jpg',
    },
    {
      icon: 'bag',
      title: 'Shopping Malls',
      text: 'Crowd flow, parking and floor-level security for busy shopping malls.',
      image: '/images/site/malls-guarding.jpg',
    },
    {
      icon: 'hospital',
      title: 'Hotels & Hospitals',
      text: 'Calm, courteous security for guests, patients and staff.',
      image: '/images/site/hotels-and-hospitals-guarding.jpg',
    },
    {
      icon: 'film',
      title: 'Cinema Halls & Entertainment',
      text: 'Smooth crowd control and safe entry for every show.',
      image: '/images/site/cinema-halls.jpg',
    },
  ],
}

export const process = {
  title: 'How We Set Up Your Security',
  steps: [
    {
      title: 'Free site survey',
      text: 'We visit your site and study its entry points, working hours and risks.',
    },
    {
      title: 'Security plan and quote',
      text: 'You get a clear plan: number of guards, shifts, duties and cost.',
    },
    {
      title: 'Guard selection and site training',
      text: 'We choose guards suited to your site and train them on your procedures.',
    },
    {
      title: 'Deployment',
      text: 'Guards report in uniform, and their supervisor is introduced to your team.',
    },
    {
      title: 'Supervision and reporting',
      text: 'Night patrols, surprise checks and monthly reports keep standards high.',
    },
  ],
}

export const training = {
  title: 'Trained Before Day One. Retrained Every Quarter.',
  paragraphs: [
    'Good security starts long before a guard reaches your gate. Our in-house programme is led by a former SPG Special Commando and covers fire fighting, taught through a reputed institute, plus first aid, safety and on-site training built around your premises.',
    'Every guard returns for a refresher course every three months. Our officers back this up with night patrols and surprise checks, so the training shows up on the job, not just on paper.',
  ],
  chips: ['Fire fighting', 'First aid & safety', 'Site-specific induction', 'Night patrolling'],
  link: 'See our training programme',
}

// TODO(client): fill in real reviewer names and designations (left blank in the content doc).
export const reviews = {
  title: 'What Our Clients Say',
  items: [
    {
      quote:
        'Since United Securitas took over our gate, every visitor is logged and the night guards are always alert. Their supervisors check in regularly, and residents finally feel at ease.',
      name: '',
      role: 'Secretary',
      org: 'Apartment association',
    },
    {
      quote:
        'We use United Securitas across our project sites. Material movement is checked at every gate, and the team responds quickly whenever we need extra guards.',
      name: '',
      role: '',
      org: 'Builder / construction company',
    },
    {
      quote:
        'Hospital security needs patience as much as alertness. Their guards handle patients and visitors politely and keep the premises orderly, day and night.',
      name: '',
      role: '',
      org: 'Hospital',
    },
    {
      quote:
        "The guards are smartly turned out and courteous with customers, yet nothing escapes their attention. That's exactly what a showroom needs.",
      name: '',
      role: '',
      org: 'Showroom',
    },
    {
      quote:
        'Peak-show crowds used to worry us. The United Securitas team now handles entry and exits smoothly and safely, show after show.',
      name: '',
      role: '',
      org: 'Cinema',
    },
  ],
}

export const closingCta = {
  title: 'Put Discipline on Duty at Your Site',
  subline: 'Trained, supervised security services in Chennai, planned around your premises.',
  button: 'Book a Free Site Survey',
}
