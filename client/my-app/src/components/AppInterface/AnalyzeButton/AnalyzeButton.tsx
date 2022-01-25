import React from 'react';

import './analyzebutton.css';

interface DrawerState { 
    openDrawer: boolean;
} 

const AnalyzeButton: React.FC<DrawerState> = ({ openDrawer }) => {


    return (
        <div className={ "AnalyzeButton" + (openDrawer ? " active" : "") }>
            <div className="AnalyzeButton__analyze-button-container">
                <button className="analyze-button-container__analyze-button">
                    <i className="fas fa-eye analyze-svg-container__analyze-svg"></i>
                    <span className="analyze-button__analyze-title">
                        Analyze
                    </span>
                </button>
            </div>
        </div>
    );
};

export default AnalyzeButton;
