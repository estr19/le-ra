import { books } from './books';

function App() {
  return (
    <div className="App">
      <h1>Le-Ra and the Princesses of Publications</h1>
      <div className="container">
        {books.map((book) => {
          const { id, name, author, bookRating, cover, link, textB, textE, tropes, addOns} =
            book;
          return (
            <div className="book" key={id}>
                <div className="summary">
                  <figure>
                    <img src={cover} alt={name} />
                  </figure>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <h2>"{name}"</h2>
                    <h3 className="author">{author}</h3>
                  </a>
                  <div
                    className="Stars"
                    style={{ "--rating": `${bookRating}` }}
                    title={
                      bookRating === "0"
                        ? "Not yet rated"
                        : `${bookRating} out of 5`
                    }
                  />
                </div>
                <div className="description">
                  <div className="dItems">
                    <b>@bensmom33:</b> {textB}
                  </div>
                  <div className="dItems">
                    <b>@estr19:</b> {textE}
                  </div>
                  <div className="dItems">
                    <b>Tropes:</b> {tropes}
                  </div>
                  <div className="dItems">
                    <b>Additional resources:</b> {addOns}
                  </div>
                </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default App;
