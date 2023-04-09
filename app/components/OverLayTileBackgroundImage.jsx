import React from "react";
// import ClientSideLazyLoadComponent from "../ClientSideLazyLoadComponent";
import { Link } from "react-router-dom";

function OverLayTile({ 
  tileTitle,
  tileSubtitle,
  tilePreview,
  tileColor,
  tileColorActive,
  tileBackgroundImage,
  columnMobile,
  columnTablet,
  columnDesktop,
  linkCta,
  linkCopy,
}) {
  return (
    // <ClientSideLazyLoadComponent>
      <article
        className={`column ${
          !columnMobile ? "is-full-mobile" : `${columnMobile}-mobile`
        }  ${columnTablet && `is-${columnTablet}-tablet`} ${
          columnDesktop && `is-${columnDesktop}-desktop`
        }`}
      >
        <div 
          className={`box has-text-white is-relative is-flex is-flex-direction-column is-min-24 background-image`}
          style={{ backgroundImage: `url(${tileBackgroundImage})` }}
        >
          <div
            className={`overlay has-background-${
              !tileColor ? "primary" : tileColor
            } is-opacity-6 has-background-${
              !tileColorActive ? "primary" : tileColorActive
            }-active zi-1`}
          ></div>
          <div
            className={`tile content is-flex-direction-column py-7-desktop py-6-tablet py-6-mobile px-4 is-flex h100 zi-2 is-justify-content-space-between`}
          >
            <div className={`tile-header is-block block`}>
              {tileTitle || tileSubtitle ? (
                <div className="block">
                  {!tileTitle ? null : (
                    <h4 className="title is-2">{tileTitle}</h4>
                  )}
                  {!tileSubtitle ? null : (
                    <h4 className="subtitle is-4 has-text-weight-normal">
                      {tileSubtitle}
                    </h4>
                  )}
                </div>
              ) : null}
            </div>
            {!tilePreview ? null : (
              <div className="tile-body is-block block">
                {!tilePreview ? null : <p>{tilePreview}</p>}
              </div>
            )}
            {!linkCta || !linkCopy ? null : (
              <div className={`tile-footer is-block block `}>
                <Link
                  className="button"
                  to={linkCta}
                  title={`${tileTitle || linkCopy}`}
                >
                  {linkCopy}
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    // </ClientSideLazyLoadComponent>
  );
}

export default OverLayTile;
