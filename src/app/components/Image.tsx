import React from 'react'
import NextImage, { ImageProps } from "next/image";

const base = process.env.NODE_ENV === 'production' ? '/me' : ''

const Image = (props: ImageProps) => {
  return (
    <NextImage {...props} src={`${base}${props.src}`} />
  )
}

export default Image
