import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <p>page Home en construction</p>
      <p>
        <Outlet />
      </p>
    </>
  );
}

export default Home;
