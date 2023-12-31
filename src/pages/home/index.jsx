import './style.css'
import { useEffect } from "react";
function Home() {
useEffect(() => {
  const handleContextmenu = e => {
      e.preventDefault()
  }
  document.addEventListener('contextmenu', handleContextmenu)
  return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
  }
}, [ ])


  return (
    <>
      Home Page     
    </>
  )
}

export default Home