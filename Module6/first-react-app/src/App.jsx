import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'
import Pet from './components/Pet'
import FullName from './components/FullName.jsx'
import ComplexComment from './components/ComplexComment.jsx'
import Callout from './components/Callout.jsx'
import MoviesList from './components/MoviesLists.jsx'
import MoodChanger from './components/MoodChanger.jsx'
import BirthdayTranslator from './components/BirthdayTranslator.jsx'  
import Weather from './components/Weather.jsx'
import LoginForm from './components/LoginForm.jsx'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage.jsx'
import ExplodingBomb from './components/ExplodingBomb.jsx'
import Greeting from "./components/Greeting"
import BigCats from "./components/BigCats"
import Emoji from './components/Emoji.jsx'
import Calculator from './components/Calculator.jsx'


// function ExampleComponent() {
//   return (

//     <div className="ExampleComponent componentBox">
//       <h1>My Example Component</h1>
//       <p>My first React component!</p>
//     </div>
//   )
// }

// function Welcome(props) { // custom Welcome component
//   return (
    
//     <div className="Welcome componentBox">
//       {/* if the 'name' prop exists, render it on the screen */}
//       <h3>Welcome {props.name}!</h3>
//       {/* if this component has children, render them here */}
//       {props.children}
//     </div>
//   )
// }


function App() {
  // const [count, setCount] = useState(0)

  // const spiderman = {
  //   name: 'Spiderman',
  //   alterEgo: 'Peter Parker',
  //   catchPhrase: 'With great power comes great responsibility'
  // }
  // // single parent <div> element
  // const spideyJSX = (<div>
  //   <h3>{spiderman.name}</h3>
  //   <blockquote>{spiderman.catchPhrase}</blockquote>
  //   <cite>{spiderman.alterEgo}</cite>
  // </div>);

  // // single parent fragment element
  // const spideyJSXFragment = (<>
  //   <h3>{spiderman.name}</h3>

  //   <blockquote>{spiderman.catchPhrase}</blockquote>
  //   <cite>{spiderman.alterEgo}</cite>
  // </>);

  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'https://placekitten.com/g/64/64',
  //   },
  // };
  

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}

      {/* {spideyJSX}
      {spideyJSXFragment}
      <ExampleComponent />
      <Welcome name="students">
        <p>Children of Welcome</p>
      </Welcome>
{/* Renders the component with no props */}
{/* <PropsDisplayer /> */}
{/* Renders the component with a single prop 'myProp' */}
{/* <PropsDisplayer myProp="first prop"/> */}
{/* Renders the component with multiple props - add your own! */}
{/* <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}
{/* String prop value uses quotes, numeric prop value uses curly braces
*/}
{/* <PropsDisplayer name="Harry Styles" age={29}/> */}
{/* Array prop value - uses curly braces */}
{/* <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */}
{/* Variable prop values - uses curly braces */}
{/* <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> */}
{/* Our PropsDisplayer component won’t handle stringifying other
components */}
{/* <PropsDisplayer component={<ExampleComponent />}/> - fails for this
example but the concept is still valid */}
{/* state and country are not specified, will use defaults */}
{/* <City name="Sydney" /> */}
{/* country is not specified, will use default */}
{/* <City name="Melbourne" state="VIC" /> */}
{/* all values are specified, won't use defaults */}
{/* <City name="Chicago" state="Illinois" country="USA" />
<City name="Newcastle">
<div>Newcastle is a harbour city in the Australian state of New South
Wales.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
</City>
<Pet type="dog" name="Rex" colour="brown" /> */} 
{/* <FullName first="Kendrick" middle=" idk " last="Lamar" />
<ComplexComment author={{name: 'Jane Doe', avatarUrl: 'https://via.placeholder.com/64'}} text="This is our comment" date={new Date()}/>
<ComplexComment author={comment.author} date={comment.date} text={comment.date} />   */}
    {/* <Callout title="Nested React Component"
message="Simple message with a fancy box applied via composition">
<FullName first="Elon" last="Musk" />
</Callout> */}
    {/* <MoviesList /> */}
    {/* <MoodChanger /> */}
    {/* <BirthdayTranslator />
    <Weather /> */}
    {/* <LoginForm /> */}
    {/* <ErrorBoundary FallbackComponent={ErrorMessage}><ExplodingBomb/></ErrorBoundary> */}
    <div>
      <Greeting name="John">This is your custom greeting message!!</Greeting>
      <Greeting>Hello from Lauren</Greeting> 
       </div>

       <div>
        <h1>Big Cats</h1>
        <BigCats />
       </div>

       <div>
        <h1>Mood Change</h1>
        <Emoji />
       </div>

       <Calculator />
    
    </>
  )
}



export default App
