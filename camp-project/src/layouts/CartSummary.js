import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="My Cart">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Go to Cart
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}