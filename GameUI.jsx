import React, { useState, useEffect } from 'react';

const GameUI = () => {
  const [resources, setResources] = useState({ energy: 100, metal: 50, science: 0 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResources(prev => ({
        ...prev,
        energy: prev.energy + 1,
        metal: prev.metal + 2,
        science: prev.science + 0.5,
      }));
      setTick(t => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("cosmicIdleSave", JSON.stringify(resources));
  }, [resources]);

  return (
    <div>
      <h1 className="text-3xl mb-4">Cosmic Idle</h1>
      <p>Energy: {resources.energy}</p>
      <p>Metal: {resources.metal}</p>
      <p>Science: {resources.science.toFixed(1)}</p>
      <p className="mt-4 text-sm">Tick: {tick}</p>
    </div>
  );
};

export default GameUI;
