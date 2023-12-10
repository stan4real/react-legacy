import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const getApplyFilterId = (value) => {
  if (!value ) {
      return null;
  }
  return (params) => {
    if (params.value === Number(value) ) {
      return true
    }
  };
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70, getApplyQuickFilterFn:getApplyFilterId },
  { field: 'name', headerName: 'Name', width: 200, getApplyQuickFilterFn: undefined },
  { field: 'status', headerName: 'Статус', width: 90, getApplyQuickFilterFn: undefined  },
  { field: 'uniqueId', headerName: 'UID', width: 70, getApplyQuickFilterFn: undefined },
  { field: 'phone', headerName: 'Телефон', type:'bigint', getApplyQuickFilterFn: undefined, width: 180},
  { field: 'category', headerName: 'Категория', type:'string', getApplyQuickFilterFn: undefined, width: 180},
  { field: 'lastUpdate', headerName: 'Последнее обновление', type:'timestamp', getApplyQuickFilterFn: undefined, width: 240},
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable({users}) {

  // const colums = React.useMemo(
  //   ()=>{
  //     let setColumns = Object.keys(users[0])
  //     setColumns.map(columns, index => {
  //       if (columns.field === 'id'){
  //         return {
  //           ...columns, 
  //           getApplyQuickFilterFn:getApplyFilterId,
  //         };
  //       }
  //     })
  //   }
  // )

  console.log(users)
  //console.log(Object.keys(users[0]))
  return (
    <div style={{ height: 640, width: '100%' }}>
      
      <DataGrid
      
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}