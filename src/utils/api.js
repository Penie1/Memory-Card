export async function fetchData() {
  try {
    const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    alert("Failed to fetch data:", error);
    return [];
  }
}
