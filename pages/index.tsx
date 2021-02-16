import Head from "next/head"
import Image from "next/image"

import homeStyles from "../styles/Home.module.scss"

import CollectionImage from "../components/CollectionImage"

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
        <div className={homeStyles.container}>
          <CollectionImage
            src="../assets/home/desktop/image-gran-espresso.png"
            title="Gran Espresso"
            description="Light and flavorful blend with cocoa and black pepper for an intense experience"
          />
          <CollectionImage
            src="../assets/home/desktop/image-planalto.png"
            title="Planalto"
            description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          />
          <CollectionImage
            src="../assets/home/desktop/image-piccollo.png"
            title="Piccollo"
            description="Mild and smooth blend featuring notes of toasted almond and dried cherry "
          />
          <CollectionImage
            src="../assets/home/desktop/image-danche.png"
            title="Danche"
            description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          />
        </div>
      </section>
    </div>
  )
}
