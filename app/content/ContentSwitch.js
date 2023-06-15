import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import ContentPage from '../pages/ContentPage';
import { useContentContext } from './ContentContext';

const templates = {
  contentpage: ContentPage
}

const ContentSwitch = () => {

  const { contentRepository, useContent } = useContentContext();

  const location = useLocation();

  const pages = useContent(() =>
    contentRepository.getPages(location.pathname),
    [location.pathname],
    null);

  return (<Switch>
    {pages?.map((page) => {
      const Template = templates[page.template.toLowerCase()];
      if (!Template)
        return <div><strong>Error:</strong> Template {page.template} not found.</div>
      else {
        return (
          <Route key={page.route} path={page.route}>
            <Template key={page.route}></Template>
          </Route>
        )
      }
    })}
    {pages !== null && <ContentPage key="/404" pathname="/404" />}
  </Switch>);
}

export default ContentSwitch;