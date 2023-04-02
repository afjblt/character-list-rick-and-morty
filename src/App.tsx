import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { List } from './components/List'
import { Favorites } from './components/Favorites'
import { FavoriteProvider } from './contexts/FavoriteContext'
import { Menu } from './components/Menu'

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route 
            path='/'
            element={<List />}
          />
          <Route 
            path='/favorites'
            element={<Favorites />}
          />  

        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App
