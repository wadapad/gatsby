// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Mara's Tutorial.</p>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page1</title>

// Step 3: Export your component
export default IndexPage