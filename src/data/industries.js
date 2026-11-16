// Industries hub + nine industry pages, from the client's "Industries Pages" document.
// Every industry page uses one template (pages/IndustryDetail.jsx). Its middle part is a
// list of `blocks`, rendered in order, so pages with different structures share it:
//   { title, intro?, label?, paragraphs?, items?, list?, note? }   a section
//   { trio: [{ label, title, paragraphs }] }                        three text columns
// items = icon cards, list = check-list, note = "Good to know" box ({ title, paragraphs, source }).

const SERVICE = {
  residential: '/services/residential-security-chennai',
  corporate: '/services/corporate-security-chennai',
  access: '/services/access-control-chennai',
  cctv: '/services/cctv-monitoring-chennai',
  patrolling: '/services/patrolling-chennai',
  event: '/services/event-security-chennai',
}
const SERVICE_META = {
  residential: { icon: 'home', title: 'Residential Security' },
  corporate: { icon: 'building', title: 'Corporate Guarding' },
  access: { icon: 'gate', title: 'Entry & Exit Control' },
  cctv: { icon: 'cctv', title: 'CCTV Operations' },
  patrolling: { icon: 'flashlight', title: 'Patrolling Services' },
  event: { icon: 'users', title: 'Event Security' },
}
// "Services We Use Here" tile: service key + the page's own one-liner
const svc = (key, text) => ({ ...SERVICE_META[key], text, to: SERVICE[key] })

const CTA_SURVEY = 'Book a Free Site Survey'
const SERVICES_USED = {
  title: 'Services We Use Here',
  intro: 'Each site gets the right mix. These are the services we most often combine for this type of site.',
}

export const industriesBase = '/industries'
export const industryPath = (slug) => `${industriesBase}/${slug}`

export const industryList = [
  {
    slug: 'apartment-security-chennai',
    image: { src: '/images/site/high-raised-building-apartments.jpg', alt: 'Two security guards on duty at the entrance of an apartment building' },
    name: 'High-Rise Apartments & Gated Communities',
    short: 'Apartments & Gated Communities',
    icon: 'apartment',
    summary: 'Gate control, visitor logs, deliveries and night rounds.',
    focusLabel: 'Apartments',
    focus: 'Visitor and delivery control, domestic staff entry, night rounds',
    photo: { src: '/images/hero/hero-01.jpg', alt: 'United Securitas guards at the gate of an apartment complex', position: 'xMaxYMid' },
    meta: {
      title: 'Apartment Security Services in Chennai | United Securitas',
      description:
        'Trained guards for apartments and gated communities: visitor and delivery control, staff entry logs and night rounds. Apartment security services in Chennai.',
    },
    hero: {
      eyebrow: 'Apartments & Gated Communities',
      title: 'Apartment Security Services in Chennai',
      subline: 'Trained guards who know your residents, check every visitor and keep your community calm through the night.',
    },
    intro: {
      title: 'Security Residents Notice for the Right Reasons',
      paragraphs: [
        'In an apartment community, the gate is the front door for hundreds of people. Our apartment security services in Chennai give your association a disciplined team that manages visitors, deliveries, domestic staff and vehicles, without making residents feel watched.',
        'Whether it is a single tower or a large gated community, our apartment security guards in Chennai are trained for the realities of residential living: courtesy at the gate, firmness with rules and alertness when everyone else is asleep.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'Where Apartment Security Usually Fails',
        items: [
          { icon: 'shuffle', title: 'Tailgating at the Gate', text: 'One vehicle or visitor follows another in without a check. It is one of the most common gaps at Indian complexes, and it is a discipline problem more than a hardware one.' },
          { icon: 'truck', title: 'Unchecked Deliveries', text: 'Delivery staff and cabs wandering to individual doors instead of stopping at a drop point.' },
          { icon: 'key', title: 'Insider Access', text: 'Many incidents trace back to someone with routine access. Domestic help and service staff need proper registration and daily entry logs.' },
          { icon: 'clock', title: 'Predictable Night Rounds', text: 'A guard who patrols at the same time every hour is easy to work around. Rounds need to vary.' },
        ],
      },
      {
        title: 'Typical Posts in an Apartment Community',
        intro: 'Every community is different. After the site survey, a typical plan covers these posts.',
        items: [
          { icon: 'gate', title: 'Main Gate', text: 'Visitor verification with residents, entry logs, one entry per gate cycle.' },
          { icon: 'package', title: 'Delivery Drop Point', text: 'Parcels and food deliveries stop at the gate or a parcel area.' },
          { icon: 'apartment', title: 'Tower Lobbies', text: 'A presence at lift lobbies and entrances in larger complexes.' },
          { icon: 'parking', title: 'Basement & Parking', text: 'Vehicle checks, parking discipline and night checks of the basement.' },
          { icon: 'moon', title: 'Night Rounds', text: 'Varied patrols of the boundary, terraces and common areas, with a round log.' },
          { icon: 'flame', title: 'Emergency Readiness', text: 'Guards trained in firefighting and first aid, with residents’ emergency contacts.' },
        ],
      },
      {
        note: {
          title: 'Your association runs the common areas',
          paragraphs: [
            'Under the Tamil Nadu Apartment Ownership Act, 2022, the association of owners is responsible for managing the common spaces and facilities of an apartment complex. Gate security is one of the most important of those services, and one that every resident notices.',
            'We work with your association’s committee to agree on visitor rules, staff registration and reporting, so every resident gets the same standard of security.',
          ],
          source: 'Tamil Nadu Apartment Ownership Act, 2022 (summary via housing.com)',
        },
      },
      {
        title: 'How Many Guards Does Your Community Need?',
        intro: 'There is no fixed number. Our survey looks at:',
        list: [
          'The number of gates and entry points, and which stay open at night',
          'The number of towers and units, and how lobbies are accessed',
          'Basement or open parking, and how vehicles are tagged',
          'Daily volume of visitors, deliveries and domestic staff',
          'Existing CCTV, intercoms or visitor-management apps',
          'Day, night or round-the-clock coverage',
        ],
      },
    ],
    services: [
      svc('access', 'Visitor and vehicle management.'),
      svc('patrolling', 'Night rounds and surprise checks.'),
      svc('cctv', 'Live monitoring of gates and parking.'),
    ],
    // TODO(client): confirm client names, permission to show them, and the reviewer (blank in the doc).
    trusted: {
      title: 'Trusted by residential communities across Chennai',
      logos: ['green-garden-apartment', 'sukriti-apartments', 'surabhi-apartments', 'west-minister-apartment', 'adwaitya-apartments'],
      quote: {
        text: 'Since United Securitas took over our gate, every visitor is logged and the night guards are always alert. Their supervisors check in regularly, and residents finally feel at ease.',
        role: 'Secretary, Apartment association',
      },
    },
    faqs: {
      title: 'Questions From Apartment Associations',
      items: [
        { q: 'Can your apartment security guards work with our visitor-management app?', a: 'Yes. Our guards use your existing app or register to raise and log visitor requests. If you don’t have one, we maintain a clear manual register.' },
        { q: 'How do you handle deliveries and cabs?', a: 'We recommend a drop-and-collect system: deliveries stop at the gate or a parcel area and residents are informed. Cabs are verified with the resident before entry.' },
        { q: 'Do you offer residential apartment security in Chennai for small buildings too?', a: 'Yes. We secure everything from a single building with one gate to large gated communities with several towers and entry points.' },
      ],
    },
    closing: {
      title: 'Give Your Residents Peace of Mind',
      subline: 'Apartment security services in Chennai, planned with your association.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'villa-bungalow-row-house-security-chennai',
    image: { src: '/images/site/villas.jpg', alt: 'Security cabin at the gate of a villa community' },
    name: 'Villas, Bungalows & Row Houses',
    short: 'Villas, Bungalows & Row Houses',
    icon: 'home',
    summary: 'Dedicated house guards for independent homes.',
    focusLabel: 'Villas & bungalows',
    focus: 'One trusted guard who knows the family, the staff and the street',
    photo: { src: '/images/hero/hero-03.jpg', alt: 'United Securitas guard on a night round past villa gates', position: 'xMaxYMid' },
    meta: {
      title: 'Villa Security Services in Chennai | Bungalows & Row Houses',
      description:
        'Trusted house guards for villas, bungalows and row houses. United Securitas villa security services in Chennai: gate control, visitor logs and night rounds.',
    },
    hero: {
      eyebrow: 'Villas, Bungalows & Row Houses',
      title: 'Villa Security Services in Chennai',
      subline: 'A trusted guard at your gate who knows your family, your staff and your street, day and night.',
    },
    intro: {
      title: 'Security for Homes With Their Own Gate',
      paragraphs: [
        'An independent home has no association office, no shared guard and no one else watching the street. Our villa security services in Chennai give you a dedicated guard, or a small team, trained for your home, your routine and the people who come and go every day.',
        'Every guard we place in a private home is chosen for discretion as much as alertness. Our villa security guards in Chennai respect your family’s privacy while keeping a firm watch on the gate.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'What Independent Homes Face',
        items: [
          { icon: 'travel', title: 'Empty Homes', text: 'Homes left empty during travel or work hours are easy targets without someone at the gate.' },
          { icon: 'usercheck', title: 'Staff and Service Visits', text: 'Drivers, domestic help, gardeners and repair staff need to be known and recorded.' },
          { icon: 'fence', title: 'Long Boundaries', text: 'Large plots have walls and back gates that a single fixed post can’t see.' },
          { icon: 'alert', title: 'Unknown Visitors', text: 'Callers at the gate who claim to be from a service or a relative’s contact.' },
        ],
      },
      {
        trio: [
          {
            label: 'Villas',
            title: 'Private Villa Security in Chennai',
            paragraphs: [
              'Villas often have large compounds, multiple entrances and household staff. We plan a gate post plus regular rounds of the compound, with clear rules for staff entry and visitors. For gated villa communities, we work with the community’s management alongside your own home’s needs.',
            ],
          },
          {
            label: 'Bungalows',
            title: 'Bungalow Security Services in Chennai',
            paragraphs: [
              'An independent bungalow usually needs one well-chosen guard who becomes part of the household’s routine. Our private home security guards in Chennai manage the gate, keep a log of visitors and staff, and stay alert at night, so the house is never left unwatched.',
            ],
          },
          {
            label: 'Row houses',
            title: 'Row House Security Services in Chennai',
            paragraphs: [
              'Row houses share lanes, walls and often a common entrance. That makes security a shared effort. Our residential security guards in Chennai can cover a single row house or the whole lane, with gate control and night rounds that protect every home on the row, in the same way as gated community security in Chennai.',
            ],
          },
        ],
      },
      {
        title: 'What Your House Guard Does',
        items: [
          { icon: 'gate', title: 'Gate Control', text: 'Opens the gate only for known people and verified visitors.' },
          { icon: 'log', title: 'Visitor & Staff Log', text: 'Records who came, when and why, including household staff.' },
          { icon: 'flashlight', title: 'Compound Rounds', text: 'Checks walls, back gates and parked vehicles, especially at night.' },
          { icon: 'siren', title: 'Emergency Response', text: 'Trained in firefighting and first aid, with your emergency contacts.' },
        ],
      },
      {
        note: {
          title: 'Before you travel',
          paragraphs: [
            'Tell your guard your travel dates and who is allowed in while you’re away. Share an emergency contact who is in Chennai. A clear instruction list is the simplest way to keep an empty home secure.',
          ],
        },
      },
    ],
    services: [
      svc('residential', 'House guards for every kind of home.'),
      svc('patrolling', 'Rounds for large compounds and lanes.'),
      svc('cctv', 'Monitoring of your home cameras.'),
    ],
    faqs: {
      title: 'Questions About Home Security',
      items: [
        { q: 'Can I hire just one guard for my bungalow?', a: 'Yes. Many independent homes need a single trusted guard. We’ll recommend day, night or round-the-clock cover based on your home.' },
        { q: 'Can one team cover all the houses on our row?', a: 'Yes. Neighbours can share a team for the lane, with gate control and night rounds covering every home.' },
        { q: 'How do you choose a guard for a private home?', a: 'We look for discretion, courtesy and alertness, and train the guard on your household’s routine before deployment.' },
      ],
    },
    closing: {
      title: 'Keep Your Home Watched, Even When You’re Away',
      subline: 'Villa, bungalow and row house security in Chennai, planned around your family.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'bank-security-chennai',
    image: { src: '/images/site/bank-atm-guarding.jpg', alt: 'Uniformed security guard standing outside a bank branch and ATM' },
    name: 'Banks & ATMs',
    short: 'Banks & ATMs',
    icon: 'bank',
    summary: 'Alert guarding for cash areas, customers and staff.',
    focusLabel: 'Banks & ATMs',
    focus: 'Alertness around cash areas, opening and closing routines',
    photo: { src: '/gallery/gallery-17.jpg', alt: 'United Securitas guards standing at salute', position: 'xMaxYMid' },
    meta: {
      title: 'Bank Security Services in Chennai | ATM Security | United Securitas',
      description:
        'Alert, disciplined guards for bank branches and ATMs: entrance control, cash area watch and ATM checks. United Securitas bank security services in Chennai.',
    },
    hero: {
      eyebrow: 'Banks & ATMs',
      title: 'Bank Security Services in Chennai',
      subline: 'Disciplined, alert guards for branches and ATMs, where a moment’s lapse can cost the most.',
    },
    intro: {
      title: 'Where Vigilance Can’t Take a Break',
      paragraphs: [
        'A bank branch handles cash, documents and a constant flow of customers. Our bank security services in Chennai place guards who stay alert through long, routine days, because the one unusual moment is the one that matters.',
        'Our bank security guards in Chennai are trained for branch routines: opening and closing, cash movement, customer flow and the right way to respond to a threat without putting customers at risk.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'What Branches and ATMs Face',
        items: [
          { icon: 'cash', title: 'Cash Areas', text: 'Counters, cash movement and the strongroom need constant, discreet watch.' },
          { icon: 'scan', title: 'ATM Tampering', text: 'Skimming devices, damaged machines and loitering around ATM kiosks.' },
          { icon: 'users', title: 'Crowded Branch Hours', text: 'Peak hours make it easy for someone to slip past unnoticed.' },
          { icon: 'lock', title: 'Opening and Closing', text: 'The most sensitive moments of the day, when staff and cash are most exposed.' },
        ],
      },
      {
        title: 'What Our Bank Guards Do',
        items: [
          { icon: 'gate', title: 'Entrance Control', text: 'Watch everyone entering, manage queues and keep the entrance clear.' },
          { icon: 'eye', title: 'Cash Area Watch', text: 'Keep a discreet eye on counters and cash movement inside the branch.' },
          { icon: 'monitor', title: 'ATM Checks', text: 'Regular checks of ATM kiosks for tampering, damage or suspicious activity.' },
          { icon: 'key', title: 'Opening & Closing Support', text: 'Stay present and alert while staff open and close the branch.' },
        ],
      },
      {
        note: {
          title: 'ATM security is a regulatory priority',
          paragraphs: [
            'In June 2019, the Reserve Bank of India directed banks to grout all ATMs to a wall, pillar or floor by 30 September 2019, and to replenish cash only through digital one-time combination (OTC) locks. Banks were also encouraged to consider electronic surveillance of ATMs.',
            'Hardware is only part of the picture. A trained guard adds the human layer: spotting tampering, loitering and unusual behaviour as it happens.',
          ],
          source: 'RBI directions on ATM security, June 2019 (as reported by The Week)',
        },
      },
    ],
    services: [
      svc('access', 'Managed entry for branches.'),
      svc('cctv', 'Live monitoring of branches and ATMs.'),
      svc('patrolling', 'Rounds across ATM kiosks.'),
    ],
    faqs: {
      title: 'Questions About Bank Security',
      // TODO(client): confirm armed guard availability (the doc asks for this).
      items: [
        { q: 'Do you provide ATM security services in Chennai?', a: 'Yes. Our guards can be posted at ATM kiosks or carry out regular checks across several ATMs, watching for tampering and suspicious activity.' },
        { q: 'Do you provide armed guards for banks?', a: 'Tell us your requirement during the site survey. We’ll recommend the right cover for your branch and confirm what we can provide.' },
        { q: 'Can your guards work with our CCTV and alarm systems?', a: 'Yes. Our guards and CCTV operators work alongside your existing cameras and alarms, so incidents are spotted and acted on quickly.' },
      ],
    },
    closing: {
      title: 'Protect Every Branch and Every ATM',
      subline: 'Bank security services in Chennai with guards who stay alert all day.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'mall-security-chennai',
    image: { src: '/images/site/malls-guarding.jpg', alt: 'Security guard with a radio inside a shopping mall' },
    name: 'Shopping Malls',
    short: 'Shopping Malls',
    icon: 'bag',
    summary: 'Entry screening, crowd flow and parking security.',
    focusLabel: 'Malls',
    focus: 'Entry screening, parking checks, crowd flow on weekends',
    photo: { src: '/gallery/gallery-28.jpg', alt: 'United Securitas guard using a radio inside a shopping mall', position: 'xMaxYMid' },
    meta: {
      title: 'Mall Security Services in Chennai | United Securitas',
      description:
        'Entry screening, parking checks, floor patrols and crowd management for shopping malls. United Securitas mall security services in Chennai. Free site survey.',
    },
    hero: {
      eyebrow: 'Shopping Malls',
      title: 'Mall Security Services in Chennai',
      subline: 'Safe entry, smooth crowds and secure parking, with a presence that makes shoppers feel welcome.',
    },
    intro: {
      title: 'Security That Shoppers Barely Notice and Always Trust',
      paragraphs: [
        'A mall is a small city: thousands of visitors, dozens of stores, cinemas, food courts and a busy car park. Our mall security services in Chennai keep it all running safely, from the entry checks to the last car leaving the basement.',
        'Our shopping mall security guards in Chennai are trained to be firm at the screening point and helpful on the floor, because in a mall, security is part of the customer experience.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'What Malls Face Every Day',
        items: [
          { icon: 'users', title: 'Weekend & Festival Crowds', text: 'Peak days bring crowding at entrances, escalators and food courts.' },
          { icon: 'parking', title: 'Parking Areas', text: 'Vehicle checks at entry and watchful patrols in basements and open lots.' },
          { icon: 'package', title: 'Unattended Items', text: 'Bags or packages left behind need a calm, trained response.' },
          { icon: 'child', title: 'Lost Children & Medical Needs', text: 'Shoppers who need help fast, without causing alarm.' },
        ],
      },
      {
        title: 'Typical Posts in a Shopping Mall',
        items: [
          { icon: 'scan', title: 'Entry Screening', text: 'Metal detector and bag checks at every public entrance, done courteously.' },
          { icon: 'car', title: 'Vehicle Checks', text: 'Inspection of vehicles at the parking entry, including under-vehicle checks.' },
          { icon: 'footprints', title: 'Floor Patrols', text: 'Visible patrols across floors, escalators, washrooms and food courts.' },
          { icon: 'cctv', title: 'CCTV Control Room', text: 'Operators watching the mall’s cameras and directing guards on the floor.' },
          { icon: 'parking', title: 'Parking Patrols', text: 'Regular rounds of basements and open parking.' },
          { icon: 'moon', title: 'After-Hours Security', text: 'Night cover once the mall closes, with checks of every store front.' },
        ],
      },
      {
        note: {
          title: 'Screening is now standard at Indian malls',
          paragraphs: [
            'Indian malls commonly screen visitors with metal detectors and bag checks at entry, and inspect vehicles at the parking entrance. Screening works best when it is quick and polite, so queues don’t build up at the door.',
          ],
          source: 'a&s Magazine on mall security practices in India',
        },
      },
    ],
    services: [
      svc('access', 'Screening and managed entry.'),
      svc('cctv', 'Control room monitoring.'),
      svc('event', 'Crowd management for launches and festivals.'),
    ],
    faqs: {
      title: 'Questions About Mall Security',
      // TODO(client): confirm lady guard availability (the doc asks for this).
      items: [
        { q: 'Do you provide mall security guards in Chennai for entry screening?', a: 'Yes. Our guards run metal detector and bag checks at entrances, and vehicle checks at parking entries, using the equipment installed at your mall.' },
        { q: 'Can you handle festival and weekend crowds?', a: 'Yes. We plan extra posts and crowd management for peak days, sales and in-mall events.' },
        { q: 'Do you provide lady guards for frisking?', a: 'Tell us your requirement during the site survey and we’ll confirm the right team for your screening points.' },
      ],
    },
    closing: {
      title: 'Keep Your Mall Safe and Welcoming',
      subline: 'Mall security services in Chennai, from the entrance to the car park.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'retail-showroom-security-chennai',
    image: { src: '/images/site/retail-showroom-guarding.jpg', alt: 'Guard checking bags as customers queue at a retail showroom entrance' },
    name: 'Retail Showrooms',
    short: 'Retail Showrooms',
    icon: 'store',
    summary: 'Stock protection with a welcoming presence.',
    focusLabel: 'Retail showrooms',
    focus: 'Stock protection, cash counters, courteous customer handling',
    photo: { src: '/images/banner-03.jpg', alt: 'United Securitas guards in uniform at salute outside a client site', position: 'xMidYMid' },
    meta: {
      title: 'Retail Security Services in Chennai | Showroom Security',
      description:
        'Courteous, watchful guards for showrooms and stores: door presence, floor watch and cash counter support. United Securitas retail security services in Chennai.',
    },
    hero: {
      eyebrow: 'Retail Showrooms',
      title: 'Retail Security Services in Chennai',
      subline: 'Guards who protect your stock and your cash while giving every customer a warm welcome.',
    },
    intro: {
      title: 'Watchful on the Floor, Welcoming at the Door',
      paragraphs: [
        'In a showroom, the guard at the door is part of your brand. Our retail security services in Chennai place smart, courteous guards who greet customers, keep an eye on the floor and protect your stock and cash counters, without making shoppers feel suspected.',
        'From vehicle showrooms to lifestyle stores, our retail showroom security guards in Chennai are trained for the balance every retailer needs: friendly with customers, firm with rules.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'What Showrooms Lose, and How',
        items: [
          { icon: 'bag', title: 'Shoplifting', text: 'Small, high-value items slipped out during busy hours.' },
          { icon: 'users', title: 'Distraction Theft', text: 'Groups who keep staff busy while someone else takes stock.' },
          { icon: 'cash', title: 'Cash Counters', text: 'Billing counters and cash handovers need a watchful presence.' },
          { icon: 'lock', title: 'After-Hours Break-Ins', text: 'Closed showrooms with valuable stock and display vehicles.' },
        ],
      },
      {
        title: 'What Our Showroom Guards Do',
        items: [
          { icon: 'handshake', title: 'Door Presence', text: 'Greet customers, manage the entrance and check bags where your policy requires.' },
          { icon: 'eye', title: 'Floor Watch', text: 'Keep an eye on displays, trial areas and high-value sections.' },
          { icon: 'receipt', title: 'Cash Counter Support', text: 'Stay present during billing peaks and cash handovers.' },
          { icon: 'key', title: 'Opening & Closing', text: 'Support store opening, closing and stock checks at the end of the day.' },
        ],
      },
      {
        note: {
          title: 'A guard works best with your store policy',
          paragraphs: [
            'Agree on a clear store policy before deployment: when bags are checked, how to handle a suspected theft and who to call. A guard who knows exactly what your store expects can act quickly and politely, without embarrassing an honest customer.',
          ],
        },
      },
    ],
    services: [
      svc('access', 'Managed entrance and bag checks.'),
      svc('cctv', 'Live monitoring of your shop floor.'),
      svc('patrolling', 'After-hours checks of closed showrooms.'),
    ],
    // TODO(client): confirm client names, permission to show them, and the reviewer (blank in the doc).
    trusted: {
      title: 'Trusted by showrooms across Chennai',
      logos: ['nissan-showrooms', 'yamaha-show-room-service-centre', 'life-style', 'car-shop', 'moto-bike'],
      quote: {
        text: 'The guards are smartly turned out and courteous with customers, yet nothing escapes their attention. That’s exactly what a showroom needs.',
        role: 'Showroom',
      },
    },
    faqs: {
      title: 'Questions About Showroom Security',
      items: [
        { q: 'Do you provide showroom security services in Chennai for vehicle showrooms?', a: 'Yes. We secure vehicle and two-wheeler showrooms, including display vehicles, service areas and after-hours premises.' },
        { q: 'Will your guards check customers’ bags?', a: 'Only where your store policy requires it. We agree the policy with you first, so checks are consistent and courteous.' },
        { q: 'Can you cover several branches of our store?', a: 'Yes. We can place guards across multiple showrooms in Chennai with the same standards at every branch.' },
      ],
    },
    closing: {
      title: 'Protect Your Stock, Welcome Your Customers',
      subline: 'Retail security services in Chennai for showrooms of every kind.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'warehouse-factory-security-chennai',
    image: { src: '/images/site/warehouse-guarding.jpg', alt: 'Security guard on duty inside a warehouse' },
    name: 'Warehouses & Factories',
    short: 'Warehouses & Factories',
    icon: 'factory',
    summary: 'Gate registers, dock checks and perimeter patrols.',
    focusLabel: 'Warehouses & factories',
    focus: 'Gate registers, vehicle checks, material movement against paperwork',
    photo: { src: '/gallery/gallery-15.jpg', alt: 'Two United Securitas guards on duty at a site gate', position: 'xMaxYMid' },
    meta: {
      title: 'Warehouse Security Services in Chennai | Factory Security',
      description:
        'Gate registers, material checks, dock discipline and perimeter patrols for warehouses and factories. United Securitas warehouse security services in Chennai.',
    },
    hero: {
      eyebrow: 'Warehouses & Factories',
      title: 'Warehouse Security Services in Chennai',
      subline: 'Gate registers, dock checks and perimeter patrols that stop material from walking out of the gate.',
    },
    intro: {
      title: 'Most Losses Happen Quietly',
      paragraphs: [
        'Warehouses and factories rarely lose stock in one dramatic break-in. More often it is a steady leak: a load that doesn’t match its paperwork, a vehicle that leaves unchecked, stock that goes missing between shifts. Our warehouse security services in Chennai are built to close those gaps.',
        'Our warehouse security guards in Chennai control the gate, check every vehicle and load against its documents, and patrol the perimeter, so every movement on your site is recorded.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'Where Warehouses and Factories Lose Material',
        items: [
          { icon: 'truck', title: 'Loading Docks', text: 'The highest-risk point on most sites, where goods leave in bulk.' },
          { icon: 'file', title: 'Paperwork Gaps', text: 'Loads that don’t match the invoice, gate pass or manifest.' },
          { icon: 'fence', title: 'Long Perimeters', text: 'Walls, back gates and dark corners away from the main gate.' },
          { icon: 'moon', title: 'Shift Changes & Nights', text: 'Handovers and quiet hours when attention drops.' },
        ],
      },
      {
        title: 'What Our Industrial Guards Do',
        items: [
          { icon: 'log', title: 'Gate Register', text: 'Every vehicle logged in and out: time, driver, purpose and load reference.' },
          { icon: 'checklist', title: 'Material Gate Checks', text: 'Outgoing material checked against gate passes and invoices.' },
          { icon: 'warehouse', title: 'Dock Discipline', text: 'Watch over loading bays, idle doors and waiting vehicles.' },
          { icon: 'flashlight', title: 'Perimeter Patrols', text: 'Scheduled and surprise rounds of walls, yards and storage areas.' },
          { icon: 'idcard', title: 'Staff & Contractor Entry', text: 'Records of workers, contractors and visitors entering the site.' },
          { icon: 'flame', title: 'Fire Readiness', text: 'Guards trained in firefighting, with escape routes kept clear.' },
        ],
      },
      {
        note: {
          title: 'Security should never block an exit',
          paragraphs: [
            'Locking doors to stop theft can trap people in a fire. Industrial security works best when gate checks and patrols control material movement, while fire exits and escape routes always stay clear. Our guards are trained in firefighting and treat life safety first.',
          ],
          source: 'StudioMatrx guide to warehouse security in India',
        },
      },
    ],
    services: [
      svc('access', 'Gate registers and material checks.'),
      svc('patrolling', 'Perimeter and night rounds.'),
      svc('cctv', 'Live monitoring of docks and gates.'),
    ],
    faqs: {
      title: 'Questions About Industrial Security',
      items: [
        { q: 'Do you provide industrial warehouse security in Chennai for large sites?', a: 'Yes. We secure warehouses, godowns and factories of all sizes, with gate, dock and perimeter posts planned around your layout.' },
        { q: 'Can your guards check materials against our gate passes?', a: 'Yes. Material gate checks are a core part of our industrial guarding. We follow your gate pass and invoice process and keep a clear record.' },
        { q: 'Do you cover night shifts and holidays?', a: 'Yes. We provide round-the-clock cover, including nights, Sundays and holidays when the site is closed.' },
      ],
    },
    closing: {
      title: 'Stop Material From Walking Out',
      subline: 'Warehouse security services in Chennai with every movement checked and recorded.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'hotel-hospital-security-chennai',
    image: { src: '/images/site/hotels-and-hospitals-guarding.jpg', alt: 'Two security guards walking a hotel corridor' },
    name: 'Hotels & Hospitals',
    short: 'Hotels & Hospitals',
    icon: 'hospital',
    summary: 'Calm, courteous security for guests and patients.',
    focusLabel: 'Hotels & hospitals',
    focus: 'Courtesy under pressure, visitor passes, emergency areas',
    photo: { src: '/images/banner-01.jpg', alt: 'United Securitas security guard using a radio', position: 'xMaxYMid' },
    meta: {
      title: 'Hotel and Hospital Security Services in Chennai | United Securitas',
      description:
        'Calm, courteous guards for hospitals and hotels: visitor passes, emergency departments, lobbies and banquets. Hotel and hospital security services in Chennai.',
    },
    hero: {
      eyebrow: 'Hotels & Hospitals',
      title: 'Hotel and Hospital Security Services in Chennai',
      subline: 'Calm, courteous security for places where people arrive tired, worried or in a hurry.',
    },
    intro: {
      title: 'Security With a Human Touch',
      paragraphs: [
        'Hotels and hospitals have one thing in common: the people walking through the door need care. Our hotel and hospital security services in Chennai place guards who stay calm, speak politely and still keep firm control of who goes where.',
        'We plan hotels and hospitals separately, because the risks are different. Here is how we approach each.',
      ],
    },
    blocks: [
      {
        label: 'Hospitals',
        title: 'Hospital Security Services in Chennai',
        paragraphs: [
          'Hospitals face crowded waiting areas, anxious relatives and, at times, tense moments in emergency departments. Our guards manage visitor passes, protect staff, keep key areas restricted and stay calm when emotions run high.',
        ],
        items: [
          { icon: 'siren', title: 'Emergency Department', text: 'A steady presence where tension is highest.' },
          { icon: 'idcard', title: 'Visitor Passes', text: 'Attendant and visitor passes, with visiting hours enforced politely.' },
          { icon: 'firstaid', title: 'Staff Protection', text: 'Support for doctors and nurses, especially on night duty.' },
          { icon: 'lock', title: 'Restricted Areas', text: 'ICUs, pharmacies and records rooms kept to authorised people only.' },
        ],
        note: {
          title: 'Hospital security is a stated priority in Tamil Nadu',
          paragraphs: [
            'The Tamil Nadu Medicare Service Persons and Medicare Service Institutions (Prevention of Violence and Damage or Loss to Property) Act, 2008 protects healthcare workers and hospitals, and offences under it are non-bailable.',
            'In 2024, the Union Health Ministry asked central government hospitals to employ adequately trained security guards, control entry and limit patient attendants with passes. Tamil Nadu’s public health directorate also asked district officials to strengthen security at health facilities, including restricted access to key areas and visitor pass systems.',
          ],
          source: 'TN Act 48 of 2008; MoHFW directive, 19 Aug 2024; DT Next report on DPH instructions, Sept 2024',
        },
      },
      {
        label: 'Hotels',
        title: 'Security for Hotels and Banquets',
        paragraphs: [
          'Hotel guests expect privacy and a warm welcome. Our hotel security guards in Chennai keep entrances, lobbies, parking and banquet halls secure while staying discreet, so guests feel looked after rather than watched.',
        ],
        items: [
          { icon: 'hotel', title: 'Lobby & Entrance', text: 'A smart, discreet presence at the main entrance and lobby.' },
          { icon: 'scan', title: 'Luggage & Entry Checks', text: 'Screening at entry where your hotel’s policy requires it.' },
          { icon: 'parking', title: 'Parking & Valet Areas', text: 'Vehicle checks and watch over guest parking.' },
          { icon: 'users', title: 'Banquets & Events', text: 'Crowd management for weddings, conferences and functions.' },
        ],
      },
    ],
    services: [
      svc('access', 'Visitor passes and managed entry.'),
      svc('event', 'Banquets, weddings and conferences.'),
      svc('cctv', 'Monitoring of wards, lobbies and parking.'),
    ],
    // TODO(client): confirm client names, permission to show them, and the reviewer (blank in the doc).
    trusted: {
      title: 'Trusted by hospitals and hospitality businesses in Chennai',
      logos: ['kings-hospital', 'santhosh-hospital', 'hotel-barbeque-nation'],
      quote: {
        text: 'Hospital security needs patience as much as alertness. Their guards handle patients and visitors politely and keep the premises orderly, day and night.',
        role: 'Hospital',
      },
    },
    faqs: {
      title: 'Questions From Hotels and Hospitals',
      items: [
        { q: 'Do you provide hospital security services in Chennai round the clock?', a: 'Yes. Hospitals never close, and neither does our cover. We provide day, night and 24-hour posts, including emergency departments.' },
        { q: 'Can your guards manage visitor passes and visiting hours?', a: 'Yes. Our guards issue and check attendant and visitor passes and enforce your visiting hours politely.' },
        { q: 'Do you provide hotel security guards for weddings and events?', a: 'Yes. We provide security for banquets, weddings and conferences, including entry management and crowd control.' },
      ],
    },
    closing: {
      title: 'Care and Security, Side by Side',
      subline: 'Hotel and hospital security services in Chennai with a calm, courteous touch.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'cinema-hall-security-chennai',
    image: { src: '/images/site/cinema-halls.jpg', alt: 'Security staff checking visitors at a cinema entrance' },
    name: 'Cinema Halls',
    short: 'Cinema Halls',
    icon: 'film',
    summary: 'Crowd control and safe entry and exit for every show.',
    focusLabel: 'Cinema halls',
    focus: 'Show-time crowd surges, ticket checks, safe exits',
    photo: { src: '/gallery/event-screening.jpg', alt: 'United Securitas team screening visitors at an entry point', position: 'xMidYMid' },
    meta: {
      title: 'Cinema Hall Security Services in Chennai | United Securitas',
      description:
        'Queue management, ticket checks, exit control and parking for cinemas and multiplexes. United Securitas cinema hall security services in Chennai.',
    },
    hero: {
      eyebrow: 'Cinema Halls',
      title: 'Cinema Hall Security Services in Chennai',
      subline: 'Smooth entry, calm crowds and safe exits, show after show, from the first day of a big release to the last show of the night.',
    },
    intro: {
      title: 'Every Show Is a Crowd Event',
      paragraphs: [
        'A cinema fills and empties several times a day, often in minutes. On a big release day, the crowd outside can be larger than the one inside. Our cinema hall security services in Chennai manage every part of that cycle: queues, ticket checks, entry, exits and the parking rush.',
        'Our theatre security guards in Chennai are trained to keep excited crowds orderly, handle disputes calmly and keep every exit clear, whether you run a single screen or a multiplex.',
      ],
    },
    blocks: [
      {
        kind: 'risks',
        title: 'What Cinemas Face',
        items: [
          { icon: 'users', title: 'Release-Day Crowds', text: 'Big releases bring large, excited crowds and pressure at the gates.' },
          { icon: 'shuffle', title: 'Show Changeovers', text: 'One audience leaves while the next waits to enter.' },
          { icon: 'exit', title: 'Blocked Exits', text: 'Exits and aisles must stay clear for safe evacuation.' },
          { icon: 'car', title: 'Parking Rush', text: 'Vehicles arriving and leaving together at every show time.' },
        ],
      },
      {
        title: 'Typical Posts in a Cinema',
        items: [
          { icon: 'route', title: 'Queue Management', text: 'Orderly queues outside and at the counters.' },
          { icon: 'ticket', title: 'Ticket & Entry Checks', text: 'Ticket checks and screening at the entrance to each screen.' },
          { icon: 'exit', title: 'Exit Control', text: 'Exits kept clear and managed at the end of every show.' },
          { icon: 'parking', title: 'Parking', text: 'Vehicle entry, exit and parking discipline at show times.' },
        ],
      },
      {
        note: {
          title: 'Cinemas are licensed and inspected',
          paragraphs: [
            'Cinemas in Tamil Nadu are regulated under the Tamil Nadu Cinemas (Regulation) Act, 1955 and its 1957 Rules. In Chennai city, the Commissioner of Police is the licensing authority, and licences are renewed each year after an inspection of the premises.',
            'Orderly crowds and clear exits are part of running a safe, compliant theatre, and trained guards are the people who keep them that way at every show.',
          ],
          source: 'Commissionerate of Land Administration, Government of Tamil Nadu',
        },
      },
    ],
    services: [
      svc('event', 'Crowd management for big releases.'),
      svc('access', 'Ticket checks and exit control.'),
      svc('cctv', 'Monitoring of foyers, screens and parking.'),
    ],
    // TODO(client): confirm client name, permission to show it, and the reviewer (blank in the doc).
    trusted: {
      title: 'Trusted by cinemas in Chennai',
      logos: ['ags-cinemas'],
      quote: {
        text: 'Peak-show crowds used to worry us. The United Securitas team now handles entry and exits smoothly and safely, show after show.',
        role: 'Cinema',
      },
    },
    faqs: {
      title: 'Questions About Cinema Security',
      items: [
        { q: 'Do you provide multiplex security services in Chennai?', a: 'Yes. We secure single screens and multiplexes, with posts at each screen, the foyer, food counters and parking.' },
        { q: 'Can you add extra guards for big releases?', a: 'Yes. Tell us about upcoming releases and we’ll add guards and crowd management for those days.' },
        { q: 'Do your guards check bags at the entrance?', a: 'Where your cinema’s policy requires it, our guards carry out quick, courteous checks at the entrance.' },
      ],
    },
    closing: {
      title: 'Keep Every Show Safe and Smooth',
      subline: 'Cinema hall security services in Chennai for single screens and multiplexes.',
      button: CTA_SURVEY,
    },
  },

  {
    slug: 'vacant-land-construction-security-chennai',
    image: { src: '/images/site/vacant-land-guarding.jpg', alt: 'Security guard walking across an open plot of land' },
    name: 'Vacant Land & Construction Sites',
    short: 'Vacant Land & Construction Sites',
    icon: 'construction',
    summary: 'Protection against theft and encroachment.',
    focusLabel: 'Vacant land & construction',
    focus: 'Encroachment, material theft, night cover',
    photo: { src: '/gallery/gallery-21.jpg', alt: 'United Securitas guards saluting at an outdoor assembly', position: 'xMaxYMid' },
    meta: {
      title: 'Vacant Land Security Services in Chennai | Construction Sites',
      description:
        'Watchmen and guards for vacant plots and construction sites: encroachment watch, material and equipment protection, night cover. Vacant land security services in Chennai.',
    },
    hero: {
      eyebrow: 'Vacant Land & Construction Sites',
      title: 'Vacant Land Security Services in Chennai',
      subline: 'Protect your plot from encroachment and your site from theft, with a watch that never leaves it unattended.',
    },
    intro: {
      title: 'An Empty Plot Is Never Truly Empty of Risk',
      paragraphs: [
        'Open land attracts encroachment, dumping and unauthorised use, especially when the owner lives far away. Our vacant land security services in Chennai keep a guard or watchman on your plot, so the land stays yours and stays clean.',
        'The same goes for construction sites, where steel, cement, cable and equipment sit in the open overnight. Our land security guards in Chennai protect both: undeveloped plots and active building sites.',
      ],
    },
    blocks: [
      {
        label: 'Vacant land',
        title: 'Protecting Your Plot',
        items: [
          { icon: 'fence', title: 'Encroachment Watch', text: 'A daily presence that stops anyone from occupying or fencing off your land.' },
          { icon: 'truck', title: 'Dumping & Misuse', text: 'No dumping of debris or garbage, and no unauthorised parking or use.' },
          { icon: 'phonecall', title: 'Regular Updates', text: 'Reports to you, especially useful if you live outside Chennai or abroad.' },
          { icon: 'eye', title: 'Visible Ownership', text: 'A watchman on site makes it clear the land is looked after.' },
        ],
        note: {
          title: 'Prevention is easier than a land dispute',
          paragraphs: [
            'Tamil Nadu has dedicated Land Grabbing Cells to handle encroachment and property fraud; in Chennai they sit with the Commissioner of Police. But property guides consistently recommend prevention first: fence your land, monitor it regularly and keep your encumbrance certificate (EC) and tax records up to date.',
            'Our property watchman services in Chennai add the physical presence that makes encroachment much harder to attempt.',
          ],
          source: 'Verified.RealEstate guide to land grabbing in Tamil Nadu',
        },
      },
      {
        label: 'Construction sites',
        title: 'Securing Your Building Site',
        paragraphs: [
          'Construction sites are most exposed at night and between shifts. Steel and rebar, cement, copper cable, tools, diesel and machinery are all common targets. We control the site gate, log deliveries and workers, and patrol the boundary through the night.',
        ],
        items: [
          { icon: 'gate', title: 'One Controlled Gate', text: 'All workers, vehicles and deliveries through a single checked entry.' },
          { icon: 'log', title: 'Delivery Log', text: 'Materials logged in against orders as they arrive.' },
          { icon: 'fuel', title: 'Equipment & Fuel', text: 'Watch over machinery, tools and diesel, especially after hours.' },
          { icon: 'moon', title: 'Night Cover', text: 'Night guards and patrols when the site is otherwise empty.' },
        ],
      },
    ],
    services: [
      svc('patrolling', 'Night rounds of plots and sites.'),
      svc('access', 'Gate and delivery logs.'),
      svc('cctv', 'Monitoring of site cameras.'),
    ],
    // TODO(client): confirm client names, permission to show them, and the reviewer (blank in the doc).
    trusted: {
      title: 'Trusted by builders and developers in Chennai',
      logos: ['baashyaam-constructions-pvt-ltd', 'lancor', 'akshaya-builders', 'landmark-construction', 'vijay-shanthi-builders', 'jones-lang-lasalle'],
      quote: {
        text: 'We use United Securitas across our project sites. Material movement is checked at every gate, and the team responds quickly whenever we need extra guards.',
        role: 'Builder / construction company',
      },
    },
    faqs: {
      title: 'Questions About Land and Site Security',
      items: [
        { q: 'I live outside Chennai. Can you watch my vacant plot?', a: 'Yes. Many plot owners live in other cities or abroad. Our property watchman services in Chennai keep the land watched and keep you informed.' },
        { q: 'Do you provide night guards for construction sites?', a: 'Yes. Night cover is the most important part of construction site security. We provide night guards and patrols, and round-the-clock cover if needed.' },
        { q: 'Can you scale guards as the project grows?', a: 'Yes. We adjust the number of guards as your project moves from groundwork to structure to fit-out and handover.' },
      ],
    },
    closing: {
      title: 'Keep Your Land and Your Site Protected',
      subline: 'Vacant land security services in Chennai, for plots and building sites alike.',
      button: CTA_SURVEY,
    },
  },
]

export const findIndustry = (slug) => industryList.find((i) => i.slug === slug)

// Sector label for the tag on each photo card, keyed by the industry's icon.
export const industrySectors = {
  apartment: 'Residential',
  home: 'Residential',
  construction: 'Industrial',
  factory: 'Industrial',
  store: 'Commercial',
  bank: 'Commercial',
  bag: 'Commercial',
  hospital: 'Hospitality',
  film: 'Entertainment',
}

// Industry pages as link tiles (hub grid, footer, other pages)
export const industryTiles = industryList.map((i) => ({
  icon: i.icon,
  title: i.name,
  text: i.summary,
  to: industryPath(i.slug),
}))

export const hub = {
  meta: {
    title: 'Industries We Protect | United Securitas, Chennai',
    description:
      'Security for apartments, villas, banks, malls, showrooms, warehouses, hotels, hospitals, cinemas and vacant land. One of the trusted security companies in Chennai.',
    path: '/industries/',
  },
  // right-aligned: the old site's watermark sits in this photo's top-left corner
  photo: { src: '/gallery/gallery-19.jpg', alt: 'United Securitas guards lined up at an assembly outside a building', position: 'xMaxYMid' },
  hero: {
    eyebrow: 'Industries We Protect',
    title: 'Security for Every Kind of Site in Chennai',
    subline: 'Homes, banks, malls, hospitals, warehouses and more. Every site has different risks, so every deployment is planned differently.',
  },
  intro: {
    title: 'One Standard, Planned Site by Site',
    paragraphs: [
      'A bank and an apartment gate both need a guard, but they don’t need the same guard. Among the security companies in Chennai, United Securitas has spent two decades learning what each kind of site really needs, from the visitor rush at a mall entrance to the quiet hours at a vacant plot.',
      'Every deployment starts with a free site survey, and every guard is trained for the site they protect before day one.',
    ],
  },
  grid: { title: 'Choose Your Type of Site' },
  focus: {
    title: 'Same Discipline, Different Focus',
    intro: 'Here is how the guard’s focus shifts with the site.',
  },
  questions: {
    title: 'Questions Worth Asking Any Security Agency',
    intro: 'Whoever you choose, these are the things that separate a reliable agency from a risky one.',
    items: [
      'Is the agency licensed under the Private Security Agencies (Regulation) Act, 2005 (PSARA)?',
      'Are guards trained before deployment, or only on the job?',
      'Who supervises the guards, and how often are posts checked, especially at night?',
      'Are minimum wages, ESI, PF and bonus paid to every guard? Unpaid dues can become your problem.',
      'Will the agency visit and survey your site before quoting?',
      'What happens when a guard is absent? Is there a replacement plan?',
    ],
  },
  services: {
    title: 'Our Services, Across Every Industry',
    intro: 'Every industry page draws on the same six services. Explore them in detail on our Services page.',
    items: [
      svc('residential', 'House guards for homes of every kind.'),
      svc('corporate', 'Reception and access control.'),
      svc('access', 'Every movement checked at the gate.'),
      svc('cctv', 'Trained eyes on your cameras.'),
      svc('patrolling', 'Scheduled patrols and surprise checks.'),
      svc('event', 'Crowd management and VIP movement.'),
    ],
  },
  closing: {
    title: 'Tell Us About Your Site',
    subline: 'Whatever you need to protect, we’ll survey it and plan the right cover, free of charge.',
    button: CTA_SURVEY,
  },
}

export { SERVICES_USED }

// Older pages name some site types differently (e.g. "Malls & Retail Showrooms"); this
// resolves those titles to the matching industry page, or the hub when there is none.
const ALIASES = [
  [/apartment|gated/i, 'apartment-security-chennai'],
  [/villa|bungalow|row house/i, 'villa-bungalow-row-house-security-chennai'],
  [/bank|atm/i, 'bank-security-chennai'],
  [/mall/i, 'mall-security-chennai'],
  [/showroom|retail/i, 'retail-showroom-security-chennai'],
  [/warehouse|factor/i, 'warehouse-factory-security-chennai'],
  [/hotel|hospital/i, 'hotel-hospital-security-chennai'],
  [/cinema/i, 'cinema-hall-security-chennai'],
  [/vacant|construction|builder/i, 'vacant-land-construction-security-chennai'],
]
export function industryLinkFor(title) {
  const hit = ALIASES.find(([re]) => re.test(title))
  return hit ? industryPath(hit[1]) : industriesBase
}
