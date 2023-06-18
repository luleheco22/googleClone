import React from 'react'
import Head from 'next/head'
import SearchHeader from '@/components/SearchHeader'
import Footer from '@/components/Footer'


interface DashboardLayoutProps {
    children: React.ReactNode,
};


const SearchLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <>
            <Head>
                <title>Google Clone Next js 13</title>
                <meta name="description" content="Google clone created by Next js 13" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className='relative min-h-screen'>
            <SearchHeader />
            {children}
            <Footer />
            </body>
        </>
    )
}

export default SearchLayout