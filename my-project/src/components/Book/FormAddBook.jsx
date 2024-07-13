import { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogTemplate from '../Template/DialogTemplate';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import BarAddNewData from '../BarAddNewData/BarAddNewData';

const FormAddBook = ({ open, onClose, onAddBook }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    Title: '',
    number: '',
    author: '',
    year: '',
    names: '',
    pages: '',
    amout: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = { ...formData, id: uuidv4() };
    onAddBook(formJson);
    setSnackbarOpen(true); // Открыть Snackbar после добавления книги
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <DialogTemplate
        open={open}
        onClose={onClose}
        title={t('addBook')}
        onSubmit={handleSubmit}
      >
        <TextField
          margin="dense"
          name="Title"
          label={t("title")}
          type="text"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.Title}
        />
        <TextField
          margin="dense"
          name="author"
          label={t("author")}
          type="text"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.author}
        />
        <TextField
          margin="dense"
          name="year"
          label={t("year")}
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.year}
        />
        <TextField
          margin="dense"
          name="names"
          label={t("name")}
          type="text"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.names}
        />
        <TextField
          margin="dense"
          name="pages"
          label={t("pages")}
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.pages}
        />
        <TextField
          margin="dense"
          name="amout"
          label={t("amout")}
          type="number"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={formData.amout}
        />
      </DialogTemplate>

      <BarAddNewData
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={t('bookAdded')}
      />
    </>
  );
};

FormAddBook.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
};

export default FormAddBook;
