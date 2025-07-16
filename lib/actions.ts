export async function getMockData() {
  try {
    const data = await fetch(
        "https://api.json-generator.com/templates/twpKpiuDy4lk/data",
        {
          headers: {
            'Authorization': `Bearer ${process.env.JSON_GENERATOR_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    const response = await data.json();

    return response;
  } catch (err) {
    const error = err as Error;
    console.error("Error fetching mock data:", error.message);
    throw new Error(`Failed to fetch mock data, ${error.message}`);
  }
}
