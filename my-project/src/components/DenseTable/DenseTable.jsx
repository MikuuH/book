import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Айди', width: 70 },
  { field: 'name', headerName: 'Название', width: 130 },
  { field: 'nameAuthor', headerName: 'Имя автора', width: 130 },
  { field: 'yearPublishing', headerName: 'Год издательства', width: 130 },
  { field: 'namePublishing', headerName: 'Название издательства', width: 130 },
  { field: 'pages', headerName: 'Страниц', width: 130 },
  { field: 'book', headerName: 'кол-во', width: 130 },
];

// Генерация 10 книг
const generateRows = () => {
  const newRows = [];
  for (let i = 1; i <= 10; i++) {
    newRows.push({
      id: i,
      name: `Название книги ${i}`,
      nameAuthor: `Автор ${i}`,
      yearPublishing: 2000 + i,
      namePublishing: `Издательство ${i}`,
      pages: 300 + i,
      book: `Количество ${i}`,
    });
  }
  return newRows;
};

const rows = generateRows();

export { columns, rows };


export default function DenseTable() {
  return (
    <div className='h-[100%] bg-black'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[3, 5, 10]}
        checkboxSelection
      />
    </div>
  );
}