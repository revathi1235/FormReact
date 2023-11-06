
// import  React,{useState,useEffect} from 'react';
// import axios from 'axios';
// function TableAPI() {
//     const [data,setData]=useState([]);
//     const [records,setRecords]=useState([]);
//     // useEffect(()=>{
//     //     axios.get('https://jsonplaceholder.typicode.com/users')
//     //     .then((res)=>{setData(res.data)
//     //     setRecords(res.data);})
//     //     .catch(err=>console.log(err));
//     // },[]);

//     useEffect(()=>{
//         const fetchData=async ()=>{
//             try{
//                 const response=await axios.get('https://jsonplaceholder.typicode.com/users')
//                 setData(response.data);
//                 setRecords(response.records);
//                 // console.log(fetchData);
//             } catch(error){
//                 console.log(error)}
//             };
//             fetchData();
//         },[]);
        
//      const filterData=(e)=>{
//         setRecords(data.filter(f=>f.name.toLowerCase().includes(e.target.value)||f.email.includes(e.target.value)||f.phone.includes(e.target.value)))
//      }
    
//   return (
//     <div  className='bg-white shadow border'>
//         <input  className="red" type="text" placeholder='search..' onChange={filterData} />
//         <table >
//             <tr>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>EMAIL</th>
//                 <th>PHONE</th>

//             </tr>
//             {records.map((d,i)=>{
//                 <tr key={i}>
//                     <td>{d.id}</td>
//                     <td>{d.name}</td>
//                     <td>{d.email}</td>
//                     <td>{d.phone}</td>
// </tr>
//             })}
//         </table>
//     </div>
//   )

//   }
// export default TableAPI




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableAPI() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setRecords(response.data); // Fix this line, setRecords(response.data) instead of setRecords(response.records)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filterData = (e) => {
    setRecords(
      data.filter(
        (f) =>
          f.name.toLowerCase().includes(e.target.value) ||
          f.email.includes(e.target.value) ||
          f.phone.includes(e.target.value)
      )
    );
  };

  return (
    <div className='bg-primary shadow border ' style={{color:"white",padding:"20px"}}>
      <input  style={{width:"1010px"}} className="red" type="text" placeholder='search..' onChange={filterData} />
      <table style={{padding:"50px"}}>
        <thead>
          <tr >
            <th style={{marginLeft:"100px"}}>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => ( // Added return statement here
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableAPI;
