import { actionTypes } from "react-redux-firebase";

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
      return {
        ...state,
        coreografo: action.escuela.coreografo,
        duracion: action.escuela.duracion,
        estilo: action.escuela.estilo,
        categoria: action.escuela.categoria,
        encuentro: action.escuela.encuentro,
        dni: action.escuela.dni,
        email: action.escuela.email,
        telefono: action.escuela.telefono,
        localidad: action.escuela.localidad,
        provincia: action.escuela.provincia,
        arancel: action.escuela.arancel
      };

    case "ADD_ESCUELA_ERROR":
      return state;
    case "ADD_STUDENT":
      return Object.assign({}, state, {
        students: [...state.students, action.student]
      });
    case "ADD_STUDENT_ERROR":
      return state;
    case "REMOVE_STUDENT":
      return Object.assign({}, ...state, {
        students: [
          ...state.students.slice(0, action.id),
          ...state.students.slice(action.id + 1)
        ]
      });
    case "LIST_STUDENTS_STORED":
      return {
        ...state,
        students: action.students
      };
    case "LIST_OBRAS_STORED":
      return {
        ...state,
        obras: action.obras
      };
    case "RESET":
      return Object.assign({}, ...state, { initState });
    default:
      return state;
  }
};

export default studentReducer;
