fetch(`http://localhost:3000/members/${id}`, {
  method: 'GET', // or 'POST'
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your-token' (if needed)
  },
  // body: JSON.stringify(data), (if you're sending data)
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
