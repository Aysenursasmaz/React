import React from 'react'

export default function SignedIn({signOut}) {
  return (
    <div>
    <Menu.Item>
      <Image
        avatar
        spaced="right"
        src="https://images.app.goo.gl/cv579ihf1tUjte217"
      />
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
