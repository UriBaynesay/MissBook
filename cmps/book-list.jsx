import {BookPreview} from './book-preview.jsx'

export function BookList({books}) {
  return (
    <section className="books-container">
        {books.map((book)=>{ return <div key={book.id}>
                <BookPreview book={book}/>
            </div>
        })}
    </section>
  );
}
