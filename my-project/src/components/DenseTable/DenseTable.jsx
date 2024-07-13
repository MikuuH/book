import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const DenseTable = forwardRef(({ columns, localStorageKey }, ref) => {
  const [rows, setRows] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  // загрузка данных из localStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    if (items) {
      setRows(items);
    }
  }, [localStorageKey]);

  const handleRowSelectionModelChange = useCallback((newSelectedRowIds) => {
    setSelectedRowIds(newSelectedRowIds);
  }, []);

  useImperativeHandle(ref, () => ({
    deleteSelected: () => {
      setRows(prevRows => prevRows.filter(row => !selectedRowIds.includes(row.id)));
      setSelectedRowIds([]);
      const updatedItems = rows.filter(row => !selectedRowIds.includes(row.id));
      localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));
      return selectedRowIds;
    },
    // добавляем новые данные
    addRow: (newRow) => {
      setRows(prevRows => {
        const updatedRows = [...prevRows, newRow];
        localStorage.setItem(localStorageKey, JSON.stringify(updatedRows));
        return updatedRows;
      });
    }
  }));

  const handleCellClick = useCallback((params) => {
    // ищем параметр returnDate
    if (params.field === 'returnDate') {
      const currentDate = new Date().toLocaleDateString();
      const updatedRows = rows.map(row => {
        if (row.id === params.row.id) {
          let returnMessage = `${currentDate} - Книга была возвращена`;
          return { ...row, returnDate: returnMessage };
        }
        return row;
      });

      setRows(updatedRows);
      // обновляем дату возврата
      localStorage.setItem(localStorageKey, JSON.stringify(updatedRows));
    }
  }, [rows, localStorageKey]);

  return (
    <div className='h-[96.8%]'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 20, 50, 100]}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelectionModelChange}
        onCellClick={handleCellClick} // Добавляем обработчик клика по ячейкам
      />
    </div>
  );
});

DenseTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  localStorageKey: PropTypes.string.isRequired,
};

DenseTable.displayName = "DenseTable";
export default DenseTable;
