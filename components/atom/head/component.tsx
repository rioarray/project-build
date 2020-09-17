import React from "react";
import Head from "next/head";

interface IProps {
  title: string;
}

export const HeadComponent: React.FC<IProps> = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="ui center aligned header">{title}</h1>
  </>
);

export default HeadComponent;
