import { FC } from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
