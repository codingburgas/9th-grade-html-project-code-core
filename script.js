document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

    
  const employees = [
    { name: "Иван", surname: "Георгиев", id: 101, team: "A", status: "Свободен" },
    { name: "Мария", surname: "Петрова", id: 102, team: "B", status: "В произшествие" }
  ];

  const vehicles = ["Пожарна 1", "Пожарна 2", "Пожарна 3"];

  const table = document.getElementById("employeeTable");
  if (table) {
    employees.forEach(emp => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.surname}</td>
        <td>${emp.id}</td>
        <td>${emp.team}</td>
        <td style="color:${emp.status === 'Свободен' ? 'green' : emp.status === 'В произшествие' ? 'red' : 'orange'}">
          ${emp.status}
        </td>
      `;
      table.appendChild(row);
    });
  }

  const vehicleList = document.getElementById("vehicleList");
  if (vehicleList) {
    vehicles.forEach(v => {
      const li = document.createElement("li");
      li.textContent = v;
      vehicleList.appendChild(li);
    });
  }

  if (document.getElementById("map")) {
    const map = L.map("map").setView([42.6975, 23.3242], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([42.6975, 23.3242]).addTo(map).bindPopup("Произшествие: Пожар").openPopup();
  }

 
  if (document.getElementById("chart")) {
    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Пожари', 'Катастрофи'],
        datasets: [{
          label: 'Брой събития',
          data: [5, 2],
          backgroundColor: ['red', 'orange']
        }]
      }
    });
  }
});
