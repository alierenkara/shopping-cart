import React from "react"
import { BADGES } from "../badges"
import SellerCard from "../sellercard"

import styles from "./assets/productinfo.module.css"

export default function ProductInfo(props) {
  return (
    <div className="d-flex flex-column">
      <h2>{props.itemName}</h2>
      <div className="d-flex">
        {props.badges &&
          props.badges.length &&
          props.badges.map((item, index) => {
            {
              return BADGES.map((badge, indexb) => {
                return (
                  item.tagName === badge.key && (
                    <div
                      key={indexb}
                      className={styles.productInfoBadgeContainer}
                    >
                      {badge.render(item)}
                    </div>
                  )
                )
              })
            }
          })}
      </div>
      <p className={styles.productInfoDescription}>{props.description}</p>
      <div className={styles.productInfoSeller}>
        <SellerCard seller={props.seller} />
      </div>
    </div>
  )
}
