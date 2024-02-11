import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde
      quas fuga atque quasi deserunt aperiam libero asperiores incidunt
      perspiciatis veniam doloribus iure placeat sunt ad, ullam modi saepe
      veritatis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=leonardodecastro-programmer&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leonardodecastro-programmer&layout=compact&langs_count=7&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre
