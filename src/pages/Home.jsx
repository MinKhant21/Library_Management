import React from "react";
import books from  '../assets/books.jpeg'
import Hero from "../components/Hero";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
function Home ()
{
  let {data,loading,error} = useFetch('http://localhost:3000/books');
  return(
    <>
        {loading &&  <p>Loading......</p> }
        <Hero/>
        {data && 
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
          {data.map((book) => (
            <Link to={`/books/${book.id}`} className='p-4 border border-1'>

              <img src={books} alt="" className="w-full" />
              <div className='text-center space-y-2 mt-3'>
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                {/* genres */}
                <div className='flex flex-wrap'>
                  {book.categories.map(genre => (
                    <span className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {genre}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        }
    </>
  )
}

export default Home