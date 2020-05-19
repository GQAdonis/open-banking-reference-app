import React from 'react'
import { IconProps } from '../common'

const SvgComponent = ({ fill1 = '#FA775E', fill2 = '#dbe3e3', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" {...props}>
    <defs>
      <path
        id="ic-messages-a"
        d="M21.6857143,0 L1.31428571,0 C0.588142857,0 0,0.596666667 0,1.33333333 L0,17.3333333 C0,18.07 0.588142857,18.6666667 1.31428571,18.6666667 L9.00088571,18.6666667 L16.721,23.888 C16.8307429,23.962 16.9582286,24 17.0857143,24 C17.1921714,24 17.2986286,23.974 17.3958857,23.9213333 C17.6094571,23.8053333 17.7428571,23.5793333 17.7428571,23.3333333 L17.7428571,18.6666667 L21.6857143,18.6666667 C22.4118571,18.6666667 23,18.07 23,17.3333333 L23,1.33333333 C23,0.596666667 22.4118571,0 21.6857143,0 Z"
      />
      <path
        id="ic-messages-c"
        d="M23.6842105,0 L1.31578947,0 C0.588815789,0 0,0.588815789 0,1.31578947 L0,17.1052632 C0,17.8322368 0.588815789,18.4210526 1.31578947,18.4210526 L5.26315789,18.4210526 L5.26315789,24.3421053 C5.26315789,24.5888158 5.40065789,24.8144737 5.61973684,24.9276316 C5.71513158,24.9763158 5.81842105,25 5.92105263,25 C6.05592105,25 6.18947368,24.9592105 6.30328947,24.8769737 L15.3421053,18.4210526 L23.6842105,18.4210526 C24.4111842,18.4210526 25,17.8322368 25,17.1052632 L25,1.31578947 C25,0.588815789 24.4111842,0 23.6842105,0 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 8)">
        <mask id="ic-messages-b" fill="#fff">
          <use xlinkHref="#ic-messages-a" />
        </mask>
        <use fill={fill2} xlinkHref="#ic-messages-a" />
        <g fill={fill2} fillRule="nonzero" mask="url(#ic-messages-b)">
          <rect width="86" height="76" transform="translate(-10 -8)" />
        </g>
      </g>
      <g transform="translate(3 4)">
        <mask id="ic-messages-d" fill="#fff">
          <use xlinkHref="#ic-messages-c" />
        </mask>
        <use fill={fill1} xlinkHref="#ic-messages-c" />
        <g fill={fill1} fillRule="nonzero" mask="url(#ic-messages-d)">
          <rect width="86" height="76" transform="translate(-28 -24)" />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
