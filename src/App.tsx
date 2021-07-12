// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






import React from 'react';
import './App.css';
import Signin from './SigninPage/Signin';
import Signup from './SignupPage/Signup';
import WelcomePage from './WelcomePage/WelcomePage';
import {Switch,Route} from 'react-router-dom';
// import { Container } from 'reactstrap';


function App() {
  return (
    
    
    
    <div className="app">
      
        <Switch>
        <Route exact path="/"><WelcomePage/></Route>
        <Route exact path="/signin"><Signin/></Route>
        <Route exact path="/signup"><Signup/></Route>
      </Switch>
      
      
    </div>
  
      
    
  );
}

export default App;

