import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./App.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-number">404</div>

      <p className="eyebrow">MILAN 2027</p>

      <h1>
        THIS PAGE
        <br />
        <i>DOESN'T EXIST.</i>
      </h1>

      <p>
        Looks like you've wandered off the festival map.
        <br />
        Let's get you back to MILAN.
      </p>

      <a href="/" className="explore-button">
        BACK TO MILAN
        <ArrowUpRight size={18} />
      </a>
    </main>
  );
}

export default NotFound;