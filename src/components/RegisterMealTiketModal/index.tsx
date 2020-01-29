import React, {useState} from 'react';
import {
  Button, 
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
} from 'reactstrap';

import {MealTiketsAPI} from '../../apis';
import {DateHelper} from '../../helpers';


const RegisterMealTiketModal = ({
  buttonLabel, 
  className,
  stores = [],
}: any) => {
  const [modal, setModal] = useState(false);
  const [store, setStore] = useState({id: null, name: null});
  const [endTime, setEndTime] = useState('');

  const toggle = () => setModal(!modal);
  const onClickRegister = async () => {
    try {
      const params = {
        storeId: store.id,
        endTime: DateHelper.getFullDateByTime(endTime),
      };

      const {response, json}: any = await MealTiketsAPI.register(params);

      if (response.ok) {
        alert('등록 성공했습니다.');

        toggle();
      } else {
        alert(json.message);
      }     
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Button color='none' onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>식사 티켓 만들기</ModalHeader>
        <ModalBody>
          <StoresDropdown 
            stores={stores}
            selectedStore={store}
            setStore={setStore}
          />
          <FormGroup>
            <Label for="exampleTime"><strong>언제까지 참여하게 해줄 건가요?</strong></Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
              onChange={(e: any) => setEndTime(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClickRegister}>등록</Button>{' '}
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const StoresDropdown = ({
  stores = [],
  selectedStore,
  setStore = () => null,
}: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <FormGroup>
      <Label for="exampleTime"><strong>오늘은 어디서 먹나요?</strong></Label>
      {
        stores && stores.length > 0 ? (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{selectedStore.name || '맛집 선택하기'}</DropdownToggle>
            <DropdownMenu>
              {stores.map((store: any, index: any) => (
                <DropdownItem 
                  key={index} 
                  onClick={() => setStore(store)}
                >
                  {store.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ) : <p>맛집 등록 먼저 진행해주세요.</p>
      }
    </FormGroup>
  );
};

export default RegisterMealTiketModal;
