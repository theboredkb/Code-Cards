import { Card } from './components/Card'
import { NavMenu } from './components/NavMenu'

export default function App() {
  return (
    <div className='flex flex-col px-3 justify-between items-center min-h-screen min-w-full'>
      <NavMenu></NavMenu>
      <Card></Card>
      <footer className='footer footer-center p-3 text-base-content'>
        <aside>
          <p></p>
        </aside>
      </footer>
    </div>
  )
}
