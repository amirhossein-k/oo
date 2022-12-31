import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// ...............
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'carName', headerName: 'نام محصول', width: 210, renderCell: (params) =>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.carName}
            </div>
            ) 
    },
    
 },
  { field: 'factoryName', headerName: 'شرکت', width: 100 },
  {
    field: 'distance',
    headerName: 'کارکرد',
    type: 'number',
    width: 80,
  },
  {
    field: 'full',
    headerName: 'محصول',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) =>{
        return(
            <>
                <span>{params.row.carName}</span>
                <p>{params.row.factoryName}</p>
            </>
        )
        
    }
      
  },
  {
    field: 'status',
    headerName: 'وضعیت',
    type: 'number',
    width: 80,
    renderCell: (params)=>{
      return(
        <span className={` status ${params.row.statusEn}`}>{params.row.status}</span>
      )
    }
  }
];

  const rows = [
  { id: 1, carName: 'پراید', factoryName: 'ایرانخودرو', distance: 35 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668963162/thumb_1_zkrqty.jpg',status:"فروخته",statusEn:'Approved' },
  { id: 2, carName: '207i', factoryName: 'ایرانخودرو', distance: 42 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg' ,status:"موجود" ,statusEn:'Pending'  },
  { id: 3, carName: 'سمند', factoryName: 'ایرانخودرو', distance: 45 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg' ,status:"فروخته" ,statusEn:'Approved' },
  { id: 4, carName: 'پراید', factoryName: 'سایپا', distance: 16 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg',status:"موجود" ,statusEn:'Pending' },
  { id: 5, carName: '207i', factoryName: 'ایرانخودرو', distance: 0 , 
  img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg' ,status:"فروخته",statusEn:'Approved'  },
  { id: 6, carName: 'پراید', factoryName: 'سایپا', distance: 150 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg',status:"فروخته" ,statusEn:'Approved' },
  { id: 7, carName: 'سمند', factoryName: 'ایرانخودرو', distance: 44 ,
   img:"https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg" ,status:"موجود",statusEn:'Pending'  },
  { id: 8, carName: 'پراید', factoryName: 'سایپا', distance: 36 ,
   img:"https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg" ,status:"فروخته" ,statusEn:'Approved' },
  { id: 9, carName: 'پرشیا', factoryName: 'ایرانخودرو', distance: 65 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg' ,status:"فروخته",statusEn:'Approved'  }
];

// ......................................................
const actionColumn = [{field:'action',headerName:"Action",width:160,renderCell:()=>{
  return(
    <div className="cellAction">
      <div className="viewButton">View</div>
      <div className="deleteButton">Delete</div>
    </div>
  )
}}]
//.......................................................

const Datatable = () => {
  return (
   <div className="datatable">
        <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
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
