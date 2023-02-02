
 // Create a button element
 const button = document.createElement('button')
 const anchor = document.createElement('a')
//  const teamId = document.getElementById("trackhero-embed-button-script").getAttribute("team_id");
//  const eventCategories = document.getElementById("trackhero-embed-button-script").getAttribute("cat_ids");

 button.innerText = 'Book Now'
 anchor.appendChild(button); 
 anchor.href=`http://localhost:3001/skipbarber?team_id=${1}`;

 document.body.appendChild(anchor) 
