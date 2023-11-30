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

  crmDB.onupgradeneeded = function () {
    console.log("Este metodo solo se ejecuta una vez");
  };
}
