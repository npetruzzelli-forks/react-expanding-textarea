import React from 'react'
import Textarea from '../../lib/ExpandingTextarea'

const handleChange = e => {
  console.log('Changed value to: ', e.target.value)
}

const App = () =>
  <main role="main" className="l--constrained">
    <h1>Expanding Textarea for React.js</h1>
    <a href="https://github.com/rpearce/react-expanding-textarea">GitHub Repo</a>
    <br />
    <br />
    <Textarea
      className="textarea"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      maxLength="3000"
      name="pet[notes]"
      onChange={ handleChange }
      placeholder="Enter additional notes..."
    />
  </main>

export default App
