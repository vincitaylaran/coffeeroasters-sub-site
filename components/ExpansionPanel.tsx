import { useState, useEffect } from "react"

import expansionPanelStyles from "../styles/ExpansionPanel.module.scss"
import ArrowIcon from "./ArrowIcon"

export type Answer = {
  title: string
  description: string
  onSelect(id: number, option: string)
}

export interface Props {
  id: number
  title: string
  shouldBeOpen: boolean
  currentPanel?: number
  userChoice?: string
  disabled?: boolean
  answers: Answer[]
}

const ExpansionPanel = ({
  id,
  title,
  shouldBeOpen,
  answers,
  currentPanel,
  userChoice,
  disabled = false,
}: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

  useEffect(() => {
    if (shouldBeOpen || currentPanel === id) {
      setIsPanelOpen(true)
    }

    if (disabled) {
      setIsPanelOpen(false)
    }
  }, [shouldBeOpen, disabled, currentPanel])

  return (
    <div className={expansionPanelStyles.container} id={`panel-${id}`}>
      <div
        className={`${expansionPanelStyles.question} ${
          disabled ? expansionPanelStyles.question__disabled : ""
        }`}
        onClick={() => {
          setIsPanelOpen(isPanelOpen ? false : true)

          // If the user selected "Capsule" for the first question, then the option to select whether
          // if the coffee should be ground should be disabled. Coffee in capsules are already ground,
          // so therefore the question should be disabled.
          if (disabled) {
            setIsPanelOpen(false)
          }
        }}
      >
        <h4 className={expansionPanelStyles.title}>{title}</h4>
        <div
          className={`${expansionPanelStyles.arrow} ${
            isPanelOpen ? expansionPanelStyles.arrow__flipped : ""
          }`}
        >
          <ArrowIcon />
        </div>
      </div>
      <div
        className={expansionPanelStyles.answers}
        style={{ display: `${isPanelOpen ? "grid" : "none"}` }}
      >
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              className={`${expansionPanelStyles.answer} ${
                userChoice && userChoice === answer.title
                  ? expansionPanelStyles.answer__selected
                  : ""
              }`}
              onClick={() => answer.onSelect(id, answer.title)}
            >
              {/* TODO: Scroll behavior when selecting another answer for a question. */}
              <a href={`#panel-${currentPanel}`}>
                <h4 className={expansionPanelStyles.answerTitle}>
                  {answer.title}
                </h4>
                <p>{answer.description}</p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExpansionPanel
