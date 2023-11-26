import { Sidebar } from "../../Layout";
import logo from "../../assets/iutepal-logo.png";

function NoFound() {
  return (
    <>
      <Sidebar>
        <div className="ml-64">
        <img className="h-auto w-auto ml-28" src={logo} alt="IUTEPAL" />
        <h1 className="text-6xl font-bold my-10">¡Proximamente!</h1>
        </div>
      </Sidebar>
    </>
  );
}

export default NoFound;
