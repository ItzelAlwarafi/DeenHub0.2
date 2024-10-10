
import Headercomp from "./Headercomp"

import MenuBoxesComp from './MenuBoxesComp'
import PrayerTrackerComp from './PrayerTrackerComp'
import Dayprayertimes from './Dayprayertimes'


export default function LandingPage (){

    return( 
        
        <div className="landingPageContainer">

            <div className=" headerComponent">
                <Headercomp/>
            </div>
            <div className="daily-prayer-timescontainer">
                <Dayprayertimes/>
            </div>
            <div className="menu-boxes-container">
                <MenuBoxesComp/>
            </div>
            <div className="prayer-tracker-container">
                <PrayerTrackerComp/>
               
            </div>
                
                       





        </div>
    )
}
