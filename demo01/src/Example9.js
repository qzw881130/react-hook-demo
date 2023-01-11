import React, { useState, useEffect, useCallback } from 'react';

function useWinSize(){
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onResize);
        console.log('useeffects: resize');

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return size;
}

export const Example9 = () => {
    const size = useWinSize();

    return (
        <div>page size: {size.width}x{size.height}</div>
    )
}