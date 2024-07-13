import { useState, useCallback, useRef } from 'react';
import FormAddVisitor from './FormAddVisitor';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import DenseTable from "../DenseTable/DenseTable";
import BoxSystemProps from "../Body/Body";
import styled from 'styled-components';
import BarErrorDeleteData from '../BarErrorDeleteData/BarErrorDeleteData';
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

const Visitor = () => {
  const tableRef = useRef(null);
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const columns = [
    { field: 'id', headerName: t('id'), width: 70 },
    { field: 'FIO', headerName: t('FIO'), width: 130 },
    { field: 'number', headerName: t('number'), width: 130 },
  ];

  const handleOpenForm = useCallback(() => {
    setOpenForm(true);
  }, []);

  const handleCloseForm = useCallback(() => {
    setOpenForm(false);
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (tableRef.current) {
      const selectedItems = tableRef.current.deleteSelected();
      if (selectedItems.length === 0) {
        setSnackbarOpen(true);
      }
    }
  }, []);

  const handleAddVisitor = useCallback((data) => {
    if (tableRef.current) {
      tableRef.current.addRow(data);
    }
    handleCloseForm();
  }, [handleCloseForm]);

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
        localStorageKey="visitor"
      />

      <FooterButtonsContainer>
        <Button variant="contained" size="large" onClick={handleDeleteSelected}>
          {t('del-button')}
        </Button>
        <Button variant="contained" size="large" onClick={handleOpenForm}>
          {t('add-button')}
        </Button>
      </FooterButtonsContainer>

      <BarErrorDeleteData open={snackbarOpen} onClose={handleSnackbarClose} className="flex justify-center items-center top-100" />

      <FormAddVisitor open={openForm} onClose={handleCloseForm} onAddVisitor={handleAddVisitor} />
    </BoxSystemProps>
  );
};

export default Visitor;

