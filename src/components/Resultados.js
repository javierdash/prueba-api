import axios from "axios"
import {useState, useEffect} from "react"

const Resultados = () => {
  
  const [resultado, setResultado] = useState([])

  const palabraABuscar = "juguete"
  useEffect(() => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${palabraABuscar}&limit=1`
    axios.
          get(endpoint)
          .then(res => {
            const data = res.data.results[0]
            console.log(data)
            setResultado(data)
          })
  }, [setResultado])
  

  return (
    <>
    {resultado === undefined && <h4>No se encontraron resultados</h4>}
    {resultado &&
      <>
      <h3>{resultado.title}</h3>
      <img src={resultado.thumbnail} />
      {/* <h4>Precio: ${resultado.installments.amount}</h4> */}
      </>
    }
    </>
  )
}

export default Resultados