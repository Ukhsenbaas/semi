
import { DataGrid } from "@mui/x-data-grid";
import { useCollection } from "../../firebase";

const Users = () => {
  
  const { data } = useCollection('users');
  console.log(data);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Users;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: " name",
    width: 150,
    editable: true,
  },
];