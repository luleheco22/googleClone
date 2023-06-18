import React from 'react'
import { AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
type Props = {}

const SearchHeaderOptions = (props: Props) => {

  const pathname = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();
  const searchTerm = searchparams.get('searchTerm')
  
  const selectTab = (tab: string) => {
    router.push(`/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`)
  }

  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
        <div 
          className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500
          cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}`}
          onClick={() => selectTab('All')}  
        >
          <AiOutlineSearch className='text-md' />
          <p className=''>All</p>
        </div>
        <div 
          className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500
          cursor-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-blue-600 !border-blue-600'}`}
          onClick={() => selectTab('Images')}  
        >
          <AiOutlineCamera className='text-md' />
          <p className=''>Images</p>
        </div>
    </div>
  )
}

export default SearchHeaderOptions