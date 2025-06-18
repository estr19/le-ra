import { ourRWRB } from './ourRWRB';
import { estr19Books } from './estr19Books';

function RWRB() {
  return (
    <div className="rwrb">
      <h1 id="rwrbH1">Red White and Royal Blue</h1>
      <div className="RWRBcontainer">
        {ourRWRB.map((ring) => {
          const { id, name, pfp, text } = ring;
          return (
            <div className={name} key={id}>
              <img className='pfp' src={pfp} alt={name} />
              <h2>@{name}</h2>
              <p>{text}</p>
              <div className={name.includes('estr') ? 'estrTop20' : 'hideContainer'} >
                {estr19Books.map((top20) => {
                  const { cover } = top20;
                  return (
                    <img className='eachTop20Book' src={cover} alt={cover} />
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RWRB;