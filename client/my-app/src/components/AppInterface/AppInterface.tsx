import React, { useState } from 'react';

import './AppInterface.css';

import Drawer from './Drawer/Drawer';
import UploadPanel from './UploadPanel/UploadPanel';

const AppInterface: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [urls, setURLs] = useState<string[]>([]);

  return (
    <div className="AppInterface">
        <UploadPanel openDrawer={ openDrawer } imageURL={ imageURL } setImageURL={ setImageURL } urls={ urls } setURLs={ setURLs} > </UploadPanel>
        <div className="AppInterface__drawer-container">
          <Drawer openDrawer={ openDrawer } setOpenDrawer={ setOpenDrawer } urls={ urls } setImageURL={ setImageURL }> </Drawer>
        </div>
    </div>
  );
};

export default AppInterface;