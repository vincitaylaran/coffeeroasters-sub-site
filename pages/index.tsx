import Head from "next/head"
import Image from "next/image"
import homeStyles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <section id={homeStyles.home}>
      <Head>
        <title>Coffee Roasters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.container}>
        <div className={homeStyles.content}>
          <h2>Great coffee made simple.</h2>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button>Create your plan</button>
        </div>
      </div>
    </section>
  )
}
