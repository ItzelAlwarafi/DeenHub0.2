import { FaQuran } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaHandsHolding } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";


export const MenuData = [
    {
        title: 'Quran',
        path: '/readKoran',
        icon:<FaQuran />,
        cName: 'nav-text'
    },
    {
        title: 'Prayer Times',
        path: '/prayertimes',
        icon:<GiPrayerBeads />,
        cName: 'nav-text'
    },
    {
        title: 'Duas',
        path: '/duas',
        icon:<FaHandsHolding />,
        cName: 'nav-text'
    },
    {
        title: 'qibla',
        path: '/qibla',
        icon:<FaLocationArrow />,
        cName: 'nav-text'
    },

 
   
]