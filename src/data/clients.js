// Clients & Testimonials page, from the client's "Clients & Testimonials Page" document.
//
// TODO(client) — the doc asks for these before publishing:
//  • confirm each client's exact name, sector grouping (especially "Corporate & Other")
//    and permission to display their logo;
//  • the testimonials are DRAFTS for the real clients to review, edit and approve. Publish
//    each one only with that client's written consent to show their name, designation and
//    organisation. Names/designations stay blank until then.

export const meta = {
  title: 'Clients & Testimonials | United Securitas, Chennai',
  description:
    'Builders, hospitals, showrooms, cinemas and residential communities trust United Securitas. See our clients and what they say about our security services in Chennai.',
  path: '/clients-testimonials/',
}

export const hero = {
  crumb: 'Clients & Testimonials',
  title: 'Trusted by Homes and Businesses Across Chennai',
  subline:
    'Builders, hospitals, showrooms, cinemas, offices and residential communities rely on United Securitas every day. Here are some of them, and what they say.',
  photo: { src: '/gallery/11.jpeg', alt: 'Group photo of United Securitas guards and trainers', position: 'xMidYMid' },
}

export const intro = {
  title: 'Two Decades of Trust, Built Site by Site',
  paragraphs: [
    'Since 2004, United Securitas has delivered security services in Chennai to organisations of every size, from a single apartment gate to builders’ project sites across the city.',
    'Every one of these relationships started the same way: a site survey, a clear plan and guards trained for that site before day one. That is the standard behind every name on this page.',
  ],
}

export const sectors = [
  { icon: 'apartment', label: 'Residential communities' },
  { icon: 'construction', label: 'Builders & developers' },
  { icon: 'hospital', label: 'Hospitals & hospitality' },
  { icon: 'store', label: 'Showrooms & retail' },
  { icon: 'film', label: 'Cinemas & entertainment' },
  { icon: 'building', label: 'Corporate & commercial' },
]

// `file` = logo in public/clients (omitted where there is no logo yet)
const c = (name, file) => ({ name, file })
export const clientGroups = {
  title: 'Some of the Organisations We Protect',
  intro: 'From property developers to cinemas, these are some of the organisations that trust us with their sites.',
  groups: [
    {
      title: 'Builders & Property Developers',
      clients: [
        c('Baashyaam Constructions', 'baashyaam-constructions-pvt-ltd'),
        c('Lancor', 'lancor'),
        c('Akshaya Builders', 'akshaya-builders'),
        c('Landmark Construction', 'landmark-construction'),
        c('Vijay Shanthi Builders', 'vijay-shanthi-builders'),
        c('Jones Lang LaSalle', 'jones-lang-lasalle'),
      ],
    },
    {
      title: 'Residential Communities',
      clients: [
        c('Alpine Meadows', 'alpine-meadows'),
        c('Green Garden Apartment', 'green-garden-apartment'),
        c('Lake View', 'lake-view'),
        c('Pebble Brook'),
        c('Sukriti Apartments', 'sukriti-apartments'),
        c('Surabhi Apartments', 'surabhi-apartments'),
        c('Westminster Apartment', 'west-minister-apartment'),
        c('Adwaitya Apartments', 'adwaitya-apartments'),
        c('Villa Espana', 'villa-espana'),
      ],
    },
    {
      title: 'Hospitals & Hospitality',
      clients: [c('Kings Hospital', 'kings-hospital'), c('Santhosh Hospital', 'santhosh-hospital'), c('Barbeque Nation', 'hotel-barbeque-nation')],
    },
    {
      title: 'Showrooms & Retail',
      clients: [
        c('Nissan showrooms', 'nissan-showrooms'),
        c('Yamaha showroom & service centre', 'yamaha-show-room-service-centre'),
        c('Lifestyle', 'life-style'),
        c('Car Shop', 'car-shop'),
        c('Moto Bike', 'moto-bike'),
      ],
    },
    {
      title: 'Cinemas & Entertainment',
      clients: [c('AGS Cinemas', 'ags-cinemas')],
    },
    {
      title: 'Corporate & Other Clients',
      clients: [
        c('Computers International', 'computers-international'),
        c('Global Technology', 'global-technology'),
        c('Elysium', 'elysium'),
        c('Inseli Park', 'inseli-park'),
        c('Atulya', 'atulya'),
        c('RPS', 'rps'),
        c('Valli Arunachalam', 'valli-arunachlam'),
      ],
    },
  ],
}

export const testimonials = {
  title: 'What Our Clients Say',
  intro: 'In their own words, from the sites we protect.',
  items: [
    {
      text: 'Since United Securitas took over our gate, every visitor is logged and the night guards are always alert. Their supervisors check in regularly, and residents finally feel at ease.',
      role: 'Secretary, Apartment association',
      tag: 'Residential community',
    },
    {
      text: 'We use United Securitas across our project sites. Material movement is checked at every gate, and the team responds quickly whenever we need extra guards.',
      role: 'Builder / construction company',
      tag: 'Builder',
    },
    {
      text: 'Hospital security needs patience as much as alertness. Their guards handle patients and visitors politely and keep the premises orderly, day and night.',
      role: 'Hospital',
      tag: 'Healthcare',
    },
    {
      text: 'The guards are smartly turned out and courteous with customers, yet nothing escapes their attention. That’s exactly what a showroom needs.',
      role: 'Showroom',
      tag: 'Retail',
    },
    {
      text: 'Peak-show crowds used to worry us. The United Securitas team now handles entry and exits smoothly and safely, show after show.',
      role: 'Cinema',
      tag: 'Entertainment',
    },
  ],
}

export const standard = {
  title: 'The Same Standard, Whoever You Are',
  intro: 'Large developer or single apartment block, every client gets the same foundation.',
  items: [
    { icon: 'clipboard', title: 'A Free Site Survey', text: 'Every engagement starts with a visit to your site and a clear plan.' },
    { icon: 'graduation', title: 'Trained Guards', text: 'Trained before deployment, with a refresher course every three months.' },
    { icon: 'moon', title: 'Real Supervision', text: 'Night patrols and surprise checks by ex-Army and Police officers.' },
    { icon: 'wallet', title: 'Full Compliance', text: 'Minimum wages, ESI, PF and bonus paid for every guard.' },
  ],
}

export const industriesCta = {
  title: 'Find Security for Your Type of Site',
  text: 'See how we protect sites like yours, from apartments and banks to warehouses and cinemas.',
  button: 'Explore the industries we protect',
}

export const feedback = {
  title: 'Already a Client? Tell Us How We’re Doing',
  intro: 'Your feedback helps us improve, and helps others choose with confidence.',
  consent: 'I agree that United Securitas may publish my testimonial with my name, designation and organisation.',
  submit: 'Submit Testimonial',
  review: { text: 'Happy with our service?', link: 'Leave us a review on Google' },
}

export const closing = {
  title: 'Join Chennai’s Trusted Names',
  subline: 'Trained, supervised security services in Chennai, planned around your site.',
  button: 'Book a Free Site Survey',
}
