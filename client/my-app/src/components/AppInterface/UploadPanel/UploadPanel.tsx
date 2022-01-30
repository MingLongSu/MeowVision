import React, { useRef, useState, useEffect } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";

import './uploadpanel.css';
interface UploadPanelState { 
  openDrawer: boolean;
  imageURL: string | null;
  setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
  urls: string[];
  setURLs: React.Dispatch<React.SetStateAction<string[]>>;
}

const UploadPanel: React.FC<UploadPanelState> = ({ openDrawer, imageURL, setImageURL, urls, setURLs }) => {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [results, setResults] = useState<{ className: string; probability: number; }[] | undefined>();

  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  const interactUploadButton = () => { 
    uploadFileRef.current?.click();
  }

  const analyzeImage = async () => { 
    if (imageURL && imageRef.current) { 
      const results = await model?.classify(imageRef.current).then((arr) => { return arr });
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

  useEffect(() => { 
    if (imageURL) { 
      setURLs([imageURL, ...urls]);
    }
  }, [imageURL]);

  const uploadImage = (e : React.SyntheticEvent) => { 
    const file = (e.target as HTMLInputElement).files; // gets the file uploaded

    if (file && file.length > 0) { 
      const imageURL = URL.createObjectURL(file[0]);
      setImageURL(imageURL);
    }
    else { 
      setImageURL(null);
      console.log("image error");
    }
  }

  const pasteImageURL = (e : React.SyntheticEvent) => { 
    const imageURL = (e.target as HTMLInputElement).value; // gets the image through provided url

    if (imageURL) { 
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
            <input ref={ uploadFileRef } onChange={ uploadImage } type="file" className="upload-container__upload-button-hidden"></input>
            <button onClick={ interactUploadButton } className="upload-container__upload-button-visible"> Click to upload!</button>
            <span className="upload-container__separator"> OR </span>
            <input onChange={ pasteImageURL } type="text" placeholder="Paste image url!" className="upload-container__upload-url"></input>
          </div>
          <div className="upload-and-results-container__results-container">
          { results &&
            <div className="results-container__result">
              <span className="result__title" id="one">
                # 1 (Confidence: { Math.round(results[0].probability * 10000) / 100 }%)
              </span>
              <span className="result__info">
                { results[0].className }
              </span>
            </div>
          }
          { results &&
            <div className="results-container__result">
              <span className="result__title" id="two">
                # 2 (Confidence: { Math.round(results[1].probability * 10000) / 100 }%)
              </span>
              <span className="result__info">
                { results[1].className }
              </span>
            </div>
          }
          { results &&
            <div className="results-container__result">
              <span className="result__title" id="three">
                # 3 (Confidence: { Math.round(results[2].probability * 10000) / 100 }%)
              </span>
              <span className="result__info">
                { results[2].className  }
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
