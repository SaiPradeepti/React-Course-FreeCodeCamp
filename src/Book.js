import React from 'react'

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

export default Book
