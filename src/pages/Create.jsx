import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { addDoc, collection, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Create ()
{
  let [title , setTitle] = useState('')
  let [description , setDescription] = useState('')
  let [category , setCategory] = useState('')
  let [insertCategory , setinsertCategory] = useState([])
  let {setPostData , data : book  , loading , error} = useFetch('http://localhost:3000/books','POST');
  let  navigate = useNavigate();
  let addCateogry = (e) =>{
    e.preventDefault()
    setinsertCategory(prevState =>[ category , ...prevState])
    setCategory("")
  }

  let creatBook = (e) => {
    e.preventDefault()
    let data = {
      title : title,
      description : description,
      categories:insertCategory,
      date : serverTimestamp()
    }
    let ref = collection(db,'books')
    addDoc(ref,data)
    navigate('/')
   
  }
  //  useEffect(() => {
  //       if (book) {
  //         // console.log(book)
  //         navigate('/')
  //       }
  //   }, [book])


  return(
    <form className="w-full max-w-lg mx-auto mt-4">
     
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Book Title
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Book Title" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Description
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" placeholder="Description" />
        </div>
      </div>

       <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Categories
            </label>
            <div className="flex justify-center gap-1">
              {/* {<p>{category}</p>} */}
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Book Category" value={category} onChange={(e)=>setCategory(e.target.value)} /> 
              <button onClick={addCateogry} type="submit" className="px-1 py-1 bg-indigo-600  text-white rounded-2xl w-10 h-10 pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </button>
              
            </div>
             {insertCategory.map(genre => (
                    <span className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {genre}</span>
                ))
              }
            
        </div>
        <div>
        </div>
      </div>

      <button onClick={creatBook} type="submit" className="px-3 py-2 bg-indigo-600  text-white rounded-2xl flex justify-center items-center gap-1 w-full ">
          <span className="hidden md:block font-bold">
            <Link to="/create">
              Create Book
            </Link>
          </span>
      </button>
      
      
  </form>
  )
}

export default Create