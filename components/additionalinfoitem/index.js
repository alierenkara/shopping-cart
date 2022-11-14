import React from "react"
import Image from "../image"

import styles from "./assets/additionalinfoitem.module.css"

export const AdditionalInfoItem = (props) => {
  return (
    <div className={styles.additionalInfoItem}>
      <Image
        src={props.icon}
        width={24}
        height={24}
        className={styles.additionalInfoItemIcon}
      />
      <span style={{ textDecoration: props.underline && "underline" }}>
        {props.text}
      </span>
    </div>
  )
}
