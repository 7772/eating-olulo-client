import React, {useState} from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import RegisterStoreModal from '../RegisterStoreModal';


const NavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Eating olulo</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/meal-tikets/register">
              <Button color='none'>식사 티켓 만들기</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <RegisterStoreModal buttonLabel={'맛집 등록하기'}/>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};


export default NavBar;
