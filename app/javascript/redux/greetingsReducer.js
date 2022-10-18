// Data fetching
const getData = async () => {
  const response = await fetch('/api/greetings');
  return await response.json();
}

// Actions
const SHOW_GREETINGS = 'redux/greetingsReducer.js/SHOW_GREETINGS'

// Reducer
const initialState = [];

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

// Action creator
export const displayGreeting = () => async (dispatch) => {
  const greeting = await getData();

  dispatch({
    type: SHOW_GREETINGS,
    payload: greeting,
  });
};