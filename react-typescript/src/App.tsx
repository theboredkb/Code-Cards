import { Card } from './components/Card'
import { NavMenu } from './components/NavMenu'

export default function App() {
  const extraProps = {
    title: 'My Title',
    question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aperiam, ullam laboriosam. Vel amet exercitationem est laudantium? 
      Recusandae blanditiis quasi nihil repudiandae reiciendis voluptate eveniet 
      qui facere ipsam dolores! Officia, ea.`,
    answer: 'My Answer',
    extra: 'Extra Property',
  }
  return (
    <div className='flex flex-col px-2 justify-between items-center min-h-screen min-w-full'>
      <NavMenu></NavMenu>
      <Card {...extraProps} />
      <footer className='footer footer-center p-3 text-base-content'>
        <aside>
          <p>Project created by Jia Yang for Code Jam</p>
        </aside>
      </footer>
    </div>
  )
}
