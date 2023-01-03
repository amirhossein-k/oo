import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
import axios from "axios";
import GridTable from "@nadavshaar/react-grid-table";
import getColumns from "./getColumns";
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

const Datatable = () => {
  const columns = [
    {
      id: 1,
      field: "namecar",
      label: "خودرو",
      // cellRenderer: Username,
    },
    {
      id: 2,
      field: "factory",
      label: "کارخانه",
    },
    {
      id: 3,
      field: "distance",
      label: "کارکرد",
    },
    {
      id: 4,
      field: "pic",
      label: "عکس",
    },
    {
      id: 5,
      field: "price",
      label: "قیمت",
    },
    {
      id: 6,
      field: "status",
      label: "وضعیت",
    },
    {
      id: 7,
      field: "skills",
      label: "ویژگی",
    },
  ];
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;

  useEffect(() => {
    dispatch(listProductAction());
  }, [dispatch]);

  const onRowsRequest = async (requestData, tableManager) => {
    // simulate an actual api call
    const response = await new Promise((r) =>
      setTimeout(() => {
        let allRows = product;
        allRows = tableManager.searchApi.searchRows(allRows);
        allRows = tableManager.sortApi.sortRows(allRows);

        return r({
          items: allRows.slice(requestData.from, requestData.to),
          totalItems: allRows.length,
        });
      }, 1000)
    );

    return {
      rows: response.items,
      totalRows: response.totalItems,
    };
  };
  // ...................

  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        <GridTable
          columns={columns}
          onRowsRequest={onRowsRequest}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default Datatable;
