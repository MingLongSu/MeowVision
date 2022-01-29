import React, { useRef, useState, useEffect } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";

import './uploadpanel.css';
interface UploadPanelState { 
  openDrawer: boolean;
  imageURL: string | null;
  setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadPanel: React.FC<UploadPanelState> = ({ openDrawer, imageURL, setImageURL }) => {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [results, setResults] = useState<Promise<{className: string; probability: number; }[]>  | undefined>(undefined);

  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  const interactUploadButton = () => { 
    uploadFileRef.current?.click();
  }

  const analyzeImage = () => { 
    if (imageURL && imageRef.current) { 
      const results = model?.classify(imageRef.current).then(arrList => arrList);
      setResults(results);
    }
  }

  const loadModel = async () => { 
    try { 
      const model = await mobilenet.load();
      setModel(model);
    }
    catch (error) { 
      console.log(error);
    }
  }

  useEffect(() => { 
    loadModel();
  }, []);

  const uploadImage = (e : React.SyntheticEvent) => { 
    const file = (e.target as HTMLInputElement).files; // gets the file uploaded

    if (file && file.length > 0) { 
      const imageURL = URL.createObjectURL(file[0]);
      setImageURL(imageURL);
    }
    else { 
      setImageURL(null);
    }
  }

  results?.then(arr => { 
    console.log(arr);
  });

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
          { results &&
            <div className="results-container__result" id="one">
              <span className="result__title">
                # 1 ( { } )
              </span>
              <span className="result__info">
                
              </span>
            </div>
          }
          { results &&
            <div className="results-container__result" id="one">
              <span className="result__title">
                # 2
              </span>
              <span className="result__info">
                
              </span>
            </div>
          }
          { results &&
            <div className="results-container__result" id="one">
              <span className="result__title">
                # 3
              </span>
              <span className="result__info">
                
              </span>
            </div>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPanel;
