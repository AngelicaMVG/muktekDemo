import React from 'react';
import glamorous from 'glamorous';

const Nav = glamorous.nav({
  backgroundColor: '#3A2192',
  height: 80,
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white'
});

export default () => {
  return (
    <Nav>
      <img src=" " alt="#" width={40} />
      <div
        style={{
          width: '20%',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        {/* <MyLink to="/students" style={{ color: 'white' }}>
          Alumnos
        </MyLink>
        <MyLink to="/" style={{ color: 'white' }}>
          Log out
        </MyLink> */}
      </div>
    </Nav>
  );
};
