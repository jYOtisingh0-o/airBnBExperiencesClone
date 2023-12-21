import { useState } from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Card from './components/Card'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item =>{
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <NavBar/>
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
