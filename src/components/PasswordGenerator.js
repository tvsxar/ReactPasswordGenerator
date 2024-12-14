import '../App.css';
import React from 'react';

function PasswordGenerator() {

  const [password, setPassword] = React.useState('');

  function GeneratePassword() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
    let randomPassword = '';

    // 12 is a random value of the password
    // we can use other values
    for(let i = 0; i < 12; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      randomPassword += chars[randomNumber];
    }

    setPassword(randomPassword);

    randomPassword = '';
  }

  function CopyPassword() {
    if(password === '') {
      alert('Nothing to copy!');
      return;
    }

    navigator.clipboard.writeText(password).then(() => {
      alert('Copied!');
    }).catch(err => {
      alert('Error while copying: ' + err);
    });
  };

  return (
    <div className='container'>
      <div className='main'>
        <h1>Password Generator</h1>
        <input className='password' 
        placeholder='Password' 
        readOnly
        tabIndex="-1"
        onFocus={(e) => e.target.blur()}
        value={password}
        onClick={CopyPassword}  />
        <div className='buttons'>
          <button onClick={GeneratePassword} className='generate-button btn'>Generate</button>
          <button onClick={CopyPassword} className='copy-button btn'>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
