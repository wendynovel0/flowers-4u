// Get modal elements
const modal = document.getElementById("myModal");
const iconDiv = document.querySelector(".icon");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Open the modal when the user clicks the icon div
iconDiv.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the user clicks the "x"
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelectorAll('.heart').forEach(heart => {
    heart.style.left = `${Math.random() * 100}%`;
    
    heart.addEventListener('animationiteration', () => {
      heart.style.left = `${Math.random() * 100}%`;
    });
  });
  
  var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '1px',
            width: '1px',
            videoId: 'PD3gAjiqnMg',
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'autohide': 1,
                'showinfo': 0,
                'modestbranding': 1,
                'rel': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        console.log("YouTube Player initialized"); // Agregar esta línea
    }

    function onPlayerReady(event) {
        event.target.setVolume(80); // Ajusta el volumen
        console.log("Player is ready");
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            event.target.playVideo(); // Repite el video cuando termine
        }
    }

    function playMusic() {
        if (player) {
            player.playVideo(); // Reproduce el video
        }
    }
