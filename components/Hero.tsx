import { ReactChild, ReactNode } from "react"
import heroStyles from "../styles/Hero.module.scss"

import { useState, useEffect } from "react"

type Background = "coffeepress" | "blackcup" | "whitecup"

interface Props {
  background: Background
  title: string
  content: string
  children?: ReactNode
}

const Hero = ({ background, title, content, children }: Props) => {
  return (
    <div id={heroStyles[background]} className={heroStyles.container}>
      <div className={heroStyles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
