import { useState, useEffect } from "react"
import stepperStyles from "../styles/Stepper.module.scss"
import { deepClone } from "../utils"

interface Props {
  currentStep: number
}

const Stepper = ({ currentStep }: Props) => {
  const [steps, setSteps] = useState<any[]>([
    { title: "Preferences", isCurrentStep: false },
    { title: "Bean Type", isCurrentStep: false },
    { title: "Quantity", isCurrentStep: false },
    { title: "Grind Option", isCurrentStep: false },
    { title: "Deliveries", isCurrentStep: false },
  ])

  useEffect(() => {
    let stepsCopy = deepClone(steps)
    stepsCopy = stepsCopy.map((step, index) =>
      index === currentStep
        ? { title: step.title, isCurrentStep: true }
        : { title: step.title, isCurrentStep: false }
    )
    setSteps(stepsCopy)
  }, [currentStep])

  return (
    <ul className={stepperStyles.steps}>
      {steps.map((step, i) => (
        <li
          key={i}
          className={step.isCurrentStep ? stepperStyles.step__current : ""}
        >
          0{i + 1} {step.title}
        </li>
      ))}
    </ul>
  )
}

export default Stepper
