import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {useSelector} from 'react-redux'

import {DateHelper} from '../../helpers';
import { MealTiketsAPI } from '../../apis';
import { NavigationService } from '../../services';


const MealTiket = ({mealTiket}: any) => {
  const userId = useSelector((state: any) => state.User.get('id'));

  const store = mealTiket.store;
  const startTime = mealTiket.startTime;
  const endTime = mealTiket.endTime;

  const getRemainTime = () => {
    const timestamp = DateHelper.getTimestampByFullDate(endTime) - DateHelper.getTimestamp();
    const min = DateHelper.secToMin(timestamp / 1000);

    return DateHelper.minToHourMinFormat(min);
  };

  const onClickJoinIn = async () => {
    const mealTiketId = mealTiket.id;
    const params = {
      userId: userId,
      mealTiketId: mealTiketId,
    };

    try {
      const {response, json}: any = await MealTiketsAPI.addUser(params);

      if (response.ok) {
        alert('등록 성공했습니다.');
        NavigationService.reload();
      } else {
        if (response.status === 422) {
          alert(json.message);
        }
        // TODO:: 401 or else
      }
    } catch (error) {
      console.log(error); 
    }
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
