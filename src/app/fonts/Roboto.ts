import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400','500','700']
})

