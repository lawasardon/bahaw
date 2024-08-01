// src/components/Book.js
import React from 'react';

const Book = ({ number, title, author, dueDate, status, onToggle }) => {
  return (
    <li>
      {number} | {title} | {author} | {dueDate} | {status}
      <button onClick={onToggle}>Toggle Status</button>
    </li>
  );
};

export default Book;







