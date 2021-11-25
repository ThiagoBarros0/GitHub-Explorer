import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { Container } from './style'

export function SearchBar({setUser, setUserRepos}){
    const [searchedValue, setSearchedValue] = useState('')
    
    function getUserData(e){
        e.preventDefault();

        try{
            fetch(`http://api.github.com/users/${searchedValue}`)
            .then(response => response.json())
            .then(data => setUser(data))

            fetch(`http://api.github.com/users/${searchedValue}/repos`)
            .then(response => response.json())
            .then(data => setUserRepos(data))
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <Container>
            <h1>Github Explorer</h1>
            <form onSubmit={getUserData}>
                <div>
                <span>github.com/</span>
                <input type="text" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
                </div>
                <button type='submit'>
                    <FiSearch />
                </button>
            </form>
        </Container>
    )
}
