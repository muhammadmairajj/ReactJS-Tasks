import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";

            // How to Export Records in Excel sheet in ReactJs Using react-csv library
            // npm i react-csv
function Products() {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const result = await axios.get("https://dummyjson.com/products")
        setLoadData(result.data.products);
        // console.log(result.data.products);        
        // fetch('https://dummyjson.com/products')
        // .then(res => res.json())
        // .then(json => setLoadData(json.products))
    }
  return (
    <div className='container'>
      <h3 className='text-center text-success ml-4 mb-4 mt-4'>Export Excel Data</h3>
        <div className="mb-3">
        <CSVLink data={loadData} onClick={() =>{}} style={{marginLeft:"1000px"}}>Export Data</CSVLink>;
                    {/* OR */}
        {/* <CSVDownload data={loadData} target="_blank">Export Data</CSVDownload> */}
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        {/* {
                            loadData.map((product) => (
                                <tbody>
                                    <tr>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    </tr>
                                </tbody>
                            ))
                        } */}
                        <tbody>
                            {loadData.map((product) => {
                                return <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products;
