import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Heading } from "./components/Heading";
import { InfoCliente } from "./components/InfoCliente";
import { Container } from "./global-styles/Container";
import Radio from "./components/Radio";
import Cuotas from "./components/Cuotas";

const App = () => {

  

  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlAlternativa = 'https://tpclient-010.bue.tpsouth.corp/APIMercedesBenz/api/customer/datoscliente?documento=30661823247';
  // const urlAlternativa = 'https://jsonplaceholder.typicode.com/comments?postId=1';
  //Llamamos a la API
  useEffect(() => {
    try {
      fetch(urlAlternativa)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            setLoading(false)
            setValue(data)
          }, 3000);
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  console.log('flag0', value)

  return (
    <div>
      {
        loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
            </div>
            <h4>Cargando datos del cliente</h4>
          </div>
        ) : (
          <div>
            <Heading />
            <Container>
              <Formik>
                <Form>
                  <InfoCliente />
                  <Cuotas />  
                </Form>
              </Formik>
            </Container>
          </div>
        )
      }
    </div>
  )
}

export default App;