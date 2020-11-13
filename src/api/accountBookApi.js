import Accounts from 'config/AccountsDb';
import AccountBook from '../config/AccountBookDb';

const validArrayAccount = arrayAccount => {
  let error = false;
  // si esta vacio
  if (arrayAccount.length === 0) {
    return false;
  }
  // validando los campos de cada uno
  arrayAccount.forEach(element => {
    if (element && !error) {
      const { idAccount, numberAccount, nameAccount, money } = element;
      if (idAccount && numberAccount && nameAccount && money) {
        error = false;
      } else {
        error = true
      }
    } else {
      error = true;
    }
  });
  if (error) {
    return false;
  } else {
    return true
  }
}

export const addAccountOperation = ({
  idExercise, number, description, operationDate,
  arrayCreditAccounts, arrayDebitAccounts
}) => new Promise((resolve, reject) => {
  if (idExercise && validArrayAccount(arrayCreditAccounts) && validArrayAccount(arrayDebitAccounts)) {
    AccountBook.post({
      idExercise: idExercise,
      number: number,
      description: description,
      operationDate: operationDate,
      arrayCreditAccounts: arrayCreditAccounts,
      arrayDebitAccounts: arrayDebitAccounts,
      createdAt: new Date()
    }).then(() => {
      resolve({
        status: 'success',
        info: 'Se guardo el registro'
      });
    }).catch(() => {
      reject({
        status: 'error',
        info: 'Error al almacenar la partida'
      });
    });
  } else if (!idExercise) {
    reject({
      status: 'error',
      info: 'Identificador del ejercicio no definido'
    });
  } else if (!validArrayAccount(arrayCreditAccounts)) {
    reject({
      status: 'error',
      info: 'El arreglo de cuentas en el haber poseen datos erroneos'
    });
  } else if (!validArrayAccount(arrayDebitAccounts)) {
    reject({
      status: 'error',
      info: 'El arreglo de cuentas en el debe poseen datos erroneos'
    });
  } else {
    reject({
      status: 'error',
      info: 'Error verifique los parametros de la función'
    });
  }
});

export const updateAccountOperation = (_id, {
  idExercise, number, description, operationDate,
  arrayCreditAccounts, arrayDebitAccounts
}) => new Promise((resolve, reject) => {
  if (idExercise && validArrayAccount(arrayCreditAccounts) && validArrayAccount(arrayDebitAccounts)) {
    AccountBook.get(_id).then(result => {
      return AccountBook.put({
        idExercise: idExercise,
        number: number,
        description: description,
        operationDate: operationDate,
        arrayCreditAccounts: arrayCreditAccounts,
        arrayDebitAccounts: arrayDebitAccounts,
        _rev: result._rev
      });
    }).then(() => {
      resolve({
        status: 'success',
        info: 'Se actualizo el registro de maner exitosa'
      });
    }).catch(() => {
      reject({
        status: 'error',
        info: 'Error al obtener el dato'
      });
    });
  } else if (!idExercise) {
    reject({
      status: 'error',
      info: 'Identificador del ejercicio no definido'
    });
  } else if (!validArrayAccount(arrayCreditAccounts)) {
    reject({
      status: 'error',
      info: 'El arreglo de cuentas en el haber poseen datos erroneos'
    });
  } else if (!validArrayAccount(arrayDebitAccounts)) {
    reject({
      status: 'error',
      info: 'El arreglo de cuentas en el debe poseen datos erroneos'
    });
  } else {
    reject({
      status: 'error',
      info: 'Error verifique los parametros de la función'
    });
  }
});

export const getAccountsOperations = idExercise => new Promise((resolve, reject) => {
  if (idExercise) {
    AccountBook.allDocs({
      include_docs: true,
      attachments: true
    }).then(result => {
      const data = [];
      result.rows.forEach(doc => {
        if (doc.idExercise === idExercise) {
          data.push(data);
        }
      });
      resolve({
        status: 'error',
        info: 'Obteniendo los datos',
        data: data
      });
    }).catch(() => {
      reject({
        status: 'success',
        info: 'Error al '
      })
    });
  } else {
    reject({
      status: 'error',
      info: 'identificador del ejercicio no definido'
    });
  }
});

export const getOneAccountOperation = _id => new Promise((resolve, reject) => {
  if (_id) {
    AccountBook.get(_id).then(result => {
      resolve({
        status: 'success',
        info: 'Se obtuvo el dato',
        data: result
      });
    }).catch(() => {
      reject({
        status: 'error',
        info: 'Error al obtener los datos'
      });
    });
  } else {
    reject({
      status: 'error',
      info: 'Identificador no definido'
    });
  }
});

export const deleteAccountOperation = _id => new Promise((resolve, reject) => {
  if (_id) {
    AccountBook.remove({ _id }).then(() => {
      resolve({
        status: 'succes',
        info: 'Se elimino el registro de maner exitosa'
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
