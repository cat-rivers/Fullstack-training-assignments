

for (let id of [...Array(15)].map((_,i) => i)){
  fetch("http://localhost:3000/student",  
    {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": "pylly",
        "id": id,
        "email": "mmm"
      })
    })
}