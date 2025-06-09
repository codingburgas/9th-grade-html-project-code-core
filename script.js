window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", function () {
    document.body.removeChild(loader);
  });
});

const LDModeToggle = document.getElementById("themeToggle");

LDModeToggle.addEventListener('click', function(){

  document.body.classList.toggle('dark')
  
});


  // Служители
  const employees = [
    { name: "Ivan", surname: "Petrov", id: 1, team: "A", status: "В проишествие", phone: "0888123456" },
    { name: "Maria", surname: "Ivanova", id: 2, team: "B", status: "В проишествие", phone: "0899123456" },
    { name: "Georgi", surname: "Dimitrov", id: 3, team: "A", status: "В почивка", phone: "0877123456" },
    { name: "Elena", surname: "Stoyanova", id: 4, team: "C", status: "В проишествие", phone: "0889123457" },
    { name: "Nikolay", surname: "Kolev", id: 5, team: "B", status: "Свободен", phone: "0898123457" },
    { name: "Desislava", surname: "Todorova", id: 6, team: "A", status: "В почивка", phone: "0878123457" },
    { name: "Petar", surname: "Mihaylov", id: 7, team: "C", status: "В проишествие", phone: "0887123458" },
    { name: "Yordanka", surname: "Nikolova", id: 8, team: "A", status: "В проишествие", phone: "0897123458" },
    { name: "Krasimir", surname: "Marinov", id: 9, team: "B", status: "В проишествие", phone: "0876123458" },
    { name: "Valentina", surname: "Alekseeva", id: 10, team: "A", status: "На смяна", phone: "0886123459" },
    { name: "Aleksandar", surname: "Georgiev", id: 11, team: "C", status: "На смяна", phone: "0895123459" },
    { name: "Svetlana", surname: "Petrova", id: 12, team: "B", status: "Свободен", phone: "0875123459" },
    { name: "Todor", surname: "Ivanov", id: 13, team: "A", status: "Свободен", phone: "0884123460" },
    { name: "Rositsa", surname: "Dimitrova", id: 14, team: "C", status: "Свободен", phone: "0894123460" },
    { name: "Iliya", surname: "Kostov", id: 15, team: "B", status: "В почивка", phone: "0874123460" }
  ];

  const table = document.getElementById("employeeTable");
  if (table) {
    for (let e of employees) {
      const row = document.createElement("tr");

      const nameTd = document.createElement("td");
      nameTd.textContent = e.name;

      const surnameTd = document.createElement("td");
      surnameTd.textContent = e.surname;

      const idTd = document.createElement("td");
      idTd.textContent = e.id;

      const teamTd = document.createElement("td");
      teamTd.textContent = e.team;

      const statusTd = document.createElement("td");
      statusTd.textContent = e.status;

      if (e.status === "Свободен") {
        statusTd.classList.add("status-free");
      } else if (e.status === "На смяна") {
        statusTd.classList.add("status-duty");
      } else if (e.status === "В почивка") {
        statusTd.classList.add("status-break");
      } else if (e.status === "В проишествие") {
        statusTd.classList.add("status-incident");
      }

      row.appendChild(nameTd);
      row.appendChild(surnameTd);
      row.appendChild(idTd);
      row.appendChild(teamTd);
      row.appendChild(statusTd);

      table.appendChild(row);
    }
  }

  // Карта
  if (document.getElementById("map")) {
    const map = L.map("map").setView([42.6975, 23.3242], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    for (let i = 0; i < 10; i++) {
      let lat = 42.6975 + (Math.random() - 0.5) * 0.1;
      let lon = 23.3242 + (Math.random() - 0.5) * 0.1;
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`Произшествие №${i + 1}: Пожар`);
    }
  }

  // Автомобили
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const fixedVehicles = [
    { number: 1, model: "MAN TGM 13.290", registration: "CB1234AB" },
    { number: 2, model: "Mercedes Atego", registration: "PB5678CD" },
    { number: 3, model: "Volvo FL", registration: "B9101EF" },
    { number: 4, model: "Scania P280", registration: "E2345GH" },
    { number: 5, model: "MAN TGM 13.290", registration: "TX6789IJ" },
    { number: 6, model: "Mercedes Atego", registration: "KH3456KL" },
    { number: 7, model: "Volvo FL", registration: "PP7890MN" },
    { number: 8, model: "Scania P280", registration: "M1234OP" },
    { number: 9, model: "MAN TGM 13.290", registration: "Y5678QR" },
    { number: 10, model: "Mercedes Atego", registration: "CH9012ST" },
    { number: 11, model: "Volvo FL", registration: "PK3456UV" },
    { number: 12, model: "Scania P280", registration: "T7890WX" },
    { number: 13, model: "MAN TGM 13.290", registration: "CC1234YZ" },
    { number: 14, model: "Mercedes Atego", registration: "BH5678AA" },
    { number: 15, model: "Volvo FL", registration: "CM9012BB" }
  ];

  const types = ["Пожарна", "Линейка", "Команден", "Техника"];
  const statuses = ["Свободен", "На мисия", "В ремонт"];

  const vehicles = fixedVehicles.map(v => ({
    ...v,
    type: getRandomItem(types),
    status: getRandomItem(statuses)
  }));

  const container = document.getElementById("vehicleContainer");
  if (container) {
    vehicles.forEach(vehicle => {
      const table = document.createElement("table");
      table.className = "vehicle-table";

      table.innerHTML = `
        <tr><td class="label">#</td><td>${vehicle.number}</td></tr>
        <tr><td class="label">Модел</td><td>${vehicle.model}</td></tr>
        <tr><td class="label">Рег. номер</td><td>${vehicle.registration}</td></tr>
        <tr><td class="label">Тип</td><td>${vehicle.type}</td></tr>
        <tr><td class="label">Статус</td><td style="color: ${vehicle.status === 'Свободен' ? 'green' : vehicle.status === 'На мисия' ? 'red' : 'orange'}">${vehicle.status}</td></tr>
      `;

      container.appendChild(table);
    });
  }

