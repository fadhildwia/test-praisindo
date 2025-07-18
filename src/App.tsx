import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './components/layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
