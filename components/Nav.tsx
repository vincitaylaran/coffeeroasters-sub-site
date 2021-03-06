import { useState } from "react"
import navStyles from "../styles/Nav.module.scss"

import Logo from "./Logo"

import Image from "next/image"
import Link from "next/link"
import HamburgerMenu from "./HamburgerMenu"

interface ILinks {
  hideAtMobile?: boolean
  style?: object
}

export const Links = ({ style, hideAtMobile = false }: ILinks) => {
  const mobileBreakpoint = "480px"
  return (
    <div className={navStyles.links} style={{ ...style }}>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT US</a>
      </Link>
      <Link href="/plan">
        <a>CREATE YOUR PLAN</a>
      </Link>
      <style jsx>{`
        @media (max-width: ${mobileBreakpoint}) {
          display: ${hideAtMobile && "none"};
        }
      `}</style>
    </div>
  )
}

const Nav = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState({
    isClosed: true,
    path: "/assets/shared/mobile/icon-hamburger.svg",
  })

  const onHamburgerMenu = () => {
    if (hamburgerMenu.isClosed) {
      setHamburgerMenu({
        isClosed: false,
        path: "/assets/shared/mobile/icon-close.svg",
      })
    } else {
      setHamburgerMenu({
        isClosed: true,
        path: "/assets/shared/mobile/icon-hamburger.svg",
      })
    }
  }

  // In order for the Image component to function properly, the assets must be in the public directory.
  // The file path for an Image component must be relative to the public directory. Check NextJS docs.
  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.logo}>
          <Logo />
        </div>

        <Links
          style={{ width: "283px", gap: "32px", gridAutoFlow: "column" }}
          hideAtMobile={true}
        />

        <div className={navStyles.hamburgerIcon}>
          <Image
            onClick={onHamburgerMenu}
            src={hamburgerMenu.path}
            alt="Close hamburger menu"
            width="16"
            height="15"
          />
        </div>
      </nav>

      <HamburgerMenu
        isClosed={hamburgerMenu.isClosed}
        onLink={onHamburgerMenu}
      />
    </>
  )
}

export default Nav
