import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './pages/Book';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MyBookList from './pages/MyBookList';
import Wishlist from './pages/Wishlist';
import AddBook from './pages/AddBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='book' element={<Book />} />
          <Route path='add-book' element={<AddBook />} />
          <Route path='my-booklist' element={<MyBookList />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
