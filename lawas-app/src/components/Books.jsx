import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';
import './Books.css'; // Import the CSS file

const getRandomDueDate = () => {
    const today = new Date();
    const maxDays = 30;
    const dueDate = new Date(
      today.getTime() + Math.random() * maxDays * 24 * 60 * 60 * 1000
    );
    return dueDate.toLocaleDateString();
};

const initialBooks = [
    {
        title: "Math Book",
        author: "John",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
      {
        title: "English Book",
        author: "Jane",
        status: "Available",
        dueDate: "None",
      },
      {
        title: "Science Book",
        author: "Mike",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
      {
        title: "AP Book",
        author: "Lisa",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
      { title: "TLE Book", author: "John", status: "Available", dueDate: "None" },
      {
        title: "CS Book",
        author: "Jane",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
      {
        title: "Engineering Book",
        author: "Mike",
        status: "Available",
        dueDate: "None",
      },
      {
        title: "Filipino Book",
        author: "Lisa",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
      {
        title: "PerDev Book",
        author: "John",
        status: "Available",
        dueDate: "None",
      },
      {
        title: " Chemistry Book",
        author: "Jane",
        status: "Checked Out",
        dueDate: getRandomDueDate(),
      },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const toggleStatus = (index) => {
    const newBooks = [...books];
    if (newBooks[index].status === "Checked Out") {
      newBooks[index].status = "Available";
      newBooks[index].dueDate = "None";
    } else {
      newBooks[index].status = "Checked Out";
      newBooks[index].dueDate = getRandomDueDate();
    }
    setBooks(newBooks);
  };

  const handleFilter = (query) => {
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div className="books-container">
      <div>
        <h1>Books List</h1>
        <SearchFilter books={books} onFilter={handleFilter} />
        <ul className="books-list">
          <li className="header">
            <span>No.</span>
            <span>Title</span>
            <span>Author</span>
            <span>Due Date</span>
            <span>Status</span>
            <span>Action</span>
          </li>
          {filteredBooks.map((book, index) => (
            <li className="item" key={index}>
              <span>{index + 1}</span>
              <span>{book.title}</span>
              <span>{book.author}</span>
              <span>{book.dueDate}</span>
              <span>{book.status}</span>
              <span><button onClick={() => toggleStatus(index)}>Toggle Status</button></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
