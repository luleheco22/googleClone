import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams, useRouter } from 'next/navigation'

type Props = {}

const SearchBox = (props: Props) => {

    const searchParamas = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParamas.get('searchTerm')
    const [term, setTerm] =  useState(searchTerm || '')

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!term) return;
        router.push(`/search/web?searchTerm=${term}`)
    }

  return (
    <form 
      className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10
      mr-5 flex-grow max-w-3xl items-center'
      onSubmit={handleSubmit}
    >
        <input 
          type="text" 
          className='w-full focus:outline-none'  
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search Google'
        />
        <RxCross2 
          className='text-2xl text-gray-500 cursor-pointer
          sm:mr-2' 
          onClick={() => setTerm('')}
        />
        <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4
        border-l-2 border-gray-300 mr-3' />
        <AiOutlineSearch className='text-2xl hidden sm:inline-flex
        text-blue-500 cursor-pointer' />

    </form>
  )
}

export default SearchBox