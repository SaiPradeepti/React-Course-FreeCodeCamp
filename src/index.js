import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// setup vars
const bookDetails = [
  {
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg'
  },
  {
    author: 'Barack Obama',
    title: 'A Promised Land',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg'
  },
  {
    author: 'Paulo Coelho',
    title: 'The Alchemist',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg'
  }
];

function BookList(){  
  return (
    <section className="booklist">
      {bookDetails.map( book => {
        return <Book book={book}></Book>;
      })
      }
    </section>
  );
}

// const Book = ({author, title, img}) => {
const Book = (props) => {
  const {author, title, img} = props.book;
  return (
  <article className="book">
    <img src={img} alt=""/> 
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>);
}


ReactDom.render(<BookList/>,document.getElementById('root'));