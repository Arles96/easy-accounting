import Exercises from '../config/ExerciseDb';

export const AddExercise = ({ title, description }) => {
  return new Promise((resolve, reject) => {
    if (title && description) {
      Exercises.post({
        title: title,
        description: description,
        createdAt: new Date()
      }).then(() => {
        resolve({
          status: 'success',
          info: 'Se almaceno el registro de manera exitosa'
        });
      }).catch(() => {
        reject({
          status: 'error',
          info: 'Error al almacenar el registro'
        });
      });
    } else if (!title) {
      reject({
        status: 'error',
        info: 'Título no definido'
      });
    } else if (!description) {
      reject({
        status: 'error',
        info: 'Descripción no definido'
      });
    } else {
      reject({
        status: 'error',
        info: 'Título y descripción no están definidos'
      });
    }
  });
};

export const updateExercise = (_id, { title, description }) => {
  return new Promise((resolve, reject) => {
    if (_id && title && description) {
      Exercises.get(_id).then(doc => {
        return Exercises.put({
          title: title,
          description: description,
          _rev: doc._rev
        });
      }).then(() => {
        resolve({
          status: 'success',
          info: 'Se actualizo el registro de manera exitosa'
        });
      }).catch(() => {
        reject({
          status: 'error',
          info: 'Error al actualizar el registro'
        });
      });
    } else if (!_id) {
      reject({
        status: 'error',
        info: 'Identificador no definido',
      });
    } else if (!title) {
      reject({
        status: 'error',
        info: 'Título no definido',
      });
    } else if (!description) {
      reject({
        status: 'error',
        info: 'Descripción no esrta definido',
      });
    } else {
      reject({
        status: 'error',
        info: 'Identificador, título y descripción no están definidos',
      });
    }
  });
};

export const getExercises = () => {
  return new Promise((resolve, reject) => {
    Exercises.allDocs({
      include_docs: true,
      attachments: true
    }).then(result => {
      resolve({
        status: 'success',
        info: 'Se obtuvieron los datos',
        data: result,
      });
    }).catch(() => {
      reject({
        status: 'error',
        info: 'Error al obtener los datos'
      });
    });
  });
};

export const getOneExercises = (_id) => {
  return new Promise((resolve, reject) => {
    if (_id) {
      Exercises.get(_id).then(result => {
        resolve({
          status: 'success',
          info: 'Se obtuvo el registro',
          data: result
        });
      }).catch(error => {
        reject({
          status: 'error',
          info: 'Error al obtener el registro'
        });
      });
    } else {
      reject({
        status: 'error',
        info: 'Identificador no esta definido'
      });
    }
  });
};

export const deleteExercises = (_id) => {
  return new Promise((resolve, reject) => {
    if (_id) {
      Exercises.remove({ _id }).then(() => {
        resolve({
          status: 'success',
          info: 'Se ha eliminado el registro de manera exitosa'
        });
      }).catch(() => {
        reject({
          status: 'error',
          info: 'Error al eliminar el registro'
        });
      });
    } else {
      reject({
        status: 'error',
        info: 'Identificador no definido'
      });
    }
  });
};
