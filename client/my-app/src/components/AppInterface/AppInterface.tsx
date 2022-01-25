import React from 'react';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';

import './AppInterface.css';
import Drawer from './Drawer/Drawer';
import UploadPanel from './UploadPanel/UploadPanel';

const AppInterface: React.FC = () => {
  return (
    <div className="AppInterface">
        <div className="AppInterface__analysis">
          <AnalyzeButton> </AnalyzeButton>
          <UploadPanel> </UploadPanel>
        </div>
        <div className="AppInterface__drawer-container">
          <Drawer> </Drawer>
        </div>
    </div>
  );
};

export default AppInterface;
