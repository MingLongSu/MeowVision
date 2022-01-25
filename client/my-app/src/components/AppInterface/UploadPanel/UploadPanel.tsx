import React from 'react';

import './uploadpanel.css';

interface DrawerState { 
  openDrawer: boolean;
}

const UploadPanel: React.FC<DrawerState> = ({ openDrawer }) => {
  return (
    <div className={ "UploadPanel" + (openDrawer ? " active" : "") }>
      
    </div>
  );
};

export default UploadPanel;
