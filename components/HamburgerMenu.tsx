import hamburgerMenuStyles from "../styles/HamburgerMenu.module.scss"

import Link from "next/link"

interface Props {
  isClosed: boolean
  onLink?: () => void
}

const HamburgerMenu = ({ isClosed, onLink }: Props) => {
  return (
    <div
      onClick={onLink}
      className={`${hamburgerMenuStyles.menu} ${
        isClosed && hamburgerMenuStyles.menu__hidden
      }`}
    >
      <div>
        <ul>
          <li onClick={onLink}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={onLink}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={onLink}>
            <Link href="/plan">Create Your Plan</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
