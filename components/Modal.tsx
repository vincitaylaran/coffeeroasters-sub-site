import modalStyles from "../styles/Modal.module.scss"

interface Props {
  answers: string[]
  isClosed?: boolean
  onModal?: () => void
}

const Modal = ({ answers, isClosed, onModal }: Props) => {
  const pricePerMonth = "14.00"

  return (
    <div
      onClick={onModal}
      className={`${modalStyles.modal} ${
        isClosed && modalStyles.modal__hidden
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation() // Prevents the modal from closing when clicking on the window
        }}
        className={modalStyles.window}
      >
        <div className={modalStyles.title}>
          <h4>Order Summary</h4>
        </div>
        <div className={modalStyles.content}>
          <h4>
            {`"I drink my coffee ${answers[0] === "Capsule" ? "using" : "as"} ${
              answers[0]
            }, with a ${answers[1]} type of bean. ${answers[2]}${
              answers[0] !== "Capsule" ? " ground ala " + answers[3] : ""
            }, sent to me ${answers[4]}."`}
          </h4>

          <p className={modalStyles.confirmation}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className={modalStyles.pricePerMonth}>
            <h3>${pricePerMonth} / mo</h3>
            <button onClick={onModal}>
              <span>Checkout</span>
              <span className={modalStyles.btnText}>
                - ${pricePerMonth} / mo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
