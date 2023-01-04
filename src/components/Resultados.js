import axios from "axios"
import {useState, useEffect} from "react"

const Resultados = () => {
  
  const [resultado, setResultado] = useState([])

  const palabraABuscar = "juguete"
  useEffect(() => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${palabraABuscar}&limit=6`
    axios.
          get(endpoint)
          .then(res => {
            // const data = res.data.results[0]
            const data = res.data.results
            console.log(data)
            setResultado(data)
          })
  }, [setResultado])
  

  return (
    <>
    {resultado === undefined && <h4>No se encontraron resultados</h4>}
    {resultado.map(cadaUno => {
      return (
        <>
        <div style={{border: "1px solid grey", margin: "3px"}}>
        <h3>{cadaUno.title}</h3>
        <img src={cadaUno.thumbnail} />
        </div>
        </>
      )
    })
    }
    </>
  )
}

export default Resultados


// {resultado &&
//   <>
//   <div style={{border: "1px solid grey"}}>
//   <h3>{resultado.title}</h3>
//   <img src={resultado.thumbnail} />
//   <h4>Precio: ${resultado.installments.amount}</h4>
//   </div>
//   </>