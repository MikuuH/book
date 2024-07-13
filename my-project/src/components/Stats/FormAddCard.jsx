import { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogTemplate from '../Template/DialogTemplate';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import BarAddNewData from '../BarAddNewData/BarAddNewData';
const FormAddVisitor = ({ open, onClose, onAddVisitor }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    FIO: '',
    number: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = { ...formData, id: uuidv4() };
    onAddVisitor(formJson);
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
        title="Add Visitor"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="dense"
          name="FIO"
          label={t("FIO")}
          type="text"
          fullWidth
          variant="outlined"
          value={formData.FIO}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="number"
          label={t("number")}
          type="number"
          fullWidth
          value={formData.number}
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

FormAddVisitor.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddVisitor: PropTypes.func.isRequired,
};

export default FormAddVisitor;
