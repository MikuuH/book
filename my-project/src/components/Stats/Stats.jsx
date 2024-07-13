import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BoxSystemProps from "../Body/Body";
import Typography from '@mui/material/Typography';

// Получаем данные из localStorage и парсим их
const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('cards');
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Parsing error: ", e);
      return [];
    }
  }
  return [];
};

const getTop5Books = (data) => {
  const bookCount = {};
  data.forEach(entry => {
    if (bookCount[entry.bookId]) {
      bookCount[entry.bookId]++;
    } else {
      bookCount[entry.bookId] = 1;
    }
  });

  const sortedBooks = Object.entries(bookCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return sortedBooks.map(book => ({ bookId: book[0], count: book[1] }));
};

const getTop5Visitors = (data) => {
  const visitorCount = {};
  data.forEach(entry => {
    if (visitorCount[entry.visitorId]) {
      visitorCount[entry.visitorId]++;
    } else {
      visitorCount[entry.visitorId] = 1;
    }
  });

  const sortedVisitors = Object.entries(visitorCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return sortedVisitors.map(visitor => ({ visitorId: visitor[0], count: visitor[1] }));
};

const Stats = () => {
  const [topBooks, setTopBooks] = useState([]);
  const [topVisitors, setTopVisitors] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    setTopBooks(getTop5Books(data));
    setTopVisitors(getTop5Visitors(data));
  }, []);

  return (
    <>
      <Header />
      <BoxSystemProps>
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="flex justify-center items-center text-sky-400 mb-4">
            <Typography variant="h4" display="block" gutterBottom>
              Книги
            </Typography>
          </div>
          <div className="flex-grow w-full min-h-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topBooks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookId" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center items-center text-sky-400 mt-4 mb-4">
            <Typography variant="h4" display="block" gutterBottom>
              Посетители
            </Typography>
          </div>
          <div className="flex-grow w-full min-h-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topVisitors}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="visitorId" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </BoxSystemProps>
      <Footer />
    </>
  );
};

export default Stats;
