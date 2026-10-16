import { Navbar } from './components/layout/Navbar/Navbar'
import { Footer } from './components/layout/Footer/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Education } from './pages/Education'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'

const routes: Record<string, React.ComponentType> = {
  '/': Home,
  '/about': About,
  '/skills': Skills,
  '/projects': Projects,
  '/education': Education,
  '/contact': Contact,
}

function App() {
  const Page = routes[window.location.pathname] ?? NotFound

  return (
    <>
      <a className="skip-link" href="#page-content">Skip to content</a>
      <Navbar />
      <Page />
      <Footer />
    </>
  )
}

export default App
