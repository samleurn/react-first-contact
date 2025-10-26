import { count_number } from './content'
import '@css/header.css'

export const Header = () => {
  return (
    <>
      <div
        className="header"
        onClick={() => {
          // document.querySelector('.content')?.classList.toggle('hide')
          // document.querySelector('.')?.classList.toggle('hide')
        }}
      >
        <div className="dots">
          <button
            className="action_dot"
            onClick={() => {
              document.querySelector('.content')?.classList.add('hide')
              document.querySelector('.footer')?.classList.add('hide')
              document
                .querySelector('.header.count')
                ?.classList.add('hide', 'close')
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
        <div className="title">
          <p>
            Click in Hello World
            <span className="header count hide">: {count_number}</span>
          </p>
        </div>
      </div>
    </>
  )
}
