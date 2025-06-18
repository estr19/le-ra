import { aboutUs } from './aboutUs';

function MeetUs() {
  return (
    <div>
      <h1>Meet the Princesses</h1>
      <div className='meetUsContainer'>
        {aboutUs.map((ring) => {
          const { id, name, pfp, text, top } = ring;
          return (
            <div className={name} key={id}>
              <img className='pfp' src={pfp} alt={name} />
              <h2>@{name}</h2>
              <p>{text}</p>
              <div className='Top20'>
                {top.map((top20) => {
                  const { cover } = top20;
                  return (
                    <img key={cover} className='eachTop20' src={cover} alt={cover} />
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

export default MeetUs;