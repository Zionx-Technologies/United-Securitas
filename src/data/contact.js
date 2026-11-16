// Contact page, from the client's "Contact Page Content" document.
import { contact } from './site'

export const meta = {
  title: 'Contact United Securitas Chennai | Get a Free Security Quote',
  description:
    'Call, email or visit United Securitas in West Mambalam, Chennai. Book a free site survey and get a clear security quote. Open 24/7.',
  path: '/contact/',
}

export const hero = {
  crumb: 'Contact',
  title: 'Contact United Securitas Chennai',
  subline: 'Tell us about your site, and we’ll plan the right security services in Chennai for it, starting with a free site survey.',
  urgent: 'Need guards urgently? Call us anytime on',
  photo: { src: '/gallery/gallery-16.jpg', alt: 'United Securitas officer leading guards in a salute', position: 'xMaxYMid' },
}

const mapsQuery = encodeURIComponent(`United Securitas, ${contact.address}`)
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

export const cards = [
  { icon: 'phonecall', title: 'Call Us', value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: 'mail', title: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'pin', title: 'Visit Us', value: contact.address, href: directionsUrl },
  { icon: 'clock', title: 'We’re Available', value: '24 hours a day, 7 days a week' },
]

export const quote = {
  title: 'Get a Free Security Quote',
  intro: 'Choose what suits you: a quick call-back, or a detailed quote request.',
  callback: {
    title: 'Quick Call-Back',
    text: 'Short on time? Leave your number, and we’ll call you.',
    submit: 'Call Me Back',
  },
  detailed: {
    title: 'Detailed Quote',
    text: 'Share a few details about your site. We’ll call you back, visit for a free survey and send a clear plan with a quote.',
    submit: 'Request My Free Survey',
    enquiryTypes: ['Security guards', 'Extra / temporary guards', 'Event security', 'Staff training', 'Other'],
    siteTypes: [
      'High-rise apartment / gated community',
      'Villa / bungalow / row house',
      'Builder / construction site / vacant land',
      'Office / IT park',
      'Factory / warehouse',
      'Bank / ATM',
      'Mall / retail showroom',
      'Hotel / hospital',
      'Cinema hall',
      'Other',
    ],
    shifts: ['Day', 'Night', '24 hours'],
  },
  privacy: 'We’ll use your details only to respond to your enquiry.',
  trust: [
    { icon: 'calendar', label: 'Since 2004' },
    { icon: 'medal', label: 'Ex-SPG-led training' },
    { icon: 'star', label: 'Ex-Army & Police officers' },
    { icon: 'clock', label: '24/7 support' },
  ],
}

export const next = {
  title: 'What Happens After You Enquire',
  steps: [
    { title: 'We call you back', text: 'We talk through your site, your timings and what you need.' },
    { title: 'We visit your site', text: 'A free survey of your entry points, layout and risks.' },
    { title: 'You get a clear plan', text: 'Guards, shifts, duties and cost, all in one simple quote.' },
  ],
}

export const vendor = {
  title: 'Evaluating Security Vendors?',
  text: 'If you’re shortlisting security partners for your organisation, we’ll send you our company profile and statutory compliance details (PF, ESI and minimum wages), ready to share with your management.',
  button: 'Request Vendor Details',
  // what the button pre-fills in the detailed form
  prefill: { enquiry: 'Other', message: 'Vendor details request' },
}

export const clientSupport = {
  title: 'Already a United Securitas Client?',
  text: `Need a replacement guard, extra cover for an event, or want to raise a concern about your site? Call us on ${contact.phoneDisplay}. We’re available 24/7.`,
  button: 'Call Client Support',
}

export const office = {
  title: 'Visit Our Office',
  button: 'Get Directions',
}

export const faqs = {
  title: 'Before You Get in Touch',
  items: [
    { q: 'Is the site survey really free?', a: 'Yes. We visit your site, study its risks and recommend the right security plan, at no cost and with no obligation.' },
    { q: 'What details should I share?', a: 'Your site type, location, the number of guards you think you need, shift timings and when you’d like to start. If you’re unsure, just call us, and we’ll help you work it out.' },
    { q: 'Do you provide guards for one-time events?', a: 'Yes. We provide event security for corporate, social and public events, including crowd management, entry screening and VIP movement.' },
    { q: 'Can I get extra guards for a short period?', a: 'Yes. Whether it’s a festival, a function or a busy season at your site, choose “Extra / temporary guards” in the form or call us directly.' },
  ],
}

// TODO(client): add the Google review link and social profile URLs (not in the content doc).
// Items without a URL are hidden, so nothing broken shows until they're filled in.
export const googleReviewUrl = ''
export const social = [
  { label: 'Facebook', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'YouTube', url: '' },
  { label: 'X (Twitter)', url: '' },
]

export const strip = {
  careers: { title: 'Careers', text: 'Looking to join our team as a security guard or supervisor?', link: 'Visit Careers', to: '/careers' },
  review: { title: 'Google Review', text: 'Happy with our service?', link: 'Leave us a review on Google' },
  social: { title: 'Follow Us' },
}
