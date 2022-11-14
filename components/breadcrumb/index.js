import React from "react"
import Image from "./../image"
import styles from "./assets/breadcrumb.module.css"

export default function Breadcrumb(props) {
  const { dataArray } = props
  return (
    <div className={styles.breadcrumbContainer}>
      <Image
        src={"/svgs/home.svg"}
        width={24}
        height={24}
        alt="home-icon"
        className={styles.homeItemLink}
      />
      <div className="d-flex">
        {dataArray &&
          dataArray.length &&
          dataArray.map((item, index) => {
            return (
              <div key={index} className={styles.breadcrumbItemLinkContainer}>
                <Image
                  src={"/svgs/right-arrow.svg"}
                  width={48}
                  height={48}
                  alt="right-arrow-icon"
                />
                <a className={styles.breadcrumbItemLink}>{item}</a>
              </div>
            )
          })}
      </div>
    </div>
  )
}
