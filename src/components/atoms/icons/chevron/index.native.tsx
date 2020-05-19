import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '../common'

const Chevron = (props: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      d="M9.444 20L8 18.761 13.796 12 8 5.239 9.444 4l6.327 7.382c.305.355.305.881 0 1.237L9.444 20z"
      fill="#111"
      fill-rule="nonzero"
    />
  </Svg>
)

export default Chevron
