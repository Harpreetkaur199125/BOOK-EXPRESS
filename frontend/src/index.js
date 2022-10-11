import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './pages/Book';

import Home from './pages/Home';
import MyBookList from './pages/MyBookList';
import Wishlist from './pages/Wishlist';
import AddBook from './pages/AddBook';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './pages/Profile';
import Books from './pages/Books';
import { SearchContextProvider } from './context.js/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*This is provide by the Auth0 profile which I create in auth0 website */}
    <Auth0Provider
      domain='dev-8ari74v8.us.auth0.com'
      clientId='s2kMTZJTPIxriKSBVhEgNSeJFd9chrrz'
      redirectUri={window.location.origin}
      audience='https://dev-8ari74v8.us.auth0.com/api/v2/'
      scope='read:current_user update:current_user_metadata'
    >
      {/* This is search context provider to provide search query or will display when user will search for any book*/}
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='book' element={<Book />} />
              <Route path='books' element={<Books />} />
              <Route path='profile' element={<Profile />} />
              <Route path='add-book' element={<AddBook />} />
              <Route path='my-booklist' element={<MyBookList />} />
              <Route path='wishlist' element={<Wishlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
