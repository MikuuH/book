import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const Callback = ({ data }) => {
  const [rows, setFormData] = useState([]);

  console.log(data);

  useEffect(() => {
    if (data) {
      const currentData = JSON.parse(localStorage.getItem('visitor')) || [];
      const isDuplicate = currentData.some(item => item.ID === String(data.ID)); // Приводим data.ID к строке для сравнения

      if (!isDuplicate) {
        const updatedData = [...currentData, data];
        localStorage.setItem('visitor', JSON.stringify(updatedData));
        setFormData(updatedData);
      }
    }
  }, [data, rows]);

  return null;
};

Callback.propTypes = {
  ID: PropTypes.string,
  data: PropTypes.func.isRequired,
}

export default Callback;
