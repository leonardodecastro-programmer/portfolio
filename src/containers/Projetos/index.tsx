import { useState, useEffect } from 'react'

import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => {
  const [repos, setRepos] = useState([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    setEstaCarregando(true)
    fetch(`https://api.github.com/users/leonardodecastro-programmer/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false)
          setRepos(resJson)
        }, 3000)
      })
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      {estaCarregando ? (
        <p>Carregando...</p>
      ) : (
        <Lista>
          <>
            {repos.map(({ id, name, description, html_url }) => (
              <li key={id}>
                <Projeto
                  name={name}
                  description={description}
                  html_url={html_url}
                />
              </li>
            ))}
          </>
        </Lista>
      )}
    </section>
  )
}

export default Projetos
