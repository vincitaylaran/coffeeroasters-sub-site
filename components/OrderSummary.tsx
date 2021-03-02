interface Props {
  answers: string[]
}

const OrderSummary = ({ answers }: Props) => {
  return (
    <div>
      {answers[0] === "Capsule" ? (
        <p>{`"I drink my coffee using ${answers[0]}, with a ${answers[1]} type of bean. ${answers[2]}, sent to me ${answers[4]}"`}</p>
      ) : (
        <p>{`"I drink my coffee as ${answers[0]}, with a ${answers[1]} type of bean. ${answers[2]} ground ala ${answers[3]}, sent to me ${answers[4]}"`}</p>
      )}
    </div>
  )
}

export default OrderSummary
