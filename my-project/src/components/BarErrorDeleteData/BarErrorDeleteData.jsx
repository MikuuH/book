import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from "react-i18next";


import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({ open, onClose }) {
    const { t } = useTranslation();

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      onClose();
    };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <p>{t('nothingToDelete')}</p>
        </Alert>
      </Snackbar>
    </div>
  );
}


