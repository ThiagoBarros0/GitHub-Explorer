import {useState} from 'react'
import { GlobalStyle } from './styles/global';
import {Container} from './styles/Home'
import {SearchBar} from './components/SearchBar'
import {User} from './components/User'
import {ReposList} from './components/ReposList'

function App() {
  const[user,setUser] = useState()
  const[userRepos, setUserRepos] = useState()
  const[isReposListActive, setIsReposListActive] = useState(false)


  return (
    <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />
      
      {isReposListActive ? userRepos && (
        <ReposList user={user} userRepos={userRepos} setIsReposListActive={setIsReposListActive}/>
      ) : user &&(
        <User user={user} userRepos={userRepos} setIsReposListActive={setIsReposListActive} />
      )}
      
      
      
      {/* {user && <User user={user} userRepos={userRepos} />} */}
      
      
      {/* {userRepos && <ReposList user={user} userRepos={userRepos}/>} */}
      
      
      <GlobalStyle />
    </Container >
  )
}

export default App;
