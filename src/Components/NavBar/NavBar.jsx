import { Icon } from "@iconify/react";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
  
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
  <div className="text-3xl md:hidden bg-blue-900 "onClick={() => setOpen(!open)}>
        {open ? (
          <Icon icon="material-symbols:close-rounded" />
        ) : (
          <Icon icon="material-symbols:menu-rounded" />
        )}
      </div>
      <ul className={`md:flex absolute md:static duration-1000 bg-blue-900 p-3 rounded-b-3xl ${open ? " top-14 " : "-top-60  duration-1000 "}`}>
        {routes.map((route) => (
          <li className="hover:text-purple-500" key={route.id}>
            <a className="mr-12 text-2xl p-4 font-extrabold" href={route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
