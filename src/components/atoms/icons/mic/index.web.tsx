import React from 'react'
import { IconProps } from '../common'

const SvgComponent = (props: IconProps) => (
  <svg width={36} height={36} viewBox="0 0 36 36" {...props}>
    <g fill="#2165E2" fillRule="evenodd">
      <path d="M31 16.559c0-.31-.756-.559-1.07-.559-.314 0-1.066.25-1.066.559 0 6.163-5.098 11.176-11.364 11.176-6.266 0-11.364-5.013-11.364-11.176 0-.31-.752-.559-1.066-.559-.314 0-1.07.25-1.07.559 0 6.21 5.707 12.356 11.795 13.177v3.146H8.977c-.313 0-.568 1.25-.568 1.56 0 .308.255.558.568.558h17.046c.313 0 .568-.25.568-.559 0-.309-.255-1.559-.568-1.559h-6.818v-3.146C25.293 28.916 31 22.769 31 16.559z" />
      <path d="M22.6 15.34a.567.567 0 0 1 0-1.135H26v-3.41h-3.4a.567.567 0 0 1 0-1.136H26V8.523C26 3.823 22.187 0 17.5 0 12.813 0 9 3.823 9 8.523v1.136h3.4a.567.567 0 0 1 0 1.136H9v3.41h3.4a.567.567 0 0 1 0 1.136H9v1.136C9 21.177 12.813 25 17.5 25c4.687 0 8.5-3.823 8.5-8.523v-1.136h-3.4z" />
    </g>
  </svg>
)

export default SvgComponent
