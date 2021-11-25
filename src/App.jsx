import {useState} from 'react'
import { GlobalStyle } from './styles/global';
import {Container} from './styles/Home'
import {SearchBar} from './components/SearchBar'
import {User} from './components/User'
import {ReposList} from './components/ReposList'

function App() {
  const[user,setUser] = useState()
  const[userRepos, setUserRepos] = useState()


  return (
    <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos}/>
      {user && <User user={user} userRepos={userRepos} />}
      <ReposList/>
      <GlobalStyle />
    </Container >
  )
}

export default App;
