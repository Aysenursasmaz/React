import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetchProduct();
    },[id])

    const fetchProduct = async() => {
        try{
        let response = await axios.get("https://dummyjson.com/products/" + `${id}`);
        setProduct(response.data);
        console.log("ürün detayları:"+response.data.product);
    }catch(error){
        console.error("gösterilemiyor:"+error);
    }}
  return (
    <div className="container mt-10">
      <div className="row">
        <h3>Ürün Detayları</h3>
        <img src={product.thumbnail} className="rounded" alt="..." />
        <div className="card" styleName={"width:18 rem"}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ürün id: {id}</li>
            <li className="list-group-item">Ürün Adı: {product.title}</li>
            <li className="list-group-item">
              Ürün açıklaması: {product.description}
            </li>
            <li className="list-group-item">
              Ürün indirim yüzdesi: {product.discountPercentage}
            </li>
            <li className="list-group-item">
              Ürün fiyatı: {product.price}
            </li>
            <li className="list-group-item">
              Ürün satış oranı {product.rating}
            </li>
            <li className="list-group-item">
              Ürün stok sayısı: {product.stock}
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
}

  