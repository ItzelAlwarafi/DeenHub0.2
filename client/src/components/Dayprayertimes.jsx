import { useState, useEffect } from "react"
import { usePrayerContext } from '../PrayerContext'
import usePrayerTimes from '../usePrayerTimes'
import { BsFillSunriseFill } from "react-icons/bs"
import { MdSunny } from "react-icons/md"
import { BsSunsetFill } from "react-icons/bs"
import { MdOutlineNightlightRound } from "react-icons/md"

const formatTimeTo12Hour = (time) => {
    const [hourMinute] = time.split(' ') // Get time without timezone
    const [hour, minute] = hourMinute.split(':') // Split hour and minute
    const hour12 = hour % 12 || 12 // Convert to 12-hour format
    const period = hour < 12 ? 'AM' : 'PM' // Determine AM/PM
    return `${hour12}:${minute} ${period}` // Return formatted time
}

const iconMapping = { // icon for prayers
    Fajr:<BsFillSunriseFill />,
    Dhuhr: <MdSunny />, 
    Asr: <MdSunny />,   
    Maghrib: <BsSunsetFill />,
    Isha:<MdOutlineNightlightRound />,
}

export default function Dayprayertimes() {
    const { selectedDate, setSelectedDate, location } = usePrayerContext()
    // Get prayer times data, loading state, and error state from the custom hook
    const { prayerData, error, isLoading } = usePrayerTimes(selectedDate, location)


    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] // prayers to show

    const dailyPrayers = prayerData
        ? Object.entries(prayerData) // Convert object to array of [key, value] pairs
            .filter(([key]) => prayerNames.includes(key)) // Filter for specific prayer names
            .map(([key, value]) => ({
                name: key,
                time: value // Prepare an object with name and time
            }))
        : []

   

        return (
            <div className="daily-prayer-container">
                {isLoading ? (
                    <div className="loading-Message">Loading....</div>
                ) : error ? (
                    <div>{error}</div> // Display error message
                ) : dailyPrayers && dailyPrayers.length > 0 ? ( // Check if dailyPrayers exists and has items
                    dailyPrayers.map(({ name, time }) => (
                        <div className="prayer" id={name.toLowerCase()} key={name}>
                            <h1 className="icon-prayer">{iconMapping[name]}</h1> 
                            <h2 className="prayer-name-daily">{name}</h2> 
                            <h2 className="time-daily">{formatTimeTo12Hour(time)}</h2> 
                        </div>
                    ))
                ) : ( // Message if no prayer times are available
                    <div>No prayer times available for today.</div>
                )}
            </div>
        )
    }
