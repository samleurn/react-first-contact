import '../css/app.css'
import { useState } from 'react'

export const App = () => {
  const [n, func] = useState(0)
  return (
    <>
      <div className="card">
        <div className="header">
          <div className="dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <p>Click in Hello World</p>
        </div>
        <div className="button_count">
          <button
            onClick={() => {
              return func(n + 1)
            }}
            className="button-hello"
          >
            Hello World
          </button>

          <p>{n}</p>
        </div>
      </div>
    </>
  )
}
