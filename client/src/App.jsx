import { Routes, Route } from 'react-router-dom'
import { PrayerProvider } from './PrayerContext'
import LandingPage from './components/LandingPage'
import PrayerTimesComp from './components/PrayerTimesComp'
import QiblaComp from './components/QiblaComp'
import DuaComp from './components/DuaComp'
import LogInComp from './components/LogIn'
import SignUp from './components/SignUp'
import ReadKoranComp from './components/ReadKoranCom'
import './App.css'


function App() {
  return (
    <PrayerProvider> {/* Wrap your application in PrayerProvider */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prayertimes" element={<PrayerTimesComp />} />
        <Route path="/readKoran" element={<ReadKoranComp />} />
        <Route path="/duas" element={<DuaComp />} />
        <Route path="/qibla" element={<QiblaComp />} />
        <Route path="/logIn" element={<LogInComp />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </PrayerProvider>
  )
}

export default App
