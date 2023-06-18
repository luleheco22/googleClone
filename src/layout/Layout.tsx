import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'


interface DashboardLayoutProps  {
    children: React.ReactNode,
  };


const Layout = ({children}: DashboardLayoutProps) => {
  return (
    <>
    <Head>
    <title>Google Clone Next js 13</title>
    <meta name="description" content="Google clone created by Next js 13" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
 </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout