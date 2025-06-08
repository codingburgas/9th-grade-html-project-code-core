const container = document.getElementById('ai-chat');

const iframe = document.createElement('iframe');
iframe.src = "https://www.chatbase.co/chatbot-iframe/2-mrxbbKbvScMrgs0fiKU";
iframe.width = "100%";
iframe.height = "700";
iframe.frameBorder = "0";
iframe.allowFullscreen = true;


iframe.loading = "lazy"; 
iframe.title = "Chatbot AI помощник";

container.appendChild(iframe);
