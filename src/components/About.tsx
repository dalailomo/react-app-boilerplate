import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const index = useSelector((state: any) => state.fooReducer.index);

  return (
    <>
      <div>This is about page component</div>
      <div>Index: { index }</div>
    </>
  )
};
