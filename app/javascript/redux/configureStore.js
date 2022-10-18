import { configureStore } from '@reduxjs/toolkit';
import { greeting } from './greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greeting,
  },
});

export default store;