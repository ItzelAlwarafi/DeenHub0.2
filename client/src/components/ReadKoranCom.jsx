import useBackgroundColor from './useBackgroundColor'
import HeaderComp from './HeaderComp'
import React, { useEffect } from 'react'



export default function ReadKoranComp (){
    useBackgroundColor('#6750A4')
    return(
        <div className="read-Koran-Container">
             <div className="secondary-header">
                    <HeaderComp />
                </div>
            <h1> Read koran component</h1>
        </div>
    )
}