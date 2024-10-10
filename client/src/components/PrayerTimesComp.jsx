import React, { useEffect, useCallback } from 'react'
import useBackgroundColor from './useBackgroundColor'
import HeaderComp from './HeaderComp'
import { usePrayerContext } from '../PrayerContext'
import usePrayerTimes from '../usePrayerTimes'

// Helper function to format time to 12-hour format
const formatTimeTo12Hour = (time) => {
    const [hourMinute] = time.split(' ') // Get time without timezone
    const [hour, minute] = hourMinute.split(':') // Split hour and minute
    const hour12 = hour % 12 || 12 // Convert to 12-hour format
    const period = hour < 12 ? 'AM' : 'PM' // Determine AM/PM
    return `${hour12}:${minute} ${period}` // Return formatted time
}


export default function PrayerTimesComp() {
    // Set background color using custom hook
    useBackgroundColor('#6750A4')

    // Access state and functions from PrayerContext
    const { selectedDate, setSelectedDate, location } = usePrayerContext()
    // Get prayer times data, loading state, and error state from the custom hook
    const { prayerData, error, isLoading } = usePrayerTimes(selectedDate, location)

  

    // Function to format the selected date for display
    const formatDate = (selectedDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } // Define date format options
        return selectedDate.toLocaleDateString(undefined, options) // Format date to locale string
    }

    // Handle going to the previous day
    const handlePrevDay = useCallback(() => {
        setSelectedDate(prevDate => {
            const newDate = new Date(prevDate) // Create a new Date object from the previous date
            newDate.setDate(newDate.getDate() - 1) // Decrement the day by 1
            return newDate // Return the new date
        })
    }, [setSelectedDate])

    // Handle going to the next day
    const handleNextDay = useCallback(() => {
        setSelectedDate(prevDate => {
            const newDate = new Date(prevDate) // Create a new Date object from the previous date
            newDate.setDate(newDate.getDate() + 1) // Increment the day by 1
            return newDate // Return the new date
        })
    }, [setSelectedDate])

    return (
        <div className="PrayerTimesPageContainer">
            <div className="secondary-header">
                <HeaderComp /> {/* Render the header component */}
            </div>
            <div className="date-selector">
                {/* Button to go to the previous day */}
                <button className="arrow-button" onClick={handlePrevDay} aria-label="Previous day">&lt;</button>
                {/* Display the formatted selected date */}
                <span className="date-display">{formatDate(selectedDate)}</span>
                {/* Button to go to the next day */}
                <button className="arrow-button" onClick={handleNextDay} aria-label="Next day">&gt;</button>
            </div>
            <div className='prayerTimes-data-container'>
                {/* Conditional rendering based on loading, error, and prayer data states */}
                {isLoading ? (
                    <div className="loading-Message">Loading...</div> // Show loading indicator
                ) : error ? (
                    <div>{error}</div> // Display error message
                ) : prayerData ? (
                    <div className='prayer-time-container'>
                        {Object.entries(prayerData).map(([key, value]) => (
                            <div className='prayer-container' key={key}>
                                <h1 className='prayer-name'>{key}:</h1> 
                                <h1 className='prayer-time'>{formatTimeTo12Hour(value)}</h1> 
                                <button 
                                    className='remindMe-btn-prayer'
                                    // Add reminder functionality to button
                                >
                                    Remind Me
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No prayer times available for this date.</div> // Message for no available prayer times
                )}
            </div>
        </div>
    )
}

