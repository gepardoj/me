import React from 'react'

const ChartIcon = (props: { className?: string, color: string }) => {
  return (
    <svg className={props.className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5V23.75C5 24.0815 5.1317 24.3995 5.36612 24.6339C5.60054 24.8683 5.91848 25 6.25 25H25M10 20L13.125 13.125L16.875 16.875L21.5913 8.75L25 12.0837"
        stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default ChartIcon
