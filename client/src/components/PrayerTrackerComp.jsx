import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md" // Import checked and unchecked icons
import { BsFillSunriseFill, BsSunsetFill } from "react-icons/bs"
import { MdSunny, MdOutlineNightlightRound } from "react-icons/md"
import { useState } from "react"

const iconMapping = { // Icon for prayers
    Fajr: <BsFillSunriseFill />,
    Dhuhr: <MdSunny />,
    Asr: <MdSunny />,
    Maghrib: <BsSunsetFill />,
    Isha: <MdOutlineNightlightRound />,
};

export default function PrayerTrackerComp() {
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']
    const [checkedPrayers, setCheckedPrayers] = useState({}) 

    const handleCheckboxChange = (prayer) => {
        setCheckedPrayers((prev) => ({
            ...prev,
            [prayer]: !prev[prayer], // Toggle the checked state
        }))
    }

    return (
        <div className="Prayertracker-pagecontainer">
            <h1 className="prayer-Tracker-Title"> Prayer Tracker</h1>
             <div className="Prayertracker-prayers-container">
            {prayerNames.map((prayerName) => (
                <div key={prayerName} className="prayer-item">
                    <span onClick={() => handleCheckboxChange(prayerName)}>
                        {checkedPrayers[prayerName] ? (
                            <MdCheckBox className="prayer-checkbox" />
                        ) : (
                            <MdCheckBoxOutlineBlank className="prayer-checkbox" />
                        )}
                    </span>
                    <h1 className="prayer-tracker-icon">{iconMapping[prayerName]}</h1>
                    <h1 className="prayer-tracker-name">{prayerName}</h1>
                  
                </div>
            ))}
            </div>
        </div>
    )
}


