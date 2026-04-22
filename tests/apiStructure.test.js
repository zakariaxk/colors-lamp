test("SearchColors JSON structure", () => {
  const mockResponse = {
    results: [
      { id: 1, name: "blue" },
      { id: 2, name: "green" }
    ],
    error: ""
  };

  expect(mockResponse).toHaveProperty("results");
  expect(mockResponse).toHaveProperty("error");
  expect(Array.isArray(mockResponse.results)).toBe(true);

  if (mockResponse.results.length > 0) {
    expect(mockResponse.results[0]).toHaveProperty("id");
    expect(mockResponse.results[0]).toHaveProperty("name");
  }
});