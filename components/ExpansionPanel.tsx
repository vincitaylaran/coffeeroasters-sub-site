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
  answers: Answer[]
}

const ExpansionPanel = ({ id, title, shouldBeOpen, answers }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

  useEffect(() => {
    if (shouldBeOpen) {
      setIsPanelOpen(true)
    }
  }, [shouldBeOpen])

  return (
    <div className={expansionPanelStyles.container} id={`panel-${id}`}>
      <div
        className={expansionPanelStyles.question}
        onClick={() => {
          setIsPanelOpen(isPanelOpen ? false : true)
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
        style={{ display: `${isPanelOpen ? "block" : "none"}` }}
      >
        {answers.map((answer, index) => {
          return (
            <a href={`#panel-${index + 1}`} key={index}>
              <div
                className={expansionPanelStyles.answer}
                onClick={() => answer.onSelect(id, answer.title)}
              >
                {/* TODO: Scroll behavior when selecting another answer for a question. */}

                <h4>{answer.title}</h4>
                <p>{answer.description}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default ExpansionPanel
