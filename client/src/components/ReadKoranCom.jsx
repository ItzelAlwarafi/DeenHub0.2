import useBackgroundColor from './useBackgroundColor';
import HeaderComp from './HeaderComp';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReadKoranComp() {
    useBackgroundColor('#6750A4');

    const editionsToFetch = [
        'quran-simple-clean', // Arabic Edition
        'en.hilali',          // English Edition by Hilali & Khan
        'en.transliteration'  // Transliteration
    ];

    const [quranData, setQuranData] = useState({
        arabic: null,
        english: null,
        transliteration: null,
    });
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [surahs, setSurahs] = useState([]);

    // API call for Surahs
    useEffect(() => {
        const fetchSurahs = async () => {
            try {
                setLoading(true);
                const responses = await Promise.all(editionsToFetch.map(edition => 
                    axios.get(`http://api.alquran.cloud/v1/quran/${edition}`)
                ));
                const data = responses.map(response => response.data.data.surahs);
                setQuranData({
                    arabic: data[0],
                    english: data[1],
                    transliteration: data[2],
                });
                setSurahs(data[0]); // Assuming all editions have the same surahs
            } catch (error) {
                console.error('Error fetching Quran:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSurahs();
    }, []);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < surahs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="read-Koran-Container">
            <div className="secondary-header">
                <HeaderComp />
            </div>
            <div className='surah-selector'>
                <button className='arrow-button' onClick={handlePrevious} disabled={currentIndex === 0}>
                    &lt;
                </button>
                <span className='Surah-display'>
                    {surahs[currentIndex]?.name} ({surahs[currentIndex]?.englishName})
                </span>
                <button className='arrow-button' onClick={handleNext} disabled={currentIndex === surahs.length - 1}>
                    &gt;
                </button>
            </div>
                    
                <div className='ayahs-container'>
                    {quranData.arabic?.[currentIndex]?.ayahs.map((ayah, index) => (
                        <div key={ayah.number} className='ayah-container'>
                            <div className='ayah-arabic'>
                                <p>{ayah.number}. {ayah.text}</p> 
                            </div>
                            <div className='ayah-transliteration'>
                                <p>{quranData.transliteration?.[currentIndex]?.ayahs[index]?.text}</p>
                            </div>
                            <div className='ayah-english'>
                                <p>{quranData.english?.[currentIndex]?.ayahs[index]?.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
           
        </div>
    )
}
