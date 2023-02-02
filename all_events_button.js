
 // Create a button element
 const button = document.createElement('button')
 const anchor = document.createElement('a')
 const teamId = document.getElementById("trackhero-all-events-button-script").getAttribute("team_id");

 button.innerText = 'Book Now'
 anchor.id = 'trackhero-all-events-button'
 anchor.appendChild(button); 
 anchor.href=`http://localhost:3001/skipbarber?team_id=${teamId}`;

 document.body.appendChild(anchor) 
