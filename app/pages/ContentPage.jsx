import React from 'react';
import withContent from '../content/withContent';

import Page from '../Page';

// Removed from loadable as was causing issues with JSON on blog pages
// const Page = loadable(() => import('../Page'));

import Header from '../components/Header';
import SectionWrappers from '../components/partials/SectionWrappers';
import Breadcrumb from '../components/Breadcrumb';
import Grid from '../components/partials/Grid';
import GoogleMap from '../components/partials/GoogleMap';

import ContentPlaceholder from '../content/ContentPlaceholder';
import SectionCTA from '../components/partials/SectionCTA';
import SectionTitle from '../components/partials/SectionTitle';

function HomePage({ page, location }) {
  return (
    <>
      {page && <Page title={page?.data?.content?.header?.title}>
        <Header
          {...page?.data?.content?.header}
          />
        <Breadcrumb 
          path={location.pathname}
        />
        <group key={"blog-group"} className={`group ${!location.pathname.includes('/our-blogs') && 'has-text-centered-mobile'}`}>
          <ContentPlaceholder components={page.data?.placeholders?.contentArea1} />
          {page.data.placeholders?.contentArea2 && (
            <SectionWrappers 
              sectionSize='small' 
            >
              <Grid
                contentWrapper={true}>
                <ContentPlaceholder components={page.data?.placeholders?.contentArea2} />
              </Grid>
            </SectionWrappers>
          )}
          <ContentPlaceholder components={page.data?.placeholders?.contentArea3} />
        </group> 
        {!location.pathname.includes('/contact-us') && <SectionWrappers
            sectionIsEqual={true}  
            textAlignment="centered"
            sectionCustomClasses={`has-background-dark pass-footer-margin has-text-dark has-secondary-buttons has-text-centered ${location.pathname.includes('/contact-us') ? 'pt-0' : null}`}
          >
            <SectionTitle title={"Let's get things started"} />
            <SectionCTA ctaTitle={"Contact Us"} ctaLink={'/contact-us'} ctaStyle={'large'} />
          </SectionWrappers>}
          
          {location.pathname.includes('/contact-us') && <div className="section p-0 pass-footer-margin">
            <GoogleMap />
          </div>}

      </Page>}
    </>
  )
}

export default withContent(HomePage);