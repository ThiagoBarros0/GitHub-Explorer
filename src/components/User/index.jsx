import {Container} from './styles'

export function User({user, userRepos}){
    console.log(user)
    return(
        <Container>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <h2>{user.login}</h2>
        <p>{user.bio}</p>
        <section>
            <div>
                <strong>{userRepos?.length}</strong>
                <span>Repositórios</span>
            </div>
            <div>
                <strong>{user.followers}</strong>
                <span>Seguidores</span>
            </div>
            <div>
                <strong>{user.following}</strong>
                <span>Seguindo</span>
            </div>
        </section>
        </Container>
    )
}