import { NavMenu } from './components/NavMenu'
import { CardPage } from './pages/CardPage'

export default function App() {

  return (
    <div className='flex flex-col px-3 justify-between items-center min-h-screen min-w-full'>
      <NavMenu></NavMenu>
      <CardPage></CardPage>
      <footer className='footer footer-center p-3 text-base-content'>
        <aside>
          <p></p>
        </aside>
      </footer>
    </div>
  )
}
