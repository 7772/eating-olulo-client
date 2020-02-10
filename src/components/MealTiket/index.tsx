import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import { DateHelper } from '../../helpers';


const MealTiket = ({mealTiket}: any) => {
  const store = mealTiket.store;
  const startTime = mealTiket.startTime;
  const endTime = mealTiket.endTime;

  const getRemainTime = () => {
    const timestamp = DateHelper.getTimestampByFullDate(endTime) - DateHelper.getTimestamp();
    const min = DateHelper.secToMin(timestamp / 1000);

    return DateHelper.minToHourMinFormat(min);
  };

  const onClickJoinIn = () => {
    alert('TODO: 참여하기');
  };

  return (
    <div style={{marginTop: 5}}>
      <Jumbotron className={'container'}>
        <h1 className="display-3">{store.name}</h1>
        <p className="lead">{store.phoneNumber}</p>
        <hr className="my-2" />
        <p>종료까지 {getRemainTime()} 남았습니다!</p>
        <p className="lead" style={{marginTop: 50}}>
          <Button color="primary" onClick={onClickJoinIn}>참여하기</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MealTiket;
