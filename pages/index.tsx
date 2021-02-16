import Head from "next/head"
import Image from "next/image"
import homeStyles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div id={homeStyles.home}>
      <Head>
        <title>Coffee Roasters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyles.hero}>
        <div className={homeStyles.content}>
          <h2>Great coffee made simple.</h2>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button>Create your plan</button>
        </div>
      </section>

      <section className={homeStyles.ourCollection}>
        <div className={homeStyles.sectionHeading}>
          <h2>our collection</h2>
        </div>
        <div className={homeStyles.container}></div>
      </section>
    </div>
  )
}
