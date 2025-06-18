import React from 'react';

function ContactUs() {
  const clearInput = () => {
    window.onbeforeunload = () => {
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }
  }

  return (
    <div className='container'>
      <h1 className='gradient-text'>Contact Us!</h1>
      <div className='contactUs'>
        <h2>Have a question, or a suggestion? Drop a message below!</h2>
        <form action='https://formspree.io/f/mgedarra' method='POST'>
          <label><h3>NAME</h3>
          <input type='text' name='name' placeholder='your name' required='' /></label>
          <label><h3>E-MAIL</h3>
          <input type='email' name='_replyto' placeholder='your e-mail' required='' /></label>
          <label><h3>MESSAGE</h3>
          <textarea type='text' name='message' placeholder='a brief message' required=''></textarea></label>
          <input id='submit' type='submit' value='SUBMIT' onClick={() => clearInput()}/>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;