import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { MENU } from '../../constants'
import TextBoldM from '../text/text-bold-m';
import styles from './navigation.module.css';

function Navigation() {
  const router = useLocation();

  return (
    <div className={styles.navBtns}>
      {MENU.map((menu) => {
        const selected = router.pathname === menu.path

        return (
            <NavLink to={menu.path} exact activeClassName="activeLink" key={menu.title}>
                <button className={styles.button}>
                    {selected ? menu.iconSelected : menu.icon}
                    <TextBoldM>{menu.title}</TextBoldM>
                </button>
            </NavLink>
            );
      })}
    </div>
  )
}

export default Navigation