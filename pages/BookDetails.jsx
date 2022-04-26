import { bookService } from "../services/book.service.js";

import { LongText } from "../cmps/long-text.jsx";

export class BookDetails extends React.Component {
  state = {
    book: null,
    readDesc: "",
    currency: "",
    isLongTxtShown: false,
  };

  componentDidMount() {
    const { bookId } = this.props.match.params;
    bookService.getBookById(bookId).then((book) => this.setState({ book }));

    // this.setReadDesc();
    // this.setCurrency();
  }

  setReadDesc = () => {
    let { book, readDesc } = this.state;
    if (book.pageCount > 500) readDesc = "Long reading";
    else if (book.pageCount > 200) readDesc = "Devent reading";
    else readDesc = "Light reading";
  };

  setCurrency = () => {
    let { book, currency } = this.state;
    switch (book.listPrice.currencyCode) {
      case "EUR":
        currency = "€";
        break;
      case "USD":
        currency = "$";
        break;
      default:
        currency = "₪";
        break;
    }
  };

  onToggleText=()=>{
    this.setState({isLongTxtShown:!this.state.isLongTxtShown})
  }

  render() {
    const { book, readDesc, currency, isLongTxtShown } = this.state;
    return (
      <main>
        {book&&<section
          className={`book-details ${
            book.listPrice.amount > 150 ? "Red" : "Green"
          } flex`}
        >
          <h1>Title : {book.title}</h1>
          <h2>{book.subtitle}</h2>
          <h3>
            Authors :{" "}
            {book.authors.map((author, idx) => (
              <a
                href={`https://www.google.com/search?q=${author}`}
                target="_blank"
                key={idx}
              >
                {author}
              </a>
            ))}
          </h3>
          <h3>
            Published at : {book.publishedDate}{" "}
            {book.publishedDate > 10 ? "Veteren Book" : "New!"}
          </h3>
          <LongText
            text={book.description}
            isLongTxtShown={isLongTxtShown}
            onToggleText={this.onToggleText}
          />
          <h3>
            Number of pages : {book.pageCount} {readDesc}
          </h3>
          <h4>Categories :</h4>
          {book.categories.map((category, idx) => (
            <h4 key={idx}>{category}</h4>
          ))}

          <div
            className={`book-thumbnail ${
              book.listPrice.isOnSale ? "on-sale" : ""
            }`}
          >
            <img src={book.thumbnail} alt="" />
          </div>
          <h3>Language : {book.language}</h3>
          <h1 className="book-price">
            Books Price : {book.listPrice.amount} {currency}
          </h1>
        </section>}
      </main>
    );
  }
}
