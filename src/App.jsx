import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageLayout from './pages/PageLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
