import '@css/header.css'
import { Dots } from './dots'

export const Header = () => {
  return (
    <>
      <div className="header">
        <Dots />
        <div className="title">
          <p>
            Click in Hello World
            <span className="header count hide">: 0</span>
          </p>
        </div>
      </div>
    </>
  )
}
