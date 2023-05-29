import {
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import React from "react";
import ContentPlaceholder from "../content/contentPlaceholders";

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
  const pageContent = data.placeholders.contentArea1;

  return (
    <React.Fragment>
        <ContentPlaceholder components={pageContent} />
    </React.Fragment>
  );
}
