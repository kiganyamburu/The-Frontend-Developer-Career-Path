import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  database:
    "https://leads-tracker-app-f1bb9-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
// Initialize Firebase Realtime Database and get a reference to the service
// Note: The database URL is not part of the config object in the latest Firebase SDK.
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// Listen for changes in the database
// and log the snapshot to the console
// If there's no data in the 'leads' node, clear the list
onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();
  if (snapshot.exists()) {
    const snapshotValues = snapshot.val();

    const leads = Object.values(snapshotValues);

    render(leads);
  } else {
    ulEl.innerHTML = "No leads to display yet...";
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
  
});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
