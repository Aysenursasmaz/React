import React from 'react';
import { Dropdown, Menu} from 'semantic-ui-react';

export default function SignedIn({signOut}) {
  return (
    <div>
    <Menu.Item>
    
      <Dropdown pointing="top left" text="aysenur">
        <Dropdown.Menu>
          <Dropdown.Item text="My Information" icon="info" />
          <Dropdown.Item onClick={signOut} text="Log Out" icon="sign out" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  </div>
);
}
