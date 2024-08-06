function displayTime() {
  const timeNow = new Date();

  let months = timeNow.toLocaleString("default", {
    month: "long",
  });

  let date = timeNow.getDate();
  if (date === 1 || date === 21 || date === 31) {
    date += "st";
  } else if (date === 2 || date === 22) {
    date += "nd";
  } else if (date === 3 || date === 23) {
    date += "rd";
  } else {
    date += "th";
  }

  if ((months == "June" && (date == "30th" || date === "29th")) || (months == "July" && (date == "1st" || date == "2nd"))) {
    document.getElementById("technoblade").style.display = "block";
  }
}
displayTime();

async function fetchLanyard() {
  const data = await fetch("https://api.lanyard.rest/v1/users/780805953985445888").then((res) => res.json()).then(json => json.data);

  const box = document.getElementById("discordBox");
  const discordStatus = document.getElementById("discordStatus");
  const discordUser = document.getElementById("discordUser");

  const track = document.getElementById("track");
   const artist = document.getElementById("artist");

  discordUser.innerHTML = `${data.discord_user.username}`;
  try {
    if (data.spotify.album) {
      document.getElementById("spotify").style.display = "block";
      track.innerHTML = `${data.spotify.song}`;
      artist.innerHTML = `${data.spotify.artist}`;
      document.getElementById("pfp").src = data.spotify.album_art_url;
      document.getElementById("discordBox").href = `https://open.spotify.com/track/${data.spotify.track_id}`;
    } else {
      document.getElementById("spotify").style.display = "none";
    }
  } catch (error) {}

  //bodge that works lmfaooooooooooo

  try {
    for (const activity of data.activities) {
      const {name, state, emoji, timestamps, details} = activity;

      

      if (name === "Custom Status") {
        document.getElementById("customStatus").style.display = "block";
        if (emoji == undefined) {
          document.getElementById("customStatus").innerHTML = `${state}`;
        } else {
          document.getElementById("customStatus").innerHTML = `${emoji.name} ${state}`;
        }
      
      } else if (name === "Code") {
        document.getElementById("vscode").style.display = "block";

        const workspace = details;
        const file = state;

        document.getElementById("workspace").innerHTML = `${workspace}`;
        document.getElementById("file").innerHTML = `${file}`;
      
      } else if (name === "Minecraft") {
        var d = new Date(timestamps.start);
        document.getElementById('Minecraft').style.display = "flex";
        document.getElementById("Minecraft").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20px" height="20px">
<g><path style="opacity:0.945" fill="#91e266" d="M 7.5,-0.5 C 8.83333,-0.5 10.1667,-0.5 11.5,-0.5C 12.1667,0.166667 12.8333,0.833333 13.5,1.5C 12.209,1.26269 11.209,1.59603 10.5,2.5C 8.80407,0.870991 7.80407,1.20432 7.5,3.5C 7.16667,3.5 6.83333,3.5 6.5,3.5C 6.67158,2.50838 6.33825,1.84171 5.5,1.5C 6.16667,0.833333 6.83333,0.166667 7.5,-0.5 Z"/></g><g><path style="opacity:1" fill="#9ce871" d="M 5.5,1.5 C 6.33825,1.84171 6.67158,2.50838 6.5,3.5C 6.67158,4.49162 6.33825,5.15829 5.5,5.5C 4.83333,4.5 4.16667,3.5 3.5,2.5C 3.84171,1.66175 4.50838,1.32842 5.5,1.5 Z"/></g><g><path style="opacity:1" fill="#99e470" d="M 13.5,1.5 C 15.4341,2.11028 17.1007,3.11028 18.5,4.5C 17.2905,4.93205 16.2905,5.59872 15.5,6.5C 14.8333,6.5 14.1667,6.5 13.5,6.5C 13.5,6.16667 13.5,5.83333 13.5,5.5C 13.5,4.16667 13.5,2.83333 13.5,1.5 Z"/></g><g><path style="opacity:1" fill="#89d961" d="M 3.5,2.5 C 4.16667,3.5 4.83333,4.5 5.5,5.5C 5.5,6.16667 5.5,6.83333 5.5,7.5C 3.88277,6.962 2.2161,6.62867 0.5,6.5C 0.467653,4.38115 1.46765,3.04782 3.5,2.5 Z"/></g><g><path style="opacity:1" fill="#9ae76f" d="M 13.5,1.5 C 13.5,2.83333 13.5,4.16667 13.5,5.5C 12.8333,5.5 12.1667,5.5 11.5,5.5C 10.7611,5.63101 10.0944,5.46434 9.5,5C 10.2524,4.32924 10.5858,3.4959 10.5,2.5C 11.209,1.59603 12.209,1.26269 13.5,1.5 Z"/></g><g><path style="opacity:1" fill="#a2eb78" d="M 6.5,3.5 C 6.83333,3.5 7.16667,3.5 7.5,3.5C 8.77359,4.18944 8.77359,5.02278 7.5,6C 9.06574,6.76498 10.3991,6.59832 11.5,5.5C 12.1667,5.5 12.8333,5.5 13.5,5.5C 13.5,5.83333 13.5,6.16667 13.5,6.5C 13.5,7.16667 13.1667,7.5 12.5,7.5C 10.1667,7.5 7.83333,7.5 5.5,7.5C 5.5,6.83333 5.5,6.16667 5.5,5.5C 6.33825,5.15829 6.67158,4.49162 6.5,3.5 Z"/></g><g><path style="opacity:1" fill="#95e46a" d="M 10.5,2.5 C 10.5858,3.4959 10.2524,4.32924 9.5,5C 10.0944,5.46434 10.7611,5.63101 11.5,5.5C 10.3991,6.59832 9.06574,6.76498 7.5,6C 8.77359,5.02278 8.77359,4.18944 7.5,3.5C 7.80407,1.20432 8.80407,0.870991 10.5,2.5 Z"/></g><g><path style="opacity:0.529" fill="#206a14" d="M 18.5,4.5 C 18.5,5.83333 18.5,7.16667 18.5,8.5C 18.1667,8.5 17.8333,8.5 17.5,8.5C 17.5,7.16667 16.8333,6.5 15.5,6.5C 16.2905,5.59872 17.2905,4.93205 18.5,4.5 Z"/></g><g><path style="opacity:1" fill="#5d9a3b" d="M 0.5,7.5 C 0.5,7.16667 0.5,6.83333 0.5,6.5C 2.2161,6.62867 3.88277,6.962 5.5,7.5C 6.16667,8.16667 6.83333,8.83333 7.5,9.5C 7.44001,10.0431 7.10667,10.3764 6.5,10.5C 4.75666,8.96166 2.75666,7.96166 0.5,7.5 Z"/></g>
<g><path style="opacity:1" fill="#73c150" d="M 5.5,7.5 C 7.83333,7.5 10.1667,7.5 12.5,7.5C 11.8333,8.16667 11.1667,8.83333 10.5,9.5C 10.5,9.83333 10.5,10.1667 10.5,10.5C 10.1667,11.1667 9.83333,11.8333 9.5,12.5C 8.83333,11.5 8.16667,10.5 7.5,9.5C 6.83333,8.83333 6.16667,8.16667 5.5,7.5 Z"/></g><g><path style="opacity:1" fill="#1f3c0b" d="M 15.5,6.5 C 16.8333,6.5 17.5,7.16667 17.5,8.5C 16.8333,8.5 16.1667,8.5 15.5,8.5C 15.5,7.83333 15.5,7.16667 15.5,6.5 Z"/></g><g><path style="opacity:1" fill="#1c6611" d="M 13.5,6.5 C 14.1667,6.5 14.8333,6.5 15.5,6.5C 15.5,7.16667 15.5,7.83333 15.5,8.5C 13.9582,9.30071 12.2915,9.63404 10.5,9.5C 11.1667,8.83333 11.8333,8.16667 12.5,7.5C 13.1667,7.5 13.5,7.16667 13.5,6.5 Z"/></g><g><path style="opacity:1" fill="#7f5e3d" d="M 0.5,7.5 C 2.75666,7.96166 4.75666,8.96166 6.5,10.5C 7.10667,10.3764 7.44001,10.0431 7.5,9.5C 8.16667,10.5 8.83333,11.5 9.5,12.5C 9.5,12.8333 9.5,13.1667 9.5,13.5C 8.83333,13.5 8.16667,13.5 7.5,13.5C 6.70951,12.5987 5.70951,11.9321 4.5,11.5C 3.88258,11.3893 3.38258,11.056 3,10.5C 2.76445,12.1193 1.93112,13.1193 0.5,13.5C 0.5,11.5 0.5,9.5 0.5,7.5 Z"/></g><g><path style="opacity:1" fill="#1d3d0b" d="M 15.5,8.5 C 15.1788,10.0481 14.1788,10.7148 12.5,10.5C 11.8333,10.5 11.1667,10.5 10.5,10.5C 10.5,10.1667 10.5,9.83333 10.5,9.5C 12.2915,9.63404 13.9582,9.30071 15.5,8.5 Z"/></g><g><path style="opacity:0.947" fill="#321b0d" d="M 15.5,8.5 C 16.1667,8.5 16.8333,8.5 17.5,8.5C 17.8333,8.5 18.1667,8.5 18.5,8.5C 18.8016,11.0593 18.4682,13.3926 17.5,15.5C 16.8333,14.8333 16.1667,14.1667 15.5,13.5C 14.8106,12.2264 13.9772,12.2264 13,13.5C 12.5172,12.552 12.3505,11.552 12.5,10.5C 14.1788,10.7148 15.1788,10.0481 15.5,8.5 Z"/></g>
<g><path style="opacity:1" fill="#744c33" d="M 4.5,11.5 C 4.47291,13.1993 3.80624,14.5326 2.5,15.5C 1.16667,15.5 0.5,14.8333 0.5,13.5C 1.93112,13.1193 2.76445,12.1193 3,10.5C 3.38258,11.056 3.88258,11.3893 4.5,11.5 Z"/></g><g><path style="opacity:1" fill="#2f1d13" d="M 10.5,10.5 C 11.1667,10.5 11.8333,10.5 12.5,10.5C 12.3505,11.552 12.5172,12.552 13,13.5C 13.9772,12.2264 14.8106,12.2264 15.5,13.5C 12.9873,14.2257 12.3207,15.5591 13.5,17.5C 12.8333,18.1667 12.1667,18.8333 11.5,19.5C 10.8333,19.5 10.1667,19.5 9.5,19.5C 9.5,17.5 9.5,15.5 9.5,13.5C 9.5,13.1667 9.5,12.8333 9.5,12.5C 9.83333,11.8333 10.1667,11.1667 10.5,10.5 Z"/></g><g><path style="opacity:0.83" fill="#321b0f" d="M 15.5,13.5 C 16.1667,14.1667 16.8333,14.8333 17.5,15.5C 16.3951,16.6005 15.0618,17.2671 13.5,17.5C 12.3207,15.5591 12.9873,14.2257 15.5,13.5 Z"/></g><g><path style="opacity:0.961" fill="#8c6348" d="M 4.5,11.5 C 5.70951,11.9321 6.70951,12.5987 7.5,13.5C 7.5,15.1667 7.5,16.8333 7.5,18.5C 5.32604,18.2503 3.65938,17.2503 2.5,15.5C 3.80624,14.5326 4.47291,13.1993 4.5,11.5 Z"/></g><g><path style="opacity:1" fill="#7e5439" d="M 7.5,13.5 C 8.16667,13.5 8.83333,13.5 9.5,13.5C 9.5,15.5 9.5,17.5 9.5,19.5C 8.83333,19.5 8.16667,19.5 7.5,19.5C 7.5,19.1667 7.5,18.8333 7.5,18.5C 7.5,16.8333 7.5,15.1667 7.5,13.5 Z"/></g>
</svg> play Mojang's bugs from ${d.toLocaleString()} till now`;        
      }
    }
  } catch (error) {}

  const colors = [
    "border-surface0-dark", 
    "dark:border-surface0-light", 
    "border-green-light", 
    "dark:border-green-dark",
    "border-yellow-light", 
    "dark:border-yellow-dark",
    "border-red-light",
    "dark:border-red-dark"
  ];
  function removeColors() {
    box.classList.remove(...colors);
  }
  for (const color of colors) {
    box.classList.remove('animate-pulse')
    if (!box.className.match(color)) {
      if (data.discord_status === "online") {
        removeColors();
        box.classList.add("dark:border-green-dark", "border-green-light");
        discordStatus.innerHTML = "Online";
      } else if (data.discord_status === "idle") {
        removeColors();
        box.classList.add("dark:border-yellow-dark", "border-yellow-light");
        discordStatus.innerHTML = "Idle";
      } else if (data.discord_status === "dnd") {
        removeColors();
        box.classList.add("dark:border-red-dark", "border-red-light");
        discordStatus.innerHTML = "Do Not Disturb";
      } else if (data.discord_status === "offline") {
        removeColors();
        box.classList.add("border-surface0-dark", "dark:border-surface0-light");
        discordStatus.innerHTML = "Offline";
        document.getElementById("pfp").src = "https://api.lanyard.rest/780805953985445888.png";
        document.getElementById("customStatus").style.display = "none";
        document.getElementById("spotify").style.display = "none";
        document.getElementById("Minecraft").style.display = "none";
        document.getElementById("vscode").style.display = "none";
      }
    }
  }
}