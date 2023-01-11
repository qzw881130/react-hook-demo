import React from 'react'
import useResize from './useResize'

function Example9a() {
    const size = useResize(null)

  return (
    <div>size is {size.width}x{size.height}</div>
  )
}

export default Example9a