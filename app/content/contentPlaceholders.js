import React from "react";
import SectionWrappedImageWithContent from "../contentBlocks/SectionWrappedImageWithContent";
import SectionWrappedIconContentModuleGrid from "../contentBlocks/SectionWrappedIconContentModuleGrid";
import SectionWrappedContentBlockGrid from "../contentBlocks/SectionWrappedContentBlockGrid";
import PageIntro from "../contentBlocks/pageIntro";
import SectionWrappedSectionTitle from "../contentBlocks/SectionWrappedSectionTitle";
import SectionWrappedOverlayTileGrid from "../contentBlocks/SectionWrappedOverlayTileGrid";
import SectionWrappedTilesModuleGrid from "../contentBlocks/SectionWrappedTilesModuleGrid";
import SectionWrappedArticleGrid from "../contentBlocks/SectionWrappedArticleGrid";
// import SectionWorkDynamicArticles from "../contentBlocks/SectionWorkDynamicArticles"; Needs to use a loader to add in the latest content
import SectionWrappedSectionCTA from "../contentBlocks/SectionWrappedSectionCTA";
import BlogList from "../contentBlocks/SectionBlogList";
import SectionWrappedCarousel from "../contentBlocks/SectionWrappedCarousel";
import SectionWrappedArticleCarousel from "../contentBlocks/SectionWrappedArticleCarousel";
import SectionWrappedVideoBackground from "../contentBlocks/SectionWrappedVideoBackground";
import SectionBlogPost from "../contentBlocks/SectionBlogPost";
// import SectionWrapper from "../contentBlocks/partials/SectionWrappers";
// import SectionWrappedArticleMasonaryGrid from "../contentBlocks/SectionWrappedArticleMasonaryGrid";
// import SectionWrappedDropDownListModuleGrid from "../contentBlocks/SectionWrappedDropDownListModuleGrid";
// import SectionWrappedGrid from "../contentBlocks/SectionWrappedGrid";
// import SectionWrappedImageContentModuleGrid from "../contentBlocks/SectionWrappedImageContentModuleGrid";
// import SectionWrappedSectionTitleGrid from "../contentBlocks/SectionWrappedSectionTitleGrid";
// import TileContentModule from "../contentBlocks/TileContentModule";
// import StatsPanel from "../contentBlocks/StatsPanel";
// import ContentBlock from "../contentBlocks/ContentBlock";
// import ImageContentBlock from "../contentBlocks/ImageContentBlock";
// import Testimonials from "../contentBlocks/Testimonials";
// import SectionTitle from "../contentBlocks/partials/SectionTitle";
// import Grid from "../contentBlocks/partials/Grid";
// import BlogArticleAuthor from "../contentBlocks/partials/BlogArticleAuthor";
// import ContactForm from "../contentBlocks/ContactForm";
// import GoogleMap from "../contentBlocks/partials/GoogleMap";
// import SiteMap from "../contentBlocks/SiteMap";
// import DropDownListItem from "../contentBlocks/DropDownListItem";
// import SectionWrappedDropDownContactForm from "../contentBlocks/SectionWrappedDropDownContactForm";
// import MenuBlogList from "../navigation/MenuBlogList";
// import SubMenuCopy from "../navigation/SubMenuCopy";
// import SubMenuLinkList from "../navigation/SubMenuLinkList";

const componentRegistry = {
  sectionwrappedimagewithcontent: SectionWrappedImageWithContent,
  sectionwrappediconcontentmodulegrid: SectionWrappedIconContentModuleGrid,
  pageintro: PageIntro,
  sectionwrappedcontentblockgrid: SectionWrappedContentBlockGrid,
  sectionwrappedsectiontitle: SectionWrappedSectionTitle,
  sectionwrappedoverlaytilegrid: SectionWrappedOverlayTileGrid,
  sectionwrappedtilesmodulegrid: SectionWrappedTilesModuleGrid,
  sectionwrappedarticlegrid: SectionWrappedArticleGrid,
  // sectionworkdynamicarticles: SectionWorkDynamicArticles,
  sectionwrappedsectioncta: SectionWrappedSectionCTA,
  bloglist: BlogList,
  sectionwrappedcarousel: SectionWrappedCarousel,
  sectionwrappedarticlecarousel: SectionWrappedArticleCarousel,
  sectionwrappedvideobackground: SectionWrappedVideoBackground,
  blogpost: SectionBlogPost,
  //   sectionwrapper: SectionWrapper,
  //   sectionwrappedarticlemasonarygrid: SectionWrappedArticleMasonaryGrid,
  //   sectionwrappeddropdownlistmodulegrid: SectionWrappedDropDownListModuleGrid,
  //   sectionwrappedgrid: SectionWrappedGrid,
  //   sectionwrappedimagecontentmodulegrid: SectionWrappedImageContentModuleGrid,
  //   tilecontentmodule: TileContentModule,
  //   statspanel: StatsPanel,
  //   contentblock: ContentBlock,
  //   imagecontentblock: ImageContentBlock,
  //   testimonials: Testimonials,
  //   sectiontitle: SectionTitle,
  //   sectionwrappedsectiontitlegrid: SectionWrappedSectionTitleGrid,
  //   blogarticleauthor: BlogArticleAuthor,
  //   contactform: ContactForm,
  //   googlemap: GoogleMap,
  //   sitemap: SiteMap,
  //   dropdownlistitem: DropDownListItem,
  //   sectionwrappeddropdowncontactform: SectionWrappedDropDownContactForm,
  //   // menu navigation components
  //   menubloglist: MenuBlogList,
  //   submenucopy: SubMenuCopy,
  //   submenulinklist: SubMenuLinkList,
};

let renderWrappedItem = (key, item) => {
  const type = item["_type"];
  const Component = componentRegistry[type.toLowerCase()];

  return <Component key={key} type={type} componentKey={key} {...item}></Component>;
};

const ContentPlaceholder = ({ components }) => {
  if (components) {
    return Object.keys(components).map((key) => {
      const component = components[key];
      const type = component["_type"];
      if (
        type &&
        type.toLowerCase() === "sectionwrapper" &&
        component["wrappedComponents"]
      ) {
        let wrappedComponents = component["wrappedComponents"];
        const Component = componentRegistry[type.toLowerCase()];
        if (Component) {
          return (
            <Component
              type={type}
              key={key}
              componentKey={key}
              sectionSize={component["sectionSize"]}
            >
              
              {/* <Grid 
                justification={component["justification"]}
                contentWrapper={component["contentWrapper"]}
                isOffset={component["offset"]}
              > */}
              {Object.keys(wrappedComponents).map((key) =>
                <>
                  {renderWrappedItem(key, wrappedComponents[key])}
                </>
              )}
              {/* </Grid> */}
            </Component>
          );
        }
      }
      if (type) {
        const Component = componentRegistry[type.toLowerCase()];
        if (Component) {
          return <Component key={key} type={type} componentKey={key} {...component} />;
        } else {
          return (
            <div key={key}>
              {key} {component["$type"]} does not exist.
              {/* {key} {component["$type"].toLowerCase()} does not exist. */}
            </div>
          );
        }
      } else {
        return <div>{key} $type not defined.</div>;
      }
    });
  } else return null;
};

export default ContentPlaceholder;
