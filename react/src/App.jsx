
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { SignUp } from './Components/Signup'
import { Navbar } from './Components/Navbar'
import { PrivateRoute } from './Routes/PrivateRoute'
import { useSelector } from 'react-redux'
import { Classes } from './Components/Classes'

function App() {

  const {isAuthenticated}=useSelector((state)=>state.login)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* private */}
        <Route path='/' element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home/>
        </PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/classes/:id' element={<Classes/>} /> 
      </Routes>
    </div>
  )
}

export default App
