import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  name: string
  description: string
  html_url: string
}

const Projeto = ({ name, description, html_url }: Props) => {
  return (
    <Card>
      <div>
        <Titulo>{name}</Titulo>
        <Paragrafo tipo="secundario">{description}</Paragrafo>
        <a target="_blank" rel="noreferrer" href={html_url}>
          <LinkBotao>Visualizar</LinkBotao>
        </a>
      </div>
    </Card>
  )
}

export default Projeto
