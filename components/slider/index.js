import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

export default function Slider(props) {
  return (
    props.images &&
    props.images.length && (
      <Swiper pagination={true} modules={[Pagination]}>
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              width={props.imageWidth || 500}
              height={props.imageHeight || 500}
              src={image.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  )
}
