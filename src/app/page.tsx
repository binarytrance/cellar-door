import Image from "next/image";
import MapContainer from "./Components/MapContainer";
import LandingForm from "./Components/LandingForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-dvh">
      <div className="grid grid-cols-2 gap-0 w-full h-full divide-x">
        <div className="col-span-1 p-24">
          <LandingForm />
        </div>
        <div className="col-span-1">
          <MapContainer />
        </div>
      </div>
    </main>
  );
}
