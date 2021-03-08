import Head from "next/head"
import Link from "next/link"

import indexStyles from "../styles/Home.module.scss"

import CollectionImage from "../components/CollectionImage"
import Card from "../components/Card"
import HowItWorks from "../components/HowItWorks"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div id={indexStyles.home}>
      <Head>
        <title>Coffee Roasters</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vinci Taylaran" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="frontend mentor, HTML, SASS, SCSS, TypeScript, NextJS, React.js, React"
        />
      </Head>

      <section className={indexStyles.hero}>
        <Hero
          background="coffeepress"
          title="Great coffee made simple."
          content="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
coffees from our best roasters delivered directly to your door, at your schedule."
        >
          <Link href="/plan">
            <button>Create your plan</button>
          </Link>
        </Hero>
      </section>

      <section className={indexStyles.ourCollection}>
        <div className={indexStyles.sectionHeading}>
          <h2 className={indexStyles.sectionTitle}>our collection</h2>
        </div>
        <div className={indexStyles.container}>
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

      {/* TODO: This section should not ignore padding. */}
      <section className={indexStyles.whyChooseUs}>
        <h4 className={indexStyles.sectionTitle}>Why choose us?</h4>
        <p className={indexStyles.description}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className={indexStyles.cards}>
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

      <section className={indexStyles.howItWorks}>
        <h3 className={indexStyles.sectionTitle}>How it works</h3>

        <HowItWorks />

        <Link href="/plan">
          <button>Create your plan</button>
        </Link>
      </section>
    </div>
  )
}
