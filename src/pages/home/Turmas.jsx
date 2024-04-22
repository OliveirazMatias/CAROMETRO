import React, { useState } from 'react';
import './Turmas.css';


function TurmasScreen() {
  const [selectedTurma, setSelectedTurma] = useState(null);
  const turmaOptions = [
    { id: 'IDEV1', label: 'IDEV1' },
    { id: 'IDEV2', label: 'IDEV2' },
    { id: 'IDEV3', label: 'IDEV3' },
    { id: 'IELE/MEC1', label: 'IELE/MEC1' },
    { id: 'IELE/MEC2', label: 'IELE/MEC2' },
    { id: 'IELE/MEC3', label: 'IELE/MEC3' },
  ];

  const handleTurmaSelect = (turmaId) => {
    setSelectedTurma(turmaId);
  };

  const handleConfirm = () => {
    if (selectedTurma) {
      console.log(`Selected Turma: ${selectedTurma}`);
    } else {
      console.log('Please choose a turma before confirming.');
    }
  };

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
                        <li class="nav-item">
                          <a class="nav-link" href="/idev1">IDEV-1</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/idev2">IDEV-2</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/idev3">IDEV-3</a>
                        </li>
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
                        <li class="nav-item">
                          <a class="nav-link active" href="/ilecmec1">ILEMEC-1</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/ilecmec2">ILEMEC-2</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/ilecmec3">ILEMEC-3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <p># ESCOLHER APENAS UM!</p>
          <button className="confirmar" onClick={handleConfirm}>CONFIRMAR</button>
        </div>

      </div>
    </>
  );
}

export default TurmasScreen;
