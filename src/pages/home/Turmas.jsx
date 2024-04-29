import React, { useState } from 'react';
import './Turmas.css';


function Turmas() {
  return (
    <>
      <header>
        <img src="./src/img/senaipreta.png" alt="logo senai" width={220} />
        <img src="./src/img/icon.png" alt="icon" width={50} />
      </header>
      <div className="al">
        <h1>TURMAS</h1>
        <div className="turmas-container">
          <div className='titulo'>
            <h2>ESCOLHA A TURMA</h2>
          </div>
          <div className="turma-options">
            <div className="ile-dev">
              <div className='idev'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <ul class="nav-item">
                          <a class="nav-link-idev1" href="/idev1">IDEV-1</a>
                        </ul>
                        <ul class="nav-item">
                          <a class="nav-link-idev2" href="/idev2">IDEV-2</a>
                        </ul>
                        <ul class="nav-item">
                          <a class="nav-link-idev3" href="/idev3">IDEV-3</a>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className='ilecmec'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <ul class="nav-item">
                          <a class="nav-link-ilecmec1" href="/ilecmec1">ILEMEC-1</a>
                        </ul>
                        <ul class="nav-item">
                          <a class="nav-link-ilecmec2" href="/ilecmec2">ILEMEC-2</a>
                        </ul>
                        <ul class="nav-item">
                          <a class="nav-link-ilecmec3" href="/ilecmec3">ILEMEC-3</a>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Turmas;
