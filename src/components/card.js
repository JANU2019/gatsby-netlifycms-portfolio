import React from "react"
import { Image } from "@components"

const Card = ({ filename }) => {
  return (
    <div className="card--wrapper">
      <Image filename={filename} />
    </div>
  )
}

export default Card
