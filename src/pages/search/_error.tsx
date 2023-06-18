import React from 'react'
import { NextPage } from 'next';
import {useEffect} from 'react';

interface Props {
 error: string
 reset: Function
}

const Error: NextPage<Props> = ({error, reset}) => {

    useEffect(() => {
       console.log('Error: ', error)
    }, [error])

  return (
    <div className='flex flex-col justify-center pt-10'>
        <h2 className='text-3xl mb-4 text-center'>{error}</h2>
        <button 
          onClick={() => reset()}
          className='text-blue-500'
        >Try again</button>
    </div>
  )
}

export default Error