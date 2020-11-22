import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

function BookList(){
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>);
}

const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return (
  <article class="book">
    <img src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg" alt=""/> 
    <h1>{title}</h1>
  <h4>{author.toUpperCase()}</h4>
  <p>{6+6}</p>
  </article>);
}


ReactDom.render(<BookList/>,document.getElementById('root'));