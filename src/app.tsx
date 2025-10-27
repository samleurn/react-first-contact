import React, { createContext, useContext, useState } from 'react'
import '../css/layout.css'
import '../css/app.css'
import '../css/header.css'
import '../css/content.css'
import '../css/footer.css'

interface CountContextType {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const CountContext = createContext<CountContextType | undefined>(undefined)

export const App = () => {
  let [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <CountContext.Provider value={{ count, setCount }}>
          <Header />
          <Content />
          <Footer />
        </CountContext.Provider>
      </div>
    </>
  )
}

const Header = () => {
  let { count } = useContext(CountContext)
  return (
    <>
      <div className="header">
        <Dots />
        <div className="title">
          <p>
            Click in Hello World
            <span className="header count hide">: {count}</span>
          </p>
        </div>
      </div>
    </>
  )
}

const Dots = () => {
  let { setCount } = useContext(CountContext)
  return (
    <>
      <div className="dots">
        <button
          className="action_dot"
          onClick={() => {
            document.querySelector('.content')?.classList.add('hide')
            document.querySelector('.footer')?.classList.add('hide')
            document
              .querySelector('.header.count')
              ?.classList.add('hide', 'close')
            setCount(0)
          }}
        >
          <span className="dot_red"></span>
        </button>
        <button
          className="action_dot"
          onClick={() => {
            document.querySelector('.content')?.classList.remove('hide')
            document.querySelector('.footer')?.classList.remove('hide')

            const element = document.querySelector('.header.count')
            const count: string[] = element ? [...element.classList] : []
            if (count.some((_) => _ == 'min')) {
              element?.classList.add('hide')
            }
            if (count.some((_) => _ == 'close')) {
              element?.classList.remove('close')
            }
          }}
        >
          <span className="dot_yellow"></span>
        </button>
        <button
          className="action_dot"
          onClick={() => {
            document.querySelector('.content')?.classList.add('hide')
            document.querySelector('.footer')?.classList.add('hide')

            const element = document.querySelector('.header.count')
            const count: string[] = element ? [...element.classList] : []

            if (!count.some((_) => _ == 'close')) {
              document
                .querySelector('.header.count')
                ?.classList.replace('hide', 'min')
            }
          }}
        >
          <span className="dot_green"></span>
        </button>
      </div>
    </>
  )
}

const Content = () => {
  let { count, setCount } = useContext(CountContext)
  // let
  return (
    <>
      <div className="content">
        <button
          onClick={() => {
            setCount(count + 1)
          }}
          className="button_count"
        >
          Hello World
        </button>
      </div>
    </>
  )
}

const Footer = () => {
  let { count, setCount } = useContext(CountContext)
  return (
    <>
      <div className="footer">
        <p className="count">Count: {count}</p>
      </div>
    </>
  )
}
