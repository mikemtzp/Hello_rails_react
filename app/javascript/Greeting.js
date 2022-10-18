import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { displayGreeting } from './redux/greetingsReducer'

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state);

  useEffect(() => {
    dispatch(displayGreeting())
  }, []);

  return (
    <div>
    <p>Greeting:</p>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;