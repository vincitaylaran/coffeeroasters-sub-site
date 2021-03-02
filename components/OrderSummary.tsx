import { spawn } from "child_process"
import orderSummaryStyles from "../styles/OrderSummary.module.scss"

interface Props {
  answers: string[]
}

const Answer = ({ ...props }) => {
  return <span className={orderSummaryStyles.answer}>{props.answer}</span>
}

const OrderSummary = ({ answers }: Props) => {
  return (
    <div className={orderSummaryStyles.summary}>
      <span>ORDER SUMMARY</span>
      {answers[0] === "Capsule" ? (
        <p
          className={orderSummaryStyles.content}
        >{`"I drink my coffee using ${answers[0]}, with a ${answers[1]} type of bean. ${answers[2]}, sent to me ${answers[4]}"`}</p>
      ) : (
        <p
          className={orderSummaryStyles.content}
        >{`"I drink my coffee as ${answers[0]}, with a ${answers[1]} type of bean. ${answers[2]} ground ala ${answers[3]}, sent to me ${answers[4]}"`}</p>
      )}
    </div>
  )
}

export default OrderSummary
