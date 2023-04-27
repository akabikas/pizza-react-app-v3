import React from "react";
import { Sidebardata } from "./components/Sidebardata";

//List item to map an aray i've give it a Key. the div represents an icon as an element inside the value. and a div for the tittle.

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {Sidebardata.map((val, key) => {
          return (
            <li
              key={key}
              className="row" /* each element is in a different row */
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {/*this function re-directs to whatever link we set in sidebardata,js */}
              {""}
              <div id="icon">(val.icon)</div>
              {""}
              <div id="tittle">{val.tittle}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
