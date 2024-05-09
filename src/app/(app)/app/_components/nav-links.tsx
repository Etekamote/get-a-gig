import {
  faHouse,
  faUser,
  faNewspaper,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavLinks() {
  const routes = [
    { name: "Dashboard", path: "/app/dashboard", icon: faHouse },
    { name: "Account", path: "/app/account", icon: faUser },
    { name: "Your offers", path: "/app/user-offers", icon: faNewspaper },
    { name: "Followed offers", path: "/app/followed-offers", icon: faHeart },
  ];
  return (
    <ul className="flex gap-8 flex-col lg:flex-row ">
      {routes.map((route) => (
        <li key={route.path} className="text-lg lg:text-sm">
          <Link
            href={route.path}
            className="flex gap-4 lg:gap-1 items-center text-white font-semibold hover:text-indigo-400 group"
          >
            <FontAwesomeIcon
              icon={route.icon}
              className="w-5 h-5 lg:w-4 lg:h-4 text-indigo-400 group-hover:text-white"
            ></FontAwesomeIcon>{" "}
            <span>{route.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
