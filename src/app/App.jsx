import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext({});

const App = () => {
  const defaultTitle = "Daniel Zelfo";
  const [title, setTitle] = useState(defaultTitle);
  
  useEffect(() => {
    document.title = title + (title === defaultTitle ? "" : ` | ${defaultTitle}`);
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