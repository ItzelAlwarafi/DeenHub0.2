import { useEffect, useState } from 'react'
import axios from 'axios'
import { usePrayerContext } from './PrayerContext'

const usePrayerTimes = () => {
    const { selectedDate, location,prayerData, setPrayerData,isLoading, setIsLoading } = usePrayerContext() // Destructured in one line
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            if (location.latitude && location.longitude) {
                const year = selectedDate.getFullYear()
                const month = selectedDate.getMonth() + 1

                try {
                    setIsLoading(true) // Set loading to true before fetching
                    const response = await axios.get(`http://api.aladhan.com/v1/calendar/${year}/${month}`, {
                        params: {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            method: 2
                        }
                    })

                    const prayerDay = response.data.data.find(item => {
                        const date = new Date(item.date.readable)
                        return date.toDateString() === selectedDate.toDateString()
                    })

                    setPrayerData(prayerDay ? prayerDay.timings : null)
                } catch (error) {
                    console.error('Error fetching prayer times:', error)
                    setError('Failed to fetch prayer times')
                } finally {
                    setIsLoading(false)
                }
            }
        }

        fetchPrayerTimes()
    }, [location, selectedDate, setPrayerData, setIsLoading]) // Added dependencies for safety

    return { prayerData, error, isLoading }
}

export default usePrayerTimes
