/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascipt plugin for creating charts
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    UncontrolledCollapse,
    Form,
    FormGroup,
    Input,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

import Header from "components/Headers/Header.js";

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1"
        };
        
    }
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
    };

    render() {
        return (
          <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <h3 className="mb-0">Catálogo de Cuentas</h3>
                    </CardHeader>
                    {/* ACTIVOS */}
                    <Button color="transparent" id="toggler">
                        <div>
                            <span>
                                Activos
                            </span>
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <Table className="align-items-center table-flush" responsive>
                            <tbody>
                                    <tr>
                                        <th>
                                            11
                                        </th>
                                        <th>
                                            Activo Corriente
                                        </th>
                                    </tr>
                                <tr>
                                {/* 111 */}
                                    <th>
                                        111
                                    </th>
                                    <th>
                                        Efectivo y Equivalentes de Efectivo
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1111
                                    </td>
                                    <td>
                                        Caja
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1112
                                    </td>
                                    <td>
                                        Caja Chica
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1113
                                    </td>
                                    <td>
                                        Bancos Ahorro
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1114
                                    </td>
                                    <td>
                                        Depósitos a Plazo
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1115
                                    </td>
                                    <td>
                                        Valores Negociables o Bonos
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        112
                                    </th>
                                    <th>
                                        Inversiones
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1121
                                    </td>
                                    <td>
                                        Inversiones en Bonos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1122
                                    </td>
                                    <td>
                                        Depósitos a Plazo
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        113
                                    </th>
                                    <th>
                                        Deudores Comerciales y Otras Cuentas por Cobrar
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1131
                                    </td>
                                    <td>
                                        Clientes
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1132
                                    </td>
                                    <td>
                                        Documentos por Cobrar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1133
                                    </td>
                                    <td>
                                        Deudores Varios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1134
                                    </td>
                                    <td>
                                        Intereses por Cobrar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1135
                                    </td>
                                    <td>
                                        Impuestos Diferidos por Cobrar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1136
                                    </td>
                                    <td>
                                        Rentas por Cobrar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1137
                                    </td>
                                    <td>
                                        Impuestos por Cobrar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1138
                                    </td>
                                    <td>
                                        Funcionarios y Empleados o Anticipo a Empleados
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        114
                                    </th>
                                    <th>
                                        Inventarios
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1141
                                    </td>
                                    <td>
                                        Inventario de Mercadería (almacén)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1142
                                    </td>
                                    <td>
                                        Inventario de Materia Prima
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1143
                                    </td>
                                    <td>
                                        Inventario de Productos en Proceso
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1144
                                    </td>
                                    <td>
                                        Inventario de Productos Terminados
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        115
                                    </th>
                                    <th>
                                        Pagos por Anticipados
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1151
                                    </td>
                                    <td>
                                        Papelería y Útiles
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1152
                                    </td>
                                    <td>
                                        Material de Empaque
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1153
                                    </td>
                                    <td>
                                        Material de Aseo
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1154
                                    </td>
                                    <td>
                                        Propaganda y Publicidad
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1155
                                    </td>
                                    <td>
                                        Anticipos a Proveedores
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1156
                                    </td>
                                    <td>
                                        Rentas Pagadas por Antipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1157
                                    </td>
                                    <td>
                                        Suscripciones Pagadas por Anticipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1158
                                    </td>
                                    <td>
                                        Intereses Pagados por Anticipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1159
                                    </td>
                                    <td>
                                        Impuestos Pagados por Anticpado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        11510
                                    </td>
                                    <td>
                                        Accesorios y Suministros
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        11511
                                    </td>
                                    <td>
                                        Primas de Seguros
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        12
                                    </th>
                                    <th>
                                        Activo no Corriente
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        121
                                    </th>
                                    <th>
                                        Inversiones y Valores
                                    </th>
                                </tr>
                                <td>
                                    1211
                                </td>
                                <td>
                                    Depósitos a Plaza Fijo
                                </td>
                                <tr>
                                    <td>
                                        1212
                                    </td>
                                    <td>
                                        Inversiones en Acciones
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1213
                                    </td>
                                    <td>
                                        Inversiones en Bonos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1214
                                    </td>
                                    <td>
                                        Inversiones en Negocios Conjuntos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1215
                                    </td>
                                    <td>
                                        Depósitos a Plazo
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        122
                                    </th>
                                    <th>
                                        Propiedad, Planta y Equipo
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1221
                                    </td>
                                    <td>
                                        Terrenos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1222
                                    </td>
                                    <td>
                                        Edificios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1223
                                    </td>
                                    <td>
                                        Maquinaria
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1224
                                    </td>
                                    <td>
                                        Mobiliaria y Equipo
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1225
                                    </td>
                                    <td>
                                        Vehículos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1226
                                    </td>
                                    <td>
                                        Equipo de Transporte
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1227
                                    </td>
                                    <td>
                                        Equipo de Reparto
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1228
                                    </td>
                                    <td>
                                        Herramientas
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        123
                                    </th>
                                    <th>
                                    Propiedades de Inversión (disponibles para alquiler o venta)
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1231
                                    </td>
                                    <td>
                                        Terrenos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1232
                                    </td>
                                    <td>
                                        Edificios
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        124
                                    </th>
                                    <th>
                                        Activos Intangibles
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1241
                                    </td>
                                    <td>
                                        Plusvalía (Crédito Mercantil)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1242
                                    </td>
                                    <td>
                                        Derechos de Autor
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1243
                                    </td>
                                    <td>
                                        Marcas y Patentes
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1244
                                    </td>
                                    <td>
                                        Licencias
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1245
                                    </td>
                                    <td>
                                        Programas Informáticos
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        125
                                    </th>
                                    <th>
                                        Otras Activos
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1251
                                    </td>
                                    <td>
                                        Bancos (Cuenta Congelada)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1252
                                    </td>
                                    <td>
                                        Documentos por Cobrar (a lo largo plazo)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1253
                                    </td>
                                    <td>
                                        Depósitos en Garantía
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </UncontrolledCollapse>
                    {/* PASIVOS */}
                    <Button color="transparent" id="toggler1">
                        <div>
                            <span>
                                Pasivos
                            </span>
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler1">
                        <Table className="align-items-center table-flush" responsive>
                            <tbody>
                                <tr>
                                    <th>
                                        21
                                    </th>
                                    <th>
                                        Pasivo Corriente
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        211
                                    </th>
                                    <th>
                                        Cuentas y Documentos por Pagar
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2111
                                    </td>
                                    <td>
                                        Proveedores (cuentas por pagar)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2112
                                    </td>
                                    <td>
                                        Sueldos y Saldos por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2113
                                    </td>
                                    <td>
                                        Impuestos por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2114
                                    </td>
                                    <td>
                                        Intereses por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2115
                                    </td>
                                    <td>
                                        Acreedores Varios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2116
                                    </td>
                                    <td>
                                        Documentos por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2117
                                    </td>
                                    <td>
                                        Hipotecas por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        212
                                    </th>
                                    <th>
                                        Préstamos
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2121
                                    </td>
                                    <td>
                                        Préstamos Bancarios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2122
                                    </td>
                                    <td>
                                        Préstamos Hipotectarios
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        213
                                    </th>
                                    <th>
                                        Obligaciones por Provisiones
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2131
                                    </td>
                                    <td>
                                        Provisiones para Compensaciones a Empleados
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2132
                                    </td>
                                    <td>
                                        Provisiones para Cubrir Garantías a Clientes
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2133
                                    </td>
                                    <td>
                                        Provisiones para Cubrir Reclamos Legales
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        214
                                    </th>
                                    <th>
                                        Cobros Anticipados
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2141
                                    </td>
                                    <td>
                                        Rentas Cobradas por Anticipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2142
                                    </td>
                                    <td>
                                        Intereses Cobrados por Anticipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2143
                                    </td>
                                    <td>
                                        Servicios Cobrados por Anticipado
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2144
                                    </td>
                                    <td>
                                        Anticipos a Clientes
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        22
                                    </th>
                                    <th>
                                        Pasivo No Corriente
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        221
                                    </th>
                                    <th>
                                        Cuentas y Documentos por Pagar
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2211
                                    </td>
                                    <td>
                                        Acreedores Varios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2212
                                    </td>
                                    <td>
                                        Documentos por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2213
                                    </td>
                                    <td>
                                        Obligaciones por Provisiones
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        222
                                    </th>
                                    <th>
                                        Préstamos
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2221
                                    </td>
                                    <td>
                                        Préstamos Bancarios
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2222
                                    </td>
                                    <td>
                                        Hipotecas por Pagar
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        223
                                    </th>
                                    <th>
                                        Provisiones
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        2231
                                    </td>
                                    <td>
                                        Provisiones para Compensaciones a Empleados
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2232
                                    </td>
                                    <td>
                                        Provisiones para Cubrir Garantías a Clientes
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2233
                                    </td>
                                    <td>
                                        Provisiones para Cubrir Reclamos Legales
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </UncontrolledCollapse>
                    {/* PATRIMONIO */}
                    <Button color="transparent" id="toggler2">
                        <div>
                            <span>
                                Patrimonio
                            </span>
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler2">
                        <Table className="align-items-center table-flush" responsive>
                            <tbody>
                                <tr>
                                    <th>
                                        31
                                    </th>
                                    <th>
                                        Comerciante Individual
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        311
                                    </th>
                                    <th>
                                        Capital
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        312
                                    </th>
                                    <th>
                                        Resultados Acumulados
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        3121
                                    </td>
                                    <td>
                                        Utilidades o Pérdidas de Años Anteriores
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3122
                                    </td>
                                    <td>
                                        Utilidad o Pérdida Neta del Periodo
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3123
                                    </td>
                                    <td>
                                        Pérdidas no Aplicadas
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        32
                                    </th>
                                    <th>
                                        Empresa Jurídica
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        321
                                    </th>
                                    <th>
                                        Capital Social
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        322
                                    </th>
                                    <th>
                                        Reservas
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        3221
                                    </td>
                                    <td>
                                        Reserva Legal
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3222
                                    </td>
                                    <td>
                                        Reservas de Previsión
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       3223 
                                    </td>
                                    <td>
                                        Reservas de Reinversión
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3224
                                    </td>
                                    <td>
                                        Reserva de Educación
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        323
                                    </th>
                                    <th>
                                        Resultados Acumulados
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        3231
                                    </td>
                                    <td>
                                    Utilidad o Pérdida de Años Anteriores
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3232
                                    </td>
                                    <td>
                                        Utilidad o Pérdida Neta del Ejercicio
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </UncontrolledCollapse>
                    {/* CUENTAS DE INGRESOS */}
                    <Button color="transparent" id="toggler3">
                        <div>
                            <span>
                                Cuentas de Ingresos
                            </span>
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler3">
                        <Table className="align-items-center table-flush" responsive>
                            <tbody>
                                    <tr>
                                        <td>
                                            4001
                                        </td>
                                        <td>
                                            Ventas
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4002
                                        </td>
                                        <td>
                                            Productos Financieros
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4003
                                        </td>
                                        <td>
                                            Otros Productos
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4004
                                        </td>
                                        <td>
                                            Rebajas Sobre Compras
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4005
                                        </td>
                                        <td>
                                            Devoluciones Sobre Compras
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4006
                                        </td>
                                        <td>
                                            Descuento Sobre Compras
                                        </td>
                                    </tr>
                            </tbody>
                        </Table>
                    </UncontrolledCollapse>
                    {/* CUENTAS DE COSTOS Y GASTOS */}
                    <Button color="transparent" id="toggler4">
                        <div>
                            <span>
                                Cuentas de Costos y Gastos
                            </span>
                        </div>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler4">
                        <Table className="align-items-center table-flush" responsive>
                            <tbody>
                                <tr>
                                    <td>
                                        5001
                                    </td>
                                    <td>
                                        Devoluciones Sobre Ventas
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5002
                                    </td>
                                    <td>
                                        Rebajas Sobre Ventas
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5003
                                    </td>
                                    <td>
                                        Descuentos Sobre Ventas
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5004
                                    </td>
                                    <td>
                                        Compras Brutas
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5005
                                    </td>
                                    <td>
                                        Gastos Sobre Compras
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5006
                                    </td>
                                    <td>
                                        Gastos de Administración
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5007
                                    </td>
                                    <td>
                                        Rebajas Sobre Ventas
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5008
                                    </td>
                                    <td>
                                        Descuentos Sobre Ventas
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </UncontrolledCollapse>
                </Card>
            </div>
          </Row>
        </Container>
          </>
        );
    }
}

export default Catalogue;
