import React from "react"
import { AdditionalInfoItem } from "../additionalinfoitem"
import Image from "../image"

import styles from "./assets/priceinfo.module.css"

const formatAmount = (amount = 0) => {
  let formattedAmount = ""

  formattedAmount = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  }).format(amount)

  return formattedAmount.slice(1)
}

const getDiscountPrice = (amount = 0, discount = 0) => {
  return formatAmount(amount + amount * (discount / 100))
}

export default function PriceInfo(props) {
  return (
    <div className="d-flex flex-column justify-content-start">
      <h2>{formatAmount(props.price)}</h2>
      <div className={styles.discountTag}>
        <span className={styles.discountTagWithoutDiscount}>
          {getDiscountPrice(props.price, props.discount)}&nbsp;
        </span>
        <span>{`%${props.discount} bizden olsun`}</span>
      </div>
      <div style={{ marginTop: "32px" }}>
        <AdditionalInfoItem
          icon={"/svgs/cargo.svg"}
          text="Ücretsiz Kargo"
          underline
        />
        {props.instalment && (
          <AdditionalInfoItem
            icon={"/svgs/credit-card.svg"}
            text={props.instalment}
          />
        )}
        <AdditionalInfoItem
          icon={"/svgs/home.svg"}
          text="Paran Güvende"
          underline
        />
      </div>
      <div style={{ marginTop: "32px" }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            marginRight: "24px"
          }}
        >
          <Image src="/svgs/like-button.svg" width={56} height={56} />
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            marginRight: "24px"
          }}
        >
          <Image src="/svgs/like-button.svg" width={56} height={56} />
        </button>
        <button
          style={{
            height: "56px",
            paddingRight: "48px",
            paddingLeft: "48px",
            borderRadius: "8px"
          }}
        >
          Hemen Al
        </button>
      </div>
    </div>
  )
}
