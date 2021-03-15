import useMousePosition from '../../hooks/useMousePosition';
import {Logo} from '../icons';
import Playlist from './playlist';
import Navigation from './navigation'

import styles from './sidebar.module.css';
import { useEffect, useState } from 'react';

function Sidebar() {
  const[width, SetWidth] = useState(236);
  const [isMouseDown, setisMouseDown] = useState(false);
  const { x } = useMousePosition();

    useEffect(() => {
      if (!isMouseDown) return false;
  
      const handleMove = () => {
        if(x > 200 && x < 316){
          SetWidth(x);
        }
      };
  
      const handleUp = () => {
        setisMouseDown(false);
      };
  
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
      };
    });

    return (
      <nav className={styles.SideNavbar} style={{width: `${width}px`}}>
        <div className={styles.Fixed}>
          <div>
              <Logo/>
          </div>
          <div>
              <Navigation />
          </div>
          <div>
              <Playlist />
          </div>
        </div>
        <div 
            className={`${styles.changeWidth} ${isMouseDown ? styles.ActiveChange : ''}`}
            onMouseDown={() => {
              setisMouseDown(true);
            }}
        ></div>
      </nav>
    );
}
  
export default Sidebar;