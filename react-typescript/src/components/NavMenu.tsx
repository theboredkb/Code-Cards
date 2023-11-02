export function NavMenu() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-2xl'>codeCards</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary className='text-lg'>Settings</summary>
              <ul className='p-2 bg-base-100 z-10 shadow'>
                <li>
                  <a className='text-purple-300 hover:text-purple-300'>
                    Language
                  </a>
                </li>
                <li>
                  <a className='text-error hover:text-error'>Reset Cards</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
