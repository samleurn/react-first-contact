import { Header } from './components/header'
import { Content } from './components/content'
import { Footer } from './components/footer'
// import { createContext } from 'react'
import '../css/app.css'

// const CountContext = createContext(0)

export const App = () => {
  return (
    <>
      <div className="card">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}
