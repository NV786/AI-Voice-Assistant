$(document).ready(function () {
  // Siri message animation
  $('.siri-message').textillate({
    loop: true,
    sync: true,
    in: {
      effect: "fadeInUp",
      sync: true,
    },
    out: {
      effect: "fadeOutUp",
      sync: true,
    },

  });


  // Siri configuration
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 200,
    style: "ios9",
    amplitude: "1",
    speed: "0.30",
    autostart: true
  });

  // mic button click event

  $("#MicBtn").click(function () {
    eel.playAssistantSound()();
    $("#Oval").attr("hidden", true);
    $("#Oval2").attr("hidden", false);
  });

  async function startListening() {
    const text = await eel.allcommands()();
    console.log(text);  // Do something with the recognized text
  }

  document.getElementById('MicBtn').addEventListener('click', startListening);


  function doc_keyUp(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

    if (e.key === 'j' && e.metaKey) {
      eel.playAssistantSound()
      $("#Oval").attr("hidden", true);
      $("#Oval2").attr("hidden", false);
      eel.allcommands()()
    }
  }
  document.addEventListener('keyup', doc_keyUp, false);




});