import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const StudioLogo: React.FC = () => {
  return (
    <FontAwesomeIcon
      icon={faCode}
      style={{
        color: "oklch(50.5% 0.213 27.518)",
        fill: "currentColor",
        width: 24,
        height: 24,
      }}
    />
  );
};

export default StudioLogo;
