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
    {/* This data coming from auth0 which i have created on the website auth0 */}
    <Auth0Provider
      domain='dev-8ari74v8.us.auth0.com'
      clientId='s2kMTZJTPIxriKSBVhEgNSeJFd9chrrz'
      redirectUri={window.location.origin}
      audience='https://dev-8ari74v8.us.auth0.com/api/v2/'
      scope='read:current_user update:current_user_metadata'
    >
{/* This is to acess query string throught the app */}
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            {/*This is for All routes  */}
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='books' element={<Books />} />
              <Route path='books/:id' element={<Book />} />
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
