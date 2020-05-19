import React from 'react'
import { IconProps } from '../common'

const SvgComponent = ({ fill = '#2165E2', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" {...props}>
    <defs>
      <path
        id="ic-home-a"
        d="M23.8426667,9.96821708 L12.2871111,0.106090744 C12.121393,-0.0353635814 11.878607,-0.0353635814 11.7128889,0.106090744 L0.157333333,9.96821708 C0.0575884779,10.0533577 4.40953333e-05,10.1784569 0,10.3102536 L0,24.2068861 C3.94745964e-16,25.1971956 0.795938223,26 1.77777778,26 L8,26 C8.24545989,26 8.44444444,25.7992989 8.44444444,25.5517215 L8.44444444,17.9309875 L15.5555556,17.9309875 L15.5555556,25.5517215 C15.5555556,25.7992989 15.7545401,26 16,26 L22.2222222,26 C23.2040618,26 24,25.1971956 24,24.2068861 L24,10.3102536 C23.9999559,10.1784569 23.9424115,10.0533577 23.8426667,9.96821708 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(6 4)">
      <mask id="ic-home-b" fill="#fff">
        <use xlinkHref="#ic-home-a" />
      </mask>
      <use fill={fill} xlinkHref="#ic-home-a" />
      <g fill={fill} fillRule="nonzero" mask="url(#ic-home-b)">
        <rect width="86" height="76" transform="translate(-31 -24)" />
      </g>
    </g>
  </svg>
)

export default SvgComponent
