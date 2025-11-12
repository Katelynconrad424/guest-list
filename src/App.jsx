import { useState } from "react";
import GuestDetails from "./guests/GuestDetails";
import GuestList from "./guests/GuestList";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <div>
      <h1>Guest List</h1>
      <GuestList setSelectedGuest={setSelectedGuest} />
      {selectedGuest && <GuestDetails guest={selectedGuest} />}
    </div>
  );
}
