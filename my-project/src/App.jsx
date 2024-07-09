import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from "./components/DarkTheme/DarkTheme";
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
//i18n.changeLanguage('ru')
const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Book />}>
                <Route path="book" element={<Book />} /> {/* Обновляем путь к Book */}
              </Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
