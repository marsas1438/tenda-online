import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/Themes';
import RoutePath from './routers/Rutas';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <RoutePath/>
    </ThemeProvider>
  )
}

export default App
