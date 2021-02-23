import howItWorks from "../styles/HowItWorks.module.scss"

const HowItWorks = () => {
  return (
    <div className={howItWorks.grid}>
      <div className={howItWorks.cell}>
        <div className={howItWorks.circle}></div>
        <h1>01</h1>
        <h3>Pick your coffee</h3>
        <p>
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There are new
          coffees in all profiles every month for you to try out.
        </p>
      </div>
      <div className={howItWorks.cell}>
        <div className={howItWorks.circle}></div>
        <h1>02</h1>
        <h3>Choose the frequency</h3>
        <p>
          Customize your order frequency, quantity, even your roast style and
          grind type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </p>
      </div>
      <div className={howItWorks.cell}>
        <div className={howItWorks.circle} />

        <h1>03</h1>
        <h3>Receive and enjoy!</h3>
        <p>
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to provide a distinct
          tasting experience.
        </p>
      </div>
    </div>
  )
}

export default HowItWorks
