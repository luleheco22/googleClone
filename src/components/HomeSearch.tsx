import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import Image from 'next/image';
interface Props { }

const HomeSearch = (props: Props) => {

    const [input, setInput] = useState<string>('');
    const [randomSearchLoading, setRandomSearchLoading] = useState<boolean>(false);
    const router = useRouter();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);

    }

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        if (!data[0]) return;
        router.push(`/search/web?searchTerm=${data[0]}`);
        setRandomSearchLoading(false);
    }


    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200
                px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md 
                transition-shadow sm:max-w-xl  lg:max-w-2xl'>
                <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    className='flex-grow focus:outline-none'
                />
                <BsFillMicFill className='text-lg' />
            </form>
            <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
                <button 
                   onClick={(e) => handleSubmit(e)}
                   
                   className='btn'
                   >
                    Google Search
                </button>
                <button 
                   onClick={randomSearch}
                   className='btn flex items-center justify-center disabled:opacity-80'
                   disabled={randomSearchLoading}
                   >
                    {randomSearchLoading ? (
                        <Image 
                         className='text-center h-6'
                         src={'/Loading.svg'}
                         width={30}
                         height={30}
                         alt='Loading'
                        />
                    ): 
                    'I Am Feeling Lucky'}
                </button>
            </div>
        </>
    )
}

export default HomeSearch