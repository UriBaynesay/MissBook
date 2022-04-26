import { bookService } from "../services/book.service.js";
import { BooksToAdd } from "./books-to-add.jsx";
import { eventBusService } from "../services/event-bus.service.js";

const { withRouter  } = ReactRouterDOM;

class _AddBook extends React.Component {
  state = {
    value: "",
    searchRes: null,
  };

  onSubmit = (ev) => {
    const { value } = this.state;
    ev.preventDefault();
    if (!value) return;
    bookService
      .searchBooks(value)
      .then((res) => this.setState({ searchRes: res }));
  };

  onAddBook = (book) => {
    bookService.addBook(book.id).then((res) => {
      this.setState({searchRes:null})
      eventBusService.emit('show-msg',{text:`${book.title} was added successfully!`,type:'success'})
      this.props.loadBooks();
    })
    .catch(err=>eventBusService.emit('show-msg',{text:`${book.title} was not added ! `,type:'warning'}))
  };

  handleChange({ target }) {
    this.setState({ value: target.value });
  }


  render() {
    let { value, searchRes } = this.state;

    return (
      <section className="add-book-container flex">
        <h3>Add Book</h3>
        {searchRes && (
          <BooksToAdd searchRes={searchRes} onAddBook={this.onAddBook} />
        )}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={value}
            onChange={(ev) => this.handleChange(ev)}
          />
        </form>
      </section>
    );
  }
}


export const AddBook = withRouter(_AddBook)