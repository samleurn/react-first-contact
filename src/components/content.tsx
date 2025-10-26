import { useState } from 'react'
import '@css/content.css'

export let count_number = 0

export const Content = () => {
  const [n, func] = useState(0)
  return (
    <>
      <div className="content">
        <button
          onClick={() => {
            return func(n + 1)
          }}
          className="button_count"
        >
          Hello World
        </button>
      </div>
    </>
  )
}
