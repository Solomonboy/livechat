  window.addEventListener('message', function(event) {
  if (event.data == "open")
  {
     document.getElementById('live-chat').style.height="100%";
      document.getElementById('live-chat').style.width="100%";
    console.log("Message received from the child: " + event.data); // Message received from child
  }
    if (event.data == "close")
  {
     document.getElementById('live-chat').style.height="100px";
      document.getElementById('live-chat').style.width="100px";
    console.log("Message received from the child: " + event.data); // Message received from child
  }
  });
