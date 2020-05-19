import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { IconProps } from '../common'

const SvgComponent = (props: IconProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#2165E2" d="M3 19.2h18v-1.477H3zM3 6.277h18V4.8H3z" />
      <Path
        d="M18 24H6c-1.657 0-3-1.343-3-3V3c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v18c0 1.657-1.343 3-3 3zm1.5-3V3c0-.828-.672-1.5-1.5-1.5H6c-.828 0-1.5.672-1.5 1.5v18c0 .828.672 1.5 1.5 1.5h12c.828 0 1.5-.672 1.5-1.5z"
        fill="#111"
      />
    </G>
  </Svg>
)

export default SvgComponent
