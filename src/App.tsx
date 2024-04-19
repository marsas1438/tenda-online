import { ThemeProvider } from '@mui/material/styles'
import HomePage from './faces/HomePage';
import './App.css'
import { theme } from './styles/Themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
