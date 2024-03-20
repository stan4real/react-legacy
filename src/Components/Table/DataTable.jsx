import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'name', headerName: 'Name', width: 200, getApplyQuickFilterFn: undefined },
  { field: 'status', headerName: 'Status', width: 90, getApplyQuickFilterFn: undefined  },
  { field: 'model', headerName: 'Model', width: 90, getApplyQuickFilterFn: undefined },
  { field: 'phone', headerName: 'Tel.', type:'bigint', getApplyQuickFilterFn: undefined, width: 180},
  { field: 'category', headerName: 'Category', type:'string', width: 180},
  { field: 'lastUpdate', headerName: 'Last Update', type:'timestamp', getApplyQuickFilterFn: undefined, width: 240},
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