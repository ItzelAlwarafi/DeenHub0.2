import React, { useEffect } from 'react'
import HeaderComp from './HeaderComp'
import useBackgroundColor from './useBackgroundColor'

export default function DuaComp() {
    useBackgroundColor('#6750A4');

    return (
        <div className="DuaPageContainer">
                <div className="secondary-header">
                    <HeaderComp />
                </div>
                
            <h1>Dua component</h1>
        </div>
    )
}
