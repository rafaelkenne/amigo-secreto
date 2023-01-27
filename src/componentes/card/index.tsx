import React from "react"
import './estilos.css'

interface IProps {
  children: React.ReactNode
}

const Card = ({ children }: IProps) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card