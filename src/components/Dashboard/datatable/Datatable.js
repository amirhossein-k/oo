import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
import axios from "axios";

// ......................................................
const gridStyle = { minHeight: 400 };
// ............................
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];
//.......................................................
const columns = [
  { field: "id", headerName: "Id", width: 50 },
  {
    field: "carname",
    headerName: "نام محصول",
    width: 210,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.pic} alt="avatar" />
          {params.row.carname}
        </div>
      );
    },
  },
];
const Datatable = () => {
  const [datatable, setDataTable] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { product } = productList;

  useEffect(() => {
    dispatch(listProductAction());
  }, [dispatch]);
  // ...................

  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={product}
          columns={columns.concat(actionColumn)}
          pdistanceSize={9}
          rowsPerPdistanceOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
