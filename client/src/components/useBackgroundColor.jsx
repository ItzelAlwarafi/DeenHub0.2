import { useEffect } from "react";

const useBackgroundColor = (color) => {
    useEffect(() => {
        const rootElement = document.getElementById('root');
        
        // Set styles using the provided color
        rootElement.style.backgroundColor = color;  // Use the color parameter
        rootElement.style.height = '20rem'; // Set other styles
        rootElement.style.marginLeft = '-10px';
        rootElement.style.marginTop = '-10px';

        // Cleanup function to reset the styles when the component unmounts
        return () => {
            rootElement.style.backgroundColor = '';
            rootElement.style.height = '';
            rootElement.style.marginLeft = '';
            rootElement.style.marginTop = '';
        };
    }, [color]); // Effect runs when color changes
};

export default useBackgroundColor;