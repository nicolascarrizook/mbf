import Radio from "./Radio";
import styled from "styled-components";

export const ContainerTabla = styled.table`
    margin-top: 20px;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #ccc;
        tr {
            border: 1px solid #ccc;
            td {
                padding: 10px;
                border: 1px solid #ccc;
            }
        }
    }
`;

const Cuotas = () => {
    return (
        <div>
            <div>
                <h4>Filtro de cuotas</h4>
                <Radio name="radio" value="vigentes" label="Pendientes Vigentes" />
                <Radio name="radio" value="completas" label="Pendientes Completas" />
                <Radio name="radio" value="historico" label="Historico" />
            </div>
            <div style={{'margin-top': '20px'}}>
                <h4>Fecha de Ajuste</h4>
                <input type="date" />
            </div>
            <ContainerTabla>
                <h4>DETALLE DE CUOTAS</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Cuota</th>
                            <th>S. Ord</th>
                            <th>Fecha de Vencimiento</th>
                            <th>Fecha de Pago</th>
                            <th>Importe</th>
                            <th>Saldo</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>$100</td>
                            <td>$100</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>$100</td>
                            <td>$100</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1</td>
                            <td>01/01/2020</td>
                            <td>01/01/2020</td>
                            <td>$100</td>
                            <td>$100</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
            </ContainerTabla>
            <div>
                <h4>Cantidad de Cuotas: 3 </h4>
                <h4>Importe Total: $300</h4>
            </div>
        </div>
    )
}

export default Cuotas;

