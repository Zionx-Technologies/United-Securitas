// Services overview + six service pages, from the client's "Services Pages" document.
// Every service page uses the same template (pages/ServiceDetail.jsx); add a page by
// adding an object to `serviceList` below.

import { industriesBase, industryLinkFor } from './industries'

const INDUSTRIES = industriesBase

export const hub = {
  meta: {
    title: 'Security Guard Services in Chennai | United Securitas',
    description:
      'Trained, supervised security guard services in Chennai: corporate guarding, access control, CCTV monitoring, patrolling and event security. Free site survey.',
    path: '/services/',
  },
  hero: {
    eyebrow: 'Our Services',
    title: 'Security Guard Services in Chennai',
    subline:
      'Trained guards, experienced supervisors and the right support systems, planned around your site and your hours.',
  },
  intro: {
    title: 'Security Built Around Your Site',
    paragraphs: [
      'Every site has its own entry points, routines and risks. As one of the established security agencies in Chennai, we don’t offer a one-size-fits-all guard. We study your premises, then put together the right mix of guarding, access control, monitoring and patrols.',
      'All United Securitas services share the same foundation: guards trained under a former SPG commando, supervised by officers from the Army and the Police, and paid every statutory due.',
    ],
  },
  services: {
    title: 'What We Do',
    intro: 'Six core services, each delivered by trained, supervised guards. Click any service to learn more.',
    link: 'Explore',
  },
  support: {
    title: 'More Ways We Support You',
    intro: 'Beyond guarding, we also help clients with these services. Contact us to discuss your needs.',
    items: [
      {
        icon: 'graduation',
        title: 'Security Training for In-House Teams',
        text: 'Firefighting, safety and security awareness for your own staff.',
        link: 'See our training',
        to: '/training',
      },
      {
        icon: 'clipboard',
        title: 'Security Consultancy & Site Assessment',
        text: 'A survey of your site’s risks and the right plan to cover them.',
        link: 'Talk to us',
        subject: 'Security consultancy enquiry',
      },
      {
        icon: 'wrench',
        title: 'Facilities Management',
        text: 'Support services that keep your premises running smoothly.',
        link: 'Talk to us',
        subject: 'Facilities management enquiry',
      },
      {
        icon: 'recruit',
        title: 'Recruitment & Placement',
        text: 'Trained security manpower, sourced and placed for your site.',
        link: 'Talk to us',
        subject: 'Recruitment and placement enquiry',
      },
    ],
  },
  included: [
    { icon: 'graduation', label: 'Trained before deployment' },
    { icon: 'refresh', label: 'Refresher training every 3 months' },
    { icon: 'star', label: 'Supervised by ex-Army & Police officers' },
    { icon: 'moon', label: 'Night patrols and surprise checks' },
    { icon: 'wallet', label: 'Minimum wages, ESI, PF and bonus' },
    { icon: 'clock', label: '24/7 support' },
  ],
  industries: {
    title: 'Looking for Security for a Specific Type of Site?',
    intro:
      'Different sites face different risks. A bank needs different vigilance from an apartment gate, and a cinema needs different crowd control from a warehouse. Explore how we protect your type of site.',
    items: [
      { icon: 'apartment', title: 'Apartments & Gated Communities', text: 'Gate control, visitor logs and night rounds.' },
      { icon: 'home', title: 'Villas, Bungalows & Row Houses', text: 'House guards for independent homes.' },
      { icon: 'bank', title: 'Banks & ATMs', text: 'Alert guarding for cash, customers and staff.' },
      { icon: 'store', title: 'Malls & Retail Showrooms', text: 'Stock protection and a welcoming presence.' },
      { icon: 'factory', title: 'Warehouses & Factories', text: 'Gate checks and perimeter patrols.' },
      { icon: 'hospital', title: 'Hotels & Hospitals', text: 'Calm, courteous security for guests and patients.' },
      { icon: 'film', title: 'Cinema Halls', text: 'Crowd control and safe entry for every show.' },
      { icon: 'construction', title: 'Vacant Land & Construction Sites', text: 'Open plots and materials protected round the clock.' },
    ].map((i) => ({ ...i, to: industryLinkFor(i.title) })),
    button: 'View all industries',
    to: INDUSTRIES,
  },
  process: {
    title: 'From Enquiry to Deployment',
    steps: [
      { title: 'Free site survey', text: 'We study your entry points, hours and risks.' },
      { title: 'Security plan and quote', text: 'Guards, shifts, duties and cost, clearly laid out.' },
      { title: 'Site training', text: 'Guards learn your premises before day one.' },
      { title: 'Deployment & supervision', text: 'Officers check every post, day and night.' },
    ],
  },
  faqs: {
    title: 'Questions About Our Services',
    items: [
      {
        q: 'Can I combine more than one service?',
        a: 'Yes. Most sites use a mix, for example guards at the gate, CCTV monitoring and night patrols. We’ll recommend the right combination after a free site survey.',
      },
      {
        q: 'Do you provide guards for day, night and 24-hour shifts?',
        a: 'Yes. We provide day shifts, night shifts and round-the-clock coverage, depending on what your site needs.',
      },
      {
        q: 'Do you provide short-term or event security?',
        a: 'Yes. We cover one-time events and short periods of extra need, as well as long-term contracts.',
      },
    ],
  },
  closing: {
    title: 'Not Sure Which Service You Need?',
    subline: 'Tell us about your site. We’ll visit, assess it and recommend the right plan, free of charge.',
    button: 'Book a Free Site Survey',
  },
}

const where = (title, intro, items) => ({ title, intro, items, button: 'View all industries', to: INDUSTRIES })
const place = (icon, title, text) => ({ icon, title, text, to: industryLinkFor(title) })

export const serviceList = [
  {
    slug: 'residential-security-chennai',
    image: { src: '/images/site/residential-security-and-house-guards.jpg', alt: 'Security guard operating the boom barrier at a residential gate' },
    name: 'Residential Security & House Guards',
    summary: 'House guards for homes, apartments, villas and gated communities.',
    photo: { src: '/images/banner-02.jpg', alt: 'United Securitas guards standing at salute outside a residential building' },
    meta: {
      title: 'Residential Security Services in Chennai | United Securitas',
      description:
        'Trained house guards for homes, apartments and villas. United Securitas provides residential security services in Chennai, supervised and compliant. Free survey.',
    },
    hero: {
      eyebrow: 'Residential Security',
      title: 'Residential Security Services in Chennai',
      subline: 'Trained house guards who protect your home, your family and your peace of mind, day and night.',
    },
    intro: {
      title: 'Security That Feels Like Part of the Home',
      paragraphs: [
        'Your home is where security matters most, and where it has to feel reassuring rather than intrusive. Our residential security services in Chennai place trained, courteous guards at your gate who know every resident, screen every visitor and stay alert through the night.',
        'Whether you need a single house guard or a team for a large property, we plan the posting around your home, your family’s routine and the risks around your area. Our home security services in Chennai are built on the same training and supervision behind every United Securitas posting.',
      ],
    },
    covers: {
      title: 'What Our Residential Guards Do',
      items: [
        { icon: 'gate', title: 'Gate & Access Control', text: 'Open and close the gate, check every visitor and keep an entry log.' },
        { icon: 'idcard', title: 'Visitor & Vehicle Screening', text: 'Verify guests, delivery staff and vehicles before they come in.' },
        { icon: 'moon', title: 'Night Rounds', text: 'Patrol the compound and check doors, gates and parking through the night.' },
        { icon: 'siren', title: 'Emergency Response', text: 'Trained in firefighting and first aid, ready to act and raise an alarm.' },
      ],
    },
    challenge: {
      title: 'Why Homes Need More Than a Watchman',
      paragraphs: [
        'Many homes rely on an untrained watchman who sits at the gate but isn’t ready when something goes wrong. A real security guard verifies visitors, keeps a clear log, stays awake and alert at night, and knows exactly what to do in a fire or medical emergency.',
        'As trusted private security guards in Chennai, our team brings that discipline to your doorstep, backed by officers who check on them without warning.',
      ],
    },
    deploy: {
      title: 'How We Secure Your Home',
      steps: [
        { title: 'Home survey', text: 'We visit, study your gate, compound and entry points, and note the risks.' },
        { title: 'The right guard', text: 'We select a guard suited to your home and train them on your routine.' },
        { title: 'Clear instructions', text: 'Visitor rules, emergency contacts and reporting, agreed with you.' },
        { title: 'Checks & reports', text: 'Night rounds and surprise officer checks keep standards high.' },
      ],
    },
    training: {
      title: 'Trained for Your Home',
      text: 'Every residential guard completes our induction in firefighting, first aid, safety and conduct before deployment, then trains on your specific home. They return for a refresher course every three months. Above all, we train for courtesy: your guard should greet your family and guests warmly while staying watchful.',
      photo: { src: '/gallery/30.jpeg', alt: 'United Securitas guard practising CPR during first-aid training' },
    },
    where: where('Where We Provide This Service', 'Residential security takes many forms. Explore the one that fits your home.', [
      place('apartment', 'Apartments & Gated Communities', 'Gate control and visitor logs for high-rise living.'),
      place('home', 'Villas, Bungalows & Row Houses', 'Dedicated house guards for independent homes.'),
    ]),
    // TODO(client): add the reviewer's name and association (left blank in the content doc).
    review: {
      quote:
        'Since United Securitas took over our gate, every visitor is logged and the night guards are always alert. Their supervisors check in regularly, and residents finally feel at ease.',
      name: '',
      role: 'Secretary, Apartment association',
    },
    faqs: {
      title: 'Questions About Residential Security',
      items: [
        {
          q: 'Can I hire just one house guard?',
          a: 'Yes. We provide anything from a single house guard to a full team, depending on your home and the hours you need covered.',
        },
        {
          q: 'Do you provide day and night guards for homes?',
          a: 'Yes. Our home security services in Chennai cover day shifts, night shifts and round-the-clock guarding.',
        },
        {
          q: 'Are your residential guards trained and verified?',
          a: 'Yes. Every guard is trained before deployment and works under the statutory compliance we maintain for all our staff.',
        },
      ],
    },
    closing: {
      title: 'Protect What Matters Most',
      subline: 'Trained, courteous residential security services in Chennai, planned around your home.',
      button: 'Book a Free Site Survey',
    },
  },

  {
    slug: 'corporate-security-chennai',
    image: { src: '/images/site/corporate-guarding.jpg', alt: 'Security officer checking a visitor pass at a modern office reception' },
    name: 'Corporate Guarding',
    summary: 'Reception, access control and asset protection for offices and IT parks.',
    photo: { src: '/gallery/guard-office-campus.jpg', alt: 'United Securitas guard using a radio outside an office building', position: 'xMaxYMid' },
    meta: {
      title: 'Corporate Security Services in Chennai | United Securitas',
      description:
        'Professional guards for offices and IT parks: reception, access control and asset protection. United Securitas corporate security services in Chennai. Free survey.',
    },
    hero: {
      eyebrow: 'Corporate Guarding',
      title: 'Corporate Security Services in Chennai',
      subline: 'Professional guards who protect your people, your assets and the first impression your workplace makes.',
    },
    intro: {
      title: 'Security That Looks the Part and Does the Job',
      paragraphs: [
        'In a corporate setting, the guard at your reception is the first person your clients and staff meet. Our corporate security services in Chennai place smart, well-spoken guards who manage access professionally while keeping your premises, people and assets secure.',
        'From a single office to a full IT park, our office security services in Chennai combine controlled access, reception management and asset protection, supervised by officers from the Army and the Police.',
      ],
    },
    covers: {
      title: 'What Our Corporate Guards Do',
      items: [
        { icon: 'reception', title: 'Reception & Front Desk', text: 'Greet visitors, issue passes and manage the front desk professionally.' },
        { icon: 'key', title: 'Access Control', text: 'Control entry to the building, floors and sensitive areas.' },
        { icon: 'package', title: 'Asset Protection', text: 'Protect equipment, documents and company property from loss.' },
        { icon: 'parking', title: 'Parking & Vehicle Management', text: 'Manage staff and visitor parking and keep vehicle records.' },
      ],
    },
    challenge: {
      title: 'What Corporate Sites Really Need',
      paragraphs: [
        'A corporate office needs security that is strict but never off-putting. Visitors must be verified without being made to wait, assets protected without disrupting work, and the whole operation must look professional. Our corporate guarding services in Chennai are trained for exactly that balance: firm on the rules, courteous with people.',
      ],
    },
    deploy: {
      title: 'How We Secure Your Workplace',
      steps: [
        { title: 'Site survey', text: 'We map your entry points, floors, parking and sensitive areas.' },
        { title: 'Posting plan', text: 'Reception, access points and patrols, matched to your working hours.' },
        { title: 'Trained guards', text: 'Guards trained in front-desk conduct and your access procedures.' },
        { title: 'Supervision', text: 'Officers check every post and report to you regularly.' },
      ],
    },
    training: {
      title: 'Trained for a Professional Environment',
      text: 'Our corporate guards are trained in reception conduct, visitor management and access control, on top of our standard induction in firefighting, first aid and safety. They present well, communicate clearly and understand that in a corporate setting, how security is delivered matters as much as the security itself.',
      photo: { src: '/images/gallery-13.jpg', alt: 'United Securitas trainer leading a classroom session' },
    },
    where: where('Where We Provide This Service', 'We protect corporate and commercial sites of every kind.', [
      place('building', 'Corporate & IT Parks', 'Front desks and controlled access for busy workplaces.'),
      place('factory', 'Warehouses & Factories', 'Gate checks and patrols for industrial sites.'),
    ]),
    faqs: {
      title: 'Questions About Corporate Security',
      items: [
        {
          q: 'Do you provide guards for IT parks and large offices?',
          a: 'Yes. Our corporate security services in Chennai scale from a single reception post to a full team across an IT park.',
        },
        {
          q: 'Can your guards manage our reception and visitor passes?',
          a: 'Yes. Our guards are trained in front-desk conduct, visitor verification and pass management.',
        },
        {
          q: 'Do you provide both armed and unarmed corporate guards?',
          a: 'Most corporate sites use trained unarmed guards. Tell us your requirement during the site survey and we’ll recommend the right cover.',
        },
      ],
    },
    closing: {
      title: 'Secure Your Workplace the Professional Way',
      subline: 'Trained, well-presented corporate security services in Chennai, planned around your office.',
      button: 'Book a Free Site Survey',
    },
  },

  {
    slug: 'access-control-chennai',
    image: { src: '/images/site/entry-and-exit-control.jpg', alt: 'Car stopped at a vehicle checkpoint at a building entrance' },
    name: 'Entry & Exit Control',
    summary: 'Every visitor, vehicle and staff movement is checked and recorded at the gate.',
    photo: { src: '/gallery/gallery-15.jpg', alt: 'United Securitas security guard on duty at a site gate', position: 'xMaxYMid', card: 'center bottom' },
    meta: {
      title: 'Access Control Security Services in Chennai | United Securitas',
      description:
        'Trained guards for entry and exit control: visitor management, vehicle checks and material gate checks. United Securitas access control security services in Chennai.',
    },
    hero: {
      eyebrow: 'Entry & Exit Control',
      title: 'Access Control Security Services in Chennai',
      subline: 'Control who comes in, who goes out and what moves through your gate, with every movement checked and recorded.',
    },
    intro: {
      title: 'The Gate Is Where Security Begins',
      paragraphs: [
        'Most security incidents can be stopped at the entrance. Our access control security services in Chennai put trained guards on your gates to verify every person, vehicle and item before it enters, and to check what leaves.',
        'From visitor passes to vehicle logs and material gate checks, our entry and exit control services in Chennai give you a clear, recorded account of every movement across your boundary.',
      ],
    },
    covers: {
      title: 'What Access Control Covers',
      items: [
        { icon: 'idcard', title: 'Visitor Management', text: 'Verify, log and issue passes to every visitor before entry.' },
        { icon: 'car', title: 'Vehicle Checks', text: 'Record and inspect vehicles coming in and going out.' },
        { icon: 'users', title: 'Staff Entry & Exit', text: 'Manage staff movement and attendance at the gate.' },
        { icon: 'package', title: 'Material Gate Checks', text: 'Check materials and goods leaving the site against records.' },
      ],
    },
    challenge: {
      title: 'An Unchecked Gate Is an Open Door',
      paragraphs: [
        'A gate left to an untrained guard is a weak point: visitors wander in unverified, materials leave unrecorded and there’s no log when something goes wrong. Our guards run proper visitor management services in Chennai, keeping a clear record of every entry and exit so nothing and no one passes unchecked.',
      ],
    },
    deploy: {
      title: 'How We Control Your Access Points',
      steps: [
        { title: 'Map the boundary', text: 'We identify every entry and exit point on your site.' },
        { title: 'Set the procedure', text: 'Visitor, vehicle and material rules, agreed with you.' },
        { title: 'Deploy & record', text: 'Guards verify and log every movement at the gate.' },
        { title: 'Review the logs', text: 'Regular reporting so you can see what moved, and when.' },
      ],
    },
    training: {
      title: 'Trained to Check, Record and Stay Firm',
      text: 'Access control depends on discipline: a guard who checks everyone, every time, and keeps an accurate log. Our guards are trained in visitor verification, vehicle checks, material gate procedures and record-keeping, on top of our standard induction in firefighting, first aid and safety.',
      photo: { src: '/images/gallery-10.jpg', alt: 'United Securitas officers briefing a group of guards' },
    },
    where: where('Where We Provide This Service', 'Access control matters most at these sites.', [
      place('building', 'Corporate & IT Parks', 'Controlled access and visitor passes for offices.'),
      place('factory', 'Warehouses & Factories', 'Material gate checks and vehicle logs.'),
    ]),
    faqs: {
      title: 'Questions About Access Control',
      items: [
        {
          q: 'Do you provide visitor management at the gate?',
          a: 'Yes. Our visitor management services in Chennai cover verification, logging and pass issue for every visitor.',
        },
        {
          q: 'Can you do material gate checks for our factory?',
          a: 'Yes. Our guards check materials and goods leaving the site against your records, and keep a clear log.',
        },
        {
          q: 'Do you work alongside our electronic access systems?',
          a: 'Yes. Our guards manage manual checks and registers alongside any boom barriers, card readers or cameras you already have.',
        },
      ],
    },
    closing: {
      title: 'Control Every Movement at Your Gate',
      subline: 'Trained access control security services in Chennai, planned around your entry points.',
      button: 'Book a Free Site Survey',
    },
  },

  {
    slug: 'cctv-monitoring-chennai',
    image: { src: '/images/site/cctv-operations.jpg', alt: 'Operator watching a wall of CCTV monitors in a control room' },
    name: 'CCTV Operations',
    summary: 'Trained operators who watch your cameras and act quickly on what they see.',
    photo: { src: '/gallery/cctv-operator.jpg', alt: 'United Securitas operator monitoring CCTV screens', position: 'xMaxYMid', card: 'right center' },
    meta: {
      title: 'CCTV Monitoring Services in Chennai | United Securitas',
      description:
        'Trained CCTV operators who watch your cameras live and act fast. United Securitas CCTV monitoring services in Chennai, working with your on-site guards.',
    },
    hero: {
      eyebrow: 'CCTV Operations',
      title: 'CCTV Monitoring Services in Chennai',
      subline: 'Trained operators who watch your cameras, catch what matters and act the moment something looks wrong.',
    },
    intro: {
      title: 'Cameras Only Help If Someone Is Watching',
      paragraphs: [
        'A camera records, but it doesn’t respond. Our CCTV monitoring services in Chennai put trained operators behind your screens to watch live feeds, spot unusual activity and alert the right people immediately.',
        'Our CCTV operators in Chennai work hand in hand with the guards on the ground, so what the cameras see turns into action at the gate, on the floor or on patrol.',
      ],
    },
    covers: {
      title: 'What Our CCTV Operations Cover',
      items: [
        { icon: 'monitor', title: 'Live Monitoring', text: 'Operators watch your feeds in real time, not just after the fact.' },
        { icon: 'scan', title: 'Incident Spotting', text: 'Catch loitering, unauthorised entry and unusual movement early.' },
        { icon: 'alert', title: 'Instant Alerts', text: 'Operators alert on-site guards and you the moment something happens.' },
        { icon: 'log', title: 'Logs & Reports', text: 'A record of incidents and footage reviews for your reference.' },
      ],
    },
    challenge: {
      title: 'Footage After the Fact Isn’t Enough',
      paragraphs: [
        'Most sites only look at CCTV after something has gone wrong. By then, the damage is done. Trained CCTV control room operators in Chennai change that: they watch live, notice the early signs and raise the alarm while there’s still time to act.',
      ],
    },
    deploy: {
      title: 'How We Set Up Your Monitoring',
      steps: [
        { title: 'Review your cameras', text: 'We check your camera coverage and control room setup.' },
        { title: 'Agree the watch', text: 'Hours of monitoring, alert contacts and escalation rules.' },
        { title: 'Deploy operators', text: 'Trained operators watch your feeds and log incidents.' },
        { title: 'Coordinate response', text: 'Operators and on-site guards act together on alerts.' },
      ],
    },
    training: {
      title: 'Trained to Watch and to Act',
      text: 'Monitoring is a skill: staying alert through long shifts, knowing what to look for and responding fast. Our CCTV operators are trained to read live feeds, identify incidents and coordinate with on-site guards, on top of our standard induction in safety and conduct.',
      photo: { src: '/images/gallery-12.jpg', alt: 'United Securitas guards attending a training session' },
    },
    where: where('Where We Provide This Service', 'CCTV monitoring strengthens security at these sites.', [
      place('bank', 'Banks & ATMs', 'Live monitoring of cash areas and ATMs.'),
      place('factory', 'Warehouses & Factories', 'Eyes on perimeters, gates and storage areas.'),
    ]),
    faqs: {
      title: 'Questions About CCTV Monitoring',
      items: [
        {
          q: 'Do you provide CCTV operators for our control room?',
          a: 'Yes. We provide trained CCTV control room operators in Chennai to monitor your feeds live, around the clock if needed.',
        },
        {
          // TODO(client): confirm camera installation scope (flagged in the content doc).
          q: 'Do you install cameras, or only monitor them?',
          a: 'Tell us your setup during the site survey. Our focus is trained monitoring of your cameras; we’ll confirm what we can support for your system.',
        },
        {
          q: 'Can CCTV monitoring work with on-site guards?',
          a: 'Yes. That’s where it works best: our operators spot an incident and alert your on-site guards to act immediately.',
        },
      ],
    },
    closing: {
      title: 'Put Trained Eyes on Your Cameras',
      subline: 'CCTV monitoring services in Chennai that turn footage into fast action.',
      button: 'Book a Free Site Survey',
    },
  },

  {
    slug: 'patrolling-chennai',
    image: { src: '/images/site/patrolling-services.jpg', alt: 'Security guard on patrol in a large building concourse' },
    name: 'Patrolling Services',
    summary: 'Scheduled patrols and surprise night checks across your site.',
    photo: { src: '/gallery/gallery-26.jpg', alt: 'United Securitas guards at a night assembly before patrol duty', position: 'xMaxYMid', card: 'center bottom' },
    meta: {
      title: 'Security Patrolling Services in Chennai | United Securitas',
      description:
        'Scheduled patrols and surprise night checks across your site. United Securitas security patrolling services in Chennai, led by ex-Army and Police officers.',
    },
    hero: {
      eyebrow: 'Patrolling Services',
      title: 'Security Patrolling Services in Chennai',
      subline: 'Guards and officers who don’t just stand at the gate, but move, check and cover every corner of your site.',
    },
    intro: {
      title: 'A Moving Guard Covers More Than a Standing One',
      paragraphs: [
        'A guard fixed at one post can’t see the whole site. Our security patrolling services in Chennai keep guards and officers moving on set routes, checking blind spots, back gates, parking and perimeters that a single posting would miss.',
        'Our night patrolling security guards in Chennai are the reason problems get caught early: a patrol that turns up at an unexpected moment is the hardest thing for an intruder to plan around.',
      ],
    },
    covers: {
      title: 'What Our Patrolling Covers',
      items: [
        { icon: 'route', title: 'Scheduled Patrols', text: 'Guards cover set routes across your site at regular intervals.' },
        { icon: 'moon', title: 'Surprise Night Checks', text: 'Officers make unannounced checks to keep every post alert.' },
        { icon: 'flashlight', title: 'Perimeter & Blind Spots', text: 'Back gates, parking, terraces and quiet corners, all covered.' },
        { icon: 'log', title: 'Patrol Logs', text: 'A record of each round, so you know your site was checked.' },
      ],
    },
    challenge: {
      title: 'The Risk of a Site Left Unwatched at Night',
      paragraphs: [
        'Night is when sites are most vulnerable and when guards are most likely to slack off. Our mobile patrolling security in Chennai solves both: regular patrols keep the whole site covered, and surprise officer checks make sure the guards themselves stay alert through the small hours.',
      ],
    },
    deploy: {
      title: 'How We Plan Your Patrols',
      steps: [
        { title: 'Map the site', text: 'We identify the routes, blind spots and high-risk areas.' },
        { title: 'Set the schedule', text: 'Patrol routes and timings, including random night rounds.' },
        { title: 'Deploy & patrol', text: 'Guards cover the routes; officers run surprise checks.' },
        { title: 'Log & report', text: 'Each round is recorded and reported to you.' },
      ],
    },
    training: {
      title: 'Trained to Stay Sharp on the Move',
      text: 'Patrolling is about vigilance, not just walking. Our guards are trained in patrol routines, what to watch for and how to respond to anything unusual. Night patrolling is part of every guard’s induction, and our officers, drawn from the Army and the Police, know exactly how to keep a night team alert.',
      photo: { src: '/images/gallery-09.jpg', alt: 'United Securitas guards standing in formation for inspection' },
    },
    where: where('Where We Provide This Service', 'Patrolling strengthens security at large and open sites.', [
      place('construction', 'Vacant Land & Construction Sites', 'Regular rounds across open plots and sites.'),
      place('factory', 'Warehouses & Factories', 'Perimeter patrols for large industrial sites.'),
    ]),
    faqs: {
      title: 'Questions About Patrolling',
      items: [
        {
          q: 'Do you provide night patrolling guards?',
          a: 'Yes. Our night patrolling security guards in Chennai cover your site through the night, backed by surprise officer checks.',
        },
        {
          q: 'What are surprise checks?',
          a: 'Our officers arrive unannounced to make sure guards are alert and at their posts. It’s the simplest way to keep standards high at 3 a.m.',
        },
        {
          q: 'Can patrolling be added to my existing guards?',
          a: 'Yes. Mobile patrolling security in Chennai can be added to static guards, or provided on its own for larger sites.',
        },
      ],
    },
    closing: {
      title: 'Keep Every Corner of Your Site Covered',
      subline: 'Security patrolling services in Chennai that catch problems before they grow.',
      button: 'Book a Free Site Survey',
    },
  },

  {
    slug: 'event-security-chennai',
    image: { src: '/images/site/event-management-operations.jpg', alt: 'Event security team screening visitors at a door-frame metal detector' },
    name: 'Event Security',
    summary: 'Crowd management, entry screening and VIP movement for events.',
    photo: { src: '/gallery/event-screening.jpg', alt: 'United Securitas event security team screening visitors at an entry point' },
    meta: {
      title: 'Event Security Services in Chennai | United Securitas',
      description:
        'Entry screening, crowd management and VIP movement for corporate, social and public events. United Securitas event security services in Chennai. Get a quote.',
    },
    hero: {
      eyebrow: 'Event Security',
      title: 'Event Security Services in Chennai',
      subline: 'Smooth entry, calm crowds and safe exits, so your event is remembered for the right reasons.',
    },
    intro: {
      title: 'Crowds Need Control, Guests Need Courtesy',
      paragraphs: [
        'An event brings a crowd, and a crowd brings risk: pushing at the entry, unauthorised access, and the chaos of everyone leaving at once. Our event security services in Chennai manage all of it, so guests stay safe and your event runs smoothly.',
        'From corporate functions to social and public events, our event security guards in Chennai handle entry screening, crowd flow and VIP movement with a calm, visible presence.',
      ],
    },
    covers: {
      title: 'What Our Event Security Covers',
      items: [
        { icon: 'ticket', title: 'Entry Screening', text: 'Check passes and guests, and keep gate-crashers out.' },
        { icon: 'users', title: 'Crowd Management', text: 'Keep queues orderly and crowds moving safely.' },
        { icon: 'vip', title: 'VIP Movement', text: 'Safe, discreet movement for special guests.' },
        { icon: 'exit', title: 'Safe Exits', text: 'Manage the rush at closing so everyone leaves safely.' },
      ],
    },
    challenge: {
      title: 'Everything Happens at Once at an Event',
      paragraphs: [
        'Unlike a fixed site, an event has no second chance: the crowd arrives together, peaks together and leaves together. It takes trained crowd management services in Chennai to keep entry smooth, spot trouble early and handle the exit rush, all while staying courteous with your guests.',
      ],
    },
    deploy: {
      title: 'How We Secure Your Event',
      steps: [
        { title: 'Venue survey', text: 'We study the venue, entry points, capacity and risks.' },
        { title: 'Security plan', text: 'Guard numbers, posts, crowd flow and VIP routes.' },
        { title: 'Briefed team', text: 'Guards briefed on your event, guests and emergency plan.' },
        { title: 'On-the-day cover', text: 'Entry, crowd and exit managed by a supervised team.' },
      ],
    },
    training: {
      title: 'Trained for the Pressure of a Live Crowd',
      text: 'Event security needs guards who stay calm when a crowd surges and courteous when a guest is frustrated. Our teams are trained in crowd management, entry screening and emergency response, on top of our standard induction in firefighting and first aid, and led on the day by experienced officers.',
      photo: { src: '/gallery/25.jpeg', alt: 'United Securitas guards in a fire drill with wet sacks' },
    },
    where: where('Where We Provide This Service', 'We secure events of every kind, and the venues that host them.', [
      place('film', 'Cinema Halls', 'Crowd control for shows and premieres.'),
      place('hospital', 'Hotels & Hospitals', 'Security for functions, banquets and gatherings.'),
    ]),
    faqs: {
      title: 'Questions About Event Security',
      items: [
        {
          q: 'Do you provide security for one-time events?',
          a: 'Yes. Our event security guards in Chennai cover corporate, social and public events, for a single day or a multi-day occasion.',
        },
        {
          q: 'Can you handle large crowds?',
          a: 'Yes. Our crowd management services in Chennai are planned around your expected numbers, with the right team size and posts.',
        },
        {
          // TODO(client): confirm bouncer / VIP protection scope (flagged in the content doc).
          q: 'Do you provide bouncers or VIP protection?',
          a: 'Tell us your requirement during the venue survey. We’ll recommend the right team, including crowd control and VIP movement.',
        },
      ],
    },
    closing: {
      title: 'Plan Your Event With Security in Place',
      subline: 'Event security services in Chennai that keep guests safe and the day running smoothly.',
      button: 'Get a Free Quote',
    },
  },
]

export const servicePath = (slug) => `/services/${slug}`
export const findService = (slug) => serviceList.find((s) => s.slug === slug)
