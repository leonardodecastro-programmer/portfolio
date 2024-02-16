import { useState, useEffect } from 'react'

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/leonardodecastro-programmer`)
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [])

  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        {repos.map(({ login }) => (
          <>
            <Titulo fontSize={20}>Leonardo de Castro</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
              {login}
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
              Desenvolvedor Full Stack Python
            </Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
          </>
        ))}
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
