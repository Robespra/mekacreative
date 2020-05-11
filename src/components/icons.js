import React from 'react'
import './symbol-defs.svg'

const Icon = (props) => (
  <svg className={`icon-svg ${props.name}`}>
    <use xlinkHref={`symbol-defs.svg#${props.name}`} />
  </svg>
)

export default Icon