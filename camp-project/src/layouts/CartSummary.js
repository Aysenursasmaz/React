import React from 'react';
import { Dropdown, DropdownDivider, DropdownItem,Label } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartSummary() {
  const{cartItems} = useSelector(state=> state.cart)
  return (
    <div>
      <Dropdown item text="My Cart">
        <Dropdown.Menu>
          {cartItems.map((cartItem)=>(
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>
                {cartItem.quantity}
              </Label>
            </Dropdown.Item>
          ))}
          
      
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Go to Cart
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}