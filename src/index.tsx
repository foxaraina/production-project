import { render } from 'react-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/config/i18n/i18n'
import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
