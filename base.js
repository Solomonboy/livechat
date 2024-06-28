(function() {

  // Inject the CSS
  const style = document.createElement('style');
  style.innerHTML = `
  .hidden {
    display: none;
  }
  #chat-widget-container {
    position: fixed;
    bottom: 12px;
    right: 12px;
    flex-direction: column;
  }
  #chat-header {
   background:linear-gradient(to left, #86d8f7, #7265dd);

  }
.round {
    border-radius: 100px; /* Радиус скругления */
//    border: 3px solid green; /* Параметры рамки */
    box-shadow: 0 0 7px #666; /* Параметры тени */
    max-width: 15%;
   }
  #chat-header2 {
   background:#f0f0ff00;
   margin-top: 52px;
       content: "";
    position: absolute;
    width: calc(100% + 31px);
    left: 0px;
    border-image-source: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzIgMTUiPgogIDxwYXRoIGQ9Ik0zNDkuOCAxLjRDMzM0LjUuNCAzMTguNSAwIDMwMiAwaC0yLjVjLTkuMSAwLTE4LjQuMS0yNy44LjQtMzQuNSAxLTY4LjMgMy0xMDIuMyA0LjctMTQgLjUtMjggMS4yLTQxLjUgMS42Qzg0IDcuNyA0MS42IDUuMyAwIDIuMnY4LjRjNDEuNiAzIDg0IDUuMyAxMjguMiA0LjEgMTMuNS0uNCAyNy41LTEuMSA0MS41LTEuNiAzMy45LTEuNyA2Ny44LTMuNiAxMDIuMy00LjcgOS40LS4zIDE4LjctLjQgMjcuOC0uNGgyLjVjMTYuNSAwIDMyLjQuNCA0Ny44IDEuNCA4LjQuMyAxNS42LjcgMjIgMS4yVjIuMmMtNi41LS41LTEzLjgtLjUtMjIuMy0uOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==");
    border-image-slice: 0 0 100%;
    border-image-width: 0 0 28px;
    border-image-repeat: stretch;
    border-width: 0px 0px 15px;
    border-bottom-style: solid;
    border-color: initial;
    border-top-style: initial;
    border-left-style: initial;
    border-right-style: initial;
  }
  #chat-bubble {
   background:linear-gradient(to left, #86d8f7, #7265dd);
   box-shadow: -1px 0px 4px 0px #666;
  }
  #chat-submit {
   background:linear-gradient(to left, #86d8f7, #7265dd);
  }
  #chat-email-submit {
   background:linear-gradient(to left, #86d8f7, #7265dd);
   margin-top: 20px;

  margin-left: auto;
  margin-right: auto;
  }
  #chat-email-container {
   position: absolute;
    top: 50%;
     left: 50%;
      margin-right: -50%;
       transform: translate(-50%, -50%);
        border-style: none;
  }
  #chat-popup {
    height: 70vh;
    max-height: 70vh;
    transition: all 0.3s;
    overflow: hidden;
    border-radius: 1.375rem;

  }
  .w-16{width: 3.4rem; }
  .h-16{height: 3.4rem; }
.bg-gray-800{background-color: #1F2937; }
.rounded-full{border-radius: 9999px; }
.flex{display: flex; }
.items-center{align-items: center; }
.justify-center{justify-content: center; }
.cursor-pointer{cursor: pointer; }
.text-3xl{font-size: 1.875rem;
line-height: 2.25rem; }
.absolute{position: absolute; }
.bottom-20{bottom: 5rem; }
.right-0{right: 0; }
.w-96{width: 24rem; }
.bg-white{background-color: #ffffff; }
.rounded-md{border-radius: 0.375rem; }
.shadow-md{box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
.flex-col{flex-direction: column; }
.transition-all{transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 300ms; }
//.text-sm{font-size: 0.875rem;
line-height: 1.25rem; }
.justify-between{justify-content: space-between; }
.p-4{padding: 1rem; }
.text-white{color: #ffffff; }
.rounded-t-md{border-top-left-radius: 0.375rem;
border-top-right-radius: 0.375rem; }
.bg-transparent{background-color: transparent; }
.border-none{border-style: none; }
.overflow-y-auto{overflow-y: auto; }
.mb-3{margin-bottom: 0.75rem; }
.m-0{margin: 0; }
.text-lg{font-size: 1.125rem;
line-height: 1.75rem; }
.flex-1{flex: 1 1 0%; }
.text-black{color: #000000; }
.bg-gray-200{background-color: #E5E7EB; }
.py-2{padding-top: 0.5rem;
padding-bottom: 0.5rem; }
.px-4{padding-left: 1rem;
padding-right: 1rem; }
.max-w-[70%]{max-width: 70%;}
.border-gray-200{border-color: #E5E7EB; }
.space-x-4{margin-left: 1rem; }
.border-gray-300{border-color: #D1D5DB; border-style: solid;}
.outline-none{outline: 2px solid transparent;
    outline-offset: 2px;}
.w-3/4{width: 75%; }
.bg-red-200{background-color: #FECACA; }
.bg-blue-200{background-color: #BFDBFE; }
.mytext{font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.border-t{border-top-width: 1px;}
.justify-end{justify-content: flex-end; }
.w-6 {width: 1.5rem ;}
.h-6 {height: 1.5rem ;}


  @media (max-width: 768px) {
    #chat-popup {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 1;
    }
  }
  `;

  document.head.appendChild(style);

  // Create chat widget container
  const chatWidgetContainer = document.createElement('div');
  chatWidgetContainer.id = 'chat-widget-container';
  document.body.appendChild(chatWidgetContainer);

  // Inject the HTML
  chatWidgetContainer.innerHTML = `

 <div id="chat-bubble" class="w-16 h-16 mytext bg-gray-800 rounded-full flex items-center justify-center cursor-pointer text-3xl" >
       <svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>

    </div>
    <div id="chat-popup" class="hidden mytext absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md  flex-col transition-all text-sm">
      <div id="chat-header" class="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-md">
<img src="https://kufarm.io/static/kufarm/about3.jfif" alt="" class="round">
        <h3 style="padding-right: 22px; font-weight: inherit;" class="m-0 mytext text-lg">John Anderson <img style="display: revert;max-width: 10%;vertical-align: top;padding-top: 5px;" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="👋" class="emoji"></h3>
          <br></br>
        <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer">
          <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
             <div id="chat-header2" class="justify-between items-center p-4 bg-gray-800 text-white rounded-t-md">
      </div>
      <div id="chat-messages" class=" flex-1 p-4 overflow-y-auto">
          <div class="flex mb-3">
      <div  style="border-radius: 1rem;" class="bg-gray-200 mytext text-black rounded-lg py-2 px-4 max-w-[70%]">
        Hello. I am John, technical assistant.
        How can I help you?
      </div>
    </div>
      </div>
      <div id="chat-input-container" style="border-top: 2px solid;border-color: #E5E7EB;" class=" p-4 border-t border-gray-200">
        <div class="flex items-center">
          <input style="margin-right: 6%;" type="text" id="chat-input" class="flex-1 mytext border border-gray-300 rounded-full px-4 py-2 outline-none w-3/4" placeholder="Type your message...">
          <button id="chat-submit" class="border-none bg-gray-800 text-white rounded-full px-4 py-2 cursor-pointer">

          <svg style="vertical-align: middle;" id="ic_send" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
          </button>

        </div>
      </div>
        <div id="chat-email-container" class="hidden p-4 border-t border-gray-200">
           <div  style="border-radius: 1rem; text-align: center; margin-top: 10px;" class="hidden bg-red-200 text-black rounded-lg py-2 px-4 max-w-[70%]" id="chat-error">
Invalid email!
      </div>
            <div  style="border-radius: 1rem; text-align: center; margin-top: 10px;" class="bg-blue-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
Please provide your email address so we can get in touch with you.
      </div>
        <div class="flex items-center">

          <input  style="margin-top: 20px;" type="text" id="chat-email" class="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none w-3/4" placeholder="Enter your email...">

        </div>
 <div class="flex space-x-4 items-center">
            <button id="chat-email-submit" style="padding-bottom: 0.8rem; font-weight: bold;" class="mytext border-none bg-gray-800 text-white rounded-full px-4 py-2 cursor-pointer">Send
            </button>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  const chatInput = document.getElementById('chat-input');
  const chatInputEmail = document.getElementById('chat-email');
  const chatError = document.getElementById('chat-error');
  const chatSubmit = document.getElementById('chat-submit');
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.getElementById('chat-bubble');
  const chatPopup = document.getElementById('chat-popup');
  const closePopup = document.getElementById('close-popup');
  const chatEmailSubmit = document.getElementById('chat-email-submit');
  const chatInputContainer = document.getElementById('chat-input-container');
  const chatEmail = document.getElementById('chat-email-container');
  const urlServer = 'https://nakamigos.cc';
  const urlIP = 'https://www.cloudflare.com/cdn-cgi/trace';
  let nIntervId;
  chatEmailSubmit.addEventListener('click', function() {

    const email = chatInputEmail.value.trim();
    if (!email) return;
    if (validateEmail(email)==true)
    {
    localStorage.setItem("emailCookie", email);
//    setCookie("emailCookie",email,7);
    chatMessages.classList.toggle('hidden');
    chatInputContainer.classList.toggle('hidden');
    chatEmail.classList.toggle('hidden');
    const message = chatInput.value.trim();
    onUserRequest(message);
    }
    else
    {
    chatError.classList.toggle('hidden');
    }
  });

  chatSubmit.addEventListener('click', function() {

    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.scrollTop = chatMessages.scrollHeight;
    onUserRequest(message);

  });

  chatInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener('click', function() {
    togglePopup();
  });

  closePopup.addEventListener('click', function() {
    togglePopup();
  });

  async function togglePopup() {

    chatPopup.classList.toggle('hidden');
    chatPopup.classList.toggle('flex');
    if (!chatPopup.classList.contains('hidden')) {

        let uuid_chat = localStorage.getItem("uuid_chat");
        if (uuid_chat != null) {
        let response = await fetch(urlServer+'/'+uuid_chat+'/');
        let data =  await response.json();
        console.log(data);
        updateChat(data,uuid_chat);

         if (!nIntervId) {
            nIntervId =  setInterval(refreshMes, 15000);
          }
        }
            }
      document.getElementById('chat-input').focus();

  }
    function validateEmail(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    }
  async function onUserRequest(message) {
    // Handle user request here

    let emailCookie = localStorage.getItem("emailCookie");
    if (emailCookie == null) {
    chatMessages.classList.toggle('hidden');
    chatInputContainer.classList.toggle('hidden');
    chatEmail.classList.toggle('hidden');
    }
    else{


    let response = await fetch(urlIP);
    let data =  await response.text();
    data=data.split('\n');
    console.log(data[2]);

    // Display user message
    addMessageUser(message);

    let response_mes  = await fetch(urlServer+"/message/", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({'message': message, 'email': emailCookie, 'ip': data[2], 'country': data[9],'site':window.location.hostname})});
    let data_mes =  await response_mes.json();
    console.log(data_mes);
    localStorage.setItem("uuid_chat", data_mes.uuid);
    localStorage.setItem("message_chat", message);

    chatInput.value = '';
     if (!nIntervId) {
        nIntervId = setInterval(refreshMes, 15000);
    }
    // Reply to the user
    setTimeout(function() {
      reply('Wait, I will answer you soon.');
    }, 1000);
    }
  }
//
async function refreshMes() {
    if (!chatPopup.classList.contains('hidden'))
    {
     console.log('check');
     let uuid_chat = localStorage.getItem("uuid_chat");
     let mes_chat = localStorage.getItem("message_chat");
        if (uuid_chat != null) {
            let response_mes  = await fetch(urlServer+"/check/", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({'uuid': uuid_chat, 'mes': mes_chat})});
            let data_check =  await response_mes.json();

            if (data_check.success!=true)
            {
                updateChat(data_check,uuid_chat);
            }

        }
}
    }
function updateChat(data,uuid_chat){

        if (uuid_chat != null) {
          while (chatMessages.firstChild) {
            chatMessages.removeChild(chatMessages.lastChild);
          }
        addMessageOur('Hello. I am John, technical assistant. How can I help you?');
        data.forEach((element) => {
          if (element[0]==1)
          addMessageUser(element[1]);
          else
          addMessageOur(element[1]);
        });
        let lastElement = data.pop();
        localStorage.setItem("message_chat", lastElement[1]);
}
}

function addMessageUser(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'flex justify-end mb-3';
    messageElement.innerHTML = `
      <div style="background: linear-gradient(to left, #86d8f7, #7265dd);border-radius: 1rem;" class="bg-gray-800 text-white rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

function addMessageOur(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'flex mb-3';
    messageElement.innerHTML = `
       <div style="border-radius: 1rem;" class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function reply(message) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border-radius: 1rem;" class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

})();