import React from "react"
import { RatingBadge } from "../badges"
import Image from "./../image"

import styles from "./assets/sellercard.module.css"

export default function SellerCard(props) {
  return (
    <div className={styles.sellerCardContainer}>
      <Image src="/svgs/user.svg" width={24} height={24} />
      <p className={styles.sellerCardText}>
        Satıcı:
        <span className={styles.sellerCardName}>&nbsp;{props.seller.name}</span>
      </p>
      <RatingBadge rating={props.seller.rating} />
    </div>
  )
}
