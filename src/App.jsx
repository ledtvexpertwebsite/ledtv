import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='w-full overflow-hidden '>
      <Home/>
</div>
  )
}

export default App
