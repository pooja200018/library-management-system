import { useState } from "react";
import { useNavigate } from "react-router-dom";


//title,pageCount,categories,authors,longDescription,shortDescription,thumbnailUrl
const AddBooks = () => {

    let [title,setTitle] = useState("")
    let [categories,setCategory] = useState("")
    let [authors,setAuthors] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShortdisp] = useState("")
    let [longDescription,setLongdisp] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()


    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let bookdata ={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch('http://localhost:2001/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
        })
        alert('added book successfully')

        navigate('/admin/booklist')
    }

    
    return (
        <div className="addbooks">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(t)=>setTitle(t.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(t)=>setAuthors(t.target.value)}  type="text" required placeholder="Enter name of authors" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(t)=>setCategory(t.target.value)} type="text" required placeholder="Enter the category" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(t)=>setPage(t.target.value)} type="text" required placeholder="Enter pageCount" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(t)=>setShortdisp(t.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(t)=>setLongdisp(t.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(t)=>setUrl(t.target.value)} type="url" required placeholder="image of the book" />
                    </div>

                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
