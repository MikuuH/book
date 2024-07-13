import './i18n';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from "./components/DarkTheme/DarkTheme";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home'
import Book from "./components/Book/Book";
import Visitor from "./components/Visitor/Visitor";
import Stats from "./components/Stats/Stats"
import Cards from './components/Cards/Cards';

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/book" element={<Book />} />
              <Route path="/visitor" element={<Visitor />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/cards" element={<Cards />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

