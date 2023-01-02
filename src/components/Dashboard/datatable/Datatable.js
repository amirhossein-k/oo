import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
import axios from "axios";
import GridTable from "@nadavshaar/react-grid-table";
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
  {
    id: 1,
    field: "carname",
    label: "خودرو",
    // cellRenderer: Username,
  },
  {
    id: 2,
    field: "factory",
    label: "کارخانه",
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
        <GridTable columns={columns} rows={product} />;
      </div>
    </div>
  );
};

export default Datatable;
