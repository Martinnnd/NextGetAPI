"use client"
import { useState, useEffect } from 'react';

export default function Futbolistas() {
  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {
    async function fetchFutbolistas() {
      const response = await fetch('/api/futbolistas');
      const data = await response.json();
      setFutbolistas(data);
    }

    fetchFutbolistas();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {futbolistas.map((futbolista, index) => (
        <div key={index} className="p-4 border rounded shadow-md">
          <h2 className="text-xl font-bold">{futbolista.nombre}</h2>
          <p>Equipo: {futbolista.equipo}</p>
        </div>
      ))}
    </div>
  );
}
