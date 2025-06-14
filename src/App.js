import { books } from './books';

function App() {
  return (
    <div className="App">
      <h1>Le-Ra and the Princesses of Publications</h1>
      <div className="container">
        {books.map((book) => {
          const { id, name, author, bookRating, cover, link, textB, textE} =
            book;
          return (
            <div className="book" key={id}>
              <div className="blogEntry">
                <a href={link} target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={cover} alt={name}/>
                </figure>
                <h2>
                    "{name}"
                </h2>
                <h3 className="author">{author}</h3>
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
                <div className='description'>
                  <p>
                    {textB}
                  </p>
                  <p>
                    {textE}
                  </p>
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
