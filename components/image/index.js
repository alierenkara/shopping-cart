import React, { Component } from "react"
import NextImage from "next/image"
import cn from "classnames"

const Image = (props) => {
  const { className, text, ...cleanedProps } = props
  return (
    <NextImage
      className={cn("shopping-cart-image", className)}
      {...cleanedProps}
      alt="default"
    />
  )
}

Image.displayName = "Image"
export default Image
