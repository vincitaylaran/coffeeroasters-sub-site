import { useState, useEffect } from "react"

import expansionPanelStyles from "../styles/ExpansionPanel.module.scss"

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
    <div id={`panel-${id}`} className={expansionPanelStyles.container}>
      <div
        className={expansionPanelStyles.question}
        onClick={() => {
          setIsPanelOpen(isPanelOpen ? false : true)
        }}
      >
        <h4 className={expansionPanelStyles.title}>{title}</h4>
      </div>
      <div
        className={expansionPanelStyles.options}
        style={{ display: `${isPanelOpen ? "block" : "none"}` }}
      >
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              className={expansionPanelStyles.option}
              onClick={() => answer.onSelect(id, answer.title)}
            >
              <a href={`#panel-${index + 1}`}>
                <h4>{answer.title}</h4>
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
