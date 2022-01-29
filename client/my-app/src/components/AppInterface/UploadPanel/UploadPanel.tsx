import React, { useRef } from 'react';

import './uploadpanel.css';
interface UploadPanelState { 
  openDrawer: boolean;
  imageURL: string | null;
  setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadPanel: React.FC<UploadPanelState> = ({ openDrawer, imageURL, setImageURL }) => {
  const uploadFileRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const interactUploadButton = () => { 
    uploadFileRef.current?.click();
  }

  const analyzeImage = () => { 
    if (imageURL) { 
      console.log("Analyzing"); // TEMP
    }
    else { 
      console.log("No image to analzye"); // TEMP
    }
  }

  const uploadImage = (e : React.SyntheticEvent) => { 
    const file = (e.target as HTMLInputElement).files; // gets the file uploaded

    if (file) { 
      const imageURL = URL.createObjectURL(file[0]);
      setImageURL(imageURL);
    }
    else { 
      setImageURL(null);
    }
  }

  return (
    <div className="AppInterface__analysis">
      <div className={ "AnalyzeButton" + (openDrawer ? " active" : "") }>
        <div className="AnalyzeButton__analyze-button-container">
          <button onClick={ analyzeImage } className="analyze-button-container__analyze-button">
            <i className="fas fa-eye analyze-svg-container__analyze-svg"></i>
              <span className="analyze-button__analyze-title">
                Analyze
              </span>
          </button>
        </div>
      </div>
      <div className={ "UploadPanel" + (openDrawer ? " active" : "") }>
        <div className="UploadPanel__image-container">
          { imageURL && <img className="image-container__image" src={ imageURL } alt="Preview" crossOrigin="anonymous" ref={ imageRef }></img> }
        </div>
        <div className="UploadPanel__upload-and-results-container">
          <div className="upload-and-results-container__upload-container">
            <input ref={ uploadFileRef } onChange={ (e: React.SyntheticEvent) => uploadImage(e) } type="file" className="upload-container__upload-button-hidden"></input>
            <button onClick={ interactUploadButton } className="upload-container__upload-button-visible"> Click to upload!</button>
            <span className="upload-container__separator"> OR </span>
            <input type="text" placeholder="Paste image url!" className="upload-container__upload-url"></input>
          </div>
          <div className="upload-and-results-container__results-container">
            <div className="results-container__result" id="one">
              { 
                // Samples for guess cards
              }
              <span className="result__title">
                # 1 (Most Accurate)
              </span>
              <span className="result__info">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </span>
            </div>
            <div className="results-container__result" id="one">
              <span className="result__title">
                # 2
              </span>
              <span className="result__info">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </span>
            </div>
            <div className="results-container__result" id="one">
              <span className="result__title">
                # 3
              </span>
              <span className="result__info">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPanel;
