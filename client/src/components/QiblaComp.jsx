import useBackgroundColor from './useBackgroundColor'
import HeaderComp from './HeaderComp'
import React, { useEffect } from 'react'


export default function QiblaComp (){
    useBackgroundColor('#6750A4')
    return (

        <div className="qiblaPageComponent">
             <div className="secondary-header">
                    <HeaderComp />
                </div>
            <h1>qibla component</h1>
        </div>
    )
}