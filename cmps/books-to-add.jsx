export function BooksToAdd({ searchRes,onAddBook }) {
  return (
    <ul className="books-to-add clr-list">
      {searchRes.map((book, idx) => {
        return (
          <li className="add-book-item flex" key={idx}>
            {book.title}
            <img src="assets\img\plus.png" alt="" onClick={()=>onAddBook(book)}/>
          </li>
        );
      })}
    </ul>
  );
}
