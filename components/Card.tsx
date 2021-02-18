import cardStyles from "../styles/Card.module.scss"
import Image from "next/image"

interface Props {
  src: string
  title: string
  description: string
}

const Card = ({ src, title, description }: Props) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.icon}>
        <Image src={src} alt="card img" width={72} height={62} />
      </div>
      <div className={cardStyles.info}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
