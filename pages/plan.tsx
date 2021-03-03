import { useState } from "react"

import Head from "next/head"

import planStyles from "../styles/Plan.module.scss"

import { deepClone } from "../utils"

import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import ExpansionPanel from "../components/ExpansionPanel"
import OrderSummary from "../components/OrderSummary"
import Stepper from "../components/Stepper"
import Modal from "../components/Modal"

type Answer = { title: string; description: string }
type Question = { question: string; answer: string; answers: Answer[] }

const subscribe = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "How do you drink your coffee?",
      answers: [
        {
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
      answer: "",
    },
    {
      question: "What type of coffee?",
      answers: [
        {
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
      answer: "",
    },
    {
      question: "How much would you like?",
      answers: [
        {
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
      answer: "",
    },
    {
      question: "Want us to grind them?",
      answers: [
        {
          title: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
      answer: "",
    },
    {
      question: "How often should we deliver?",
      answers: [
        {
          title: "Every week",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          title: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          title: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
      answer: "",
    },
  ])
  const [currentPanel, setCurrentPanel] = useState<number>(0)
  const [isModalClosed, setIsModalClosed] = useState<boolean>(true)

  const onSelect = (panelId: number, answer: string) => {
    let questionsCopy = deepClone(questions)
    const firstAnswer = questions[0].answer
    questionsCopy[panelId].answer = answer
    setQuestions(questionsCopy)

    // When selecting an answer from the "How much would you like?" question, the app skips the "Want us to grind them?"
    // question and scrolls down to the final question. This only occurs if the user selects "Capsule" as the answer
    // to the first question.
    if (firstAnswer === "Capsule" && currentPanel === 2) {
      setCurrentPanel(panelId + 2)
    } else {
      setCurrentPanel(panelId + 1)
    }
  }

  const shouldBeDisabled = () => {
    if (questions[0].answer === "Capsule") {
      if (
        questions[1].answer !== "" &&
        questions[2].answer !== "" &&
        questions[4].answer !== ""
      ) {
        return false
      }
    } else if (questions.every((q) => q.answer !== "")) {
      return false
    }
    return true
  }

  const onModal = () => {
    setIsModalClosed(!isModalClosed)
  }

  const onStep = (stepNum: number) => {
    setCurrentPanel(stepNum)
  }

  return (
    <div id={planStyles.plan}>
      <Head>
        <title>Plan | Coffee Roasters</title>
      </Head>
      <Modal
        // answers={questions.map((q) => q.answer)}
        answers={questions.map((q) => q.answer)}
        isClosed={isModalClosed}
        onModal={onModal}
      />

      <section className={planStyles.hero}>
        {/* TODO: Image for Hero breaks at 768px. */}
        <Hero
          background="blackcup"
          title="Create a plan"
          content="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
        />
      </section>

      <section className={planStyles.howItWorks}>
        <HowItWorks dark />
      </section>

      <section className={planStyles.createYourPlan}>
        <Stepper
          currentStep={currentPanel}
          answers={questions.map((q) => q.answer)}
          onStep={onStep}
        />

        <div className={planStyles.panels}>
          {questions.map((q, i) => (
            <ExpansionPanel
              key={i}
              id={i}
              title={q.question}
              userChoice={q.answer}
              currentPanel={currentPanel}
              shouldBeOpen={i === 0}
              answers={q.answers.map((option) => {
                return { ...option, onSelect }
              })}
              disabled={
                questions[0].answer === "Capsule" &&
                questions[i].question === "Want us to grind them?"
              }
            />
          ))}

          <OrderSummary answers={questions.map((q) => q.answer)} />

          <div className={planStyles.createYourPlanBtn}>
            <button disabled={shouldBeDisabled()} onClick={onModal}>
              Create my plan!
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default subscribe
