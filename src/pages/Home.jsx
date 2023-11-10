import React, { useEffect, useState } from "react";

import books from  '../assets/books.jpeg'
import Hero from "../components/Hero";
import bookImg from '../assets/books.jpeg';
import deleteSvg from '../assets/delete.svg';
import editSvg from '../assets/edit.svg';

import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

import {db} from '../firebase'
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";

function Home ()
{

    let [error,setError] = useState('');
    let [loading,setLoading] = useState(true);
    let [books,setBooks] = useState('');
    const fetchBook = async () => {
        const ref = collection(db, 'books');
        let q = query(ref,orderBy('date','desc'))
        onSnapshot(q,docs=>
            {
                if(doc.empty){
                    setError('no doc found')
                }else{
                    let books = [];
                    docs.forEach(doc=>
                        {
                            let book = {
                                id : doc.id,
                                ...doc.data()
                            }
                            books.push(book);
                        }
                    )
                    setBooks(books)
                    setLoading(false)
                }
                
            })
        
        // console.log(documentSnapshot.data())
    }
    useEffect(()=>{
        fetchBook();
    },[fetchBook])
    
    let deleteBook = (e,id) => {
        e.preventDefault();
        let ref = doc(db,'books',id)
        deleteDoc(ref)
        console.log(books)
    }
    
    if (error) {
        return <p>{error}</p>
    }
    return (
        <div>
            <Hero/>
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!books && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {
                        books.map(b => 
                        <Link to={`/books/${b.id}`} key={b.id}>
                            <div className='p-4 border border-1'>
                                <img src={bookImg} className=" w-full" alt="" />
                                <div className='text-center space-y-2 mt-3'>
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className='flex flex-wrap justify-between'>
                                        <div>
                                        {
                                            b.categories.map((c)=>
                                                <span key={c}
                                                className='mx-1 my-1
                                                text-white rounded-full px-2 py-1 text-sm
                                                bg-blue-500'> 
                                                {c}</span>
                                            )
                                        }
                                        </div>
                                       
                                        <div  className=" flex items-center justify-between gap-3">
                                            <Link to={`/edit/${b.id}`} className="">
                                                <img src={editSvg} alt="" />
                                            </Link>
                                            <div onClick={(e) => deleteBook(e,b.id)}>
                                                <img src={deleteSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                    }
                </div>
            )}
        </div>
    )
}

export default Home