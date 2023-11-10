import { useLocation, useParams } from "react-router-dom"
import useFetch from "../hook/useFetch";
import bookImg from "../assets/books.jpeg"
import {db} from "../firebase"
import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
function BookDetail(props) {
    let location = useLocation();
    let {id} = useParams();
    let [error,setError] = useState('');
    let [loading,setLoading] = useState(true);
    let [book,setBook] = useState('');



    useEffect(() => {
        let ref = doc(db,'books',id);
        onSnapshot(ref,doc=>{
            if(doc.empty){
                setError('no doc found')
            }else{
                let data = {
                    id : doc.id,
                    ...doc.data()
                }
                setBook(data)
                setLoading(false)
            }
            
        })
    },[])
    return (
        <>
          {loading && <p>Loading ......</p>}
          {error  && <p>{error}</p>}
          {
            book && 
            <div className="grid grid-cols-2">
                <div className="w-[80%] mt-3">
                    <img src={bookImg} alt=""  className="w-full"/>
                </div>
                <div className=" mt-3">
                    <h3 className="text-2xl font-bold">{book.title}</h3>
                    <br />
                    <p>{book.description}</p>
                    <br />
                    {
                        book.categories.map((category)=>(
                            <span className="px-1 py-1 bg-indigo-600 text-white rounded-lg mr-2 mt-4">{category}</span>
                        ))
                    }
                </div>
            </div>
          }
        </>
    )
}
export default BookDetail
