import AccountBook from '../config/AccountBookDb';
import { getAccounts } from './accountsApi';

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

const totalSection = arraySection => {
  let total = 0;
  arraySection.forEach(({ money }) => {
    total += money
  });
  return total;
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
        status: 'success',
        info: 'Obteniendo los datos',
        data: data
      });
    }).catch((error) => {
      reject({
        status: 'error',
        info: 'Error al obtener las partidas',
        error: error
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

export const generateMajorization = idExercise => new Promise((resolve, reject) => {
  if (idExercise) {
    getAccountsOperations(idExercise).then(response => {
      const { data } = response;
      getAccounts().then(responseAccounts => {
        const arrayMajorization = [];
        const { data: dataAccounts } = responseAccounts;
        // listando todas las cuentas
        dataAccounts.forEach(account => {
          const debit = [];
          const credit = [];
          // listando las partidas
          data.forEach(item => {
            const { arrayCreditAccounts, arrayDebitAccounts } = item;
            // agregando la seccion de credito de una cuenta
            arrayCreditAccounts.forEach(accountCredit => {
              if (accountCredit.numberAccount === account.code) {
                credit.push({
                  numberItem: item.number,
                  money: parseFloat(accountCredit.money)
                });
              }
            });
            // agregando la seccion de debito de una cuenta
            arrayDebitAccounts.forEach(accountDebit => {
              if (accountDebit.numberAccount === account.code) {
                debit.push({
                  numberItem: item.number,
                  money: parseFloat(accountDebit.money)
                });
              }
            });
          });
          // verificando si tuvieron operaciones
          if (debit.length > 0 || credit.length > 0) {
            const subtotalDebit = totalSection(debit);
            const subtotalCredit = totalSection(credit);
            const total = subtotalDebit - subtotalCredit;
            const doc = {
              nameAccount: account.name,
              code: account.code,
              debit: debit,
              credit: credit,
              subtotalDebit: subtotalDebit,
              subtotalCredit: subtotalCredit,
              sectionAccount: total > 0 ? 'debit' : 'credit',
              total: total > 0 ? total : total * -1,
            }
            arrayMajorization.push(doc);
          }
        });
        resolve({
          status: 'success',
          info: 'Se realizo la mayorización exitosamente',
          data: arrayMajorization,
        });
      }).catch(error => {
        reject(error);
      })
    }).catch(error => {
      reject(error);
    });
  } else {
    reject({
      status: 'error',
      info: 'Identificador del ejercicio no definido'
    });
  }
})
