import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
// ...............
// const columns = [
//   { field: "_id", headerName: "ID", width: 70 },
//   {
//     field: "namecar",
//     headerName: "نام محصول",
//     width: 210,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.pic} alt="avatar" />
//           {params.row.namecar}
//         </div>
//       );
//     },
//   },
//   { field: "factory", headerName: "شرکت", width: 100 },
//   {
//     field: "distance",
//     headerName: "کارکرد",
//     type: "number",
//     width: 80,
//   },
//   {
//     field: "full",
//     headerName: "محصول",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <>
//           <span>{params.row.namecar}</span>
//           <p>{params.row.factory}</p>
//         </>
//       );
//     },
//   },
//   {
//     field: "status",
//     headerName: "وضعیت",
//     // type: "number",
//     width: 80,
//     renderCell: (params) => {
//       return (
//         <span className={` status ${params.row.status}`}>
//           {/* {params.row.status} */}
//           {`${params.row.status === "approved" ? "موجود" : "ناموجود"}`}
//         </span>
//       );
//     },
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     carName: "پراید",
//     factoryName: "ایرانخودرو",
//     distance: 35,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668963162/thumb_1_zkrqty.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
//   {
//     id: 2,
//     carName: "207i",
//     factoryName: "ایرانخودرو",
//     distance: 42,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg",
//     status: "موجود",
//     statusEn: "Pending",
//   },
//   {
//     id: 3,
//     carName: "سمند",
//     factoryName: "ایرانخودرو",
//     distance: 45,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
//   {
//     id: 4,
//     carName: "پراید",
//     factoryName: "سایپا",
//     distance: 16,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg",
//     status: "موجود",
//     statusEn: "Pending",
//   },
//   {
//     id: 5,
//     carName: "207i",
//     factoryName: "ایرانخودرو",
//     distance: 0,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
//   {
//     id: 6,
//     carName: "پراید",
//     factoryName: "سایپا",
//     distance: 150,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
//   {
//     id: 7,
//     carName: "سمند",
//     factoryName: "ایرانخودرو",
//     distance: 44,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg",
//     status: "موجود",
//     statusEn: "Pending",
//   },
//   {
//     id: 8,
//     carName: "پراید",
//     factoryName: "سایپا",
//     distance: 36,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
//   {
//     id: 9,
//     carName: "پرشیا",
//     factoryName: "ایرانخودرو",
//     distance: 65,
//     img: "https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg",
//     status: "فروخته",
//     statusEn: "Approved",
//   },
// ];
// ....................................
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

// ......................................................
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
  const [datatable, setDataTable] = useState([]);
  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { product } = productList;
  // setDataTable(product);

  // useEffect(() => {
  //   // dispatch(listProductAction());
  // }, [dispatch, datatable]);
  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        {/* <DataGrid
          rows={datatable}
          columns={columns.concat(actionColumn)}
          pdistanceSize={9}
          rowsPerPdistanceOptions={[9]}
          checkboxSelection
        /> */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
