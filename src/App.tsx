import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { theme } from './styles/Themes';
import RoutePath from './routers/Rutas';
import Header from './faces/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
        <RoutePath/>
    </ThemeProvider>
  )
}

export default App
