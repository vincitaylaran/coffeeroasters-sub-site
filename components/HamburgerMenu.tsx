import hamburgerMenuStyles from "../styles/HamburgerMenu.module.scss"

import Link from "next/link"

interface Props {
  isClosed: boolean
}

const HamburgerMenu = ({ isClosed }: Props) => {
  return (
    <div
      className={`${hamburgerMenuStyles.menu} ${
        isClosed && hamburgerMenuStyles.menu__hidden
      }`}
    >
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/plan">Create Your Plan</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
