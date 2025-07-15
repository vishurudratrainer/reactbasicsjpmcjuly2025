import { DataGrid } from '@mui/x-data-grid';
export default function CommonGrid({rows,columns,rowClick=null}) {
  if(rowClick===null)
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
  else{
    return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} onRowClick={rowClick} />
    </div>
  );
  }
}