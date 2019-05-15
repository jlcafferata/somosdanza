export const findEscuelaFirebase = (escuela, students, getFirestore) => {
  const firestore = getFirestore();

  var jobskill_query = firestore
    .collection("laweek")
    .where("escuela", "==", escuela.escuela)
    .where("encuentro", "==", escuela.encuentro)
    .where("estilo", "==", escuela.estilo)
    .where("categoria", "==", escuela.categoria);

  jobskill_query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });

    continuarAddingEscuelaFirebase(escuela, students, getFirestore);
  });
};

export const addEscuelaFirebase = (escuela, students) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    return new Promise((resolve, reject) => {
      if (escuela) {
        findEscuelaFirebase(escuela, students, getFirestore);
      }

      resolve();
    });
  };
};

export const continuarAddingEscuelaFirebase = (
  escuela,
  students,
  getFirestore
) => {
  const firestore = getFirestore();

  students.map(function(student, key) {
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
        //dispatch({ type: "ADD_ESCUELA", escuela });
        console.log("guardado conexito");
      })
      .catch(err => {
        dispatch({ type: "ADD_ESCUELA_ERROR", err });
      });
  });
};

export const addEscuela = escuela => {
  return dispatch => {
    dispatch({ type: "ADD_ESCUELA", escuela });
  };
};

export const addStudent = student => {
  return dispatch => {
    dispatch({ type: "ADD_STUDENT", student });
  };
};

export const delStudent = id => {
  return dispatch => {
    dispatch({ type: "REMOVE_STUDENT", id });
  };
};
export const reset = args => {
  return dispatch => {
    dispatch({ type: "RESET", args });
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
