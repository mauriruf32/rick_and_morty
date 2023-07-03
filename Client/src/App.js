import './App.css';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx'
import Detail  from './components/Detail/Detail.jsx';
import Error404 from './components/error404/Error404';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)


   const URL = 'http://localhost:3001/rickandmorty/'

   async function login({email, password}){
      try {
       const { data } =  await axios(`${URL}/login?email=${email}&password=${password}`)
 
       const { access } = data
 
       setAccess(access)
       access && navigate('/home')
 
      } catch ({response}) {
          const { data } = response
          // console.log(data.message);
          alert(data.message)
      }
    }

   useEffect(()=>{
      !access && navigate('/')
   },[access])


   async function onSearch(id) {
      // eslint-disable-next-line eqeqeq
      if(characters.find(char => char.id == id )){
         alert(`Ya existe el personaje con el id ${id}`)
         return
      }
    try {
      const { data } =  await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      // console.log(data);
      setCharacters( oldChars => [ ...oldChars, data ] )

    } catch (error) {
      // console.log(error);
      alert(error.response.data)
    }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   return (
      <div className='App'>
        { pathname !== '/' && <Nav onSearch={onSearch}/> }
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
         
      </div>
   );
}

export default App;
