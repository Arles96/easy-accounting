import Accounts from '../config/AccountsDb';
import { numberRegex } from '../extra/regex';

export const addAccounts = ({ code, name, description, type }) => {
  return new Promise((resolve, reject) => {
    if ((code && numberRegex.test(code)) && name && type) {
      Accounts.post({
        code: code,
        name: name,
        type: type,
        description: description,
      }).then(() => {
        resolve({
          status: 'success',
          info: 'Se guardo el registro',
        });
      }).catch(() => {
        reject({
          status: 'error',
          info: 'Error al almacenar el registro'
        });
      });
    } else if (!code) {
      reject({
        status: 'error',
        info: 'Código no esta definido'
      });
    } else if (!numberRegex.test(code)) {
      reject({
        status: 'error',
        info: 'El código no es númerico'
      });
    } else if (!name) {
      reject({
        status: 'error',
        info: 'Nombre no esta definido'
      });
    } else if (!type) {
      reject({
        status: 'error',
        info: 'Tipo no esta definido'
      });
    } else {
      reject({
        status: 'error',
        info: 'Código, tipo y nombre no están correctos'
      });
    }
  });
};

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    Accounts.allDocs({
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
  })
};

export const getOneAccount = (_id) => {
  return new Promise((resolve, reject) => {
    if (_id) {
      Accounts.get(_id).then(result => {
        resolve({
          status: 'success',
          info: 'Se obtuvo el dato',
          data: result,
        });
      }).catch(() => {
        reject({
          status: 'error',
          info: 'Error al obtener el dato'
        });
      });
    } else {
      reject({
        status: 'error',
        info: 'Indetificador no esta definido',
      });
    }
  });
};
