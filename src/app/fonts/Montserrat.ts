import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400','500','600','700']
})

