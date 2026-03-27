// LOGIN (basic demo)
function login() {
  window.location.href = "dashboard.html";
}

// CREATE APPOINTMENT
async function createAppointment() {
  const patient = document.getElementById("patient").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;

  const res = await fetch(`${API_BASE}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ patient, doctor, date })
  });

  alert("Appointment Created!");
  getAppointments();
}

// GET APPOINTMENTS
async function getAppointments() {
  const res = await fetch(`${API_BASE}/appointments`);
  const data = await res.json();

  const list = document.getElementById("appointments");
  list.innerHTML = "";

  data.forEach(a => {
    const li = document.createElement("li");
    li.innerText = `${a.patient} → ${a.doctor} (${a.date})`;
    list.appendChild(li);
  });
}