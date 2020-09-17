import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/NavBar';
import BookList from './components/BookList';

function App() {
  return (
   <BookContextProvider>
     <Navbar />
     <BookList />
   </BookContextProvider>
  );
}

export default App;
