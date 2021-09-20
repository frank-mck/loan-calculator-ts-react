import React from 'react'
import { Button } from './Button'
import { Interest } from './Interest'
import { Sliders } from './Sliders'

export const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <Sliders />
      <Interest />
      <Button />
    </div>
  )
}
