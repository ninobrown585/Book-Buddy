/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useGetSingleBookQuery } from "./SingleBookSlice";
import {useGetBookQuery} from "../components/Books/BooksSLice";

export default function SingleBook(selectedBookId, setSelectedBookId) {
    const navigate = useNavigate()
    const {id} = useParams();
    const {data, isSuccess, isLoading} = useGetBookQuery(id);
    const [book, setBook] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        if(isSuccess) {
            setBook(data.book);
        }
    },[data]);

    let $details;
// No Book Selected
    if(!selectedBookId){
        $details = <p>Please select a book to see more details.</p>
    }
// A book has been selected, but results have not yet returned from the API
else if (isLoading) {
    $details = <p>Loading Book information...</p>
}
else{
    $details =(
        <>
        <div className="topCard">
        <div className="card">
        <figure>
            <img className="card" src={book.coverimage} alt={book.name} />
        </figure>
        <div className="container">
        <h3>
            {book.title} by {book.author}
        </h3>
        <h4>{book.description}</h4>
        <p> {data.book.available ? "true" : "false"}</p>
        <button onClick={() => navigate("/books")}>Back</button>
        </div></div></div>
        </>
    );
}
return(
    <aside className="card">
        <h2>Selected Book</h2>
        {$details}
    </aside>
)

}