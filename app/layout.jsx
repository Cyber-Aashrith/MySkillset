

import { Noto_Sans, Roboto_Slab, Inter, Merriweather } from 'next/font/google'

 
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  weight: '400',
  variable: '--font-noto-sans',
})
 
const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
  display: 'swap',
  variable: '--font-roboto-slab',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  style: 'normal',
  variable: '--font-inter'
})

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  style: 'italic',
  variable: '--font-merriweather'
})
 


export default function RootLayout({ children }) {
        return(
          <html lang="en" className={`${inter.variable} ${roboto_slab.variable} ${noto_sans.variable} ${merriweather.variable}`}>
           {

           }
           <head />
            <body>
           {children}
            </body>
          </html>
        )
}
