import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// const getApplyFilterId = (value) => {
//   if (!value ) {
//       return null;
//   }
//   return (params) => {
//     if (params.value === Number(value) ) {
//       return true
//     }
//   };
// };

const columns = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'name', headerName: 'Name', width: 200, getApplyQuickFilterFn: undefined },
  { field: 'status', headerName: 'Статус', width: 90, getApplyQuickFilterFn: undefined  },
  { field: 'uniqueId', headerName: 'UID', width: 70, getApplyQuickFilterFn: undefined },
  { field: 'phone', headerName: 'Телефон', type:'bigint', getApplyQuickFilterFn: undefined, width: 180},
  { field: 'category', headerName: 'Категория', type:'string', getApplyQuickFilterFn: undefined, width: 180},
  { field: 'lastUpdate', headerName: 'Последнее обновление', type:'timestamp', getApplyQuickFilterFn: undefined, width: 240},
];


export default function DataTable({users}) {

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
        pageSizeOptions={[1,5,10]}
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