import orderSummaryStyles from "../styles/OrderSummary.module.scss"

interface Props {
  answers: string[]
}

export const Content = ({ answers }: Props) => {
  return (
    <div className={orderSummaryStyles.content}>
      <span>
        "I drink my coffee {answers[0] === "Capsule" ? "using" : "as"}{" "}
      </span>
      <span className={orderSummaryStyles.answer}>
        {answers[0] ? answers[0] : "_____"}
      </span>
      <span>, with a </span>
      <span className={orderSummaryStyles.answer}>
        {answers[1] ? answers[1] : "_____"}
      </span>
      <span> type of bean. </span>
      <span className={orderSummaryStyles.answer}>
        {answers[2] ? answers[2] : "_____"}
      </span>

      {answers[0] !== "Capsule" && (
        <>
          <span> ground ala </span>
          <span className={orderSummaryStyles.answer}>
            {answers[3] ? answers[3] : "_____"}
          </span>
        </>
      )}

      <span>, sent to me </span>
      <span className={orderSummaryStyles.answer}>
        {answers[4] ? answers[4] : "_____"}
      </span>
      <span>."</span>
    </div>
  )
}

const OrderSummary = ({ answers }: Props) => {
  return (
    // TODO: Use bg-order-summary.png as the background of the summary class
    <div id="summary" className={orderSummaryStyles.summary}>
      <div className={orderSummaryStyles.title}>ORDER SUMMARY</div>
      <Content answers={answers} />
    </div>
  )
}

export default OrderSummary
