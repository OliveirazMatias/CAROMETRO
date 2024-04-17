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
              <label>
                <input type="checkbox" /> IDEV-1
              </label>
              <label>
                <input type="checkbox" /> IDEV-2
              </label>
              <label>
                <input type="checkbox" /> IDEV-3
              </label>
            </div>
            <div className='ilecmec'>
            <label>
                <input type="checkbox" /> ILEC/MEC-1
              </label>
              <label>
                <input type="checkbox" /> ILEC/MEC-2
              </label>
              <label>
                <input type="checkbox" /> ILEC/MEC-3
              </label>
            </div>
            </div>
          </div>
          
          <button className="confirmar" onClick={handleConfirm}>CONFIRMAR</button>
        </div>

      </div>
    </>
  );
}

export default TurmasScreen;
