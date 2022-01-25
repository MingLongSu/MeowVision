import React from 'react';

import './drawer.css';

interface DrawerState { 
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerState> = ({ openDrawer, setOpenDrawer }) => {
  const interactDrawer = () => { 
    setOpenDrawer(prevDrawerState => !prevDrawerState);
  }

  return (
    <div className={ "Drawer" + (openDrawer ? " active" : "") }>
        <div className="Drawer__drawer-interior">

        </div>
        <button onClick={ interactDrawer } className="Drawer__drawer-handle">
          <i className={ "fas fa-caret-left" + (openDrawer ? " active" : "")}></i>
        </button>
    </div>
  );
};

export default Drawer;
