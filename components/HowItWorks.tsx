import howItWorks from "../styles/HowItWorks.module.scss"

interface Props {
  style?: object
  dark?: boolean
}

// This HorizontalLine component is needed for the drawing with the circles that sits above the step numbers.
// This is implemented very poorly and must be refactored. Try considering making an SVG out of it.
const HorizontalLine = ({ ...props }) => {
  return (
    <hr
      className={`${howItWorks.line} ${
        props.dark && howItWorks.line__darkPosition
      }`}
    />
  )
}

// Each Circle component is nested within each cell so it will line up with each step regardless of the
// viewport width.
const Circle = () => {
  return <div className={howItWorks.circle} />
}

const HowItWorks = ({ style, dark }: Props) => {
  return (
    <>
      <HorizontalLine dark={dark} />

      <div
        className={`${howItWorks.grid} ${dark && howItWorks.grid__dark}`}
        style={{ ...style }}
      >
        <div className={howItWorks.cell}>
          <Circle />
          <h1>01</h1>
          <h3>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className={howItWorks.cell}>
          <Circle />

          <h1>02</h1>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className={howItWorks.cell}>
          <Circle />

          <h1>03</h1>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
