export async function fetchData() {
  const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9";
  const data = await fetch(url);
  const result = await data.json();
  return result;
}
