import aboutStyles from "../styles/About.module.scss"

import Hero from "../components/Hero"
import { AustraliaIcon, CanadaIcon, UkIcon } from "../components/CountryIcons"

const about = () => {
  const locations = [
    {
      icon: <UkIcon />,
      location: "United Kingdom",
      description: (
        <>
          <div>68 Ashfordby Rd</div>
          <div>Alcaston</div>
          <div>SY6 1YA</div>
          <div>+44 1241 918425</div>
        </>
      ),
    },
    {
      icon: <CanadaIcon />,
      location: "Canada",
      description: (
        <>
          <div>1529 Eglington Avenue</div>
          <div>Toronto</div>
          <div>Ontario M4P 1A6</div>
          <div>+1 416 485 2997</div>
        </>
      ),
    },
    {
      icon: <AustraliaIcon />,
      location: "Australia",
      description: (
        <>
          <div>36 Swanston Street</div>
          <div>Kewell</div>
          <div>Victoria</div>
          <div>+61 4 9928 3629</div>
        </>
      ),
    },
  ]

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

      <section className={aboutStyles.uncompromisingQuality}>
        <div className={aboutStyles.imageContainer}>
          <div className={aboutStyles.image} />
        </div>

        <div className={aboutStyles.content}>
          <h3 className={aboutStyles.title}>Uncompromising quality</h3>

          <p className={aboutStyles.description}>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </section>

      <section className={aboutStyles.ourHeadquarters}>
        <h4 className={aboutStyles.title}>Our headquarters</h4>

        <div className={aboutStyles.locations}>
          {locations.map((l) => {
            return (
              <div className={aboutStyles.locations}>
                <div className={aboutStyles.location}>
                  <div className={aboutStyles.imageContainer}>{l.icon}</div>

                  <h4 className={aboutStyles.country}>{l.location}</h4>

                  <p className={aboutStyles.description}>{l.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default about
