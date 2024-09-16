import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">VECTORshift</div>
      </nav>
      <PipelineToolbar />
      <div className="pipeline-ui-container">
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
