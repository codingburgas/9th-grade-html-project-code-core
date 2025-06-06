document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  if(themeToggle){
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }


  const employees = [
    { name: "Иван", surname: "Петров", id: 101, team: "А", status: "Свободен", phone: "0888123456" },
    { name: "Мария", surname: "Иванова", id: 102, team: "Б", status: "В произшествие", phone: "0899123456" },
    { name: "Георги", surname: "Димитров", id: 103, team: "А", status: "Свободен", phone: "0877123456" },
    { name: "Елена", surname: "Стоянова", id: 104, team: "В", status: "В почивка", phone: "0889123457" },
    { name: "Николай", surname: "Колев", id: 105, team: "Б", status: "Свободен", phone: "0898123457" },
    { name: "Десислава", surname: "Тодорова", id: 106, team: "А", status: "Свободен", phone: "0878123457" },
    { name: "Петър", surname: "Михайлов", id: 107, team: "В", status: "В произшествие", phone: "0887123458" },
    { name: "Йорданка", surname: "Николова", id: 108, team: "А", status: "Свободен", phone: "0897123458" },
    { name: "Красимир", surname: "Маринов", id: 109, team: "Б", status: "В почивка", phone: "0876123458" },
    { name: "Валентина", surname: "Алексиева", id: 110, team: "А", status: "Свободен", phone: "0886123459" },
    { name: "Александър", surname: "Георгиев", id: 111, team: "В", status: "В произшествие", phone: "0895123459" },
    { name: "Светлана", surname: "Петрова", id: 112, team: "Б", status: "Свободен", phone: "0875123459" },
    { name: "Тодор", surname: "Иванов", id: 113, team: "А", status: "Свободен", phone: "0884123460" },
    { name: "Росица", surname: "Димитрова", id: 114, team: "В", status: "В почивка", phone: "0894123460" },
    { name: "Илия", surname: "Костов", id: 115, team: "Б", status: "Свободен", phone: "0874123460" }
  ];


  const vehicles = [];
  for(let i=1; i<=50; i++){
    vehicles.push(`Пожарна кола №${i} - Модел ${(Math.random() > 0.5) ? 'MAN' : 'Mercedes'} - Рег. номер: CB${1000 + i}XYZ`);
  }


  const employeeTable = document.getElementById("employeeTable");
  if(employeeTable){
    employees.forEach(emp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.surname}</td>
        <td>${emp.id}</td>
        <td>${emp.team}</td>
        <td style="color:${emp.status === 'Свободен' ? 'green' : emp.status === 'В произшествие' ? 'red' : 'orange'}">${emp.status}</td>
        <td>${emp.phone}</td>
      `;
      employeeTable.appendChild(tr);
    });
  }
  const vehicleList = document.getElementById("vehicleList");
  if(vehicleList){
    vehicles.forEach(v => {
      const li = document.createElement("li");
      li.textContent = v;
      vehicleList.appendChild(li);
    });
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
