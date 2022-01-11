import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { Container } from './style'
import{toast,ToastContainer} from 'react-toastify'

export function SearchBar({setUser, setUserRepos}){
    const [searchedValue, setSearchedValue] = useState('')
    
    
    
    function getUserData(e){
        e.preventDefault();

        try{
            fetch(`http://api.github.com/users/${searchedValue}`)
            .then(response => response.json())
            // .then(data => setUser(data))
            .then(data =>{
                if(data.message === 'Not Found'){
                    setUser(null)
                    setUserRepos(null)

                    // toast.error('🦄 Usuário não encontrado!', {
                    //     position: "top-center",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     });

                } else{
                    setUser(data)

                    fetch(`http://api.github.com/users/${searchedValue}/repos`)
                    .then(response => response.json())
                    .then(data => setUserRepos(data))

                }
            })
            
            
            
        }catch(error){
            console.log(error)
        }
    }

    // Tentativa
    // function valueInput (input)  {
    //     this.input = input;
    //   };

    return (
        <Container>
            <h1>Github Explorer</h1>
            <form onSubmit={getUserData}>
                <div>
                <span>github.com/</span>
                
                {/* Forma correta */}
                <input type="text" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />

                {/* Tentativa */}
                {/* <input ref={this.input} /> */}
                
                </div>
                <button type='submit'>
                    <FiSearch />
                </button>
            </form>
        </Container>
    )
}
