import React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{
        uri: "http://randomsquiz.s3-website.ap-northeast-2.amazonaws.com/",
      }}
      style={{ marginTop: 100 }}
    />
  );
}
