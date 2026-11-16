import { reviews } from '../../data/home'
import ReviewBand from '../../components/ReviewBand'

export default function Reviews() {
  return (
    <ReviewBand
      title={reviews.title}
      eyebrow="Clients & Testimonials"
      items={reviews.items}
      link={{ label: 'View all clients and testimonials', to: '/clients-testimonials' }}
    />
  )
}
