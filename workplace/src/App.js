import React, { Component } from 'react';

//↓JSX
class App extends Component {
  render(){
    return <h1>Hello, World!</h1>;
  }
}


//↓JS
// class App extends Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello, World!!"
//     );
//   }
// }


export default App;
