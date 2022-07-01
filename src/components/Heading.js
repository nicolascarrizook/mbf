import { Logo, StyledHeading } from "./Heading-estilos/StyledHeading"

export const Heading = () => {
    return (
        <StyledHeading>
            <Logo src="images/logo.png" alt="logo"/>
            <div>
                <h3>Créditos - Informe de Deuda - Detalle de Cuotas</h3>
            </div>
        </StyledHeading>
    )
}