import React, { useState, useEffect } from "react"
import Breadcrumb from "../components/breadcrumb"
import Slider from "../components/slider"
import axios from "axios"
import styles from "../styles/Home.module.css"
import ProductInfo from "../components/productinfo"
import PriceInfo from "../components/priceinfo"

const MOCK_MENU = ["Telefon", "Cep Telefonu", "Apple Cep Telefonu"]

function Home({ data }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "500px" }}
      >
        <div className={styles.sliderContainer}>
          <Slider images={data.sliderImage} />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Breadcrumb dataArray={MOCK_MENU} />
        </div>
        <div>
          <ProductInfo
            itemName={data.itemName}
            description="İlk günden beri kılıfında özenle kullandım. Sıra sende!"
            seller={data.seller}
            badges={data.tag}
          />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px", width: "100%" }}>
          <PriceInfo
            price={data.price}
            instalment={data.instalment}
            currencyTypeName={data.currencyTypeName}
            discount={5}
          />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(
    "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/1"
  )
  // Pass data to the page via props
  return {
    props: {
      data: {
        id: "69ca6f51f90b4abe862f3b6f8e873290",
        itemName: "Galaxy Note 20 Lite 64GB Siyah",
        price: 6500,
        currencyTypeName: "TL",
        instalment: "1084 x 6 aya kadar taksit",
        sliderImage: [
          {
            imageUrl:
              "https://i0.shbdn.com/photos/99/27/00/x16_984992700k1p.jpg"
          },
          {
            imageUrl:
              "https://i0.shbdn.com/photos/99/27/00/x16_984992700rui.jpg"
          },
          {
            imageUrl:
              "https://i0.shbdn.com/photos/99/27/00/x16_984992700jpa.jpg"
          },
          {
            imageUrl:
              "https://i0.shbdn.com/photos/99/27/00/x16_9849927009k5.jpg"
          },
          {
            imageUrl:
              "https://i0.shbdn.com/photos/99/27/00/x16_9849927009k5.jpg"
          }
        ],
        description: "İlk günden beri kılıfında özenle kullandım. Sıra sende!",
        tag: [
          {
            tagName: "SIFIR AYARINDA",
            tagBackgroundColor: "#f7f7f7",
            tagTextColor: "#000000"
          },
          {
            tagName: "GARANTILI",
            tagBackgroundColor: "#48a551",
            tagTextColor: "#FFFFFF"
          }
        ],
        seller: {
          name: "Mustafa D****",
          description:
            "Annem doğum günümde teknosadan hediye olarak almış, kırmadan kullandım ama başka bir telefon almak istediğim için satıyorum. ekrandaki çatlak dılında sorun yok fiyatı düşük tuttum o yüzden.",
          rating: 8.3,
          totalSold: 12
        }
      }
    }
  }
}

export default Home
