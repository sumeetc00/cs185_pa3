import { Component } from 'react';

class Email extends Component {
    checkEmail() {
        var input = document.getElementById("email").value;
        var res = document.getElementById("result");
    
        if (input.includes("@")) {
          if (input.endsWith(".edu") || input.endsWith(".com")) {
            res.style.color = "green";
            res.innerHTML = "Email successfully recorded."; 
          } else {
            res.style.color = "red";
            res.innerHTML = "Invalid email address.";
          }
        } else {
            res.style.color = "red";
            res.innerHTML = "Invalid email address.";
        }
    }

    render() {
        return (<>
            <div className="pageinfo">
              <h1>Email Validation</h1>
              <label>Enter your email address: </label><br/>
              <input id="email" type="text"/>
              <p id="result"></p>
              <button onClick={this.checkEmail}>Submit</button>
            </div>
        </>);
    }
}

export default Email;