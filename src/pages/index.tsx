import React from 'react';
import Layout from '@/layout/Layout';
import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';
import HomeSearch from '@/components/HomeSearch';


export default function Home() {
  return (
    <>
      <Layout>
        <HomeHeader />

        <div className='flex flex-col items-center mt-24'>
          <Image
            width={300}
            height={300}
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='Google Logo'
            priority
          />

          <HomeSearch />
        </div>
      </Layout>
    </>

  )
}
