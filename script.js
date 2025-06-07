document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  if(themeToggle){
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }


  const employees = [
    { name: "Иван", surname: "Петров", id: 1, team: "А", status: "Свободен", phone: "0888123456" },
    { name: "Мария", surname: "Иванова", id: 2, team: "Б", status: "В произшествие", phone: "0899123456" },
    { name: "Георги", surname: "Димитров", id: 3, team: "А", status: "Свободен", phone: "0877123456" },
    { name: "Елена", surname: "Стоянова", id: 4, team: "В", status: "В почивка", phone: "0889123457" },
    { name: "Николай", surname: "Колев", id: 5, team: "Б", status: "Свободен", phone: "0898123457" },
    { name: "Десислава", surname: "Тодорова", id: 6, team: "А", status: "Свободен", phone: "0878123457" },
    { name: "Петър", surname: "Михайлов", id: 7, team: "В", status: "В произшествие", phone: "0887123458" },
    { name: "Йорданка", surname: "Николова", id: 8, team: "А", status: "Свободен", phone: "0897123458" },
    { name: "Красимир", surname: "Маринов", id: 9, team: "Б", status: "В почивка", phone: "0876123458" },
    { name: "Валентина", surname: "Алексиева", id: 10, team: "А", status: "Свободен", phone: "0886123459" },
    { name: "Александър", surname: "Георгиев", id: 11, team: "В", status: "В произшествие", phone: "0895123459" },
    { name: "Светлана", surname: "Петрова", id: 12, team: "Б", status: "Свободен", phone: "0875123459" },
    { name: "Тодор", surname: "Иванов", id: 13, team: "А", status: "Свободен", phone: "0884123460" },
    { name: "Росица", surname: "Димитрова", id: 14, team: "В", status: "В почивка", phone: "0894123460" },
    { name: "Илия", surname: "Костов", id: 15, team: "Б", status: "Свободен", phone: "0874123460" }
  ];


 


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
  const letters = 'ABCEHKMOPTXY'; // Латински букви, визуално отговарящи на кирилица

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const numbers = Math.floor(1000 + Math.random() * 9000); // четирицифрен номер
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
