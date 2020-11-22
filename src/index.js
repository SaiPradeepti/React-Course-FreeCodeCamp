import React from 'react';      // to create component we need to import react
import ReactDom from 'react-dom'; //

// Nested Components and React Tools

function Greeting(){
  return (
    <div>
      <Greet/>
      <Person/>
    </div>
  );
}
// implicit return
const Person = () => <h3>This is deepti</h3>;

// explicit return 
const Greet = () => {return <h1>Hello World!</h1>};

ReactDom.render(<Greeting/>,document.getElementById('root'));
