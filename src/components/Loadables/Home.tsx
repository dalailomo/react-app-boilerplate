import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const index = useSelector((state: any) => state.fooReducer.index);
  const dispatch = useDispatch();

  return (
    <>
      <div>This is home page component</div>
      <div>Index: { index }</div>
      <button onClick={ () => dispatch({ type: 'inc' }) }>Incrementis</button>
    </>
  )
};
