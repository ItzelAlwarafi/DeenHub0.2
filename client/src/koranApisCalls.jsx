import { useEffect, useState } from 'react'
import axios from 'axios'




const  koranApisCalls = ( )=>{

    
    // api call form koran editions 
useEffect(() => {
    const getEditions = async () => {
        try {
            const response = await axios.get('http://api.alquran.cloud/v1/edition')
            setKoranEditions(response.data.data)
            console.log('Editions:', response.data)
        } catch (error) {
            console.error('Error fetching Quran editions:', error)
        }
    }
    getEditions()
}, [])

}