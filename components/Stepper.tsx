import { useState, useEffect } from "react"
import stepperStyles from "../styles/Stepper.module.scss"
import { deepClone } from "../utils"

interface Props {
  currentStep: number
  answers: string[]
  onStep?: (stepNum: number) => void
}

const Stepper = ({ currentStep, onStep, answers }: Props) => {
  const [steps, setSteps] = useState<any[]>([
    { title: "Preferences", isCurrentStep: false },
    { title: "Bean Type", isCurrentStep: false },
    { title: "Quantity", isCurrentStep: false },
    { title: "Grind Option", isCurrentStep: false, isDisabled: false },
    { title: "Deliveries", isCurrentStep: false },
  ])

  useEffect(() => {
    let stepsCopy = deepClone(steps)
    stepsCopy = stepsCopy.map((step, index) =>
      index === currentStep
        ? { title: step.title, isCurrentStep: true }
        : { title: step.title, isCurrentStep: false }
    )
    stepsCopy[3].isDisabled = answers[0] === "Capsule"
    setSteps(stepsCopy)
  }, [currentStep, answers[0]])

  return (
    <ul className={stepperStyles.steps}>
      {steps.map((step, i) => (
        <li
          style={{
            // Opacity will not go down to 0.2 if apply the step__disabled class for some reason so I decided to do it inline
            opacity:
              answers[0] === "Capsule" && step.title === "Grind Option"
                ? 0.2
                : "",
          }}
          key={i}
          onClick={() => onStep(i)}
          className={`${
            step.isCurrentStep
              ? stepperStyles.step__current
              : stepperStyles.step
          } }`}
        >
          <a href={`#panel-${i}`}>
            <span className={stepperStyles.stepNum}>0{i + 1} </span>
            <span className={stepperStyles.stepTitle}>{step.title}</span>
          </a>

          {/* Includes the horizonal line in all steps except for the final step */}
          {i !== steps.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  )
}

export default Stepper
