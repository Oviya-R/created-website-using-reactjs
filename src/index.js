import React from "react";
import ReactDOM from "react-dom";
import Message from './App.js';
import './App.css';
function Helo(){
    return(<div class="table">
      <table>
      <tr>
        <th>S.NO</th>
      <th>FIRSTNAME</th>
      <th>LASTNAME</th>
      <th>REGISTER NO</th>
      <th>DEPARTMENT</th>
      <th>CITY</th>
    
      </tr>
      <tr>
        <td>1</td>
        <td>Priya</td>
        <td>J</td>
        <td>123456</td>
        <td>ECE</td>
        <td>Delhi</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sarvesh</td>
        <td>J</td>
        <td>123457</td>
        <td>CSE</td>
        <td>Hyderabad</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sailesh</td>
        <td>N K</td>
        <td>123458</td>
        <td>EEE</td>
        <td>Chennai</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Hendrich</td>
        <td>N K</td>
        <td>123459</td>
        <td>AIML</td>
        <td>Coimbatore</td>
      </tr>
    </table>
    <br></br>

   
    <div>
      <h3>LOGIN FORM</h3>
   
    <form>
        <label for="firstname">FIRSTNAME:</label> <input  type='text'></input><br></br><br></br>
        <label  for="Lastname">LASTNAME:</label> <input class="two" type='text'></input><br></br><br></br>
        <label>ROLE NO:</label>  <input class="three" type='number'></input><br></br><br></br>
        <label>DOB:</label>  <input class="four" type='date'></input><br></br><br></br>
        <button type='submit'>Submit</button>
        <button class="btn" type='reset'>Reset</button>
    </form>
    </div>


   </div>
    )
}
function Hello(){
    return<div>
    <Message/>
       <Helo/>
  </div>
  }
  ReactDOM.render(<Hello/>,document.getElementById('root'));
  

 