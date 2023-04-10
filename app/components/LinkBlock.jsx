import React from "react";
import { Link } from "react-router-dom";

function LinkBlock({
  linkTitle,
  linkUrl,
  linkSubtitle,
  linkKey,
  withoutHistory,
}) {
  return (
    <div className="block" key={linkKey}>
      <p>
        <Link
          replace={withoutHistory ? withoutHistory : false}
          className="link"
          to={linkUrl}
        >
          {linkTitle}
        </Link>
      </p>
      {linkSubtitle && <p className="subtext">{linkSubtitle}</p>}
    </div>
  );
}

export default LinkBlock;
