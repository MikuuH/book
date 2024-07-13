import { useState, useCallback, useRef } from 'react';
import { useTranslation } from "react-i18next";
import FormAddBook from './FormAddBook';
import Button from "@mui/material/Button";
import DenseTable from "../DenseTable/DenseTable";
import BoxSystemProps from "../Body/Body";
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
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

const Book = () => {
  const tableRef = useRef(null);
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);

  const columns = [
    { field: 'id', headerName: t('id'), width: 70 },
    { field: 'Title', headerName: t('title'), width: 130 },
    { field: 'author', headerName: t('author'), width: 130 },
    { field: 'year', headerName: t('year'), width: 100 },
    { field: 'names', headerName: t('names'), width: 130 },
    { field: 'pages', headerName: t('pages'), width: 100 },
    { field: 'amout', headerName: t('amout'), width: 130 },
  ];

  const handleOpenForm = useCallback(() => {
    setOpenForm(true);
  }, []);

  const handleCloseForm = useCallback(() => {
    setOpenForm(false);
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (tableRef.current) {
      tableRef.current.deleteSelected();
    }
  }, []);

  const handleAddBook = useCallback((data) => {
    if (tableRef.current) {
      tableRef.current.addRow(data);
    }
    handleCloseForm();
  }, [handleCloseForm]);

  return (
    <BoxSystemProps>
      <div className="flex items-end justify-end mt-[20px]">
        <div className="flex-grow flex items-start justify-start">
        </div>
      </div>

      <DenseTable
        ref={tableRef}
        columns={columns}
        localStorageKey="book"
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

      <FormAddBook open={openForm} onClose={handleCloseForm} onAddBook={handleAddBook} />
    </BoxSystemProps>
  );
};

export default Book;
