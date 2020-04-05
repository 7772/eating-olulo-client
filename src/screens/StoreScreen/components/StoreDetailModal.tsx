import React, {useState, useEffect} from 'react';
import {
  Button, 
  Form,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap';

import {MealTiketsAPI} from '../../../apis';
import {DateHelper} from '../../../helpers';
import {NavigationService} from '../../../services';


interface StoreDetailModalProps {
  store: any;
}

const StoreDetailModal = ({
  store,
}: StoreDetailModalProps) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(store.name); 
  const [phoneNumber, setPhoneNumber] = useState(store.phoneNumber);

  const [menuList, setMenuList] = useState(store.menus || []);
  const [menuName, setMenuName] = useState('');
  const [menuPrice, setMenuPrice] = useState('');

  useEffect(() => {
    setMenuName('');
    setMenuPrice('');
  }, [menuList.length]);

  const onClickUpdate = () => {
    const updatedStore = {
      id: store.id,
      name: name,
      phoneNumber: phoneNumber,
      menus: menuList,
    };

    // TODO:: 상점 업데이트!
  };

  const onClosedModal = () => {
    setName(store.name);
    setPhoneNumber(store.phoneNumber);
    setMenuList(store.menus || []);
    setMenuName('');
    setMenuPrice('');
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <a href="#" onClick={toggle}>{store.id}</a>
      <Modal isOpen={modal} toggle={toggle} size={'lg'} onClosed={onClosedModal}>
        <ModalHeader toggle={toggle}>맛집 관리</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">상호명</Label>
            <Col>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                onChange={(e: any) => setName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">전화번호</Label>
            <Col>
              <Input 
                type="tel" 
                name="phoneNumber" 
                id="phoneNumber" 
                value={phoneNumber} 
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="menu">메뉴</Label>
            <MenuList data={menuList}/>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">메뉴 이름</Label>
                  <Input 
                    type="text" 
                    name="menuMame" 
                    id="menuName" 
                    placeholder="추가할 메뉴 이름"
                    value={menuName}
                    onChange={(e: any) => setMenuName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="numberPrice">가격</Label>
                  <Input 
                    type="number" 
                    name="menuPrice" 
                    id="examplePassword" 
                    placeholder="추가할 메뉴 가격" 
                    value={menuPrice}
                    onChange={(e: any) => setMenuPrice(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <Button 
                  style={{marginTop: 30}} 
                  color="primary"
                  onClick={() => setMenuList(
                    (menuList: any) => [...menuList, {name: menuName, price: menuPrice}]
                  )}
                >추가</Button>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClickUpdate}>수정</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const MenuList = ({data = []}: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <FormGroup>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{'메뉴 리스트'}</DropdownToggle>
        <DropdownMenu>
          {data.map((menu: any, index: number) => (
            <DropdownItem key={index}>
              {menu.name}, {menu.price}원
            </DropdownItem>
          ))}
       </DropdownMenu>
      </Dropdown>
    </FormGroup>
  );
};


export default StoreDetailModal;
