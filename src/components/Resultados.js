import axios from "axios"
import {useState, useEffect} from "react"

const Resultados = () => {
  
  const [resultado, setResultado] = useState([])

  const palabraABuscar = "celular"
  useEffect(() => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${palabraABuscar}&limit=1`
    axios.
          get(endpoint)
          .then(res => {
            const data = res.data.results[0].title
            console.log(data)
            setResultado(data)
          })
  }, [setResultado])
  

  return (
    <h3>{resultado}</h3>
  )
}

export default Resultados