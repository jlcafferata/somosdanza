export const addEscuela = escuela => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const escuela = escuela.escuela;
    const students = { escuela };
    students.forEach(student => {
      firestore
        .collection("laweek")
        .add({
          escuela: escuela.escuela,
          obra: escuela.obra,
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
          apellido_alumno: student.apellido_alumno,
          nombre_alumno: student.nombre_alumno,
          nacimiento_alumno: student.nacimiento_alumno,
          dni_alumno: student.dni_alumno
        })
        .then(() => {
          dispatch({ type: "ADD_ESCUELA", escuela });
        })
        .catch(err => {
          dispatch({ type: "ADD_ESCUELA_ERROR", err });
        });
    });
  };
};

export const addStudent = student => {
  return dispatch => {
    dispatch({ type: "ADD_STUDENT", student });
  };
};

export const delStudent = dni => {
  return dispatch => {
    dispatch({ type: "REMOVE_STUDENT", dni });
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
