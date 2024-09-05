import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import localFont from 'next/font/local'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const aquire = localFont({
  src: [
    {
      path: '../../public/fonts/AquireLight.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Aquire.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/AquireBold.otf',
      weight: '700'
    }
  ],
  variable: '--font-aquire'
})
