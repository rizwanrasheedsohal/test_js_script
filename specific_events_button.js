
 // Create a button element
 const button = document.createElement('button')
 const anchor = document.createElement('a')
 const teamId = document.getElementById("trackhero-specific-events-button-script").getAttribute("team_id");
 const eventCategories = document.getElementById("trackhero-specific-events-button-script").getAttribute("cat_ids");

 button.innerText = 'Book Now'
 anchor.id = 'trackhero-specific-events-button'
 anchor.appendChild(button); 
 anchor.href=`http://localhost:3001/skipbarber?team_id=${teamId}&cat_ids=${eventCategories}`;

 document.body.appendChild(anchor) 
