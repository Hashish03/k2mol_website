import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        {[
          { path: "/", name: "Home" },
          { path: "/services", name: "Services" },
          { path: "/about", name: "About" },
          { path: "/experience", name: "Experience"},
          { path: "/contact", name: "Contact" },
        ].map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className="nav-link">
              {item.name}
              <motion.span
                className="nav-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
