export const studentReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "EDIT":
        return state.map(student =>
          student.id === action.payload.id ? action.payload : student
        );
      case "DELETE":
        return state.filter(student => student.id !== action.payload);
      default:
        return state;
    }
  };
  