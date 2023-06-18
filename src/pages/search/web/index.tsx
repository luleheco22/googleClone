import SearchLayout from '@/layout/SearchLayout'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Error from '../_error';
import Link from 'next/link';
import WebSearchResults from '@/components/WebSearchResults';
import { Result, SearchResponse } from '@/interfaces';
import LoadingWeb from '@/components/LoadingWeb';


const WebSearchPage = () => {
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const searchparams = useSearchParams();
  const searchTerm = searchparams.get('searchTerm')
  const startIndex = +(searchparams.get('start') || 1) as number;
  console.log(startIndex, 'acaaaa')
  const SearchGoogle  = async () => {
    try {
      setLoading(true); // Mostrar el componente LoadingWeb
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_ID}&q=${searchTerm}&start=${startIndex}`)
      const data = await response.json()
  
       if (!response.ok) {
          setError(data.error.message)
       }
      setResults(data)
      setLoading(false); // Ocultar el componente LoadingWeb

    } catch (error) {
      console.log(error)
    }
  } 

   useEffect(() => {
    SearchGoogle();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchTerm, startIndex])

   return (
    <SearchLayout>
      {error ? (
        <Error error={error} reset={SearchGoogle} />
      ) : !results ? (
        <>
          {loading ? (
            <LoadingWeb />
          ) : (
            <div className='flex flex-col justify-center items-center pt-10'>
              <h2 className='text-3xl mb-4'>No results found</h2>
              <p className='text-lg'>
                Try searching for something else or go back to homepage.{' '}
                <Link href='/' className='text-blue-500'>
                  Home
                </Link>
              </p>
            </div>
          )}
        </>
      ) : (
        <WebSearchResults results={results} />
      )}
    </SearchLayout>
  );
}

export default WebSearchPage