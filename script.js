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

  
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  document.addEventListener("DOMContentLoaded", () => {
  const vehicles = [
    { number: 11, model: "MAN TGM 13.290", registration: "CB1234AB", status: "Свободен" },
    { number: 2, model: "Mercedes Atego", registration: "PB5678CD", status: "На мисия" },
    { number: 13, model: "Volvo FL", registration: "B9101EF", status: "В ремонт" },
    { number: 4, model: "Scania P280", registration: "E2345GH", status: "Свободен" },
    { number: 55, model: "MAN TGM 13.290", registration: "TX6789IJ", status: "На мисия" },
    { number: 68, model: "Mercedes Atego", registration: "KH3456KL", status: "В ремонт" },
    { number: 711, model: "Volvo FL", registration: "PP7890MN", status: "Свободен" },
    { number: 812, model: "Scania P280", registration: "M1234OP", status: "На мисия" },
    { number: 94, model: "MAN TGM 13.290", registration: "Y5678QR", status: "В ремонт" },
    { number: 101, model: "Mercedes Atego", registration: "CH9012ST", status: "Свободен" },
    { number: 1, model: "Volvo FL", registration: "PK3456UV", status: "На мисия" },
    { number: 9, model: "Scania P280", registration: "T7890WX", status: "В ремонт" },
    { number: 213, model: "MAN TGM 13.290", registration: "CC1234YZ", status: "Свободен" },
    { number: 14, model: "Mercedes Atego", registration: "BH5678AA", status: "На мисия" },
    { number: 6, model: "Volvo FL", registration: "CM9012BB", status: "В ремонт" }
  ];

  const container = document.getElementById("vehicleContainer");

  vehicles.forEach(vehicle => {
    const table = document.createElement("table");
    table.className = "vehicle-table";

    table.innerHTML = `
      <tr><td class="label">Автомобил</td><td>${vehicle.number}</td></tr>
      <tr><td class="label">Модел</td><td>${vehicle.model}</td></tr>
      <tr><td class="label">Рег. номер</td><td>${vehicle.registration}</td></tr>
      <tr><td class="label">Статус</td><td style="color: ${vehicle.status === 'Свободен' ? 'green' : vehicle.status === 'На мисия' ? 'red' : 'orange'}">${vehicle.status}</td></tr>
    `;

    container.appendChild(table);
  });
});


