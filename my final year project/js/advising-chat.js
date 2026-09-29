const topicNames = {
  "course-registration": "Course registration",
  "academic-planning": "Academic planning",
  admission: "Admission questions",
  other: "General question",
};

const query = new URLSearchParams(window.location.search);
const topic = topicNames[query.get("topic")];
const conversationTitle = document.querySelector("#conversation-title");
const messageForm = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");
const messageList = document.querySelector("#message-list");
const messageStatus = document.querySelector("#message-status");
const emptyState = document.querySelector("#thread-empty");

if (topic && conversationTitle) {
  conversationTitle.textContent = topic;
}

document.querySelectorAll(".prompt-chip").forEach((prompt) => {
  prompt.addEventListener("click", () => {
    messageInput.value = prompt.textContent.trim();
    messageInput.focus();
  });
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  emptyState?.remove();

  const row = document.createElement("div");
  row.className = "message-row";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  const text = document.createElement("div");
  text.textContent = message;

  const meta = document.createElement("div");
  meta.className = "message-meta";
  meta.textContent = "You · demo message";

  bubble.append(text, meta);
  row.append(bubble);
  messageList.append(row);
  messageInput.value = "";
  messageStatus.textContent =
    "Added locally for this demo. No adviser has received your message.";
  messageList.scrollTop = messageList.scrollHeight;
  messageInput.focus();
});
