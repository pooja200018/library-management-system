import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {

    let [book,setBook] =useState([])

    //to get route parameter (id)
    let params = useParams()

    useEffect(()=>{
        let fetchData = async() =>{
            let response =await fetch(`http://localhost:2001/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData();
    },[])
    
    return ( 
        <div className="readbook">
            <h1>Read Book</h1>
            <h2>{book.title}</h2>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;