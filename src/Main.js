import { books } from './books';

function Main() {
  return (
    <div>
      <h1>Le-Ra and the Princesses of Publications</h1>
      <div className='container'>
        {books.map((book) => {
          const { id, name, author, bookRating, cover, GR, SG, textB, textE, tropes, highlightsE} =
            book;
          return (
            <div className='book' key={id}>
                <div className='summary'>
                  <figure>
                    <img src={cover} alt={name} />
                  </figure>
                  <h2>'{name}'</h2>
                  <h3>{author}</h3>
                  <h4><a href={GR} target='_blank' rel='noopener noreferrer'>Goodreads</a> | <a href={SG} target='_blank' rel='noopener noreferrer'>StoryGraph</a></h4>
                  <div
                    className='Stars'
                    style={{ '--rating': `${bookRating}` }}
                    title={
                      bookRating === '0'
                        ? 'Not yet rated'
                        : `${bookRating} out of 5`
                    }
                  />
                </div>
                <div className='description'>
                  <div className='items'>
                    <b>@bensmom33:</b> {textB}
                  </div>
                  <div className='items'>
                    <b>@estr19:</b> {textE}<br></br>
                    <i>My favorite quotes and passages from this book can be found</i> <a href={highlightsE} target='_blank' rel='noopener noreferrer'><b>here</b></a>.
                  </div>
                  <div className='items'>
                    <b>Tropes:</b> {tropes}
                  </div>
                </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default Main;