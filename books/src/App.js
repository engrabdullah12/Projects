import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = ( id ,newTitle) => {
        const updatedBooks = books.map((book) => {
        if (book.id ===id){
            return {...book, title: newTitle};
        }
        return book;

        });
        setBooks(updatedBooks);
    };



    const deleteBookById = (id) =>{
        setBooks(books.filter(book => book.id !== id));
    };

    
    const creatBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999)
                , title
            },
        ];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={creatBook} />
        </div>
    );
}

export default App;