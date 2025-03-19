"use client";
import * as React from "react";
import { NextPageContext } from "next";

Page.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default function Page({ stars }: { stars: number }) {
  return <div>{stars}</div>;
}
