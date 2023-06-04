import {
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import React from "react";
import ContentPlaceholder from "../content/contentPlaceholders";
import PageHeader from "../components/PageHeader";

export const loader = async ({ request, params }) => {
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


export default function Index() {
  const { route, data } = useLoaderData();
  const headerContent = data.content.header
  const pageContent = data.placeholders.contentArea1;

  return (
    <React.Fragment>
      <PageHeader header={headerContent} />
      <ContentPlaceholder components={pageContent} />
    </React.Fragment>
  );
}
