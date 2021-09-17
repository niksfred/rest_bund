import { getPages } from "./helperGetPages";
import "regenerator-runtime/runtime";

const table = document.getElementById("table");
let users = [];

const getData = async (i) => {
  let response = await fetch(`https://reqres.in/api/users?page=${i}`);
  const data = response.json();
  return data;
};

const run = async () => {
  const { total_pages: totalPages } = await getPages();
  for (let i = 1; i < totalPages + 1; i++) {
    const { data } = await getData(i);
    data.forEach((el) => {
      users.push(el);
    });
  }
  users.forEach((el) => {
    table.innerHTML += `<tr><th>${el.first_name}</th><th>${el.last_name}</th><th>${el.email}</th><img src="${el.avatar}></i></tr>`;
  });
  console.log(users);
};

run();
