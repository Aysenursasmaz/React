import axios from 'axios'
import React,{useState} from 'react'

export default function AddProduct() {

    const [data, setData] = useState({
        title:"",
        brand:"",
        category:"",
        price:"",

    })
    

    const onChangeData = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const addProduct = async(data) =>{
        try{  const newProduct = {
            id: data.length + 1,
            title: data.title,
            brand: data.brand,
            category: data.category,
            price: data.price,
          };
        let response = await axios.post("https://dummyjson.com/products/add",
       newProduct ,
        {headers:{
            "Content-Type": "application/json",
          },}
        );
       
        console.log("eklendi",response.data)
    }catch(error){
        console.log("error",error);
    }
}


  return (
    
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="mb-4">Add Product</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="productBrand" className="form-label">
               Brand
            </label>
            <input
              name="brand"
              value={data.brand}
              onChange={onChangeData}
              type="text"
              className="form-control"
              id="Brand"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
               Title
            </label>
            <input
              name="title"
              value={data.title}
              onChange={onChangeData}
              type="text"
              className="form-control"
              id="Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
               Description
            </label>
            <input
              name="category"
              value={data.category}
              onChange={onChangeData}
              type="text"
              className="form-control"
              id="Description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
               Price
            </label>
            <input
              name="price"
              value={data.price}
              onChange={onChangeData}
              type="text"
              className="form-control"
              id="Price"
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => addProduct(data)}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
