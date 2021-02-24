import Head from "next/head"

import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import ExpansionPanel from "../components/ExpansionPanel"

import planStyles from "../styles/Plan.module.scss"

const subscribe = () => {
  const onSelect = (optionTitle: string) => {
    console.log(optionTitle)
  }

  return (
    <div id={planStyles.plan}>
      <Head>
        <title>Plan | Coffee Roasters</title>
      </Head>

      <section className={planStyles.hero}>
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
        <ExpansionPanel
          title="How do you drink your coffee?"
          options={[
            {
              title: "Capsule",
              description:
                "Compatible with Nespresso systems and similar brewers",
              onSelect,
            },
            {
              title: "Filter",
              description:
                "For pour over or drip methods like Aeropress, Chemex, and V60",
              onSelect,
            },
            {
              title: "Espresso",
              description:
                "Dense and finely ground beans for an intense, flavorful experience",
              onSelect,
            },
          ]}
        />
        <ExpansionPanel
          title="What type of coffee?"
          options={[
            {
              title: "Single Origin",
              description:
                "Distinct, high quality coffee from a specific family-owned farm",
              onSelect,
            },
            {
              title: "Decaf",
              description:
                "Just like regular coffee, except the caffeine has been removed",
              onSelect,
            },
            {
              title: "Blended",
              description:
                "Combination of two or three dark roasted beans of organic coffees",
              onSelect,
            },
          ]}
        />
        <ExpansionPanel
          title="How much would you like?"
          options={[
            {
              title: "250g",
              description:
                "Perfect for the solo drinker. Yields about 12 delicious cups.",
              onSelect,
            },
            {
              title: "500g",
              description:
                "Perfect option for a couple. Yields about 40 delectable cups.",
              onSelect,
            },
            {
              title: "1000g",
              description:
                "Perfect for offices and events. Yields about 90 delightful cups.",
              onSelect,
            },
          ]}
        />
        <ExpansionPanel
          title="Want us to grind them?"
          options={[
            {
              title: "Wholebean",
              description:
                "Best choice if you cherish the full sensory experience",
              onSelect,
            },
            {
              title: "Filter",
              description:
                "For drip or pour-over coffee methods such as V60 or Aeropress",
              onSelect,
            },
            {
              title: "Cafetiére",
              description:
                "Course ground beans specially suited for french press coffee",
              onSelect,
            },
          ]}
        />
        <ExpansionPanel
          title="How often should we deliver?"
          options={[
            {
              title: "Every week",
              description:
                "$7.20 per shipment. Includes free first-class shipping.",
              onSelect,
            },
            {
              title: "Every 2 weeks",
              description:
                "$9.60 per shipment. Includes free priority shipping.",
              onSelect,
            },
            {
              title: "Every month",
              description:
                "$12.00 per shipment. Includes free priority shipping.",
              onSelect,
            },
          ]}
        />
      </section>

      <section className={planStyles.planSummary}></section>
    </div>
  )
}

export default subscribe
