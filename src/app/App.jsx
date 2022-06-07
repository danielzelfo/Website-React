import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext({});

const App = () => {
  const [title, setTitle] = useState("Daniel Zelfo");
  
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <AppContext.Provider value={{ setTitle }}>
      <div id="app">
        <NavBar title={title}/>
        <Content/>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;

export const useApp = () => {
  return useContext(AppContext);
}