import { books } from './books';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Le-Ra and the Princesses of Publications</h1>
      <div className="container">
        {books.map((book) => {
          const { id, name, author, bookRating, cover, link} =
            book;
          return (
            <div className="book" key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={cover} alt={name} />
                </figure>
                <p>
                    "{name}"
                </p>
                <p className="author">{author}</p>
                <div
                  className="Stars"
                  style={{ "--rating": `${bookRating}` }}
                  title={
                    bookRating === "0"
                      ? "Not yet rated"
                      : `${bookRating} out of 5`
                  }
                />
              </a>
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default App;
