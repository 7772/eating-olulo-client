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
import RegisterMealTiketModal from '../RegisterMealTiketModal';
import {StoresAPI} from '../../apis';


const NavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stores, setStores] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const onClickRegisterMealTiketModal = async (e: any) => {
    e.stopPropagation(); 

    const {response, json}: any = await StoresAPI.getList();

    if (response.ok) {
      setStores(json.stores);
    }
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Eating olulo</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={onClickRegisterMealTiketModal}>
              <RegisterMealTiketModal buttonLabel={'식사 티켓 만들기'} stores={stores}/>
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
