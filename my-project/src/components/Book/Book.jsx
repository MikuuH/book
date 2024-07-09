import BoxSystemProps from "../Body/Body";
import Footer from "../Footer/Footer";
import DenseTable from "../DenseTable/DenseTable";
import Button from "@mui/material/Button";
import FormAddBook from '../FormAddBook/FormAddBook';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Book = () => {

  const userLanguage = navigator.language || navigator.userLanguage;
  console.log('Current language:', userLanguage);

  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <BoxSystemProps>
        <div className="flex items-end justify-end mt-[20px]">
          <div className="flex-grow flex items-start justify-start">
            <Button variant="contained" size="large" onClick={handleOpenForm}>
              {t('add-button')}
            </Button>
          </div>
          <Button variant="contained" size="large">
            {t('del-button')}
          </Button>
        </div>
        <div className="h-[94%] mt-2">
          <DenseTable />
        </div>
      </BoxSystemProps>
      <Footer />
      <FormAddBook open={openForm} onClose={handleCloseForm}/>
    </>
  );
};

export default Book;
