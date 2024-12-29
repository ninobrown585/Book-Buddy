/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "./BooksSlice";
import {  useNavigate } from "react-router-dom";

export default function Books(setSelectedBookId){
    const {data, isSuccess, isLoading} = useGetBooksQuery();
    const [query, setQuery] = useState("");
    // const [books, setBooks ] = useState ([]);
console.log(data);
const navigate = useNavigate();
const seeBookDetails =(id) =>{
    console.log(id);
    navigate(`/books/${id}`);
};

if (isLoading) {
    return <h3>Loading...</h3>
}
const books = data.books;

// const handleInputChange = (e) => { 
//     const query = e.target.value;
//     setQuery(query)
//   }

// useEffect(() => {
//     console.log(`Success ${isSuccess}`);
//     if(isSuccess) {
//         setBooks(data);
//     }
// }, [data]);
return (
    
    <>
            <div className="input-group">
            <div className="input-group-prepend">
            </div>
            <textarea 
            className="form-control" 
            aria-label="With textarea"
            type="text"
            id="outlined-basic"
                variant="outlined"
                label="Search"
                placeholder="Search Books Here..."
                onChange={event => setQuery(event.target.value)}></textarea>
            </div>
            <h2>Books In The Libary</h2>
            {/* {!books && (<p> Failed to load books from api</p>)} */}
            
                {books
                    ? (
                        books.filter(p => {
                            if (query === '') {
                                return p;
                            } else if (p.title.toLowerCase().includes(query.toLowerCase())) {
                                return p;
                            }
                        })
                            .map((p) => {
                                return (
                                    <ul className="topCard" key ={p.id}>
                                    <div className="card" >
                                    {/* <img src={p.coverimage} alt={p.name} style="width:100%"/> */}
                                    <img src={p.coverimage} alt={p.name} />
                                    <div className="container">
                                        <h4>{p.title} by {p.author} #{p.id}</h4>
                                        <button onClick={() => seeBookDetails(p.id)}> See {p.title} Details</button>
                                    </div>
                                    </div></ul>
                                    
                                
                                        
                                )
                            })
                    ) : !error && <p>Loading...</p>}
           

        </>
);
}

{/* <div>
        {books.map((p) =>{
                return (
                    <div key ={books.id}>
                        <p>{books.title}</p>
                        <p>{books.author}</p>
                        <p>{books.description}</p>

                    </div>
                );
            }
        )
        }
    </div> */}