import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const StudioLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center rounded bg-gray-100 p-1">
      <FontAwesomeIcon
        icon={faCode}
        className="size-6 text-amber-700"
      />
    </div>
  );
};

export default StudioLogo;
