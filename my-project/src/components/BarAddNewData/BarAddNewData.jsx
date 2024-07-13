import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from "react-i18next";
import Alert from '@mui/material/Alert';

export default function BarAddNewData({ open, onClose, message }) {
  const { t } = useTranslation();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
        {t('newDataAdded')}
      </Alert>
    </Snackbar>
  );
}
