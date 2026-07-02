const STORAGE_KEY = "mathQuestStyleAcademy";

const defaultState = {
  coins: 0,
  xp: 0,
  grade: 4,
  avatar: "female",
  avatarNames: {
    female: "Nova",
    male: "Max",
  },
  owned: ["pink-star", "curly", "sunny-shoes", "no-extra"],
  equipped: {
    outfit: "pink-star",
    hair: "curly",
    accessory: "no-extra",
    shoes: "sunny-shoes",
  },
  sound: true,
};

const shopItems = [
  { id: "pink-star", category: "outfit", name: "Star Pop", price: 0, color: "#ef6aa9", mark: "★" },
  { id: "ocean-wave", category: "outfit", name: "Ocean Wave", price: 35, color: "#35a8d8", mark: "〰" },
  { id: "forest-friend", category: "outfit", name: "Forest Friend", price: 55, color: "#45b77a", mark: "❀" },
  { id: "space-cadet", category: "outfit", name: "Space Cadet", price: 80, color: "#4c4f9f", mark: "✦" },
  { id: "sunset-hero", category: "outfit", name: "Sunset Hero", price: 105, color: "#f0784f", mark: "⚡" },
  { id: "royal-gem", category: "outfit", name: "Royal Gem", price: 140, color: "#8f4ac9", mark: "◆" },
  { id: "curly", category: "hair", name: "Cocoa Curls", price: 0, color: "#4d2631", mark: "〰" },
  { id: "blue-bob", category: "hair", name: "Blue Bob", price: 30, color: "#304f9f", mark: "∩" },
  { id: "sunny-puffs", category: "hair", name: "Sunny Puffs", price: 55, color: "#d28a2f", mark: "●" },
  { id: "mint-swoop", category: "hair", name: "Mint Swoop", price: 90, color: "#3b9d8a", mark: "〽" },
  { id: "no-extra", category: "accessory", name: "Fresh Face", price: 0, emoji: "✨" },
  { id: "cool-glasses", category: "accessory", name: "Cool Glasses", price: 20, emoji: "🕶️" },
  { id: "flower-crown", category: "accessory", name: "Flower Crown", price: 45, emoji: "🌸" },
  { id: "royal-crown", category: "accessory", name: "Quest Crown", price: 100, emoji: "👑" },
  { id: "sunny-shoes", category: "shoes", name: "Sunny Steps", price: 0, color: "#f9c63f", emoji: "👟" },
  { id: "berry-boots", category: "shoes", name: "Berry Boots", price: 30, color: "#c94f83", emoji: "🥾" },
  { id: "cloud-kicks", category: "shoes", name: "Cloud Kicks", price: 60, color: "#e8f3ff", emoji: "👟" },
  { id: "galaxy-feet", category: "shoes", name: "Galaxy Feet", price: 95, color: "#363269", emoji: "🚀" },
];

const tips = {
  multiplication: "Split one factor apart: 7 × 8 can become 7 × 5 plus 7 × 3.",
  division: "Check division by multiplying your answer by the divisor.",
  fractions: "For equal denominators, compare or combine the numerators.",
  decimals: "Line up decimal points before adding or subtracting.",
  geometry: "Perimeter is the distance around; area is the space inside.",
  word: "Underline the numbers and decide what the question is asking first.",
};

let state = loadState();
let session = { streak: 0, correct: 0, coins: 0 };
let currentQuestion = null;
let answered = false;
let activeShopCategory = "outfit";
let audioContext = null;

const elements = {
  coinBalance: document.querySelector("#coinBalance"),
  shopCoinBalance: document.querySelector("#shopCoinBalance"),
  levelBadge: document.querySelector("#levelBadge"),
  xpLabel: document.querySelector("#xpLabel"),
  xpFill: document.querySelector("#xpFill"),
  gradeSelect: document.querySelector("#gradeSelect"),
  streakCount: document.querySelector("#streakCount"),
  correctCount: document.querySelector("#correctCount"),
  sessionCoins: document.querySelector("#sessionCoins"),
  topicLabel: document.querySelector("#topicLabel"),
  questionReward: document.querySelector("#questionReward"),
  questionPrompt: document.querySelector("#questionPrompt"),
  answerGrid: document.querySelector("#answerGrid"),
  feedback: document.querySelector("#feedback"),
  nextButton: document.querySelector("#nextButton"),
  questionCard: document.querySelector("#questionCard"),
  tipText: document.querySelector("#tipText"),
  wardrobeButton: document.querySelector("#wardrobeButton"),
  shopOverlay: document.querySelector("#shopOverlay"),
  closeShopButton: document.querySelector("#closeShopButton"),
  shopTabs: document.querySelector("#shopTabs"),
  shopGrid: document.querySelector("#shopGrid"),
  characterHair: document.querySelector("#characterHair"),
  characterOutfit: document.querySelector("#characterOutfit"),
  outfitMark: document.querySelector("#outfitMark"),
  characterAccessory: document.querySelector("#characterAccessory"),
  characterShoes: document.querySelector("#characterShoes"),
  celebration: document.querySelector("#celebration"),
  soundButton: document.querySelector("#soundButton"),
  soundIcon: document.querySelector("#soundIcon"),
  character: document.querySelector("#character"),
  characterImage: document.querySelector("#characterImage"),
  heroTitle: document.querySelector("#hero-title"),
  missionTitle: document.querySelector("#missionTitle"),
  shopOwnerLabel: document.querySelector("#shopOwnerLabel"),
  avatarButtons: [...document.querySelectorAll(".avatar-option")],
  editNameButton: document.querySelector("#editNameButton"),
  heroNameEditor: document.querySelector("#heroNameEditor"),
  heroNameInput: document.querySelector("#heroNameInput"),
  cancelNameButton: document.querySelector("#cancelNameButton"),
  nameError: document.querySelector("#nameError"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      equipped: { ...defaultState.equipped, ...saved.equipped },
      avatarNames: { ...defaultState.avatarNames, ...saved.avatarNames },
      owned: Array.from(new Set([...defaultState.owned, ...(saved.owned || [])])),
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function buildAnswers(answer, spread = 8, formatter = (value) => String(value)) {
  const wrong = new Set();
  let guard = 0;
  while (wrong.size < 3 && guard < 100) {
    guard += 1;
    const offset = randomInt(1, spread) * pick([-1, 1]);
    const value = answer + offset;
    if (value >= 0 && value !== answer) wrong.add(value);
  }
  return shuffle([answer, ...wrong]).map((value) => ({
    value,
    label: formatter(value),
  }));
}

function createGrade4Question() {
  const type = pick(["multiplication", "multiplication", "division", "geometry", "word"]);

  if (type === "multiplication") {
    const a = randomInt(3, 12);
    const b = randomInt(3, 12);
    const answer = a * b;
    return question("Multiplication", `${a} × ${b} = ?`, answer, buildAnswers(answer, 12), "multiplication");
  }

  if (type === "division") {
    const divisor = randomInt(2, 12);
    const answer = randomInt(2, 12);
    return question("Division", `${divisor * answer} ÷ ${divisor} = ?`, answer, buildAnswers(answer, 5), "division");
  }

  if (type === "geometry") {
    const length = randomInt(4, 12);
    const width = randomInt(3, 9);
    const answer = 2 * (length + width);
    return question(
      "Geometry",
      `A rectangle is ${length} cm long and ${width} cm wide. What is its perimeter?`,
      answer,
      buildAnswers(answer, 12, (value) => `${value} cm`),
      "geometry",
      true
    );
  }

  const packs = randomInt(3, 8);
  const each = randomInt(4, 9);
  const answer = packs * each;
  return question(
    "Word Problem",
    `Nova has ${packs} sticker packs with ${each} stickers in each. How many stickers is that altogether?`,
    answer,
    buildAnswers(answer, 10),
    "word",
    true
  );
}

function createGrade5Question() {
  const type = pick(["multiplication", "division", "fractions", "decimals", "geometry", "word"]);

  if (type === "multiplication") {
    const a = randomInt(12, 49);
    const b = randomInt(3, 9);
    const answer = a * b;
    return question("Multiplication", `${a} × ${b} = ?`, answer, buildAnswers(answer, 20), "multiplication");
  }

  if (type === "division") {
    const divisor = randomInt(4, 12);
    const answer = randomInt(12, 45);
    return question("Division", `${divisor * answer} ÷ ${divisor} = ?`, answer, buildAnswers(answer, 8), "division");
  }

  if (type === "fractions") {
    const denominator = pick([4, 5, 6, 8, 10]);
    const a = randomInt(1, Math.floor(denominator / 2));
    const b = randomInt(1, denominator - a);
    const answer = a + b;
    const answers = buildAnswers(answer, 3, (value) => `${value}/${denominator}`);
    return question("Fractions", `${a}/${denominator} + ${b}/${denominator} = ?`, answer, answers, "fractions");
  }

  if (type === "decimals") {
    const a = randomInt(12, 85) / 10;
    const b = randomInt(5, 49) / 10;
    const answer = Math.round((a + b) * 10);
    return question(
      "Decimals",
      `${a.toFixed(1)} + ${b.toFixed(1)} = ?`,
      answer,
      buildAnswers(answer, 6, (value) => (value / 10).toFixed(1)),
      "decimals"
    );
  }

  if (type === "geometry") {
    const length = randomInt(6, 15);
    const width = randomInt(4, 12);
    const answer = length * width;
    return question(
      "Geometry",
      `What is the area of a ${length} m by ${width} m rectangle?`,
      answer,
      buildAnswers(answer, 18, (value) => `${value} m²`),
      "geometry",
      true
    );
  }

  const cost = randomInt(3, 9);
  const quantity = randomInt(4, 12);
  const answer = cost * quantity;
  return question(
    "Word Problem",
    `A game shop sells badges for $${cost} each. How much do ${quantity} badges cost?`,
    answer,
    buildAnswers(answer, 12, (value) => `$${value}`),
    "word",
    true
  );
}

function createGrade6Question() {
  const type = pick(["multiplication", "division", "fractions", "decimals", "geometry", "word"]);

  if (type === "multiplication") {
    const a = randomInt(24, 95);
    const b = randomInt(11, 24);
    const answer = a * b;
    return question("Multiplication", `${a} × ${b} = ?`, answer, buildAnswers(answer, 45), "multiplication");
  }

  if (type === "division") {
    const divisor = randomInt(8, 25);
    const answer = randomInt(20, 90);
    return question("Division", `${divisor * answer} ÷ ${divisor} = ?`, answer, buildAnswers(answer, 12), "division");
  }

  if (type === "fractions") {
    const denominator = pick([6, 8, 10, 12]);
    const a = randomInt(1, denominator - 2);
    const b = randomInt(1, denominator - a);
    const answer = a + b;
    return question(
      "Fractions",
      `${a}/${denominator} + ${b}/${denominator} = ?`,
      answer,
      buildAnswers(answer, 4, (value) => `${value}/${denominator}`),
      "fractions"
    );
  }

  if (type === "decimals") {
    const a = randomInt(105, 899) / 100;
    const b = randomInt(25, 499) / 100;
    const answer = Math.round((a - b) * 100);
    const low = Math.min(a, b);
    const high = Math.max(a, b);
    const positiveAnswer = Math.round((high - low) * 100);
    return question(
      "Decimals",
      `${high.toFixed(2)} − ${low.toFixed(2)} = ?`,
      positiveAnswer,
      buildAnswers(positiveAnswer, 12, (value) => (value / 100).toFixed(2)),
      "decimals"
    );
  }

  if (type === "geometry") {
    const base = randomInt(5, 18);
    const height = randomInt(4, 14);
    const answer = base * height;
    return question(
      "Geometry",
      `A parallelogram has a base of ${base} cm and a height of ${height} cm. What is its area?`,
      answer,
      buildAnswers(answer, 25, (value) => `${value} cm²`),
      "geometry",
      true
    );
  }

  const total = randomInt(60, 180);
  const percent = pick([10, 20, 25, 50]);
  const answer = (total * percent) / 100;
  return question(
    "Word Problem",
    `You completed ${percent}% of a ${total}-tile map. How many tiles did you complete?`,
    answer,
    buildAnswers(answer, Math.max(8, Math.floor(total / 10))),
    "word",
    true
  );
}

function question(topic, prompt, answer, answers, tipKey, isWordProblem = false) {
  return { topic, prompt, answer, answers, tipKey, isWordProblem };
}

function nextQuestion() {
  answered = false;
  elements.questionCard.classList.remove("is-correct", "is-wrong");
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.nextButton.hidden = true;

  const makers = {
    4: createGrade4Question,
    5: createGrade5Question,
    6: createGrade6Question,
  };
  currentQuestion = makers[state.grade]();
  currentQuestion.reward = 10 + Math.min(session.streak, 5) * 2 + (state.grade - 4) * 2;

  elements.topicLabel.textContent = currentQuestion.topic;
  elements.questionPrompt.textContent = currentQuestion.prompt;
  elements.questionPrompt.classList.toggle("is-word-problem", currentQuestion.isWordProblem);
  elements.questionReward.textContent = currentQuestion.reward;
  elements.tipText.textContent = tips[currentQuestion.tipKey];
  elements.answerGrid.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.label;
    button.dataset.value = answer.value;
    button.addEventListener("click", () => submitAnswer(answer.value, button));
    elements.answerGrid.append(button);
  });
}

function submitAnswer(value, selectedButton) {
  if (answered) return;
  answered = true;
  const isCorrect = Number(value) === Number(currentQuestion.answer);
  const buttons = [...elements.answerGrid.querySelectorAll(".answer-button")];
  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.value) === Number(currentQuestion.answer)) {
      button.classList.add("is-correct");
    }
  });

  if (isCorrect) {
    session.streak += 1;
    session.correct += 1;
    session.coins += currentQuestion.reward;
    state.coins += currentQuestion.reward;
    state.xp += 10 + Math.min(session.streak, 5);
    elements.questionCard.classList.add("is-correct");
    elements.feedback.classList.add("feedback--correct");
    elements.feedback.textContent =
      session.streak >= 3
        ? `Amazing! ${session.streak} in a row — streak bonus activated!`
        : pick(["Correct! Your brain is sparkling.", "You got it! Coins collected.", "Nice work, math hero!"]);
    playTone(true);
    burstConfetti(session.streak >= 3 ? 28 : 14);
  } else {
    session.streak = 0;
    selectedButton.classList.add("is-wrong");
    elements.questionCard.classList.add("is-wrong");
    elements.feedback.classList.add("feedback--wrong");
    elements.feedback.textContent = `Almost! The correct answer is ${getCorrectLabel()}.`;
    playTone(false);
  }

  saveState();
  updateUI();
  elements.nextButton.hidden = false;
  elements.nextButton.focus();
}

function getCorrectLabel() {
  return currentQuestion.answers.find(
    (answer) => Number(answer.value) === Number(currentQuestion.answer)
  )?.label;
}

function getLevelInfo() {
  const level = Math.floor(state.xp / 50) + 1;
  const levelXp = state.xp % 50;
  return { level, levelXp };
}

function updateUI() {
  const { level, levelXp } = getLevelInfo();
  elements.coinBalance.textContent = state.coins;
  elements.shopCoinBalance.textContent = state.coins;
  elements.levelBadge.textContent = `LVL ${level}`;
  elements.xpLabel.textContent = `${levelXp} / 50 XP`;
  elements.xpFill.style.width = `${(levelXp / 50) * 100}%`;
  elements.streakCount.textContent = session.streak;
  elements.correctCount.textContent = session.correct;
  elements.sessionCoins.textContent = session.coins;
  elements.gradeSelect.value = String(state.grade);
  elements.soundIcon.textContent = state.sound ? "♪" : "×";
  elements.soundButton.setAttribute("aria-label", state.sound ? "Turn sound off" : "Turn sound on");
  applyCharacterStyle();
}

function applyCharacterStyle() {
  const outfit = shopItems.find((item) => item.id === state.equipped.outfit);
  const hair = shopItems.find((item) => item.id === state.equipped.hair);
  const accessory = shopItems.find((item) => item.id === state.equipped.accessory);
  const shoes = shopItems.find((item) => item.id === state.equipped.shoes);
  const isMale = state.avatar === "male";
  const heroName = state.avatarNames[state.avatar] || (isMale ? "Max" : "Nova");

  elements.characterImage.src = `assets/characters/${isMale ? "male" : "female"}.png`;
  elements.characterImage.alt = `${heroName}, your math hero`;
  elements.character.dataset.avatar = state.avatar;
  elements.character.setAttribute("aria-label", `${heroName}, your styled character`);
  elements.heroTitle.textContent = heroName;
  elements.missionTitle.textContent = `Power up ${heroName} with 10 math challenges`;
  elements.shopOwnerLabel.textContent = `COLLECTION · ${heroName.toUpperCase()}`;
  elements.characterOutfit.style.background = outfit.color;
  elements.outfitMark.textContent = outfit.mark;
  elements.characterHair.style.background = hair.color;
  elements.characterHair.style.color = hair.color;
  elements.characterHair.style.textShadow = `17px 10px ${hair.color}, -17px 10px ${hair.color}`;
  elements.characterHair.textContent = hair.mark;
  elements.characterAccessory.dataset.accessory = accessory.id;
  elements.characterAccessory.textContent = accessory.id === "no-extra" ? "" : accessory.emoji;
  elements.characterShoes.style.background = shoes.color;
  elements.avatarButtons.forEach((button) => {
    const active = button.dataset.avatar === state.avatar;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function openNameEditor() {
  elements.heroNameEditor.hidden = false;
  elements.heroNameInput.value = state.avatarNames[state.avatar];
  elements.nameError.textContent = "";
  elements.heroNameInput.focus();
  elements.heroNameInput.select();
}

function closeNameEditor() {
  elements.heroNameEditor.hidden = true;
  elements.nameError.textContent = "";
  elements.editNameButton.focus();
}

function saveHeroName() {
  const name = elements.heroNameInput.value.trim().replace(/\s+/g, " ");
  if (!name) {
    elements.nameError.textContent = "Enter a name";
    elements.heroNameInput.focus();
    return;
  }

  state.avatarNames[state.avatar] = name;
  saveState();
  updateUI();
  elements.heroNameEditor.hidden = true;
  elements.nameError.textContent = "";
  playTone(true);
  elements.editNameButton.focus();
}

function openShop() {
  elements.shopOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  renderShop();
  elements.closeShopButton.focus();
}

function closeShop() {
  elements.shopOverlay.hidden = true;
  document.body.style.overflow = "";
  elements.wardrobeButton.focus();
}

function renderShop() {
  elements.shopGrid.innerHTML = "";
  const items = shopItems.filter((item) => item.category === activeShopCategory);

  items.forEach((item) => {
    const owned = state.owned.includes(item.id);
    const equipped = state.equipped[item.category] === item.id;
    const card = document.createElement("article");
    card.className = `shop-item${equipped ? " is-equipped" : ""}`;

    const preview =
      item.category === "outfit"
        ? `<span class="shop-item__swatch" style="background:${item.color}">${item.mark}</span>`
        : item.category === "hair"
          ? `<span style="color:${item.color};font-size:64px;text-shadow:0 4px 0 rgba(0,0,0,.08)">${item.mark}</span>`
          : `<span>${item.emoji}</span>`;

    const buttonText = equipped ? "Equipped" : owned ? "Equip" : `Buy`;
    const disabled = !owned && state.coins < item.price;
    const priceText = owned ? "Owned" : `${item.price} ★`;

    card.innerHTML = `
      <div class="shop-item__preview">${preview}</div>
      <h3>${item.name}</h3>
      <div class="shop-item__footer">
        <span class="shop-price">${priceText}</span>
        <button class="shop-action${equipped ? " is-equipped" : ""}" type="button"
          ${disabled || equipped ? "disabled" : ""}>${buttonText}</button>
      </div>
    `;

    const action = card.querySelector(".shop-action");
    action.addEventListener("click", () => buyOrEquip(item));
    elements.shopGrid.append(card);
  });
}

function buyOrEquip(item) {
  const owned = state.owned.includes(item.id);

  if (!owned) {
    if (state.coins < item.price) return;
    state.coins -= item.price;
    state.owned.push(item.id);
    playPurchaseTone();
  } else {
    playTone(true);
  }

  state.equipped[item.category] = item.id;
  saveState();
  updateUI();
  renderShop();
}

function playTone(correct) {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.type = correct ? "sine" : "triangle";
  oscillator.frequency.setValueAtTime(correct ? 520 : 210, audioContext.currentTime);
  if (correct) {
    oscillator.frequency.exponentialRampToValueAtTime(780, audioContext.currentTime + 0.12);
  }
  gain.gain.setValueAtTime(0.09, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
}

function playPurchaseTone() {
  if (!state.sound) return;
  playTone(true);
  setTimeout(() => playTone(true), 120);
}

function burstConfetti(count) {
  const colors = ["#7157e8", "#ef6aa9", "#ffc94d", "#49c89c", "#55a8ed"];
  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${randomInt(10, 90)}%`;
    piece.style.background = pick(colors);
    piece.style.setProperty("--drift", `${randomInt(-120, 120)}px`);
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    elements.celebration.append(piece);
    setTimeout(() => piece.remove(), 1800);
  }
}

elements.nextButton.addEventListener("click", nextQuestion);
elements.gradeSelect.addEventListener("change", (event) => {
  state.grade = Number(event.target.value);
  session.streak = 0;
  saveState();
  updateUI();
  nextQuestion();
});
elements.wardrobeButton.addEventListener("click", openShop);
elements.closeShopButton.addEventListener("click", closeShop);
elements.shopOverlay.addEventListener("click", (event) => {
  if (event.target === elements.shopOverlay) closeShop();
});
elements.shopTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".shop-tab");
  if (!tab) return;
  activeShopCategory = tab.dataset.category;
  [...elements.shopTabs.children].forEach((button) => {
    button.classList.toggle("is-active", button === tab);
  });
  renderShop();
});
elements.soundButton.addEventListener("click", () => {
  state.sound = !state.sound;
  saveState();
  updateUI();
  if (state.sound) playTone(true);
});
elements.avatarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.avatar = button.dataset.avatar;
    elements.heroNameEditor.hidden = true;
    saveState();
    updateUI();
    playTone(true);
  });
});
elements.editNameButton.addEventListener("click", openNameEditor);
elements.heroNameEditor.addEventListener("submit", (event) => {
  event.preventDefault();
  saveHeroName();
});
elements.cancelNameButton.addEventListener("click", closeNameEditor);
elements.heroNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeNameEditor();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.shopOverlay.hidden) closeShop();
});

updateUI();
nextQuestion();
