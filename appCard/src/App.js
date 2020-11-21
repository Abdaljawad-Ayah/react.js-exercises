import React from 'react'
import './App.css'
import Card from './Component/Card'
import Card1 from './Component/Card1'
import Card2 from './Component/Card2'
import Card3 from './Component/Card3'
import Card4 from './Component/Card4'
import Card5 from './Component/Card5'
import Card6 from './Component/Card6'

// import Card2 from './Component/Card'
import { FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  )
}

export default App

// class App extends React.Component
// {
//   constructor(props) {
//     super(props);

//     this.state = {
//       header: "Header from state...",
//       content: "Content from state...",
//       footer: "Going on foot..."
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.header}</h1>
//         <h2>{this.state.content}</h2>
//         <h3>{this.state.footer}</h3>
//       </div>
//     )
//   }
// }
// export default App;
