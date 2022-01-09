
let url = 'https://www.superheroapi.com/api.php/10226130474744361/search';

async function searchTheHero() {
    let input = document.getElementById("myInput").value;
    let response = await fetch(url + '/' + input);

    //console.log(response.status); // 200
    //console.log(response.statusText); // OK

    if (response.status === 200) 
    {
        let data = await response.json();
        
        show(data);
       
    }

    if (show(data).row <0){
        console.log("not found")
    }
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Place of Birth</th>
          <th>Movies</th>
          <th>Relatives</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.results) {
        tab += `<tr> 
    <td>${r.biography["full-name"]} </td>
    <td>${r.appearance.gender}</td> 
    <td>${r.biography["place-of-birth"]}</td>
    <td>${r.biography.aliases}</td>
    <td>${r.connections.relatives}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("superheros").innerHTML = tab;
}
}
