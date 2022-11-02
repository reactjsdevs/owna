import * as React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Link } from "react-router-dom";
import { useDataContext } from "../../context/context";
import cx from "classnames";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./Header.module.css";
import BackOfficeButton from "./BackOfficeButton";
import { useLocation } from "react-router-dom";
import { Container } from "../pages/FrontPage/FrontPageComponents/container/Container";

const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const { connect, setConnect } = useDataContext();
  const { backOffice } = useDataContext();
  const [dropdown, setDropdown] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [sidebar, setSidebar] = React.useState(false);
  const { pathname } = useLocation();
  const navArray = [
    {
      navItem: "My Space",
      to: "myspace",
      navItems: [
        { name: "Profile", to: "/myProfile" },
        { name: "Appointments", to: "/whatareyouwillingtodo" },

        { name: "Estimate", to: "/estimate" },
      ],
    },
    {
      navItem: "Borrowing",
      to: "myspace",
      navItems: [
        { name: "Dashboard", to: "/dashboard" },
        { name: "P2P Offer", to: "/p2poffer" },
      ],
    },
    {
      navItem: "Lending",
      to: "myspace",
      navItems: [
        { name: "Marketplace", to: "/marketplace" },
        { name: "Stake & Claim", to: "/stakeandclaim" },
        // { name: "Claim", to: "/claim" },
      ],
    },
  ];

  const showDropDown = (index) => {
    setDropdown(true);
    setActive(index);
  };
  const hideDropDown = () => {
    setDropdown(false);
  };
  React.useEffect(() => {
    if (menuVisible) {
      document.body.classList.add("overflow-hidden", "lg:overflow-auto");
    } else {
      document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
    }
  }, [menuVisible]);

  return (
    <Container>
      <header className={`${pathname === "/" && " Header"} py-3 px-0`}>
        <nav
          className={cx({
            "h-screen md:h-auto": menuVisible,
          })}
        >
          {" "}
          <section className={styles.header}>
            <Link to="/dashboard" rel="noreferrer" className={styles.logo}>
              Owna
              <span className={styles.dot} />
            </Link>

            <div
              className={`${styles.navWrapper} ${sidebar && styles.sidebar}`}
            >
              {navArray.map((item, i) => (
                <div
                  className={styles.navItemsAndIcon}
                  onClick={() => showDropDown(i)}
                  key={i}
                >
                  <div
                    key={i}
                    className={styles.navItems}
                    onMouseEnter={() => showDropDown(i)}
                  >
                    <p className={styles.navLink}>{item.navItem}</p>{" "}
                    {dropdown && active === i && (
                      <div
                        className={styles.dropdown}
                        onClick={() => {
                          setSidebar(false);
                        }}
                        onMouseEnter={() => showDropDown(i)}
                        onMouseLeave={() => hideDropDown()}
                      >
                        {item.navItems.map((el, i) => (
                          <Link
                            to={el.to}
                            className={`${styles.dropdownItem} ${styles.navLink}`}
                            key={i}
                          >
                            {el.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {dropdown && active === i ? (
                    <FiChevronUp className={styles.arrow} />
                  ) : (
                    <FiChevronDown className={styles.arrow} />
                  )}
                </div>
              ))}
              {sidebar && backOffice && <BackOfficeButton sidebar={sidebar} />}
            </div>

            <div className={styles.addressContainer}>
              {backOffice && <BackOfficeButton />}
              <div onClick={() => setConnect(true)}>
                {" "}
                <ConnectButton chainStatus="icon" />
              </div>
              {sidebar ? (
                <MdClose
                  className={styles.icon}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              ) : (
                <GiHamburgerMenu
                  className={styles.icon}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
          </section>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
