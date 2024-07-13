import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import FormAddCard from './FormAddCard';
import Button from "@mui/material/Button";
import DenseTable from "../DenseTable/DenseTable";
import BoxSystemProps from "../Body/Body";
import styled from 'styled-components';
import BarErrorDeleteData from '../BarErrorDeleteData/BarErrorDeleteData';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';

const FooterButtonsContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;


const Cards = () => {
  const tableRef = useRef(null);
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedVisitors = JSON.parse(localStorage.getItem('visitor')) || [];
    const storedBooks = JSON.parse(localStorage.getItem('book')) || [];
    console.log(storedBooks);

    setVisitors(storedVisitors);
    setBooks(storedBooks);
  }, []);

  const columns = [
    { field: 'id', headerName: t('id'), width: 70 },
    { field: 'visitorId', headerName: t('nameVisitor'), width: 130,
        valueGetter: (params) => {
          const visitor = visitors.find(v => v.ID === params.row?.visitorId);
          console.log("visitor", visitor);
          return visitor ? visitor.FIO : t('NoneNameVisitor');
    }},
    { field: 'bookId', headerName: t('nameBook'), width: 130,
        valueGetter: (params) => {
          console.log("params", params);
          const book = books.find(b => b.ID === params.row?.bookId);
          return book ? book.Title : t('NoneNameBook');
    }},
    { field: 'issueDate', headerName: t('IssueDate'), width: 130 },
    { field: 'returnDate', headerName: t('returnDate'), width: 130 },
  ];

  const handleOpenForm = useCallback(() => {
    setOpenForm(true);
  }, []);

  const handleCloseForm = useCallback(() => {
    setOpenForm(false);
  }, []);

  const handleAddCard = useCallback((data) => {
    if (tableRef.current) {
      tableRef.current.addRow(data);
    }
    handleCloseForm();
  }, [handleCloseForm]);

  const handleDeleteSelected = useCallback(() => {
    if (tableRef.current) {
      const selectedItems = tableRef.current.deleteSelected();
      if (selectedItems.length === 0) {
        setSnackbarOpen(true);
      }
    }
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <BoxSystemProps>
      <div className="flex items-end justify-end mt-[20px]">
        <div className="flex-grow flex items-start justify-start">
        </div>
      </div>

      <DenseTable
        ref={tableRef}
        columns={columns}
        localStorageKey="cards"
      />

      <FooterButtonsContainer>
      <Button
        size="large"
        onClick={handleDeleteSelected}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
      {t('del-button')}
      </Button>
      <Button
        size="large"
        onClick={handleOpenForm}
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
      >
      {t('add-button')}
      </Button>
      </FooterButtonsContainer>

      <BarErrorDeleteData open={snackbarOpen} onClose={handleSnackbarClose} className="flex justify-center items-center top-100" />

      <FormAddCard open={openForm} onClose={handleCloseForm} onAddCard={handleAddCard}/>
    </BoxSystemProps>
  );
};

export default Cards;
