import { useState, useEffect } from 'react'
import { ReactNode, ReactElement } from 'react'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

export type Props = {
  id: string
  name: string
  description: string
  html_url: string
}

const Projeto = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/leonardodecastro-programmer/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [])

  return repos.map(({ id, name, description, html_url }: Props) => (
    <Card key={id}>
      <div>
        <Titulo>{name}</Titulo>
        <Paragrafo tipo="secundario">{description}</Paragrafo>
        <LinkBotao>
          <a href={html_url}>Visualizar</a>
        </LinkBotao>
      </div>
    </Card>
  ))
}

export default Projeto
