import Anchor from "./Anchor"

import { navLinks } from "../utils/NavData"

export default function Nav() {
  return (
    <nav className="hidden lg:flex items-center gap-4">
      {
        navLinks.map((link, index) => (
          <Anchor
            key={index}
            data={link}
            link={"/dashboard"}
            style={"flex gap-2 text-primary hover:text-primary-light transition all"}
          />
        ))
      }
    </nav>
  )
}