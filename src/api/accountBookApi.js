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
        _id: result._id,
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
        if (doc.doc.idExercise === idExercise) {
          data.push(doc.doc);
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
    AccountBook.get(_id).then(res => {
      return AccountBook.remove(res);
    }).then(() => {
      resolve({
        status: 'success',
        info: 'Se elimino el registro',
      });
    }).catch(() => {
      reject({
        status: 'error',
        info: 'Error al eliminar la partida'
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
        dataAccounts.rows.forEach(account => {
          const debit = [];
          const credit = [];
          // listando las partidas
          data.forEach(item => {
            const { arrayCreditAccounts, arrayDebitAccounts } = item;
            // agregando la seccion de credito de una cuenta
            arrayCreditAccounts.forEach(accountCredit => {
              if (accountCredit.idAccount === account.doc.code) {
                credit.push({
                  numberItem: item.number,
                  money: parseFloat(accountCredit.money)
                });
              }
            });
            // agregando la seccion de debito de una cuenta
            arrayDebitAccounts.forEach(accountDebit => {
              if (accountDebit.idAccount === account.doc.code) {
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
              nameAccount: account.doc.name,
              code: account.doc.code,
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
          data: arrayMajorization
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
});

export const generateComprobationBalance = (idExercise) => {
  return new Promise((resolve, reject) => {
    generateMajorization(idExercise).then(response => {
      const { data } = response;
      const arrayComprobationBalance = [];
      let totalDebitMov = 0;
      let totalCreditMov = 0;
      let totalCreditSald = 0;
      let totalDebitSald = 0;
      data.forEach(doc => {
        totalCreditMov += doc.subtotalCredit;
        totalDebitMov += doc.subtotalDebit;
        if (doc.sectionAccount === 'debit') {
          totalDebitSald += doc.total
        } else {
          totalCreditSald += doc.total;
        }
        arrayComprobationBalance.push({
          nameAccount: doc.nameAccount,
          code: doc.code,
          subtotalDebit: doc.subtotalDebit,
          subtotalCredit: doc.subtotalCredit,
          sectionAccount: doc.sectionAccount,
          total: doc.total,
        });
      });
      resolve({
        status: 'success',
        info: 'Se genero la balanza de comprobación',
        data: arrayComprobationBalance,
        totalCreditMov: totalCreditMov,
        totalDebitMov: totalDebitMov,
        totalCreditSald: totalCreditSald,
        totalDebitSald: totalDebitSald,
      });
    }).catch(error => {
      reject(error);
    });
  });
}

const findAccountValue = (data, paramCode, paramSectionAccount) => {
  let result = 0;
  data.forEach(doc => {
    const { code, sectionAccount, total } = doc;
    if (code === paramCode && sectionAccount === paramSectionAccount) {
      result = total;
    }
  });
  return result;
}

const percentageTaxRent = 0.25;
const exentTaxSolidary = 1000000;
const percentageTaxSolidary = 0.05;

export const generateStatementofIncome = (idExercise) => {
  return new Promise((resolve, reject) => {
    if (idExercise) {
      generateComprobationBalance(idExercise).then(res => {
        const result = [];
        const { data } = res;
        /* Seccion de Venta */
        // ventas
        const sales = findAccountValue(data, '4001', 'credit');
        result.push({
          name: 'Ventas Totales',
          col4: sales,
        });
        // descuentos sobre venta
        const disccountSales = findAccountValue(data, '5003', 'debit');
        result.push({
          name: 'Descuentos sobre Venta',
          col3: disccountSales,
        });
        // rebajas sobre venta
        const reductionSales = findAccountValue(data, '5002', 'debit');
        result.push({
          name: 'Rebajas sobre Venta',
          col3: reductionSales,
        });
        // devoluciones sobre venta
        const returnsSales = findAccountValue(data, '5001', 'debit');
        const subtotalReturnsSales = disccountSales + reductionSales + returnsSales;
        result.push({
          name: 'Devoluciones sobre Venta',
          col3: returnsSales,
          col4: subtotalReturnsSales,
        });
        const totalSales = sales - subtotalReturnsSales;
        result.push({
          name: 'Ventas netas',
          col4: totalSales
        });
        /* Fin de la Seccion de Venta */
        result.push({
          name: 'Costo de Ventas',
          title: true,
        });
        /* Seccion de costos de Ventas */
        // compras
        const purchases = findAccountValue(data, '5004', 'debit');
        result.push({
          name: 'Compras brutas',
          col1: purchases
        });
        // Gasto sobre compra
        const spendingPurchases = findAccountValue(data, '5005', 'debit');
        result.push({
          name: 'Gasto sobre compra',
          col1: spendingPurchases,
        });
        // compras totales
        const totalPurchases = purchases + spendingPurchases;
        result.push({
          name: 'Compras totales',
          col2: totalPurchases
        });
        // descuento sobre compra
        const disccountPurchases = findAccountValue(data, '4006', 'credit');
        result.push({
          name: 'Descuento sobre compra',
          col1: disccountPurchases,
        });
        // Rebajas sobre compra
        const reductionPurchases = findAccountValue(data, '4004', 'credit');
        result.push({
          name: 'Rebajas sobre compra',
          col1: reductionPurchases,
        });
        // Devoluciones sobre compra
        const returnsPurchases = findAccountValue(data, '4005', 'credit');
        const subtotalReturnsPurchases = disccountPurchases + reductionPurchases + returnsPurchases;
        result.push({
          name: 'Devoluciones sobre compra',
          col1: returnsPurchases,
          col2: subtotalReturnsPurchases,
        });
        // compras netas
        const netPurchases = totalPurchases - subtotalReturnsPurchases;
        result.push({
          name: 'Compras netas',
          col3: netPurchases,
        });
        // inventario inicial
        const initalInventory = findAccountValue(data, '1142', 'debit');
        result.push({
          name: 'Inventario Inicial',
          col3: initalInventory,
        });
        // Mercaderia disponible
        const availableInventory = netPurchases + initalInventory;
        result.push({
          name: 'Mercaderia disponible para la venta',
          col3: availableInventory,
        });
        // TODO Consultar lo del inventario final
        // Invetario final
        const endInventory = findAccountValue(data, '1141', 'debit');
        result.push({
          name: 'Inventario final',
          col3: endInventory,
        });
        // Costo de venta
        const costSale = availableInventory - endInventory;
        result.push({
          name: 'Costo de Venta',
          col4: costSale,
        });
        // Utilidad bruta en ventas
        const utilitySales = totalSales - costSale;
        result.push({
          name: utilitySales < 0 ? 'Perdida bruta en ventas' : 'Utilidad bruta en ventas',
          col4: utilitySales,
        });
        /* Final de la seccion de costos de ventas */
        /* Gastos Operativos */
        // Gastos administrativos
        const expenseAdministration = findAccountValue(data, '5006', 'debit');
        result.push({
          name: 'Gastos Administrativos',
          col4: expenseAdministration,
        });
        // Utilidad operativa
        const utilityOperative = utilitySales - expenseAdministration;
        result.push({
          name: 'Utilidad Operativa',
          col4: utilityOperative,
        });
        // Productos Financieros
        const productFinance = findAccountValue(data, '4002', 'credit');
        result.push({
          name: 'Productos Financieros',
          col3: productFinance,
        });
        // otros Productos
        const otherproduct = findAccountValue(data, '4003', 'credit');
        const totalProduct = productFinance + otherproduct;
        result.push({
          name: 'Otros Productos',
          col3: otherproduct,
          col4: totalProduct,
        });
        // Utilidad antes del impuesto
        const utilityBeforeTax = utilitySales + totalProduct;
        result.push({
          name: 'Utilidad del Impuesto',
          col4: utilityBeforeTax
        });
        /* Fin de los Gastos operativos */
        /* Seccion del impuesto */
        result.push({
          name: 'Impuestos',
          title: true,
        });
        // Impuesto sobre la renta
        const taxRent = utilityBeforeTax * percentageTaxRent;
        result.push({
          name: 'Impuesto sobre la Renta',
          col3: taxRent,
        });
        // Impuesto solidario
        let taxSolidary = 0;
        if (utilityBeforeTax > exentTaxSolidary) {
          taxSolidary = (utilityBeforeTax - exentTaxSolidary) * percentageTaxSolidary;
        }
        const totalTax = taxRent + taxSolidary;
        result.push({
          name: 'Impuesto aportacion Solidaria',
          col3: taxSolidary,
          col4: totalTax,
        });
        // Utilidad antes de la reserva
        const utilityReservation = utilityBeforeTax - totalTax;
        result.push({
          name: 'Utilidad del ejercicio',
          title: true,
          col4: utilityReservation,
        });
        /* Fin de la seccion del impuesto */
        resolve({
          status: 'success',
          info: 'Se genero el estado de resultado de manera exitosa',
          data: result
        });
      }).catch(error => reject(error));
    } else {
      reject({
        status: 'error',
        info: 'Error el identificador del ejercicio no esta definido',
      });
    }
  })
}

export const generateBalanceSheet = (idExercise) => {
  return new Promise((resolve, reject) => {
    generateComprobationBalance(idExercise).then(res => {
      const result = [];
      const { data } = res;
      let totalActive = 0;
      // usando las cuentas de tipo activo
      result.push({
        name: 'Activos',
        title: true,
      });
      data.forEach(({ code, nameAccount, sectionAccount, total }) => {
        if (code[0] === '1') {
          if (sectionAccount === 'debit') {
            result.push({
              code: code,
              name: nameAccount,
              total: total
            });
            totalActive += total;
          } else {
            result.push({
              code: code,
              name: nameAccount,
              total: 0
            });
          }
        }
      });
      result.push({
        name: 'Total Activo',
        isTotal: true,
        total: totalActive
      });
      // usando las cuentas de tipo pasivo
      let totalPassive = 0;
      result.push({
        name: 'Pasivos',
        title: true
      });
      data.forEach(({ code, nameAccount, sectionAccount, total }) => {
        if (code[0] === '2') {
          if (sectionAccount === 'credit') {
            result.push({
              name: nameAccount,
              code: code,
              total: total
            });
            totalPassive += total;
          } else {
            result.push({
              name: nameAccount,
              code: code,
              total: 0,
            });
          }
        }
      });
      result.push({
        name: 'Total Pasivo',
        isTotal: true,
        total: totalPassive
      });
      // calculando el patrimonio neto
      let patrimony = totalActive - totalPassive;
      result.push({
        name: 'Patrimonio',
        title: true,
      });
      result.push({
        name: 'Capital Social',
        code: '321',
        total: patrimony < 0 ? patrimony * -1 : patrimony
      });
      result.push({
        name: 'Total Patrimonio',
        isTotal: true,
        total: patrimony < 0 ? patrimony * -1 : patrimony
      });
      result.push({
        name: 'Pasivo mas Patrimonio Neto',
        isTotal: true,
        total: patrimony < 0 ? (patrimony * -1) + totalPassive : patrimony + totalPassive
      })
      resolve({
        status: 'success',
        data: result
      });
    }).catch(error => {
      reject(error);
    });
  });
}
