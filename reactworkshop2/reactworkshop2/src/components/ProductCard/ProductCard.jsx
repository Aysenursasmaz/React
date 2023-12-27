import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";



export default function ProductCard(props) {

	const deleteProduct = async (id) => {
		try {
		  let response = await axios.delete(`https://dummyjson.com/products/${id}`);
		  console.log("Başarıyla silindi", response.data);
		} catch (error) {
		  console.error("Silme işlemi başarısız", error);
		}
	  };
	  
	
	  
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button onClick={()=>deleteProduct(props.product.id)}className="btn btn-danger">Delete</button>
			</div>
		</div>
	);
}
