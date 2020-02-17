import React from 'react';
import {Table, Alert} from 'reactstrap';


const StoreList = ({
  stores = [],
}: any) => {
  return stores.length > 0 ? (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>상호명</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody>
        {
          stores.map((store: any, index: number) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{store.id}</td>
              <td>{store.name}</td>
              <td>{store.phoneNumber}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  ) : (
    // TODO:: Alert 컴포넌트 만들기
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '30vh'}}>
      <Alert className={'container'} color={'warning'}>
        아직 등록된 상점이 없네요..
      </Alert>
    </div>
  );
}

export default StoreList;
