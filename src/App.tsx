
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts'
import { AppRoutes } from './routes';
import { MuiNavbar } from './components/Navbar/Navbar';

// Pinterest red: '#cb2027'

export default function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MuiNavbar />
        <AppRoutes />
      </BrowserRouter> 
    </AppThemeProvider>
  )
}