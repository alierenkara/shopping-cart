import React, { Component } from "react"
import Image from "./../image"
import styles from "./assets/badge.module.css"

export const GuaranteeBadge = (props) => {
  return (
    <div
      className={styles.guaranteeBadgeContainer}
      style={{ backgroundColor: props.tagBackgroundColor }}
    >
      <Image
        src="/svgs/guarantee.svg"
        width={props.width || 32}
        height={props.height || 32}
      />
      <span
        className={styles.guaranteeBadgeText}
        style={{ color: props.tagTextColor }}
      >
        GARANTİLİ
      </span>
    </div>
  )
}

export const AlmostNewProductBadge = (props) => {
  return (
    <div
      className={styles.almostNewProductBadgeContainer}
      style={{ backgroundColor: props.tagBackgroundColor }}
    >
      <span
        className={styles.almostNewProductBadgeText}
        style={{ color: props.tagTextColor }}
      >
        SIFIR AYARINDA
      </span>
    </div>
  )
}

export const RatingBadge = (props) => {
  return (
    <div className={styles.ratingBadgeContainer}>
      <Image
        src="/svgs/star.svg"
        width={props.width || 24}
        height={props.height || 24}
      />
      <span className={styles.ratingBadgeText}>{props.rating}</span>
    </div>
  )
}

export const BADGES = [
  {
    key: "SIFIR AYARINDA",
    render: AlmostNewProductBadge
  },
  {
    key: "GARANTILI",
    render: GuaranteeBadge
  }
]
