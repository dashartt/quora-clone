'use client'
import './globals.css'

import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Header from '../components/header'
import QuickInteraction from '../components/quick-interaction'

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang='en'>
      <head />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body id='__next' className='h-full bg-gray-800'>
          <Header />
          <QuickInteraction />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
