import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

const Mylocation = ({ ltd, lon }) => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <Map defaultCenter={[ltd, lon]} defaultZoom={13}>
      <Marker
        width={50}
        anchor={[ltd, lon]}
        color={color}
        onMouseOver={() => setHue(hue + 20)}
        onMouseOut={() => setHue(hue - 20)}
      />
    </Map>
  );
};

export default Mylocation;
