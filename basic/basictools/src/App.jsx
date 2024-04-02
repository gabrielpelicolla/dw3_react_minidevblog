import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import FormHooks from './components/Hooks/FormHooks'
import ConditionalRender from './components/ConditionalRender/ConditonalRender'
import ShowUserName from './components/ShowUserName/ShowUserName'
import { useState } from 'react'

function App() {
  const [users, setUser] = useState([
    {active: true, userName:'Icoma'},
    {active: false, userName:'Sena'},
    {active: true, userName:'Hammer'},
    {active: true, userName:'Salomao'}
  ])
  return (
    <>
    <NavBar></NavBar>
    <Form></Form>
    <Footer></Footer>
    <FormHooks></FormHooks>
    <ConditionalRender></ConditionalRender>
    <ShowUserName list={users}></ShowUserName>
    </>
  )
}

export default App
