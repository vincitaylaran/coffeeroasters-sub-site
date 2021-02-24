import { useState } from "react"

import expansionPanelStyles from "../styles/ExpansionPanel.module.scss"

type Option = { title: string; description: string; onSelect }

interface Props {
  title: string
  options: Option[]
}

const ExpansionPanel = ({ title, options }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

  return (
    <div className={expansionPanelStyles.container}>
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
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={expansionPanelStyles.option}
              onClick={() => option.onSelect(option.title)}
            >
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExpansionPanel
