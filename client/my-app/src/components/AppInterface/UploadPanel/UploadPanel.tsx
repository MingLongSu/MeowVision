import React, { useRef } from 'react';

import './uploadpanel.css';
interface DrawerState { 
  openDrawer: boolean;
}

const UploadPanel: React.FC<DrawerState> = ({ openDrawer }) => {
  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  const interactUploadButton = () => { 
    uploadFileRef.current?.click();
  }

  return (
    <div className={ "UploadPanel" + (openDrawer ? " active" : "") }>
      <div className="UploadPanel__image-container">

      </div>
      <div className="UploadPanel__upload-and-results-container">
        <div className="upload-and-results-container__upload-container">
          <input ref={ uploadFileRef } type="file" className="upload-container__upload-button-hidden"></input>
          <button onClick={ interactUploadButton } className="upload-container__upload-button-visible"> Click to upload!</button>
          <span className="upload-container__separator"> OR </span>
          <input type="text" placeholder="Paste image url!" className="upload-container__upload-url"></input>
        </div>
        <div className="upload-and-results-container__results-container">

        </div>
      </div>
    </div>
  );
};

export default UploadPanel;
