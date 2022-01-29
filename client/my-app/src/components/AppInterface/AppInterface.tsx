import React, { useState } from 'react';

import './AppInterface.css';

import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import Drawer from './Drawer/Drawer';
import UploadPanel from './UploadPanel/UploadPanel';

const AppInterface: React.FC = () => {
  //const [clickAnalyze, setClickAnalyze] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className="AppInterface">
        <div className="AppInterface__analysis">
          <AnalyzeButton openDrawer={ openDrawer }> </AnalyzeButton>
          <UploadPanel openDrawer={ openDrawer } imageURL={ imageURL } setImageURL={ setImageURL } > </UploadPanel>
        </div>
        <div className="AppInterface__drawer-container">
          <Drawer openDrawer={ openDrawer } setOpenDrawer={ setOpenDrawer }> </Drawer>
        </div>
    </div>
  );
};

export default AppInterface;
