import { ImMenu } from "react-icons/im"
import { IoMdHome } from "react-icons/io"
import { Link } from "react-router-dom"
import SideMenu from "./SideMenu"
import { useState, useEffect } from "react"
import { usePrayerContext } from '../PrayerContext'

const formatTimeTo12Hour = (date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const period = hours < 12 ? 'AM' : 'PM'
    hours = hours % 12 || 12 // Convert to 12-hour format
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`
}

export default function Headercomp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { selectedDate, setSelectedDate, prayersData } = usePrayerContext()
// console.log(selectedDate,prayersData)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

   
    useEffect(() => {
       
        const today = new Date()
        setSelectedDate(today)
    }, [setSelectedDate])

    const currentTime = selectedDate ? new Date(selectedDate) : new Date();
    
    const formattedTime = formatTimeTo12Hour(currentTime);

    return (
        <div className="headerContainer">
            <div className="top-menu">
                <Link to="#" className="menu-icon" id="sandwich-menu-icon" onClick={toggleMenu}>
                    <ImMenu />
                </Link>
                <Link to="/" className="menu-icon" id="home-menu-icon">
                    <IoMdHome />
                </Link>
            </div>
            <div className="user-location-data">
                <h2 className="header-regular-text" id="user-city-name">Modesto</h2>
                <h1 className="header-Bold-text" id="user-time">{formattedTime}</h1>
                <h2 className="header-regular-text">Magrib ends in</h2>
            </div>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    )
}
