import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
import { App } from '@routes'
import "@/config/i18n";
import '@/index.scss'
import '@/sass/App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  // </React.StrictMode>
)
