const micButton = document.getElementById("mic-button");
const chatBox = document.getElementById("chat-box");

let recognition;
try {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) throw new Error("SpeechRecognition not supported");
  recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micButton.addEventListener("click", () => {
    recognition.start();
    micButton.innerText = "🎙 Listening...";
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    showMessage(transcript, "user");
    getBotReply(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Mic error:", event.error);
    alert("Mic error: " + event.error);
  };

  recognition.onend = () => {
    micButton.innerText = "🎣 Tap to Speak";
  };
} catch (err) {
  micButton.disabled = true;
  micButton.innerText = "Speech Recognition Not Supported";
}

function showMessage(text, type) {
  const msg = document.createElement("p");
  msg.className = type;
  msg.textContent = `${type === "user" ? "🧑 You" : "🤖 Bhuvan"}: ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(input) {
  showMessage("Thinking...", "bot");
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await response.json();
    showMessage(data.reply, "bot");
    speakText(data.reply);
  } catch (err) {
    console.error("Bot error:", err);
    showMessage("Sorry, something went wrong.", "bot");
  }
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.voice = speechSynthesis.getVoices().find(v => v.name.includes("Google") && v.lang === "en-IN");
  speechSynthesis.speak(utterance);
}
window.onload = () => {
  showMessage("Hi, I’m Bhuvan! Tap the mic and ask me anything 🚀", "bot");
};
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") micButton.click();
});
