const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {
  let currency;
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

  return (
    <Link to={`/book/${book.id}`}>
      <div className="book-preview">
        <h1 className="book-title">Books Title : {book.title} </h1>
        <h1 className="book-price">
          Books Price : {book.listPrice.amount} {currency}
        </h1>
      </div>
    </Link>
  );
}
