import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/NavBar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
   <BookContextProvider>
     <Navbar />
     <BookList />
     <NewBookForm />
   </BookContextProvider>
  );
}

export default App;
