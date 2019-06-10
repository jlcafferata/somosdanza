export const getStudentsStored = obra => {
  /* Remove arrow function */
  console.log("getStudentStores - obra: " + obra);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    let students = [];
    //db.settings({ timestampsInSnapshots: true });
    db.collection("laweek")
      .where("obra", "==", obra)
      //.orderBy("apellido_alumno", "desc")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          students.push(doc.data());
        });
        console.log(students);
        dispatch({ type: "LIST_STUDENTS_STORED", students });
      });
  };
};

export const getObrasStored = () => {
  /* Remove arrow function */
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    let obras = [];
    // db.settings({ timestampsInSnapshots: true });
    db.collection("laweek")
      .orderBy("obra", "desc")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          obras.push(doc.data());
        });
        dispatch({ type: "LIST_OBRAS_STORED", obras });
      });
  };
};

export const findEscuelaFirebase = (escuela, students, getFirestore) => {
  const firestore = getFirestore();

  var jobskill_query = firestore
    .collection("laweek")
    .where("escuela", "==", escuela.escuela)
    .where("obra", "==", escuela.obra);

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
