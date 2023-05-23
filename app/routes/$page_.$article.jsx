import React from "react";
import {
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import ContentPlaceholder from "../content/contentPlaceholders";

export const loader = async ({ request, params, context }) => {
  let route;
  let article;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }
  article = params.article
  console.log("params res ==>", article);
  
  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route + "/" + article);
  console.log("params res ==>", res);
  const data = await res.json();
  console.log("params data ==>", data);

  return json({
    // page: data,
    route,
    data: data
  });
}

export default function Page() {
  const { route, data } = useLoaderData();
  const pageContent = data.placeholders.contentArea1;
  return (<React.Fragment>
    <ContentPlaceholder components={pageContent} />
  </React.Fragment>)
}