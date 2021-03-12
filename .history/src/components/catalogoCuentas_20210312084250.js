export const catalogoCuentas = (code) => {
  const cuentas = [
    {
      codigo_cuenta: "1",
      nombre_cuenta: "Activo",
    },
    {
      codigo_cuenta: "11",
      nombre_cuenta: "Activo Corriente",
    },
    {
      codigo_cuenta: "111",
      nombre_cuenta: "Efectivo y Equivalentes de Efectivo",
    },
    {
      codigo_cuenta: "1111",
      nombre_cuenta: "Caja",
    },
    {
      codigo_cuenta: "1112",
      nombre_cuenta: "Caja Chica",
    },
    {
      codigo_cuenta: "1113",
      nombre_cuenta: "Bancos Ahorro",
    },
    {
      codigo_cuenta: "1114",
      nombre_cuenta: "Depósito a Plazo",
    },
    {
      codigo_cuenta: "1115",
      nombre_cuenta: "Valores Negociables o Bonos",
    },
    {
      codigo_cuenta: "112",
      nombre_cuenta: "Inversiones",
    },
    {
      codigo_cuenta: "1121",
      nombre_cuenta: "Incersiones en Bonos",
    },
    {
      codigo_cuenta: "1122",
      nombre_cuenta: "Depósitos a Plazo",
    },
    {
      codigo_cuenta: "113",
      nombre_cuenta: "Deudores Comerciales y Otras Cuentas por Cobrar",
    },
    {
      codigo_cuenta: "1131",
      nombre_cuenta: "Clientes",
    },
    {
      codigo_cuenta: "1132",
      nombre_cuenta: "Documentos por Cobrar",
    },
    {
      codigo_cuenta: "1133",
      nombre_cuenta: "Deudores Varios",
    },
    {
      codigo_cuenta: "1134",
      nombre_cuenta: "Intereses por Cobrar",
    },
    {
      codigo_cuenta: "1135",
      nombre_cuenta: "Impuestos Diferidos por Cobrar",
    },
    {
      codigo_cuenta: "1136",
      nombre_cuenta: "Rentas por Cobrar",
    },
    {
      codigo_cuenta: "1137",
      nombre_cuenta: "Impuestos por Cobrar",
    },
    {
      codigo_cuenta: "1138",
      nombre_cuenta: "Funcionarios y Empleados o Anticipo a Empleados",
    },
    {
      codigo_cuenta: "114",
      nombre_cuenta: "Inventarios",
    },
    {
      codigo_cuenta: "1141",
      nombre_cuenta: "Inventario de Mercadería (almacén)",
    },
    {
      codigo_cuenta: "1142",
      nombre_cuenta: "Inventario de Materia Prima",
    },
    {
      codigo_cuenta: "1143",
      nombre_cuenta: "Inventario de Productos en Proceso",
    },
    {
      codigo_cuenta: "1144",
      nombre_cuenta: "Inventario de Productos Terminador",
    },
    {
      codigo_cuenta: "115",
      nombre_cuenta: "Pagos por Anticipados",
    },
    {
      codigo_cuenta: "1151",
      nombre_cuenta: "Papelería y Útiles",
    },
    {
      codigo_cuenta: "1152",
      nombre_cuenta: "Material de Empaque",
    },
    {
      codigo_cuenta: "1153",
      nombre_cuenta: "Material de Aseo",
    },
    {
      codigo_cuenta: "1154",
      nombre_cuenta: "Propaganda y Publicidad",
    },
    {
      codigo_cuenta: "1155",
      nombre_cuenta: "Anticipos a Proveedores",
    },
    {
      codigo_cuenta: "1156",
      nombre_cuenta: "Rentas Pagadas por Anticipado",
    },
    {
      codigo_cuenta: "1157",
      nombre_cuenta: "Suscripciones Pagadas por Anticipados",
    },
    {
      codigo_cuenta: "1158",
      nombre_cuenta: "Intereses Pagados por Anticipado",
    },
    {
      codigo_cuenta: "1159",
      nombre_cuenta: "Impuestos Pagados por Anticipado",
    },
    {
      codigo_cuenta: "11510",
      nombre_cuenta: "Accesorios y Suministros",
    },
    {
      codigo_cuenta: "11511",
      nombre_cuenta: "Primas de Seguros",
    },
    {
      codigo_cuenta: "12",
      nombre_cuenta: "Activo no Corriente",
    },
    {
      codigo_cuenta: "121",
      nombre_cuenta: "Inversiones y Valores",
    },
    {
      codigo_cuenta: "1211",
      nombre_cuenta: "Depósitos a Plaza Fijo",
    },
    {
      codigo_cuenta: "1212",
      nombre_cuenta: "Inversiones en Acciones",
    },
    {
      codigo_cuenta: "1213",
      nombre_cuenta: "Inversiones en Bonos",
    },
    {
      codigo_cuenta: "1214",
      nombre_cuenta: "Inversiones en Negocios Conjuntos",
    },
    {
      codigo_cuenta: "1215",
      nombre_cuenta: "Depósito a Plazo",
    },
    {
      codigo_cuenta: "122",
      nombre_cuenta: "Propiedad, Planta y Equipo",
    },
    {
      codigo_cuenta: "1221",
      nombre_cuenta: "Terrenos",
    },
    {
      codigo_cuenta: "1222",
      nombre_cuenta: "Edificios",
    },
    {
      codigo_cuenta: "1223",
      nombre_cuenta: "Maquinaria",
    },
    {
      codigo_cuenta: "1224",
      nombre_cuenta: "Mobiliaria y Equipo",
    },
    {
      codigo_cuenta: "1225",
      nombre_cuenta: "Vehículos",
    },
    {
      codigo_cuenta: "1226",
      nombre_cuenta: "Equipo de Transporte",
    },
    {
      codigo_cuenta: "1227",
      nombre_cuenta: "Equipo de Reparto",
    },
    {
      codigo_cuenta: "1228",
      nombre_cuenta: "Herramientas",
    },
    {
      codigo_cuenta: "1231",
      nombre_cuenta: "Terrenos",
    },
    {
      codigo_cuenta: "1232",
      nombre_cuenta: "Edificios",
    },
    {
      codigo_cuenta: "1241",
      nombre_cuenta: "Plusvalía (Crédito Mercantil)",
    },
    {
      codigo_cuenta: "1242",
      nombre_cuenta: "Derechos de Autor",
    },
    {
      codigo_cuenta: "1243",
      nombre_cuenta: "Marcas y Patentes",
    },
    {
      codigo_cuenta: "1244",
      nombre_cuenta: "Licencias",
    },
    {
      codigo_cuenta: "1245",
      nombre_cuenta: "Programas Informáticos",
    },
    {
      codigo_cuenta: "1251",
      nombre_cuenta: "Bancos (Cuenta Congelada)",
    },
    {
      codigo_cuenta: "1252",
      nombre_cuenta: "Documentos por Cobrar (a lo largo plazo)",
    },
    {
      codigo_cuenta: "1253",
      nombre_cuenta: "Depósitos en Garantía",
    },
    {
      codigo_cuenta: "2111",
      nombre_cuenta: "Proveedores (cuentas por pagar)",
    },
    {
      codigo_cuenta: "2112",
      nombre_cuenta: "Sueldos y Saldos por Pagar",
    },
    {
      codigo_cuenta: "2113",
      nombre_cuenta: "Impoestos por Pagar",
    },
    {
      codigo_cuenta: "2114",
      nombre_cuenta: "Intereses por Pagar",
    },
    {
      codigo_cuenta: "2115",
      nombre_cuenta: "Acreedores Varios",
    },
    {
      codigo_cuenta: "2116",
      nombre_cuenta: "Documentos por Pagar",
    },
    {
      codigo_cuenta: "2117",
      nombre_cuenta: "Hipotecas por Pagar",
    },
    {
      codigo_cuenta: "2121",
      nombre_cuenta: "Préstamos Bancarios",
    },
    {
      codigo_cuenta: "2122",
      nombre_cuenta: "Préstamos Hipotecarios",
    },
    {
      codigo_cuenta: "2131",
      nombre_cuenta: "Provisiones para Compensaciones a Empleados",
    },
    {
      codigo_cuenta: "2132",
      nombre_cuenta: "Provisines para Cubrir Garantías a Clientes",
    },
    {
      codigo_cuenta: "2133",
      nombre_cuenta: "Provisiones para Cubrir Reclamos Legales",
    },
    {
      codigo_cuenta: "2141",
      nombre_cuenta: "Rentas Cobradas por Anticipado",
    },
    {
      codigo_cuenta: "2142",
      nombre_cuenta: "Intereses Cobrados por Anticipado",
    },
    {
      codigo_cuenta: "2143",
      nombre_cuenta: "Servicios Cobrados por Antipado",
    },
    {
      codigo_cuenta: "2144",
      nombre_cuenta: "Anticipos a Clientes",
    },
    {
      codigo_cuenta: "2211",
      nombre_cuenta: "Acreedores Varios",
    },
    {
      codigo_cuenta: "2212",
      nombre_cuenta: "Documentos por Pagar",
    },
    {
      codigo_cuenta: "2213",
      nombre_cuenta: "Obligaciones por Provisiones",
    },
    {
      codigo_cuenta: "2221",
      nombre_cuenta: "Préstamos Bancarios",
    },
    {
      codigo_cuenta: "2222",
      nombre_cuenta: "Hipotecas por Pagar",
    },
    {
      codigo_cuenta: "2231",
      nombre_cuenta: "Provisiones para Compensaciones a Empleados",
    },
    {
      codigo_cuenta: "2232",
      nombre_cuenta: "Procisiones para Cubrir Garantías a Clientes",
    },
    {
      codigo_cuenta: "2233",
      nombre_cuenta: "Provisiones para Cubrir Reclamos Legales",
    },
    {
      codigo_cuenta: "3121",
      nombre_cuenta: "Utilidades o Pérdidas de Años Anteriores",
    },
    {
      codigo_cuenta: "3122",
      nombre_cuenta: "Utilidad o Pérdida Neta del Periodo",
    },
    {
      codigo_cuenta: "3123",
      nombre_cuenta: "Pérdidas no Aplicadas",
    },
    {
      codigo_cuenta: "3221",
      nombre_cuenta: "Reserva Legal",
    },
    {
      codigo_cuenta: "3222",
      nombre_cuenta: "Reservas de Previsión",
    },
    {
      codigo_cuenta: "3223",
      nombre_cuenta: "Reserva de Educación",
    },
    {
      codigo_cuenta: "3231",
      nombre_cuenta: "Utilidad o Pérdida de Años Anteriores",
    },
    {
      codigo_cuenta: "3232",
      nombre_cuenta: "Utilidad o Pérdida Neta del Ejercicio",
    },
    {
      codigo_cuenta: "4001",
      nombre_cuenta: " Ventas",
    },
    {
      codigo_cuenta: "4002",
      nombre_cuenta: "Productos Financieros",
    },
    {
      codigo_cuenta: "4003",
      nombre_cuenta: "Otros Productos",
    },
    {
      codigo_cuenta: "4004",
      nombre_cuenta: "Rebajas Sobre Compras",
    },
    {
      codigo_cuenta: "4005",
      nombre_cuenta: "Devoluciones Sobre Compras",
    },
    {
      codigo_cuenta: "4006",
      nombre_cuenta: "Descuento Sobre Compras",
    },
    {
      codigo_cuenta: "5001",
      nombre_cuenta: "Devoluciones Sobre Ventas",
    },
    {
      codigo_cuenta: "5002",
      nombre_cuenta: "Rebajas Sobre Ventas",
    },
    {
      codigo_cuenta: "5003",
      nombre_cuenta: "Descuentos Sobre Ventas",
    },
    {
      codigo_cuenta: "5004",
      nombre_cuenta: "Compras Brutas",
    },
    {
      codigo_cuenta: "5005",
      nombre_cuenta: "Gastos Sobre Compras",
    },
    {
      codigo_cuenta: "5006",
      nombre_cuenta: "Gastos de Administración",
    },
    {
      codigo_cuenta: "5007",
      nombre_cuenta: "Rebajas Sobre Ventas",
    },
    {
      codigo_cuenta: "5008",
      nombre_cuenta: "Descuentos Sobre Ventas",
    },
  ];

  const resultado = cuentas.filter((cuenta) => cuenta.codigo_cuenta === code);
  return resultado[0] ? resultado[0].nombre_cuenta : "No existe XD";
};
