import { useState } from "react";

import "./topbar.css"

const Topbar: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const OnTitleEnter = () => { 
    setHover(true);
  };

  const OnTitleExit = () => { 
    setHover(false);
  };

  return (
    <div className="Topbar">
      <div className="Topbar__web-logo-container">
        <div className="web-logo-container__web-logo"></div>
        <div onMouseEnter= { OnTitleEnter } onMouseLeave={ OnTitleExit } className="web-logo-container__web-logo-title-container">
          <span className={ "web-logo-title-container__title" + ((hover) ? "_active" : "") }>Meow Vision</span>
          <div className="web-logo-title-container__underline-container">
            <div className={ "underline-container__underline" + ((hover) ? "_active" : "") }></div>
          </div>
        </div>
      </div>
      <div className="Topbar__meow-apps-logo-container">
        <div className="meow-apps-logo-container__meow-apps-logo"></div>
      </div>
    </div>
  );
};

export default Topbar;
