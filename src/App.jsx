import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/Theme'
import Themebtn from './component/Themebtn'
import Card from './component/Card'

function App() {
 
const [thememode,setThemeMode]=useState("light")
const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}


//actual change in theme

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(thememode)
},[thememode])
  return (

  <ThemeProvider value={{thememode,darkTheme,lightTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
           <Card />
        </div>
    </div>
</div>
  </ThemeProvider>
  )
}

export default App
