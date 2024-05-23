// import { useAppThemeContext } from '../shared/contexts';
import { Routes, Route, Navigate } from 'react-router-dom';
import ExploreGrid from '../components/ExploreGrid/ExploreGrid';
import TodayGrid from '../components/TodayGrid/TodayGrid';

export const AppRoutes = () => {

  return (
    <Routes>
      {/* <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Toggle theme</Button>} /> */}
      <Route path="/ideas" element={<ExploreGrid />} />
      <Route path="/today" element={<TodayGrid />} />
      <Route path="*" element={<Navigate to="/ideas" />} />
    </Routes>
  );
}