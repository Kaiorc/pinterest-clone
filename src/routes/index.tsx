// import { useAppThemeContext } from '../shared/contexts';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomGrid from '../components/CardGrid/CardGrid';

export const AppRoutes = () => {

  return (
    <Routes>
      {/* <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Toggle theme</Button>} /> */}
      <Route path="/pagina-inicial" element={<CustomGrid />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}