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
      <Book img = {bookDetails[0].img} title = {bookDetails[0].title} author = {bookDetails[0].author} >
        <p>This is children content of props. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt officiis corrupti maxime magni qui debitis provident sapiente quibusdam corporis?</p>
      </Book>
      <Book img = {bookDetails[1].img} title = {bookDetails[1].title} author = {bookDetails[1].author} />
      <Book img = {bookDetails[2].img} title = {bookDetails[2].title} author = {bookDetails[2].author} />
    </section>);
}

const Book = ({author, title, img, children}) => {
  // const {author, title, img, children} = props;
  return (
  <article className="book">
    <img src={img} alt=""/> 
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{children}</p>
  </article>);
}


ReactDom.render(<BookList/>,document.getElementById('root'));