import React from 'react';      // to create component we need to import react
import ReactDom from 'react-dom'; //

// JSX Rules
// JSX must return single value
// return div/ section/ article/ Fragment
// Use camelCase for html attributes
// className instead of class
// close every element....meaning that for even self closing tags use slash </> like <img src="" />
// formatting .. add parenthesis while returning otherwise it is necessary to have opening tag on the line of return

const NavBarComponent = () => {
  return (
    <>
      <div className="nav-body">
        <div className="logo">
          <a href='#'>
            Logo
          </a>
        </div>
      </div>
    </>
  );
}

ReactDom.render(<NavBarComponent/>, document.getElementById('root'));