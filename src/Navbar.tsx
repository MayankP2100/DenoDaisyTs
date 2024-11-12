import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { themeChange } from "theme-change";

function Navbar() {
  const [theme, setTheme] = useState<string>(
    ((theme) => {
      try {
        const serializedTheme = localStorage.getItem(theme);
        if (serializedTheme === null) {
          return undefined;
        }
        return JSON.parse(serializedTheme);
      } catch (err) {
        return "default";
      }
    })("theme")
  );

  const handleThemeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedTheme = event.target.value;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setTheme(selectedTheme);
  };

  useEffect(() => {
    themeChange(false);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/jokes"}>Jokes</NavLink>
            </li>
            <li>
              <NavLink to={"/todos"}>Todos</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/jokes"}>Jokes</NavLink>
          </li>
          <li>
            <NavLink to={"/todos"}>Todos</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
                checked={theme === "default"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
                checked={theme === "retro"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
                checked={theme === "cyberpunk"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
                checked={theme === "valentine"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
                checked={theme === "aqua"}
                onChange={handleThemeChange}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
