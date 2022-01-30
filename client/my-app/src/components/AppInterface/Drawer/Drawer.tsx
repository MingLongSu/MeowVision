import React from 'react';

import './drawer.css';

interface DrawerState { 
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  urls: string[];
  setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
}

const Drawer: React.FC<DrawerState> = ({ openDrawer, setOpenDrawer, urls, setImageURL }) => {
  const interactDrawer = () => { 
    setOpenDrawer(prevDrawerState => !prevDrawerState);
  }

  const getRandomKey = () => { 
    return Math.floor(Math.random() * 1000);
  }

  return (
    <div className={ "Drawer" + (openDrawer ? " active" : "") }>
        <div className="Drawer__drawer-interior">
          {
            urls.map((imageURL) => { 
              return <img onClick={ () => setImageURL(imageURL) } src={ imageURL } className="drawer__recent-image" key={ `${ getRandomKey() }` }></img>
            })
          }
        </div>
        <button onClick={ interactDrawer } className="Drawer__drawer-handle">
          <i className={ "fas fa-caret-left" + (openDrawer ? " active" : "")}></i>
        </button>
    </div>
  );
};

export default Drawer;
