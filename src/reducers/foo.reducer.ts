const initialState = { index: 0 };

const fooReducer = (state: any = initialState, action: any) => {
  console.log(action);

  switch (action.type) {
    case 'inc':
      return {
        ...state,
        index: state.index + 1
      }

    default:
      return { ...state }
  }
};

export default fooReducer;
