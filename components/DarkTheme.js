import React from "react";

function DarkTheme() {
  return (
    <style jsx global>{`
      /* Dark Theme */
      :root {
        --background-color: rgb(46, 46, 46);
        --link-color: rgb(255, 191, 0);
        --text-color: rgb(238, 235, 235);
      }
    `}</style>
  );
}

export default DarkTheme;
