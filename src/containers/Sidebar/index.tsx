import { useState, useEffect } from 'react'

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

type UserData = {
  login: string
  name: string
  bio: string
}

const Sidebar = (props: Props) => {
  const [repos, setRepos] = useState<UserData | null>(null)

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
        {repos && (
          <>
            <Titulo fontSize={20}>{repos.name}</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
              {repos.login}
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
              {repos.bio}
            </Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
          </>
        )}
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
