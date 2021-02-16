import Image from "next/image"
import collectionImgStyles from "../styles/CollectionImage.module.scss"

interface Props {
  src: string
  width?: number | string
  height?: number | string
  title: string
  description: string
}

const CollectionImage = ({ src, width, height, title, description }: Props) => {
  return (
    <div className={collectionImgStyles.coffee}>
      <img src={src} alt="coffee img" />
      <div className={collectionImgStyles.coffeeInfo}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CollectionImage
