import React from 'react'

const MineIcon = (props: { className?: string, color: string }) => {
  return (
    <svg className={props.className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13_145)">
        <path d="M10.1914 17.8075L9.9043 16.2032L0.287079 13.6364L9.9043 12.1925L10.622 11.3904L6.17225 1.44386L13.3493 8.82354H15.933L22.1053 0.320862L19.0909 10.5882L19.9522 12.9947L29.7129 15.5615L20.0957 17.0054L18.5167 18.9305L20.9569 29.6792L15.3589 20.8556L13.0622 20.2139L5.311 27.1123L10.1914 17.8075ZM0.287079 13.6364L9.9043 12.1925L0.287079 13.6364Z"
          fill={props.color} />
        <path d="M14.7847 24.7059C20.0961 24.7059 24.4019 20.109 24.4019 14.4385C24.4019 8.768 20.0961 4.17114 14.7847 4.17114C9.47324 4.17114 5.16747 8.768 5.16747 14.4385C5.16747 20.109 9.47324 24.7059 14.7847 24.7059Z"
          fill={props.color} />
      </g>
      <defs>
        <clipPath id="clip0_13_145">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default MineIcon
