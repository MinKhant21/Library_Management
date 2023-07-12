import { useLocation, useParams } from "react-router-dom"
import useFetch from "../hook/useFetch";
import bookImg from "../assets/books.jpeg"
import db from "../firebase"
function BookDetail(props) {
    let location = useLocation();
    let params = useParams('id');
    // console.log(params.id)
    // let {data,loading,error} = useFetch(`http://localhost:3000/books/${params.id}`)
    return (
        <>
          {loading && <p>Loading ......</p>}
          {error  && <p>{error}</p>}
          {
            data && 
            <div className="grid grid-cols-2">
                <div className="w-[80%] mt-3">
                    <img src={bookImg} alt=""  className="w-full"/>
                </div>
                <div className=" mt-3">
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <br />
                    <p>{data.description}</p>
                    <br />
                    {
                        data.categories.map((category)=>(
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
