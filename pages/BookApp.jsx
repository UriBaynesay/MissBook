import { BookList } from "../cmps/book-list.jsx";
import {FilterBy} from '../cmps/filter-by.jsx'
import {bookService} from '../services/book.service.js';
import { AddBook } from "../cmps/add-book.jsx";

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

componentDidMount() {
    this.loadBooks();
}

  loadBooks = () => {
    bookService.query(this.state.filterBy)
    .then(res=>this.setState({books:res}))
  }

  onSetFilter=(filter)=>{
    // console.log(filter);
    this.setState({filterBy:filter},()=>{
      this.loadBooks();
    })
  }

  render() {
      const {books}=this.state
    return (
      <main>
        <AddBook loadBooks={this.loadBooks}/>
        <FilterBy onSetFilter={this.onSetFilter}/>
        <BookList books={books} loadBookDetails={this.loadBookDetails}/>
      </main>
    );
  }
}
