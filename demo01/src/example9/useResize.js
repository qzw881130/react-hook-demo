import React, {useState, useCallback, useEffect} from 'react'

function useResize() {
  const [size, setSize] = useState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
  });
}, size);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
        window.removeEventListener('resize', onResize);
    }
  }, [])

  return size;
}

export default useResize