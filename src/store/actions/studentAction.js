export const addEscuela = escuela => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("laweek")
      .add({
        coreografo: escuela.coreografo,
        duracion: escuela.duracion,
        estilo: escuela.estilo,
        categoria: escuela.categoria,
        encuentro: escuela.encuentro,
        dni: escuela.dni,
        email: escuela.email,
        telefono: escuela.telefono,
        localidad: escuela.localidad,
        provincia: escuela.provincia,
        arancel: escuela.arancel,
        apellido_alumno: escuela.apellido_alumno,
        nombre_alumno: escuela.nombre_alumno,
        nacimiento_alumno: escuela.nacimiento_alumno,
        dni_alumno: escuela.dni_alumno
      })
      .then(() => {
        dispatch({ type: "ADD_ESCUELA", escuela });
      })
      .catch(err => {
        dispatch({ type: "ADD_ESCUELA_ERROR", err });
      });
  };
};

export const addStudent = student => {
  return dispatch => {
    dispatch({ type: "ADD_STUDENT", student });
  };
};

/*export const addStudent = student => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("laweek")
      .add({
        apellido_alumno: student.apellido_alumno,
        nombre_alumno: student.nombre_alumno,
        nacimiento_alumno: student.nacimiento_alumno,
        dni_alumno: student.dni_alumno
      })
      .then(() => {
        dispatch({ type: "ADD_STUDENT", student });
      })
      .catch(err => {
        dispatch({ type: "ADD_STUDENT_ERROR", err });
      });
  };
};*/
