import "regenerator-runtime/runtime";

export const getPages = async () => {
  let response = await fetch(`https://reqres.in/api/users`);
  const data = response.json();
  return data;
};
