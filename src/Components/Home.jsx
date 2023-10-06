import React from "react";
import "../CSS/Home.css";
import IMG from "../assets/org-rasp.png";

function Home() {
  return (
    <div className="">
      <div className="">
        <h1 className="ml-12 mt-5 font-bold text-5xl text-blue-600 ">
          VOID MINDS
        </h1>
      </div>
      <div className="container">
        <div className="mt-28">
          <h2 className="text-7xl font-bold">
            WELCOME TO THE <span className="text-blue-700">RASPBERRI-PI</span>{" "}
            DOWNLOAD CENTER.
          </h2>
          <br />
        </div>
        <div className="flex">
          <div className="">
            <h4 className="text-3xl font-ligh mt-10">
              Get started with your RASPBERRI-PI by downlaoding the latest
              version of the operating system.
            </h4>
            {/* Buttons */}
            <div className="mt-44">
              <button className="btn btn-outline-primary btn-lg mr-5">
                DOWNLOAD THE IMAGES
              </button>

              {/* Dropdown */}
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-primary btn-lg dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  DOWNLOAD OS
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      LINUX
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      WINDOWS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-38 bg-slate-900 p-5 rounded">
            <img src={IMG} className="" alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
