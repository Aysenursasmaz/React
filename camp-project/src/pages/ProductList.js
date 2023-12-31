import React, { useState,useEffect} from 'react';
import { Icon, Menu, Table,Button } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../store/actions/cartActions';

import { toast } from 'react-toastify';


export default function () {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();

    productService.getProducts().then(response => {
  
      setProducts(response.data);
    });
  }, []);
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
    toast.success(`${product.productName} added to cart!`)
  }


    
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Unit Price</Table.HeaderCell>
              <Table.HeaderCell>Units in Stock</Table.HeaderCell>
              <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {products.map(product => (
              <Table.Row key={product.id}>
                <Table.Cell>
                  <Link to={`/products/${product.productName}`}>
                    {product.productName}
                  </Link>
                </Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
                <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Add to cart</Button></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
  
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
