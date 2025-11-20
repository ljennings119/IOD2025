import { useState } from 'react'
import { UserProvider } from './context/UserContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage.jsx'
import ExplodingBomb from './components/ExplodingBomb.jsx'
import { Clock, ClockDisplay } from './components/Clock.jsx'
import ActivityFinder from './components/ActivityFinder.jsx'
import RefCounter from './components/RefCounter.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'
import ReducerCounter from './components/ReducerCounter.jsx'
import PostListReducer from './components/PostListReducer.jsx'
import SubscribeForm from './components/SubscribeForm.jsx'
import { useData } from './hooks/useData.jsx'
import CustomActivityFinder from './components/customActivityFinder.jsx'
import UserInfo from './components/UserInfo.jsx'
import MyThemeProvider from './context/MyThemeContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import NavBar from './components/NavBar.jsx'
import BitcoinRates from './components/BitcoinRates.jsx'
import { MoodProvider } from './hooks/MoodContext.jsx'
import Emoji from './components/Emoji.jsx'
import Navbar from './components/NavbarM7L4.jsx'
import Home from "./pages/HomeM7L4.jsx";
import Login from "./pages/LoginM7L4.jsx";
import BitcoinPage from "./pages/BitcoinPageM7L4.jsx";


function App() {


  return (
    <>

      {/* <UserProvider>
        <MyThemeProvider>
          <NavBar />
          <AppRoutes />
        </MyThemeProvider>
      </UserProvider> */}

      {/* <BitcoinRates /> */}

      {/* <MoodProvider>
        <div className="App">
          <Emoji />
          <BitcoinRates />
        </div>
      </MoodProvider> */}

      <MoodProvider>
     
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoin" element={<BitcoinPage />} />
        </Routes>

  
    </MoodProvider>



    </>
  )
}



export default App
