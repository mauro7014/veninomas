function openMap() {
  const circuit = CIRCUITS[currentCircuitIdx];
  const url = `https://www.google.com/maps/dir/?api=1`
            + `&origin=${circuit.origen}`
            + `&destination=${circuit.destino}`
            + `&waypoints=${encodeURIComponent(circuit.waypoints)}`
            + `&travelmode=walking`;
  window.open(url, '_blank');
}