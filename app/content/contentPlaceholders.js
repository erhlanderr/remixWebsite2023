import React from "react";
// import SectionWrapper from "../contentBlocks/partials/SectionWrappers";
// import SectionWrappedCarousel from "../contentBlocks/SectionWrappedCarousel";
import SectionWrappedImageWithContent from "../contentBlocks/SectionWrappedImageWithContent";
// import SectionWrappedOverlayTileGrid from "../contentBlocks/SectionWrappedOverlayTileGrid";
// import SectionWrappedSectionCTA from "../contentBlocks/SectionWrappedSectionCTA";
// import SectionWrappedSectionTitle from "../contentBlocks/SectionWrappedSectionTitle";
// import SectionWrappedArticleCarousel from "../contentBlocks/SectionWrappedArticleCarousel";
// import SectionWrappedArticleMasonaryGrid from "../contentBlocks/SectionWrappedArticleMasonaryGrid";
// import SectionWrappedArticleGrid from "../contentBlocks/SectionWrappedArticleGrid";
// import SectionWrappedIconContentModuleGrid from "../contentBlocks/SectionWrappedIconContentModuleGrid";
// import SectionWrappedDropDownListModuleGrid from "../contentBlocks/SectionWrappedDropDownListModuleGrid";
// import SectionWrappedGrid from "../contentBlocks/SectionWrappedGrid";
// import SectionWrappedImageContentModuleGrid from "../contentBlocks/SectionWrappedImageContentModuleGrid";
// import SectionWrappedTilesModuleGrid from "../contentBlocks/SectionWrappedTilesModuleGrid";
// import SectionWrappedContentBlockGrid from "../contentBlocks/SectionWrappedContentBlockGrid";
// import SectionWrappedSectionTitleGrid from "../contentBlocks/SectionWrappedSectionTitleGrid";
// import SectionWorkDynamicArticles from "../contentBlocks/SectionWorkDynamicArticles";
// import TileContentModule from "../contentBlocks/TileContentModule";
import PageIntro from "../contentBlocks/pageIntro";
// import StatsPanel from "../contentBlocks/StatsPanel";
// import ContentBlock from "../contentBlocks/ContentBlock";
// import ImageContentBlock from "../contentBlocks/ImageContentBlock";
// import Testimonials from "../contentBlocks/Testimonials";
// import SectionTitle from "../contentBlocks/partials/SectionTitle";
// import Grid from "../contentBlocks/partials/Grid";
// import BlogList from "../contentBlocks/BlogList";
// import BlogPost from "../contentBlocks/BlogPost";
// import BlogArticleAuthor from "../contentBlocks/partials/BlogArticleAuthor";
// import ContactForm from "../contentBlocks/ContactForm";
// import GoogleMap from "../contentBlocks/partials/GoogleMap";
// import SiteMap from "../contentBlocks/SiteMap";
// import DropDownListItem from "../contentBlocks/DropDownListItem";
// import SectionWrappedDropDownContactForm from "../contentBlocks/SectionWrappedDropDownContactForm";
// import SectionWrappedVideoBackground from "../contentBlocks/SectionWrappedVideoBackground";
// import MenuBlogList from "../navigation/MenuBlogList";
// import SubMenuCopy from "../navigation/SubMenuCopy";
// import SubMenuLinkList from "../navigation/SubMenuLinkList";

const componentRegistry = {
//   sectionwrapper: SectionWrapper,
  sectionwrappedimagewithcontent: SectionWrappedImageWithContent,
//   sectionwrappedcarousel: SectionWrappedCarousel,
//   sectionwrappedsectiontitle: SectionWrappedSectionTitle,
//   sectionwrappedoverlaytilegrid: SectionWrappedOverlayTileGrid,
//   sectionwrappedsectioncta: SectionWrappedSectionCTA,
//   sectionwrappedarticlecarousel: SectionWrappedArticleCarousel,
//   sectionwrappedtilesmodulegrid: SectionWrappedTilesModuleGrid,
//   sectionwrappedarticlemasonarygrid: SectionWrappedArticleMasonaryGrid,
//   sectionwrappedarticlegrid: SectionWrappedArticleGrid,
//   sectionwrappediconcontentmodulegrid: SectionWrappedIconContentModuleGrid,
//   sectionwrappeddropdownlistmodulegrid: SectionWrappedDropDownListModuleGrid,
//   sectionwrappedgrid: SectionWrappedGrid,
//   sectionwrappedimagecontentmodulegrid: SectionWrappedImageContentModuleGrid,
//   tilecontentmodule: TileContentModule,
  pageintro: PageIntro,
//   statspanel: StatsPanel,
//   contentblock: ContentBlock,
//   imagecontentblock: ImageContentBlock,
//   testimonials: Testimonials,
//   sectiontitle: SectionTitle,
//   sectionwrappedcontentblockgrid: SectionWrappedContentBlockGrid,
//   sectionwrappedsectiontitlegrid: SectionWrappedSectionTitleGrid,
//   sectionworkdynamicarticles: SectionWorkDynamicArticles,
//   bloglist: BlogList,
//   blogpost: BlogPost,
//   blogarticleauthor: BlogArticleAuthor,
//   contactform: ContactForm,
//   googlemap: GoogleMap,
//   sitemap: SiteMap,
//   dropdownlistitem: DropDownListItem,
//   sectionwrappeddropdowncontactform: SectionWrappedDropDownContactForm,
//   sectionwrappedvideobackground: SectionWrappedVideoBackground,
//   // menu navigation components
//   menubloglist: MenuBlogList,
//   submenucopy: SubMenuCopy,
//   submenulinklist: SubMenuLinkList,
};

let renderWrappedItem = (key, item) => {
  const type = item["_type"];
  const Component = componentRegistry[type.toLowerCase()];

  return <Component key={key} componentKey={key} {...item}></Component>;
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
          return <Component key={key} componentKey={key} {...component} />;
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
