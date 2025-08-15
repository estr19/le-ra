import { rwrbConvo } from './rwrbConvo';

function RWRB() {
  return (
    <div className='RWRB'>
      <h1 id='RWRBH1'>Red White & Royal Blue - Noted</h1>
      <div className='conversation'>
        {rwrbConvo.map((chat) => {
          const { id, name, pfp, message, chapter } = chat;
          return (
            <div className={`${name}pfp`} key={id}>
              <img className={`${name}Img`} src={pfp} alt={name} />
              <div className='chapterNotes'>
                <h3 className='quoteHeader'>Chapter {chapter}</h3>
                <p dangerouslySetInnerHTML={{__html: message }} className='chatP'></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RWRB;