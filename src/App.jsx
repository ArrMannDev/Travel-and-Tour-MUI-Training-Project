import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '../theme';
import HomePage from './pages/HomePage';
import LayOutPage from './pages/LayOutPage';
import FlightPage from './pages/FlightPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<LayOutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/flights" element={<FlightPage />} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
