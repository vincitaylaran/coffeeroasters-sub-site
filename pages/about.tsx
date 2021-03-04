import Image from "next/image"

import aboutStyles from "../styles/About.module.scss"

import Hero from "../components/Hero"

const about = () => {
  return (
    <div id={aboutStyles.about}>
      <section className={aboutStyles.hero}>
        <Hero
          background="whitecup"
          title="About Us"
          content="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        />
      </section>

      <section className={aboutStyles.ourCommitment}>
        {/* <Image
          src="/assets/about/mobile/image-commitment.jpg"
          width={327}
          height={400}
        /> */}
        <div className={aboutStyles.image} />

        <div className={aboutStyles.content}>
          <h3 className={aboutStyles.title}>Our commitment</h3>
          <p className={aboutStyles.description}>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
    </div>
  )
}

export default about
