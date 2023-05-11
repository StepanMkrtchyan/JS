
import { useState } from "react";


function MyForm() {

let [text, setText] = useState('');
let [pass, setPass] = useState('');

const [submittedText, setSubmittedText] = useState('');
const [submittedPass, setSubmittedPass] = useState('');

const handleLogin = event => {
setText(event.target.value)
}

const handlePass = event => {
setPass(event.target.value)
}

const handleSubmit = () => {
if(document.getElementById('checkbox').checked === true){
localStorage.setItem('login', text);
localStorage.setItem('password', pass)
}

setSubmittedText(text);
setSubmittedPass(pass);

};

const clearSubmit = () => {
setSubmittedText('');
setSubmittedPass('');
setText('');
setPass('');
localStorage.removeItem('login');
localStorage.removeItem('password');
document.getElementById('remember me').checked = false
}



return (
  <div>
  <form id="form">
  <label htmlFor="text">Login:</label>
  <input type="text" value={text} onChange={handleLogin} id="login"></input><br/><br/>
  
  <label htmlFor="password" >Password:</label>
  <input type="password" value={pass} onChange={handlePass} id="password"></input><br/><br/>
  
  <label>remember me</label>
  <input type="checkbox" id="checkbox"></input><br/><br/>
  
  </form>
  <button onClick={handleSubmit}>Button</button>
  {
  (
  <div>
  <h2>{submittedText}</h2>
  <h2>{submittedPass}</h2>
  </div>
  )
  }
  </div>
  );
  }
  
  export default MyForm;
  
  