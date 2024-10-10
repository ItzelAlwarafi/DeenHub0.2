import React, { createContext, useState, useEffect, useContext } from 'react'

// Create a context for managing prayer-related state
const PrayerContext = createContext()

// Provider component to encapsulate state and provide it to child components
export const PrayerProvider = ({ children }) => {
    // State for the currently selected date
    const [selectedDate, setSelectedDate] = useState(new Date())
    // State to hold the user's geographical location
    const [location, setLocation] = useState({ latitude: null, longitude: null })
    // State for storing prayer times data
    const [prayerData, setPrayerData] = useState(null)
    // Loading state to indicate if data is being fetched
    const [isLoading, setIsLoading] = useState(true)
    // Error state to handle any errors encountered
    const [error, setError] = useState(null)

    // Effect to get the user's geolocation on component mount
    useEffect(() => {
        const getLocation = () => {
            // Check if geolocation is supported by the browser
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // On success, extract latitude and longitude from position
                        const { latitude, longitude } = position.coords
                        // Update location state
                        setLocation({ latitude, longitude })
                        // Set loading to false as data has been successfully fetched
                        setIsLoading(false) 
                    },
                    (error) => {
                        // Handle geolocation error
                        setError("Unable to retrieve location.")
                        setIsLoading(false) // Update loading state
                        console.error(error) // Log the error for debugging
                    }
                )
            } else {
                // Handle case where geolocation is not supported
                setError("Geolocation is not supported by this browser.")
                setIsLoading(false) // Update loading state
            }
        }
        // Call the function to get the location
        getLocation()
    }, []) // Empty dependency array ensures this runs only on mount

    return (
        // Provide the context values to child components
        <PrayerContext.Provider value={{ selectedDate, setSelectedDate, location, prayerData, setPrayerData, isLoading, setIsLoading, error }}>
            {children}
        </PrayerContext.Provider>
    )
}

// Custom hook to consume the PrayerContext values easily
export const usePrayerContext = () => {
    return useContext(PrayerContext)
}
