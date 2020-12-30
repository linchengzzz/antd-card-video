import React from "react";
import ReactDOM from "react-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <div className="App">
    <Card
      cover={
        <div>
          <video
            controls
            width="250"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
        </div>
      }
    >
      <Card.Meta title="video" description="video" />
    </Card>
  </div>,
  document.getElementById("root")
);
