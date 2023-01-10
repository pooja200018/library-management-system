import '../styles/bookList.css';
import { useState,useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const BookList = () => {

    let [books,setBooks] =useState([])

    useEffect (() =>{
        let fetchData = async() =>{
            let response = await fetch("http://localhost:2001/books")
            let data = await response.json()
            setBooks(data)      //updating
        }
        fetchData()
    },[books]) 

    let handleDelete = (id,title) =>{
        // setBooks(books.filter(x => x.id !== id))
        // alert(`${title} has been deleted`)          //just deleting in UI

        fetch(`http://localhost:2001/books/${id}` ,{
            method:'DELETE'
        });
        alert(`${title} has been deleted permanently`)    //deleting from server
    }


    let navigate = useNavigate();

    let handleRead = (id) =>{
        navigate(`/admin/bookList/${id}`);
        
    }


    return ( 
        <div className="booklist">
            <h1 className='bookh1'>Book List: {books.length}</h1>
            <div className="bookSection">
                {books.map(data =>(
                    <div className="book">
                        <div className="img">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookdisp">
                        <h1>Title: {data.title}</h1>
                        {/* <p>{data.authors.map(x=>(
                            <pooja>{x}</pooja>
                        ))}</p> */}
                        <h4>Authors: {data.authors.toString()}</h4>
                        <h5>Category: {data.categories.toString()}</h5>
                        <h3>PageCount: {data.pageCount}</h3>

                        <button onClick={()=>handleRead(data.id)} className="readBook">Read more</button>
                        
                        <button onClick={() =>handleDelete(data.id,data.title) } className="btn11">Delete</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BookList;