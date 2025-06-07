document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  if(themeToggle){
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }


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

for (let i = 0; i < employees.length; i++) {
  const e = employees[i];

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


 


  if(document.getElementById("map")){
    const map = L.map("map").setView([42.6975, 23.3242], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    for(let i=0; i<10; i++){
      let lat = 42.6975 + (Math.random()-0.5)*0.1;
      let lon = 23.3242 + (Math.random()-0.5)*0.1;
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`Произшествие №${i+1}: Пожар`);
    }
  }
});
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomBGPlate() {
  const prefixes = ['CB', 'PB', 'B', 'E', 'TX', 'KH', 'PP', 'M', 'Y', 'CH', 'PK', 'T', 'CC', 'BH', 'CM'];
  const letters = 'ABCEHKMOPTXY'; 
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const numbers = Math.floor(1000 + Math.random() * 9000); 
  const suffix =
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    letters.charAt(Math.floor(Math.random() * letters.length));

  return `${prefix}${numbers}${suffix}`;
}

const vehicles = Array.from({ length: 15 }, (_, i) => {
  const models = ["MAN TGM 13.290", "Mercedes Atego", "Volvo FL", "Scania P280"];
  const types = ["Пожарна", "Линейка", "Команден", "Техника"];
  const statuses = ["Свободен", "На мисия", "В ремонт"];

  return {
    number: i + 1,
    model: getRandomItem(models),
    registration: generateRandomBGPlate(), 
    type: getRandomItem(types),
    status: getRandomItem(statuses)
  };
});




const vehicleTable = document.getElementById("vehicleTable");
if (vehicleTable) {
  const tbody = vehicleTable.querySelector("tbody");
  vehicles.forEach(vehicle => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${vehicle.number}</td>
      <td>${vehicle.model}</td>
      <td>${vehicle.registration}</td>
      <td>${vehicle.type}</td>
      <td style="color: ${vehicle.status === 'Свободен' ? 'green' : vehicle.status === 'На мисия' ? 'red' : 'orange'}">
        ${vehicle.status}
      </td>
    `;
    tbody.appendChild(row);
  });
}
