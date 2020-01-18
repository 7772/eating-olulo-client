import React from 'react';
import MealTiket from '../MealTiket';


const MealTiketList = ({mealTikets = []}: any) => {
  return (
    mealTikets.map((mealTiket: any, index: any) => {
      return (
        <MealTiket key={index} mealTiket={mealTiket}/>
      );
    })
  );
};


export default MealTiketList;
