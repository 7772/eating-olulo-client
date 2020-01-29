import React, {useState} from 'react';
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input,
  InputGroup as IG,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import {StoresAPI} from '../../apis';


const RegisterStoreModal = ({buttonLabel, className}: any) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const toggle = () => setModal(!modal);
  const onChangeName = (e: any) => setName(e.target.value);
  const onChangePhoneNumber = (e: any) => setPhoneNumber(e.target.value);
  const onClickRegister = () => {
    if (!name || (typeof name === 'string' && name.length < 1)) {
      alert('이름 입력이 잘못되었습니다.');
      return;
    }

    if (!phoneNumber || (typeof phoneNumber === 'string' && phoneNumber.length < 10)) {
      alert('전화번호 입력이 잘못되었습니다.');
      return;
    }

    registerStore(name, phoneNumber);
    toggle();
  };

  const registerStore = async (name: string, phoneNumber: string) => {
    try {
      const params = {
        name: name,
        phoneNumber: phoneNumber,
      };
      
      const {response, json}: any = await StoresAPI.register(params);     

      if (response.ok) {
        alert('등록 성공했습니다.');
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
        <ModalHeader toggle={toggle}>맛집 등록하기</ModalHeader>
        <ModalBody>
          <InputGroup label={'상호명'} onChange={onChangeName}/>
          <InputGroup label={'전화번호'} onChange={onChangePhoneNumber}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClickRegister}>등록</Button>{' '}
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const InputGroup = ({
  type,
  label,
  onChange,
}: any) => {
  return (
    <IG>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{label}</InputGroupText>
      </InputGroupAddon>
      <Input type={type} onChange={onChange}/>
    </IG>
  );
};

export default RegisterStoreModal;
