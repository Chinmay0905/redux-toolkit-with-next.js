import { useRef } from 'react'
import Header from '../components/header';

export default function Home() {



  const name = useRef()


  return (

    <div>
      <Header />
      <h1>Welcome to the Page!</h1>
      <p>What's your name?</p>
      <input placeholder='Your name' />
      <button>Submit</button>
    </div>
  )
}





