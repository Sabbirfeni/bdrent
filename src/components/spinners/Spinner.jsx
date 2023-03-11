import React from "react";
import './css/spinner.css';

export default function Spinner() {
  return (
    <div className="loader-container">
        <div class="loader">
            <div class="loader-inner">
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            </div>
        </div>
    </div>

  
    );
}
