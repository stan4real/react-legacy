import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Components/AppBar/AppBar";

export default function Root() {
    return (
      <>
        <ResponsiveAppBar/>
        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }