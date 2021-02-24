import Hero from "../components/Hero"
import subscribeStyles from "../styles/Subscribe.module.scss"
import Head from "next/head"
import HowItWorks from "../components/HowItWorks"
const subscribe = () => {
  return (
    <div>
      <Head>
        <title>Subscribe | Coffee Roasters</title>
      </Head>

      <section className={subscribeStyles.hero}>
        <Hero
          background="blackcup"
          title="Create a plan"
          content="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
        />
      </section>

      <section className={subscribeStyles.howItWorks}>
        <HowItWorks dark />
      </section>
    </div>
  )
}

export default subscribe
