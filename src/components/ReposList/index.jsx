import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"
import { List } from "../Li"


export function ReposList({user,userRepos, setIsReposListActive}) {
    return (
        <Container>
        <div>
        <button type="button" onClick={() => setIsReposListActive(false)}>
            <FiArrowLeft />
            Voltar
        </button>
        <h1>Repositórios {user.name}</h1>
        </div>

        <ul>
        {userRepos.map(repo => (
            //      <li key={repo.id}>
            //      <h2>{repo.name}</h2>
            //      <p>{repo.description}</p>
            //      <a href={repo.html_url}>Acessar repositório</a>
            //  </li>
            <List repo={repo}/>
            ))}
        </ul>
        </Container>
    )
}