document.addEventListener("DOMContentLoaded", () => {
  crmDB();
});

function crmDB() {
  let crmDB = window.indexedDB.open("crm", 1);

  crmDB.onerror = function () {
    console.log("error");
  };

  crmDB.onsuccess = function () {
    console.log("base de datos creada");
  };

  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });
  };
}
