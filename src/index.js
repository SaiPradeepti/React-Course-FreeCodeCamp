import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// setup vars
const bookDetails = [
  { id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg'
  },
  { id: 2,
    author: 'Barack Obama',
    title: 'A Promised Land',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91Cz5v-GSjL._AC_UL200_SR200,200_.jpg'
  },
  { id: 3,
    author: 'Paulo Coelho',
    title: 'The Alchemist',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg'
  }
];

function BookList(){  
  return (
    <section className="booklist">
      {bookDetails.map( (book) => {
        return <Book key={book.id} {...book}></Book>;
      })
      }
    </section>
  );
}

const Book = ({author, title, img}) => {
  // attribute, eventHandler
  // onClick, onMouse
  const addItem = (e) => {
    console.log(e.target);
    alert('Item added to cart!');
  }
  const removeItem = (title, author) => {
    alert(`Item '${title} (by ${author})' removed from cart!`);
  }
  return (
  <article className="book" onMouseOver = {() => console.log(author)}>
    <img src={img} alt=""/> 
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick = {addItem}>Add to cart</button>
    <button type="button" onClick = {() => removeItem(title, author)}>Delete from cart</button>
  </article>);
}


ReactDom.render(<BookList/>,document.getElementById('root'));