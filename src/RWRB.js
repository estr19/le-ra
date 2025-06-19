import { rwrbConvo } from './rwrbConvo';

function RWRB() {
  return (
    <div className='RWRB'>
      <h1 id='RWRBH1'>Red White and Royal Blue</h1>
      <div className='conversation'>
        {rwrbConvo.map((chat) => {
          const { id, name, pfp, message } = chat;
          return (
            <div className={`${name}pfp`} key={id}>
              <img className={`${name}Img`} src={pfp} alt={name} />
              <p className='chatP'>{message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RWRB;