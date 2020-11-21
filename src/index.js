import React from 'react';      // to create component we need to import react
import ReactDom from 'react-dom'; //

// For react to know that its a function used to build component
// Capitalise the function name
function Greeting(){
  return <h1>Hi! This is deepti and this is my first component</h1>;
  // this returned value is JSX
}

// here <Greeting/> is equvivalent to <Greeting></Greeting>
// this injects the JSX into index.html present in public folder
// render() takes in two arguments, 
// what is being rendered and where it has to get rendered
ReactDom.render(<Greeting/>, document.getElementById('root'));