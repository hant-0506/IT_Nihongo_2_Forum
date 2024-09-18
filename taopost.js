// Get modal and button elements
const modal = document.getElementById("postModal");
const newPostBtn = document.getElementById("newPostButton");
const newPostBtn1 = document.getElementById("openPopup");
const closeBtn = document.querySelector(".close");
const closeBtn1 = document.querySelector(".close1");
const emoteSpan = document.querySelector(".emote");
const emojiPicker = document.getElementById("emojiPicker");
const postContent = document.getElementById("postContent");
const modal1 = document.getElementById("postModal1");


// List of emojis to display
const faceEmojis = [
    "😇", "🤩", "😆", "😅", "🤣", "😏", "🙃", "😋", "🤤", "😛", "😝", "😜", 
    "😑", "😒", "🙄", "😬", "🤥", "🤐", "🤢", "🤮", "😵", "🤯", "🥴", "😲", "🥵", 
    "🥶", "😶‍🌫️", "😳", "😰", "😨", "😧", "😦", "😮", "😯", "😴", "🤒", "🤕", "🤧", 
    "😷", "🤠", "🥳", "🥺", "😤", "😩", "😫", "😖", "😣", "😔", "😞", "😢", "😭"
  ];
  const handEmojis = [
    "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", 
    "👈", "👉", "👆", "👇", "👍", "👎", "✊", "👊", "👏", "🙌", "👐", "🤲", "🙏", 
    "✍️", "💅", "🤳", "💪", "🦾", "✋🏽", "👍🏾", "👎🏼"
  ];
  const heartEmojis = [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", 
    "💓", "💗", "💖", "💘", "💝", "💟", "💌"
  ];
  const animalEmojis = [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", 
    "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", 
    "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦗", "🕷️", "🦂", "🐢", "🐍", "🦎", 
    "🦖", "🦕", "🐙", "🦑", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈"
  ];
  const foodEmojis = [
    "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑", 
    "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🌽", "🥕", 
    "🫒", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🍗", "🍖", 
    "🍤", "🍳", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🧆", "🥘", "🍝", 
    "🍜", "🍲", "🍣", "🍱", "🍛", "🍚", "🍙", "🍘", "🍥", "🥠", "🥟", "🍢", "🍡", 
    "🍧", "🍨", "🍦", "🥧", "🍰", "🎂", "🧁", "🍮", "🍭", "🍬", "🍫", "🍿", "🧃", 
    "🥤", "🧋", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🧉"
  ];
  const natureEmojis = [
    "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎋", "🍂", "🍁", "🍄", 
    "🌾", "💐", "🌷", "🌹", "🥀", "🌻", "🌼", "🌸", "🌺", "🌎", "🌍", "🌏", "🌕", 
    "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌞", "⭐", "🌟", "🌠", 
    "☀️", "⛅", "🌤", "🌦", "🌧", "⛈", "🌩", "🌨", "☁️", "🌫", "🌪", "🌬", "🌀", 
    "🌈", "☔", "⚡", "❄️", "☃️", "⛄", "🔥", "💧", "🌊"
  ];
  const transportEmojis = [
    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", 
    "🛺", "🚲", "🛴", "🛵", "🏍️", "🛶", "⛵", "🛳️", "🚢", "✈️", "🛩️", "🚁", 
    "🚀", "🛸", "🛰️", "🚨", "🚔", "🚍", "🚠", "🚡", "🚟", "🚃", "🚋", "🚞", "🚝", 
    "🚄", "🚅", "🚈", "🚂", "🛤️", "🛣️"
  ];
  const activityEmojis = [
    "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🎱", "🎳", "🏓", "🏸", "🥅", 
    "🏒", "🏑", "🏏", "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛷", 
    "⛸️", "🥌", "🎿", "⛷️", "🏂", "🪂", "🏋️‍♀️", "🤼‍♂️", "🤸‍♂️", "⛹️‍♀️", 
    "🏌️‍♀️", "🏄‍♂️", "🚣‍♀️", "🏊‍♀️", "🤽‍♂️", "🚴‍♀️", "🚵‍♀️", "🏇", "🧘‍♂️", 
    "🧗‍♀️", "🏋️‍♂️"
  ];
            

// Open modal when "New Post" button is clicked
newPostBtn.onclick = function() {
    modal.style.display = "flex";
}

newPostBtn1.onclick = function() {
    modal1.style.display = "flex";
}

// Close modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

closeBtn1.onclick = function() {
    modal1.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Toggle emoji picker visibility when clicking on the emote span
emoteSpan.onclick = function(event) {
    if (emojiPicker.style.display === "block") {
        emojiPicker.style.display = "none";
    } else {
        displayEmojiList(); // Display the list of emojis
        emojiPicker.style.display = "block";
        // Position the emoji picker inside the modal content
        const rect = emoteSpan.getBoundingClientRect();
        const modalRect = document.querySelector(".modal-content").getBoundingClientRect();
        emojiPicker.style.top = `${rect.bottom - modalRect.top}px`; // Position relative to modal content
        emojiPicker.style.left = `${rect.left - modalRect.left}px`;
    }
    event.stopPropagation(); // Prevent the click event from closing the emoji picker
}

// Function to display emojis in the picker
function displayEmojiList() {
    emojiPicker.innerHTML = ""; // Clear the previous list
    faceEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });

    handEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    heartEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    animalEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    foodEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    natureEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    transportEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
    activityEmojis.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.className = "emoji";
        emojiElement.textContent = emoji;
        emojiElement.onclick = function() {
            insertEmoji(emoji);
        };
        emojiPicker.appendChild(emojiElement);
    });
}

// Function to insert emoji at the cursor position in the textarea
function insertEmoji(emoji) {
    const startPos = postContent.selectionStart;
    const endPos = postContent.selectionEnd;
    const textBefore = postContent.value.substring(0, startPos);
    const textAfter = postContent.value.substring(endPos, postContent.value.length);

    postContent.value = textBefore + emoji + textAfter;
    postContent.selectionStart = postContent.selectionEnd = startPos + emoji.length;

    emojiPicker.style.display = "none"; // Hide the emoji picker
}

// Hide emoji picker when clicking outside of it
window.onclick = function(event) {
    if (!emojiPicker.contains(event.target) && event.target !== emoteSpan) {
        emojiPicker.style.display = "none";
    }
}
