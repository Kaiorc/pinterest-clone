import { AppBar, Button } from '@mui/material'
// import SearchAppBar from './components/Header/index1'
// import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts'
import { AppRoutes } from './routes';


// Pinterest red: #cb2027

export default function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        {/* <Header />
        <Routes>
          <Route path="/" element={ <Button variant="contained" color='primary' onClick={() => { toggleTheme }}> Página Inicial </Button> } />
          <Route path="/explore" element={<p> Explorar </p>} />
        </Routes>*/}
        <AppRoutes />
      </BrowserRouter> 
    </AppThemeProvider>
  )
}