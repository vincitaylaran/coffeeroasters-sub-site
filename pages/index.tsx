import Head from "next/head"
import Image from "next/image"

import homeStyles from "../styles/Home.module.scss"

import CollectionImage from "../components/CollectionImage"
import Card from "../components/Card"
import Drawing from "../components/Drawing"

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
          <h2 className={homeStyles.sectionTitle}>our collection</h2>
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

      <section className={homeStyles.whyChooseUs}>
        <h4 className={homeStyles.sectionTitle}>Why choose us?</h4>
        <p className={homeStyles.description}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className={homeStyles.cards}>
          <Card
            src="/assets/home/desktop/icon-coffee-bean.svg"
            title="Best quality"
            description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
          />
          <Card
            src="/assets/home/desktop/icon-gift.svg"
            title="Exclusive benefits"
            description="Special offers and swag when you subscribe, including 30% off your first shipment."
          />
          <Card
            src="/assets/home/desktop/icon-truck.svg"
            title="Free shipping"
            description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
            "
          />
        </div>
      </section>

      <section className={homeStyles.howItWorks}>
        <h3 className={homeStyles.sectionTitle}>How it works</h3>
        <div className={homeStyles.grid}>
          <div className={homeStyles.cell}>
            <div className={homeStyles.circle}></div>
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className={homeStyles.cell}>
            <div className={homeStyles.circle}></div>
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className={homeStyles.cell}>
            <div className={homeStyles.circle} />

            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <button onClick={() => console.log("Should go to subscribe page")}>
          Create your plan
        </button>
        {/* TODO: set on click to go to subscribe page! */}
      </section>
    </div>
  )
}
