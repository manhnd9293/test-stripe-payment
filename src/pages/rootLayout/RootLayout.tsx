import {Outlet} from "react-router";

function RootLayout() {
  return (
    <div className={'p-4 bg-gray-100 min-h-dvh'}>
      <Outlet/>
    </div>
  );
}

export default RootLayout;