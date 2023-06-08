import React from "react";
import {
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import ContentPlaceholder from "../content/contentPlaceholders";
import PageHeader from "../components/PageHeader";
import ContactUsPageButton from "../components/ContactUsPageButton";

export const loader = async ({ request, params, context }) => {
  let route;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }
  // console.log("params ==>", params.page);

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route);
  const data = await res.json();

  return json({
    // page: data,
    route,
    data: data
  });
}

export default function Page() {
  const { route, data } = useLoaderData();
  const headerContent = data.content.header
  const pageContent = data.placeholders.contentArea1;
  return (
  <React.Fragment>    
    <PageHeader header={headerContent}/>
    <ContentPlaceholder components={pageContent} />
    {route !== 'contact-us' && <ContactUsPageButton/>}
  </React.Fragment>)
}