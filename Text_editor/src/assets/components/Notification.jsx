import React from "react";

import Button from "./Button";

function App() {
  const notify = () => toast("Text Converted successfully");

  return (
    <div>
      <Button onClick={this.props.notify} />
      <ToastContainer />
    </div>
  );
}
