import './App.css';

const Topheader = (props) => {
  return <div>
  <div style={{display: "flex", justifyContent: "space-between", padding: "30px"}}>
  <div style={{display: 'flex', flexDirection: "column"}}>
    <h2 className='topheader'>{props.name}</h2>
    <p className='topP'>{props.funfact}</p>
    </div>
    <img src='neco-arc.png' className='profilePic'></img>
  </div>
  <hr className='hrtag'></hr>
  </div>
}

const TheThrees = (prop) => {
  return <div style={{padding: "30px", paddingBottom: "0px"}}>
    <h2 className='threesName'>{prop.name}</h2>
    <p className='threesTime'>{prop.time}</p>
    <p className='threesLorem'>{prop.lorem}</p>
  </div>
}

/*name: "Jón Þór",
  info: "lorem"*/


const Testingtext = (props) => {
  const newtext = props.text + props.text
  return <p>{newtext}</p>
}

const App = () => {
  return (
    <div>
      <header className="App-header">
          <Topheader name = "Jón Þór" funfact = "Warhammer fanboy, caffeine addict"/>
          <TheThrees name = "Oddi" time = "2018 - Present" 
          lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
          
          <TheThrees name = "NTV Student" time = "2021 - present" 
          lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
          
          <TheThrees name = "Oddi" time = "2018 - Present" 
          lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
      </header>
    </div>
  );
}

export default App;
