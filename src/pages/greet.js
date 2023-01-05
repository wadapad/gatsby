import * as React from 'react'
import Greeting from "../components/greeting"
// Step 1: Import React

// Step 2: Define your component
const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" />
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
    </div>
  )
}

export const Head = () => <title>Hello from Me</title>
// Step 3: Export your component
export default SayHello


// Rendering the <Greeting> component
