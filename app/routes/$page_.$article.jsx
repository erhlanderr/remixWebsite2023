import React from "react";
import {
  useLoaderData,
  useNavigate
} from "@remix-run/react";
import { json } from "@remix-run/node";
import ContentPlaceholder from "../content/contentPlaceholders";
import PageHeader from "../components/PageHeader";

export const meta = ({ data }) => {
  return [{ title: `${data.title} | Bespoke Software London | MethodWorx` }];
};

export const loader = async ({ request, params, context }) => {
  let route;
  let article;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }
  article = params.article
  // console.log("params res ==>", article);

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route + "/" + article);
  // console.log("params res ==>", res);
  const data = await res.json();
  // console.log("params data ==>", data);

  return json({
    // page: data,
    route,
    data: data,
    title: data.content.header.title,
  });
}

export default function Page() {
  const { route, data } = useLoaderData();
  const headerContent = data.content.header
  const pageContent = data.placeholders.contentArea1;
  // console.log("page content ==>", data);
  // console.log("is Blog post ==>", pageContent);
  // console.log("is Blog pageContent ==>", pageContent);
  return (
    <React.Fragment>
      <PageHeader header={headerContent}/>
      {/* {pageContent.blogPost !== undefined ? : */}
      <ContentPlaceholder components={pageContent} />
    </React.Fragment>
  )
}