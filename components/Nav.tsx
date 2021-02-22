import { useState } from "react"
import navStyles from "../styles/Nav.module.scss"
import Image from "next/image"

const Nav = () => {
  const [hamburgerMenuIcon, setHamburgerMenuIcon] = useState({
    isClosed: true,
    path: "/assets/shared/mobile/icon-hamburger.svg",
  })

  const onHamburgerMenu = () => {
    if (hamburgerMenuIcon.isClosed) {
      setHamburgerMenuIcon({
        isClosed: false,
        path: "/assets/shared/mobile/icon-close.svg",
      })
    } else {
      setHamburgerMenuIcon({
        isClosed: true,
        path: "/assets/shared/mobile/icon-hamburger.svg",
      })
    }
  }

  // In order for the Image component to function properly, the assets must be in the public directory.
  // The file path for an Image component must be relative to the public directory. Check NextJS docs.
  return (
    <nav className={navStyles.nav}>
      {/* TODO: Replace this with the <Logo /> component */}
      <div className={navStyles.logo}>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Coffee Roasters logo"
          width="500"
          height="54"
        />
      </div>
      <div className={navStyles.links}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CREATE YOUR PLAN</a>
          </li>
        </ul>
      </div>
      <div className={navStyles.hamburger}>
        <Image
          onClick={onHamburgerMenu}
          src={hamburgerMenuIcon.path}
          alt="Close hamburger menu"
          width="16"
          height="15"
        />
      </div>
    </nav>
  )
}

export default Nav
