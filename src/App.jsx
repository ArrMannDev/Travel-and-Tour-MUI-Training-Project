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
            <Route path="/cars" element={<h1>About Page</h1>} />
            <Route path="/flights" element={<FlightPage />} />
            <Route path="/trains" element={<h1>Contact Page</h1>} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
