import React, { useState } from 'react';
import './Turmas.css';

function TurmasScreen() {
  const [selectedTurma, setSelectedTurma] = useState(null);
  const turmaOptions = [
    { id: 'IDEV1', label: 'IDEV1' },
    { id: 'IELE/MEC1', label: 'IELE/MEC1' },
    { id: 'IDEV2', label: 'IDEV2' },
    { id: 'IELE/MEC2', label: 'IELE/MEC2' },
    { id: 'IDEV3', label: 'IDEV3' },
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
        <img src="./src/img/senaipreta.png" alt="logo senai" width={220}/>
        <img src="./src/img/icon.png" alt="icon" width={50} />
      </header>
      <div className="al">
        <h1>TURMAS</h1>
        <div className="turmas-container">
          <h2>ESCOLHA A TURMA</h2>
          <div className="turma-options">
            {turmaOptions.map((turma) => (
              <label key={turma.id}>
                <input
                  type="checkbox"
                  checked={selectedTurma === turma.id}
                  onChange={() => handleTurmaSelect(turma.id)}
                />
                {turma.label}
              </label>
            ))}
          </div>
          {selectedTurma && (
            <p className="warning"># SÓ ESCOLHA UMA!</p>
          )}
          <button className="confirmar" onClick={handleConfirm}>CONFIRMAR</button>
        </div>

      </div>
    </>
  );
}

export default TurmasScreen;
