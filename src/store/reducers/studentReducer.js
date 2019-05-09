const initState = {
  students: [],
  coreografo: "",
  duracion: "",
  estilo: "",
  categoria: "",
  encuentro: "",
  dni: "",
  email: "",
  telefono: "",
  localidad: "",
  provincia: "",
  arancel: ""
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ESCUELA":
      return state;
    case "ADD_ESCUELA_ERROR":
      return state;
    case "ADD_STUDENT":
      return Object.assign({}, state, {
        students: [...state.students, action.student]
      });
    case "ADD_STUDENT_ERROR":
      return state;
    case "REMOVE_STUDENT":
      // don't mutate state here or the tests will fail
      let newState = [...state];
      console.log(newState);
      console.log(newState.students);
      console.log(action.id);

      newState.students.slice(action.id, 1);
      return newState;
    default:
      return state;
  }
};

export default studentReducer;
