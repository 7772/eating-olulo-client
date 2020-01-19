import React from 'react';
import MealTiket from '../MealTiket';
import {Alert} from 'reactstrap';


const MealTiketList = ({mealTikets = []}: any) => {
  return mealTikets.length > 0 ? (
    mealTikets.map((mealTiket: any, index: any) => {
      return (
        <MealTiket key={index} mealTiket={mealTiket}/>
      );
    })
  ) : (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
      <Alert className={'container'} color={'warning'}>
        오늘은 아무도 안시켜먹나봐요..
      </Alert>
    </div>
  );
};


export default MealTiketList;
