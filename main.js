const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");
// create
const temCliente = {
  nome: "Adriane",
  email: "adriane@gmail.com",
  telefone: "4578-9865",
  cidade: "Ponta grossa",
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db-cliente")) ?? [];
//pega algo
const setLocalStorage = (dbCliente) =>
  localStorage.setItem("db_cliente", JSON.stringify(dbCliente));
// seta algo

// CRUD - UPDATE
const updateCliente = (index, cliente) => {
  const dbCliente = readCliente();
  dbCliente[index] = cliente;
  setLocalStorage(dbCliente);
};
// CRUD - DELETE
const deleteCliente = (index) => {
  const dbCliente = readCliente();
  dbCliente.splice(index, 1);
  setLocalStorage(dbCliente);
};
// CRUD - READ
const readCliente = () => getLocalStorage();
// CRUD - CREATE
const createClient = (cliente) => {
  const dbCliente = getLocalStorage();
  dbCliente.push(cliente);
  setLocalStorage(dbCliente);
};

//eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
