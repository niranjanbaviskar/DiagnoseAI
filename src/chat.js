const response = await axios.post('http://localhost:5000/chat', { userQuery: "What is diabetes?" });
console.log(response.data.botResponse);
