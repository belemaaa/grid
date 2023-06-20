import React from 'react'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'

const MainPage = () => {
  return (
    <div className="flex grid-cols-3">
        <Column1 className=""/>
        <Column2 className=""/>
        
    </div>
  )
}

export default MainPage