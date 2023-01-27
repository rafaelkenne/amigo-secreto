
import Card from "../componentes/card"
import Formulario from "../componentes/formulario/Formulario"
import { ListaPaticipantes } from "../componentes/ListaPaticipantes"
import Rodape from "../componentes/rodape/Rodape"


const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaPaticipantes />
        <Rodape />
      </section>
    </Card>
  )
}

export default Configuracao