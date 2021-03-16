import React from 'react';
import * as Icons from '../icons';

import styles from './icon-button.module.css';

class IconButton extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
      }
    } 

    render() {
      return (
        <button 
            className={`${styles.iconButton} ${this.state.isActive ? "activeIcon" : ""}`} 
            onClick={()=>this.setState({ isActive: !this.state.isActive })}
        >
            {this.state.isActive ?  this.props.activeicon :  this.props.icon }
        </button>
      );
    }
  
}
export default IconButton