import React from 'react'
import { IconProps } from '../common'

const SvgComponent = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M14.308 14.25H9.692C5.444 14.25 2 17.608 2 21.75v.487l.457.198c.127.056.359.145.69.258.542.183 1.174.366 1.893.536C7.08 23.71 9.413 24 12 24c2.587 0 4.92-.289 6.96-.771.719-.17 1.351-.353 1.892-.536.332-.113.564-.202.691-.258l.457-.198v-.487c0-4.142-3.444-7.5-7.692-7.5zm6.04 7.026c-.496.168-1.08.337-1.75.495-1.926.455-4.137.729-6.598.729-2.461 0-4.672-.274-6.598-.729-.67-.158-1.254-.327-1.75-.495l-.092-.032c.263-3.077 2.908-5.494 6.132-5.494h4.616c3.224 0 5.869 2.417 6.132 5.494l-.093.032z"
        fill="#2165E2"
      />
      <path
        d="M5.846 6c0-3.314 2.755-6 6.154-6s6.154 2.686 6.154 6c0 3.43-2.844 6.75-6.154 6.75S5.846 9.43 5.846 6zm1.539 0c0 2.655 2.222 5.25 4.615 5.25 2.393 0 4.615-2.595 4.615-5.25 0-2.485-2.066-4.5-4.615-4.5-2.549 0-4.615 2.015-4.615 4.5z"
        fill="#000"
      />
    </g>
  </svg>
)

export default SvgComponent
