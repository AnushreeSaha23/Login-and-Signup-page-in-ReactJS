import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Signup">
                  <button class="btn btn-outline-dark me-2" type="button">Signup</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  <button class="btn btn-outline-dark me-2" type="button">Login</button>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}




