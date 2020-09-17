import React from "react";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "@pathofdev/react-tag-input/build/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
