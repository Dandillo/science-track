import React from "react";

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="main" className="container mx-auto p-[40px] h-full">
        <Outlet />
      </div>
    </>
  );
}