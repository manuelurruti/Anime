
import './App.css'
import { AppRouter } from './AppRouter'
 import { AnimeProvider } from './context/AnimeProvider'

function App() {


  return (

 
  <AnimeProvider> 
  <AppRouter/>

   </AnimeProvider>
  
  )
}

export default App
