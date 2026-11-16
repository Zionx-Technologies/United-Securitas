// Content shared by every page: contact details, navigation, footer, client logos.

export const contact = {
  phoneDisplay: '044 2472 8677',
  phoneHref: 'tel:+914424728677',
  email: 'admin@unitedsecuritas.com',
  hours: 'Open 24/7',
  address:
    '95/2, Kannadasan Street, S5, Second Floor, Eswari Priya Apts, West Mambalam, Chennai 600033',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Training', to: '/training' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const clients = {
  title: "Trusted by Chennai's builders, hospitals, showrooms and residential communities",
  logos: [
    ['ags-cinemas', 'AGS Cinemas'],
    ['akshaya-builders', 'Akshaya Builders'],
    ['alpine-meadows', 'Alpine Meadows'],
    ['atulya', 'Atulya'],
    ['baashyaam-constructions-pvt-ltd', 'Baashyaam Constructions'],
    ['car-shop', 'Car Shop'],
    ['computers-international', 'Computers International'],
    ['elysium', 'Elysium'],
    ['global-technology', 'Global Technology'],
    ['green-garden-apartment', 'Green Garden Apartment'],
    ['hotel-barbeque-nation', 'Barbeque Nation'],
    ['inseli-park', 'Inseli Park'],
    ['jones-lang-lasalle', 'Jones Lang LaSalle'],
    ['kings-hospital', 'Kings Hospital'],
    ['lake-view', 'Lake View'],
    ['lancor', 'Lancor'],
    ['landmark-construction', 'Landmark Construction'],
    ['life-style', 'Lifestyle'],
    ['moto-bike', 'Moto Bike'],
    ['nissan-showrooms', 'Nissan Showrooms'],
    ['rps', 'RPS'],
    ['santhosh-hospital', 'Santhosh Hospital'],
    ['sukriti-apartments', 'Sukriti Apartments'],
    ['surabhi-apartments', 'Surabhi Apartments'],
    ['valli-arunachlam', 'Valli Arunachalam'],
    ['vijay-shanthi-builders', 'Vijay Shanthi Builders'],
    ['villa-espana', 'Villa Espana'],
    ['west-minister-apartment', 'Westminster Apartment'],
    ['yamaha-show-room-service-centre', 'Yamaha Showroom'],
    ['adwaitya-apartments', 'Adwaitya Apartments'],
  ].map(([file, name]) => ({ src: `/clients/${file}.png`, name })),
}

export const footer = {
  tagline: 'United Securitas – trained, supervised and compliant security services in Chennai.',
  company: [
    { label: 'About', to: '/about-us' },
    { label: 'Clients & Testimonials', to: '/clients-testimonials' },
    { label: 'Training', to: '/training' },
    { label: 'Careers', to: '/careers' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
}
