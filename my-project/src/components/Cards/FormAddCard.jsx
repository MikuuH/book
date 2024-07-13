import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import DialogTemplate from '../Template/DialogTemplate';
import PropTypes from 'prop-types';
import BarAddNewData from '../BarAddNewData/BarAddNewData';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FormAddCard = ({ open, onClose, onAddCard }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    visitorId: '',
    bookId: '',
    issueDate: new Date().toISOString().slice(0, 10),
    returnDate: ''
  });
  const [visitors, setVisitors] = useState([]);
  const [books, setBooks] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const visitorsFromStorage = JSON.parse(localStorage.getItem('visitor')) || [];
    setVisitors(visitorsFromStorage);

    const booksFromStorage = JSON.parse(localStorage.getItem('book')) || [];
    setBooks(booksFromStorage);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = { ...formData, id: uuidv4() };
    onAddCard(formJson);
    setSnackbarOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <DialogTemplate
        open={open}
        onClose={onClose}
        title="Add Card"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth margin="dense">
          <InputLabel id="visitor-label">{t("Visitor")}</InputLabel>
          <Select
            labelId="visitor-label"
            id="visitor-select"
            value={formData.FIO}
            label={t("Visitor")}
            onChange={handleChange}
            name="visitorId"
          >
            {visitors.map(visitor => (
              <MenuItem key={visitor.id} value={visitor.id}>{visitor.FIO}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="book-label">{t("Book")}</InputLabel>
          <Select
            labelId="book-label"
            id="book-select"
            value={formData.bookId}
            label={t("Book")}
            onChange={handleChange}
            name="bookId"
          >
            {books.map(book => (
              <MenuItem key={book.id} value={book.id}>{book.names}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          name="issueDate"
          label={t("IssueDate")}
          type="date"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.issueDate}
          onChange={handleChange}
        />

      <TextField
          margin="dense"
          name="returnDate"
          label={t("returnDate")}
          type="text"
          fullWidth
          variant="outlined"
          value={formData.returnDate}
          onChange={handleChange}
        />
      </DialogTemplate>

      <BarAddNewData
        open={snackbarOpen}
        onClose={handleSnackbarClose}
      />
    </div>
  );
};

FormAddCard.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddCard: PropTypes.func.isRequired,
};

export default FormAddCard;
