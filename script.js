const STORAGE_KEY = "mathQuestStyleAcademy";
const AUTH_STORAGE_KEY = "mathQuestClassroomData";
const SESSION_STORAGE_KEY = "mathQuestActiveUser";
const SEEDED_ADMIN_HASH = "fc3a0d9c3d6284fee14989ea8eb16c6e95ebf64adc74517ebe656773d90037e1";

const defaultState = {
  coins: 0,
  xp: 0,
  grade: 4,
  term: 1,
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
  { id: "arctic-explorer", category: "outfit", name: "Arctic Explorer", price: 45, color: "#91c9e8", mark: "❄" },
  { id: "solar-racer", category: "outfit", name: "Solar Racer", price: 65, color: "#f5a623", mark: "☀" },
  { id: "cherry-spark", category: "outfit", name: "Cherry Spark", price: 75, color: "#d93f62", mark: "✦" },
  { id: "midnight-math", category: "outfit", name: "Midnight Math", price: 95, color: "#252b55", mark: "π" },
  { id: "cloud-scholar", category: "outfit", name: "Cloud Scholar", price: 120, color: "#d9e5f2", mark: "∞" },
  { id: "legend-gold", category: "outfit", name: "Legend Gold", price: 165, color: "#d9a514", mark: "★" },
  { id: "curly", category: "hair", name: "Cocoa Curls", price: 0, color: "#4d2631", mark: "〰" },
  { id: "blue-bob", category: "hair", name: "Blue Bob", price: 30, color: "#304f9f", mark: "∩" },
  { id: "sunny-puffs", category: "hair", name: "Sunny Puffs", price: 55, color: "#d28a2f", mark: "●" },
  { id: "mint-swoop", category: "hair", name: "Mint Swoop", price: 90, color: "#3b9d8a", mark: "〽" },
  { id: "no-extra", category: "accessory", name: "Fresh Face", price: 0, emoji: "✨" },
  { id: "cool-glasses", category: "accessory", name: "Cool Glasses", price: 20, emoji: "🕶️" },
  { id: "flower-crown", category: "accessory", name: "Flower Crown", price: 45, emoji: "🌸" },
  { id: "royal-crown", category: "accessory", name: "Quest Crown", price: 100, emoji: "👑" },
  { id: "star-clip", category: "accessory", name: "Star Clip", price: 30, emoji: "⭐" },
  { id: "pink-bow", category: "accessory", name: "Pink Bow", price: 40, emoji: "🎀" },
  { id: "hero-headphones", category: "accessory", name: "Hero Headphones", price: 55, emoji: "🎧" },
  { id: "top-hat", category: "accessory", name: "Top Hat", price: 70, emoji: "🎩" },
  { id: "party-hat", category: "accessory", name: "Scholar Cap", price: 85, emoji: "🎓" },
  { id: "diamond-tiara", category: "accessory", name: "Diamond Tiara", price: 130, emoji: "💎" },
  { id: "sunny-shoes", category: "shoes", name: "Sunny Steps", price: 0, color: "#f9c63f", emoji: "👟" },
  { id: "berry-boots", category: "shoes", name: "Berry Boots", price: 30, color: "#c94f83", emoji: "🥾" },
  { id: "cloud-kicks", category: "shoes", name: "Cloud Kicks", price: 60, color: "#e8f3ff", emoji: "👟" },
  { id: "galaxy-feet", category: "shoes", name: "Galaxy Feet", price: 95, color: "#363269", emoji: "🚀" },
  { id: "mint-runners", category: "shoes", name: "Mint Runners", price: 45, color: "#56c9ad", emoji: "👟" },
  { id: "fire-sneakers", category: "shoes", name: "Fire Sneakers", price: 70, color: "#ef5b45", emoji: "🔥" },
  { id: "royal-steps", category: "shoes", name: "Royal Steps", price: 110, color: "#7148c7", emoji: "👟" },
  { id: "golden-kicks", category: "shoes", name: "Golden Kicks", price: 145, color: "#d9a514", emoji: "✨" },
];

const tips = {
  counting: "Touch or point to each object once as you count.",
  comparing: "Compare the biggest place value first.",
  measurement: "Use the same-sized unit each time and start at the baseline.",
  shapes: "Count sides and corners, then look for equal lengths.",
  graphs: "Read the labels first, then compare the amounts.",
  number: "Read each digit by its place before deciding its value.",
  addition: "Estimate first, then use place value to check whether your answer is reasonable.",
  multiplication: "Split one factor apart: 7 × 8 can become 7 × 5 plus 7 × 3.",
  division: "Check division by multiplying your answer by the divisor.",
  fractions: "For equal denominators, compare or combine the numerators.",
  decimals: "Use place value to estimate first, then check the decimal point in your answer.",
  geometry: "Perimeter is the distance around; area is the space inside.",
  patterns: "Find what changes each time before predicting the next value.",
  equations: "Undo the operation to find the missing number.",
  time: "Count forward in friendly chunks such as hours, half-hours, and five minutes.",
  probability: "Probability compares favourable outcomes with all possible outcomes.",
  factors: "List factor pairs in order so you do not miss any.",
  percent: "Think of a percent as an amount out of 100.",
  ratio: "Equivalent ratios grow or shrink by the same factor.",
  money: "Estimate the total before calculating exact dollars and cents.",
  integers: "Picture negative and positive numbers on a number line.",
  linear: "Substitute the input carefully, then follow the operation rule.",
  roots: "Ask which number multiplied by itself makes the given square.",
  pythagorean: "For a right triangle, use a² + b² = c².",
  data: "Order the values before finding the median or mode.",
  word: "Underline the numbers and decide what the question is asking first.",
};

const PERMISSION_DEFINITIONS = [
  { id: "managePeople", label: "Add new people" },
  { id: "manageGroups", label: "Create and manage groups" },
  { id: "changeGrade", label: "Change grade levels" },
  { id: "changeTerm", label: "Change curriculum terms" },
  { id: "changeCurriculum", label: "Assign specific curriculum" },
  { id: "assignRoles", label: "Assign classroom roles" },
  { id: "manageRoles", label: "Create custom roles" },
  { id: "viewCurriculum", label: "View curriculum map" },
];

const GRADE_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const TOPIC_LABELS = {
  counting: "Counting & Number Sense",
  numberCompare: "Compare Numbers",
  placeValue: "Place Value",
  skipCounting: "Skip Counting",
  addition: "Addition",
  subtraction: "Subtraction",
  multiplication: "Multiplication",
  division: "Division",
  fractions: "Fractions",
  fractionOperations: "Fraction Operations",
  decimals: "Decimal Operations",
  patterns: "Patterns",
  equations: "Equations",
  measurement: "Measurement",
  time: "Time",
  shapes: "Shapes & Geometry",
  perimeter: "Perimeter",
  area: "Area",
  circles: "Circles",
  volume: "Volume",
  surfaceArea: "Surface Area",
  pythagorean: "Pythagorean Theorem",
  graphs: "Graphs & Data",
  probability: "Probability",
  money: "Financial Literacy",
  orderOperations: "Order of Operations",
  factors: "Factors & Multiples",
  integers: "Integer Operations",
  ratios: "Ratios & Proportions",
  percents: "Percents",
  linearRelations: "Linear Relations",
  coordinates: "Coordinates",
  squaresRoots: "Squares, Cubes & Roots",
  centralTendency: "Mean, Median & Mode",
};

const curriculumMap = {
  0: {
    1: {
      title: "Numbers to 10",
      summary: "Counting, comparing quantities, and making 5 and 10",
      topics: ["counting", "numberCompare", "addition"],
    },
    2: {
      title: "Patterns, Shapes & Measurement",
      summary: "Repeating patterns, shape attributes, and direct comparison",
      topics: ["patterns", "shapes", "measurement"],
    },
    3: {
      title: "Graphs, Chance & Money Play",
      summary: "Picture graphs, likely and unlikely events, and recognizing coins",
      topics: ["graphs", "probability", "money"],
    },
  },
  1: {
    1: {
      title: "Numbers & Operations to 20",
      summary: "Counting, place value, addition, and subtraction to 20",
      topics: ["counting", "placeValue", "addition", "subtraction"],
    },
    2: {
      title: "Patterns, Equality & Measurement",
      summary: "Repeating patterns, equalities, non-standard measurement, and shapes",
      topics: ["patterns", "equations", "measurement", "shapes"],
    },
    3: {
      title: "Graphs, Chance & Coins",
      summary: "Concrete graphs, probability language, and Canadian coin values",
      topics: ["graphs", "probability", "money"],
    },
  },
  2: {
    1: {
      title: "Numbers to 100",
      summary: "Place value, skip counting, and addition and subtraction facts",
      topics: ["placeValue", "skipCounting", "addition", "subtraction"],
    },
    2: {
      title: "Patterns, Equations & Measurement",
      summary: "Increasing patterns, unknown quantities, centimetres, metres, and shapes",
      topics: ["patterns", "equations", "measurement", "shapes"],
    },
    3: {
      title: "Graphs, Chance & Money",
      summary: "Picture graphs, likelihood, coin combinations, spending, and saving",
      topics: ["graphs", "probability", "money"],
    },
  },
  3: {
    1: {
      title: "Numbers & Operations to 1,000",
      summary: "Place value, addition, subtraction, multiplication, and division concepts",
      topics: ["placeValue", "addition", "subtraction", "multiplication", "division"],
    },
    2: {
      title: "Fractions, Patterns & Equations",
      summary: "Equal-part fractions, increasing patterns, and one-step equations",
      topics: ["fractions", "patterns", "equations"],
    },
    3: {
      title: "Measurement, Geometry & Chance",
      summary: "Standard units, area and perimeter concepts, shapes, probability, and money",
      topics: ["measurement", "perimeter", "area", "shapes", "probability", "money"],
    },
  },
  4: {
    1: {
      title: "Number Sense & Multiplication Foundations",
      summary: "Numbers to 10,000, addition, subtraction, and multiplication facts",
      topics: ["placeValue", "addition", "subtraction", "multiplication"],
    },
    2: {
      title: "Multiplication, Division & Fractions",
      summary: "Multi-digit multiplication and division, fractions, and decimals to hundredths",
      topics: ["multiplication", "division", "fractions", "decimals"],
    },
    3: {
      title: "Patterns, Measurement & Money",
      summary: "Equations, time, perimeter, probability, and financial literacy",
      topics: ["patterns", "equations", "time", "perimeter", "probability", "money"],
    },
  },
  5: {
    1: {
      title: "Large Numbers & Computational Fluency",
      summary: "Numbers to 1,000,000, addition, subtraction, and multiplication facts to 100",
      topics: ["placeValue", "addition", "subtraction", "multiplication"],
    },
    2: {
      title: "Division, Equivalent Fractions & Decimals",
      summary: "Three-digit operations, division with remainders, equivalent fractions, and thousandths",
      topics: ["multiplication", "division", "fractions", "decimals"],
    },
    3: {
      title: "Area, Patterns & Financial Planning",
      summary: "One-step equations, area and perimeter, elapsed time, probability, and budgets",
      topics: ["patterns", "equations", "area", "time", "probability", "money"],
    },
  },
  6: {
    1: {
      title: "Operations, Factors & Multiples",
      summary: "Large numbers, order of operations, factors, multiples, and mental math",
      topics: ["placeValue", "multiplication", "division", "orderOperations", "factors"],
    },
    2: {
      title: "Fractions, Ratios, Percents & Decimals",
      summary: "Mixed numbers, improper fractions, equivalent ratios, percents, and decimal operations",
      topics: ["fractions", "ratios", "percents", "decimals"],
    },
    3: {
      title: "Geometry, Equations & Consumer Math",
      summary: "Equations, patterns, area, volume, probability, and budgeting",
      topics: ["equations", "patterns", "area", "volume", "probability", "money"],
    },
  },
  7: {
    1: {
      title: "Integers & Decimal Operations",
      summary: "Facts to 100, integer operations, decimals, and order of operations",
      topics: ["multiplication", "division", "integers", "decimals", "orderOperations"],
    },
    2: {
      title: "Proportions & Linear Relations",
      summary: "Fractions, decimals, ratios, percents, linear relations, and two-step equations",
      topics: ["fractions", "ratios", "percents", "linearRelations", "equations"],
    },
    3: {
      title: "Circles, Coordinates & Probability",
      summary: "Circle measurement, volume, coordinate planes, circle graphs, and probability",
      topics: ["circles", "volume", "coordinates", "graphs", "probability", "money"],
    },
  },
  8: {
    1: {
      title: "Roots, Percents & Fraction Operations",
      summary: "Perfect squares and cubes, roots, proportional reasoning, and fraction operations",
      topics: ["squaresRoots", "percents", "ratios", "fractionOperations"],
    },
    2: {
      title: "Linear Relations & Equations",
      summary: "Expressions, substitution, discrete linear relations, and two-step equations",
      topics: ["linearRelations", "equations", "integers"],
    },
    3: {
      title: "3D Geometry, Data & Probability",
      summary: "Surface area, volume, Pythagorean theorem, averages, probability, and best buys",
      topics: ["surfaceArea", "volume", "pythagorean", "centralTendency", "probability", "money"],
    },
  },
};

function createDefaultClassroomData() {
  return {
    roles: [
      {
        id: "admin",
        name: "Administrator",
        builtIn: true,
        permissions: PERMISSION_DEFINITIONS.map((permission) => permission.id),
      },
      {
        id: "teacher",
        name: "Teacher",
        builtIn: true,
        permissions: [
          "managePeople",
          "manageGroups",
          "changeGrade",
          "changeTerm",
          "changeCurriculum",
          "assignRoles",
          "viewCurriculum",
        ],
      },
      {
        id: "student",
        name: "Student",
        builtIn: true,
        permissions: [],
      },
    ],
    groups: [{ id: "group-learners", name: "Learners" }],
    users: [
      {
        id: "user-hugh-kang",
        name: "Hugh Kang",
        username: "hugh kang",
        passwordHash: SEEDED_ADMIN_HASH,
        roleId: "admin",
        grade: 4,
        term: 1,
        specificTopics: [],
        groupId: "",
        createdAt: new Date().toISOString(),
      },
    ],
  };
}

function normalizeUsername(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeGrade(value) {
  const grade = Number(value);
  return GRADE_LEVELS.includes(grade) ? grade : 4;
}

function gradeLabel(grade) {
  return Number(grade) === 0 ? "Kindergarten" : `Grade ${Number(grade)}`;
}

function topicLabel(topicId) {
  return TOPIC_LABELS[topicId] || topicId;
}

function getGradeTopics(grade) {
  const gradeCurriculum = curriculumMap[normalizeGrade(grade)] || curriculumMap[4];
  return Array.from(new Set([1, 2, 3].flatMap((term) => gradeCurriculum[term].topics)));
}

function validSpecificTopics(user) {
  const allowed = new Set(getGradeTopics(user?.grade ?? 4));
  return (user?.specificTopics || []).filter((topic) => allowed.has(topic));
}

function loadClassroomData() {
  const defaults = createDefaultClassroomData();
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    if (!saved) return defaults;

    const roles = (Array.isArray(saved.roles) ? saved.roles : defaults.roles).map((role) => {
      if (role.id === "admin") {
        return { ...role, permissions: PERMISSION_DEFINITIONS.map((permission) => permission.id) };
      }
      if (role.id === "teacher") {
        return {
          ...role,
          permissions: Array.from(new Set([...(role.permissions || []), "changeCurriculum"])),
        };
      }
      return { ...role, permissions: Array.isArray(role.permissions) ? role.permissions : [] };
    });
    const groups = Array.isArray(saved.groups) ? saved.groups : defaults.groups;
    const users = (Array.isArray(saved.users) ? saved.users : []).map((user) => ({
      ...user,
      grade: normalizeGrade(user.grade),
      term: [1, 2, 3].includes(Number(user.term)) ? Number(user.term) : 1,
      specificTopics: Array.isArray(user.specificTopics) ? user.specificTopics : [],
    }));
    const adminExists = users.some((user) => user.id === "user-hugh-kang");
    return {
      roles,
      groups,
      users: adminExists ? users : [defaults.users[0], ...users],
    };
  } catch {
    return defaults;
  }
}

function saveClassroomData() {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(classroomData));
}

function getRole(roleId) {
  return classroomData.roles.find((role) => role.id === roleId) || classroomData.roles.find((role) => role.id === "student");
}

function can(permissionId) {
  if (!currentUser) return false;
  return getRole(currentUser.roleId)?.permissions.includes(permissionId) || false;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
}

function playerStorageKey(userId = currentUser?.id) {
  return userId ? `${STORAGE_KEY}:${userId}` : STORAGE_KEY;
}

let classroomData = loadClassroomData();
let currentUser = null;
let state = structuredClone(defaultState);
let session = { streak: 0, correct: 0, coins: 0 };
let currentQuestion = null;
let answered = false;
let activeShopCategory = "outfit";
let activeAdminTab = "people";
let editingCurriculumUserId = null;
let audioContext = null;

const elements = {
  coinBalance: document.querySelector("#coinBalance"),
  shopCoinBalance: document.querySelector("#shopCoinBalance"),
  levelBadge: document.querySelector("#levelBadge"),
  xpLabel: document.querySelector("#xpLabel"),
  xpFill: document.querySelector("#xpFill"),
  gradeSelect: document.querySelector("#gradeSelect"),
  termSelect: document.querySelector("#termSelect"),
  curriculumTitle: document.querySelector("#curriculumTitle"),
  curriculumTopics: document.querySelector("#curriculumTopics"),
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
  authScreen: document.querySelector("#authScreen"),
  loginForm: document.querySelector("#loginForm"),
  loginUsername: document.querySelector("#loginUsername"),
  loginPassword: document.querySelector("#loginPassword"),
  loginError: document.querySelector("#loginError"),
  userChip: document.querySelector("#userChip"),
  userAvatar: document.querySelector("#userAvatar"),
  currentUserName: document.querySelector("#currentUserName"),
  currentUserRole: document.querySelector("#currentUserRole"),
  myPageButton: document.querySelector("#myPageButton"),
  logoutButton: document.querySelector("#logoutButton"),
  adminOverlay: document.querySelector("#adminOverlay"),
  closeAdminButton: document.querySelector("#closeAdminButton"),
  adminTabs: document.querySelector("#adminTabs"),
  adminContent: document.querySelector("#adminContent"),
  appHeader: document.querySelector(".app-header"),
  appShell: document.querySelector(".app-shell"),
};

function loadState() {
  try {
    const userKey = playerStorageKey();
    const userSaved = localStorage.getItem(userKey);
    const legacySaved = currentUser?.id === "user-hugh-kang" ? localStorage.getItem(STORAGE_KEY) : null;
    const saved = JSON.parse(userSaved || legacySaved || "null");
    const nextState = !saved
      ? structuredClone(defaultState)
      : {
      ...structuredClone(defaultState),
      ...saved,
      equipped: { ...defaultState.equipped, ...saved.equipped },
      avatarNames: { ...defaultState.avatarNames, ...saved.avatarNames },
      owned: Array.from(new Set([...defaultState.owned, ...(saved.owned || [])])),
    };
    if (currentUser) {
      nextState.grade = normalizeGrade(currentUser.grade);
      nextState.term = Number(currentUser.term) || 1;
    }
    return nextState;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(playerStorageKey(), JSON.stringify(state));
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasMyPageAccess() {
  return PERMISSION_DEFINITIONS.some((permission) => can(permission.id));
}

function setSignedInView(isSignedIn) {
  elements.authScreen.hidden = isSignedIn;
  elements.appHeader.hidden = !isSignedIn;
  elements.appShell.hidden = !isSignedIn;
  elements.appHeader.inert = !isSignedIn;
  elements.appShell.inert = !isSignedIn;
  elements.appHeader.setAttribute("aria-hidden", String(!isSignedIn));
  elements.appShell.setAttribute("aria-hidden", String(!isSignedIn));
}

function applyCurrentUser() {
  if (!currentUser) return;
  const role = getRole(currentUser.roleId);
  setSignedInView(true);
  elements.userChip.hidden = false;
  elements.logoutButton.hidden = false;
  elements.myPageButton.hidden = !hasMyPageAccess();
  elements.userAvatar.textContent = initials(currentUser.name);
  elements.currentUserName.textContent = currentUser.name;
  elements.currentUserRole.textContent = role?.name || "Student";
  elements.gradeSelect.disabled = !can("changeGrade");
  elements.termSelect.disabled = !can("changeTerm");
  elements.gradeSelect.title = can("changeGrade") ? "" : "Your teacher controls this grade level";
  elements.termSelect.title = can("changeTerm") ? "" : "Your teacher controls this curriculum term";
  updateUI();
  nextQuestion();
}

async function signIn(username, password) {
  const normalized = normalizeUsername(username);
  const user = classroomData.users.find((candidate) => candidate.username === normalized);
  if (!user) return false;
  const passwordHash = await hashPassword(password);
  if (passwordHash !== user.passwordHash) return false;

  currentUser = user;
  localStorage.setItem(SESSION_STORAGE_KEY, user.id);
  state = loadState();
  session = { streak: 0, correct: 0, coins: 0 };
  applyCurrentUser();
  return true;
}

function signOut() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  currentUser = null;
  state = structuredClone(defaultState);
  session = { streak: 0, correct: 0, coins: 0 };
  elements.userChip.hidden = true;
  elements.myPageButton.hidden = true;
  elements.logoutButton.hidden = true;
  elements.adminOverlay.hidden = true;
  elements.shopOverlay.hidden = true;
  document.body.style.overflow = "";
  elements.loginForm.reset();
  elements.loginError.textContent = "";
  setSignedInView(false);
  elements.loginUsername.focus();
}

function updateCurrentUserProfile(field, value) {
  if (!currentUser) return;
  currentUser[field] = value;
  const storedUser = classroomData.users.find((user) => user.id === currentUser.id);
  if (storedUser) storedUser[field] = value;
  saveClassroomData();
}

function roleOptions(selectedRoleId = "student") {
  return classroomData.roles
    .map(
      (role) =>
        `<option value="${escapeHtml(role.id)}" ${role.id === selectedRoleId ? "selected" : ""}>${escapeHtml(role.name)}</option>`
    )
    .join("");
}

function groupOptions(selectedGroupId = "") {
  return [
    `<option value="" ${selectedGroupId ? "" : "selected"}>No group</option>`,
    ...classroomData.groups.map(
      (group) =>
        `<option value="${escapeHtml(group.id)}" ${group.id === selectedGroupId ? "selected" : ""}>${escapeHtml(group.name)}</option>`
    ),
  ].join("");
}

function gradeOptions(selectedGrade = 4) {
  return GRADE_LEVELS
    .map((grade) => `<option value="${grade}" ${normalizeGrade(selectedGrade) === grade ? "selected" : ""}>${gradeLabel(grade)}</option>`)
    .join("");
}

function termOptions(selectedTerm = 1) {
  return [1, 2, 3]
    .map((term) => `<option value="${term}" ${Number(selectedTerm) === term ? "selected" : ""}>Term ${term}</option>`)
    .join("");
}

function specificCurriculumEditor(user) {
  if (!user) return "";
  const selected = new Set(validSpecificTopics(user));
  const checks = getGradeTopics(user.grade)
    .map(
      (topic) => `
        <label class="curriculum-check">
          <input type="checkbox" name="specificTopics" value="${escapeHtml(topic)}" ${selected.has(topic) ? "checked" : ""} />
          <span><strong>${escapeHtml(topicLabel(topic))}</strong><small>${selected.has(topic) ? "Included now" : "Add to question mix"}</small></span>
        </label>
      `
    )
    .join("");
  const mode = selected.size ? `${selected.size} custom topics` : `Following Term ${user.term}`;
  return `
    <section class="admin-card specific-curriculum-editor" aria-labelledby="specificCurriculumTitle">
      <div class="specific-curriculum-heading">
        <div>
          <span class="status-pill">${escapeHtml(mode)}</span>
          <h3 id="specificCurriculumTitle">Specific curriculum for ${escapeHtml(user.name)}</h3>
          <p>${gradeLabel(user.grade)} topics are shown below. Checked topics replace the normal term mix for this learner.</p>
        </div>
        <button class="secondary-button" id="closeCurriculumEditor" type="button">Close</button>
      </div>
      <form id="specificCurriculumForm" data-user-id="${escapeHtml(user.id)}">
        <div class="curriculum-check-grid">${checks}</div>
        <p class="form-message" id="curriculumMessage"></p>
        <div class="specific-curriculum-actions">
          <button class="primary-admin-button" type="submit">Save selected topics</button>
          <button class="secondary-button" id="useTermCurriculum" type="button">Use Term ${user.term} plan</button>
        </div>
      </form>
    </section>
  `;
}

function renderPeopleAdmin() {
  const allowAdd = can("managePeople");
  const people = classroomData.users
    .map((user) => {
      const protectedAdmin = user.id === "user-hugh-kang";
      return `
        <article class="person-row" data-person-id="${escapeHtml(user.id)}">
          <div class="person-main">
            <span class="person-initials">${escapeHtml(initials(user.name))}</span>
            <span><strong>${escapeHtml(user.name)}</strong><small>@${escapeHtml(user.username)}</small></span>
          </div>
          <select class="admin-select person-setting" data-field="grade" aria-label="Grade for ${escapeHtml(user.name)}" ${can("changeGrade") ? "" : "disabled"}>
            ${gradeOptions(user.grade)}
          </select>
          <select class="admin-select person-setting" data-field="term" aria-label="Term for ${escapeHtml(user.name)}" ${can("changeTerm") ? "" : "disabled"}>
            ${termOptions(user.term)}
          </select>
          <select class="admin-select person-setting" data-field="groupId" aria-label="Group for ${escapeHtml(user.name)}" ${can("manageGroups") ? "" : "disabled"}>
            ${groupOptions(user.groupId)}
          </select>
          <select class="admin-select person-setting" data-field="roleId" aria-label="Role for ${escapeHtml(user.name)}" ${can("assignRoles") && !protectedAdmin ? "" : "disabled"}>
            ${roleOptions(user.roleId)}
          </select>
          <button class="curriculum-button open-curriculum-editor" type="button" aria-label="Specific curriculum for ${escapeHtml(user.name)}" ${can("changeCurriculum") ? "" : "disabled"}>
            ${validSpecificTopics(user).length ? `${validSpecificTopics(user).length} topics` : "Term plan"}
          </button>
        </article>
      `;
    })
    .join("");

  elements.adminContent.innerHTML = `
    <div class="admin-section-heading">
      <div><h3>People</h3><p>Create accounts and match every learner to the right group, grade, term, and role.</p></div>
      <span class="status-pill">${classroomData.users.length} accounts</span>
    </div>
    <div class="admin-grid">
      <section class="admin-card">
        <h3>Register a new account</h3>
        <p class="admin-card__intro">The username must be unique. Passwords are stored as local SHA-256 hashes in this prototype.</p>
        <form class="account-form" id="accountForm">
          <div class="form-row">
            <label class="form-field"><span>Display name</span><input name="name" required ${allowAdd ? "" : "disabled"} /></label>
            <label class="form-field"><span>Username</span><input name="username" required ${allowAdd ? "" : "disabled"} /></label>
          </div>
          <label class="form-field"><span>Temporary password</span><input name="password" type="password" minlength="6" required ${allowAdd ? "" : "disabled"} /></label>
          <div class="form-row">
            <label class="form-field"><span>Grade</span><select name="grade" ${allowAdd && can("changeGrade") ? "" : "disabled"}>${gradeOptions(4)}</select></label>
            <label class="form-field"><span>Term</span><select name="term" ${allowAdd && can("changeTerm") ? "" : "disabled"}>${termOptions(1)}</select></label>
          </div>
          <div class="form-row">
            <label class="form-field"><span>Group</span><select name="groupId" ${allowAdd && can("manageGroups") ? "" : "disabled"}>${groupOptions("")}</select></label>
            <label class="form-field"><span>Role</span><select name="roleId" ${allowAdd && can("assignRoles") ? "" : "disabled"}>${roleOptions("student")}</select></label>
          </div>
          <p class="form-message" id="accountMessage"></p>
          <button class="primary-admin-button" type="submit" ${allowAdd ? "" : "disabled"}>Create account</button>
        </form>
      </section>
      <section class="admin-card">
        <h3>Account roster</h3>
        <p class="admin-card__intro">Changes save immediately and apply the next time the learner signs in.</p>
        <div class="people-list">${people}</div>
      </section>
    </div>
    ${specificCurriculumEditor(classroomData.users.find((user) => user.id === editingCurriculumUserId))}
  `;

  const accountForm = document.querySelector("#accountForm");
  accountForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!can("managePeople")) return;
    const form = new FormData(accountForm);
    const username = normalizeUsername(form.get("username"));
    const message = document.querySelector("#accountMessage");
    if (classroomData.users.some((user) => user.username === username)) {
      message.textContent = "That username already exists.";
      message.style.color = "#b91c1c";
      return;
    }

    const user = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: String(form.get("name")).trim(),
      username,
      passwordHash: await hashPassword(String(form.get("password"))),
      roleId: can("assignRoles") ? String(form.get("roleId") || "student") : "student",
      grade: can("changeGrade") ? Number(form.get("grade") || 4) : 4,
      term: can("changeTerm") ? Number(form.get("term") || 1) : 1,
      specificTopics: [],
      groupId: can("manageGroups") ? String(form.get("groupId") || "") : "",
      createdAt: new Date().toISOString(),
    };
    classroomData.users.push(user);
    saveClassroomData();
    renderPeopleAdmin();
    const nextMessage = document.querySelector("#accountMessage");
    nextMessage.textContent = `${user.name} was added.`;
  });

  document.querySelectorAll(".person-setting").forEach((select) => {
    select.addEventListener("change", () => {
      const row = select.closest("[data-person-id]");
      const user = classroomData.users.find((candidate) => candidate.id === row.dataset.personId);
      if (!user) return;
      const field = select.dataset.field;
      user[field] = field === "grade" || field === "term" ? Number(select.value) : select.value;
      if (field === "grade") user.specificTopics = [];
      saveClassroomData();
      if (currentUser?.id === user.id) {
        currentUser = user;
        state.grade = normalizeGrade(user.grade);
        state.term = Number(user.term);
        saveState();
        applyCurrentUser();
      }
    });
  });

  document.querySelectorAll(".open-curriculum-editor").forEach((button) => {
    button.addEventListener("click", () => {
      if (!can("changeCurriculum")) return;
      editingCurriculumUserId = button.closest("[data-person-id]").dataset.personId;
      renderPeopleAdmin();
      document.querySelector("#specificCurriculumTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelector("#closeCurriculumEditor")?.addEventListener("click", () => {
    editingCurriculumUserId = null;
    renderPeopleAdmin();
  });

  document.querySelector("#specificCurriculumForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!can("changeCurriculum")) return;
    const user = classroomData.users.find((candidate) => candidate.id === event.currentTarget.dataset.userId);
    const selectedTopics = new FormData(event.currentTarget).getAll("specificTopics").map(String);
    const message = document.querySelector("#curriculumMessage");
    if (!user || selectedTopics.length === 0) {
      message.textContent = "Choose at least one topic, or use the term plan button.";
      message.style.color = "#b91c1c";
      return;
    }
    user.specificTopics = selectedTopics.filter((topic) => getGradeTopics(user.grade).includes(topic));
    saveClassroomData();
    if (currentUser?.id === user.id) {
      currentUser = user;
      nextQuestion();
      updateUI();
    }
    renderPeopleAdmin();
  });

  document.querySelector("#useTermCurriculum")?.addEventListener("click", (event) => {
    if (!can("changeCurriculum")) return;
    const form = event.currentTarget.closest("form");
    const user = classroomData.users.find((candidate) => candidate.id === form.dataset.userId);
    if (!user) return;
    user.specificTopics = [];
    saveClassroomData();
    if (currentUser?.id === user.id) {
      currentUser = user;
      nextQuestion();
      updateUI();
    }
    renderPeopleAdmin();
  });
}

function renderGroupsAdmin() {
  const allowGroups = can("manageGroups");
  const cards = classroomData.groups.length
    ? classroomData.groups
        .map((group) => {
          const members = classroomData.users.filter((user) => user.groupId === group.id).length;
          return `<article class="group-card"><span><strong>${escapeHtml(group.name)}</strong><small>${members} member${members === 1 ? "" : "s"}</small></span><span class="status-pill">Group</span></article>`;
        })
        .join("")
    : `<div class="empty-state">No groups have been created yet.</div>`;

  elements.adminContent.innerHTML = `
    <div class="admin-section-heading"><div><h3>Groups</h3><p>Organize learners into tutoring pods, classes, or skill groups.</p></div></div>
    <div class="admin-grid">
      <section class="admin-card">
        <h3>Create a group</h3>
        <p class="admin-card__intro">After creating a group, assign people from the People tab.</p>
        <form class="group-form" id="groupForm">
          <label class="form-field"><span>Group name</span><input name="name" required ${allowGroups ? "" : "disabled"} /></label>
          <p class="form-message" id="groupMessage"></p>
          <button class="primary-admin-button" type="submit" ${allowGroups ? "" : "disabled"}>Create group</button>
        </form>
      </section>
      <section class="admin-card"><h3>Current groups</h3><p class="admin-card__intro">Use groups to change a set of learners together later.</p><div class="group-list">${cards}</div></section>
    </div>
  `;

  document.querySelector("#groupForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!can("manageGroups")) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    if (!name) return;
    classroomData.groups.push({ id: `group-${Date.now()}`, name });
    saveClassroomData();
    renderGroupsAdmin();
  });
}

function renderRolesAdmin() {
  const allowRoles = can("manageRoles");
  const checks = PERMISSION_DEFINITIONS.map(
    (permission) => `
      <label class="permission-check">
        <input type="checkbox" name="permissions" value="${permission.id}" ${allowRoles ? "" : "disabled"} />
        <span>${escapeHtml(permission.label)}</span>
      </label>
    `
  ).join("");
  const cards = classroomData.roles
    .map((role) => {
      const tags = role.permissions.length
        ? role.permissions
            .map((permissionId) => {
              const definition = PERMISSION_DEFINITIONS.find((permission) => permission.id === permissionId);
              return `<span class="permission-tag">${escapeHtml(definition?.label || permissionId)}</span>`;
            })
            .join("")
        : `<span class="permission-tag">Game access only</span>`;
      return `<article class="role-card"><h4>${escapeHtml(role.name)}</h4><div class="permission-tags">${tags}</div></article>`;
    })
    .join("");

  elements.adminContent.innerHTML = `
    <div class="admin-section-heading"><div><h3>Roles & permissions</h3><p>Name a role and choose exactly what people with that role can do.</p></div><span class="status-pill">${classroomData.roles.length} roles</span></div>
    <div class="admin-grid">
      <section class="admin-card">
        <h3>Create a custom role</h3>
        <p class="admin-card__intro">Examples: Tutor, Classroom Assistant, Curriculum Lead, or Group Coach.</p>
        <form class="role-form" id="roleForm">
          <label class="form-field"><span>Role name</span><input name="name" required ${allowRoles ? "" : "disabled"} /></label>
          <div class="permission-grid">${checks}</div>
          <p class="form-message" id="roleMessage"></p>
          <button class="primary-admin-button" type="submit" ${allowRoles ? "" : "disabled"}>Create role</button>
        </form>
      </section>
      <section class="admin-card"><h3>Available roles</h3><p class="admin-card__intro">Assign roles to accounts from the People tab.</p><div class="role-list">${cards}</div></section>
    </div>
  `;

  document.querySelector("#roleForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!can("manageRoles")) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    if (!name) return;
    const id = `role-${Date.now()}`;
    classroomData.roles.push({
      id,
      name,
      builtIn: false,
      permissions: form.getAll("permissions").map(String),
    });
    saveClassroomData();
    renderRolesAdmin();
  });
}

function renderCurriculumAdmin() {
  const gradeCards = GRADE_LEVELS
    .map((grade) => {
      const terms = [1, 2, 3]
        .map((term) => {
          const curriculum = curriculumMap[grade][term];
          return `<div class="curriculum-term"><strong>Term ${term} · ${escapeHtml(curriculum.title)}</strong><span>${escapeHtml(curriculum.summary)}</span></div>`;
        })
        .join("");
      return `<article class="curriculum-card"><h4>${gradeLabel(grade)}</h4>${terms}</article>`;
    })
    .join("");

  elements.adminContent.innerHTML = `
    <div class="admin-section-heading"><div><h3>BC curriculum map</h3><p>The question engine follows the learner's grade and term unless a specific topic checklist is assigned.</p></div><span class="status-pill">K–Grade 8</span></div>
    <div class="curriculum-overview">${gradeCards}</div>
  `;
}

function renderAdmin() {
  const tabAccess = {
    people: can("managePeople") || can("changeGrade") || can("changeTerm") || can("changeCurriculum") || can("assignRoles"),
    groups: can("manageGroups"),
    roles: can("manageRoles") || can("assignRoles"),
    curriculum: can("viewCurriculum") || can("changeGrade") || can("changeTerm"),
  };
  if (!tabAccess[activeAdminTab]) {
    activeAdminTab = Object.keys(tabAccess).find((tab) => tabAccess[tab]) || "curriculum";
  }

  [...elements.adminTabs.querySelectorAll(".admin-tab")].forEach((button) => {
    const allowed = tabAccess[button.dataset.adminTab];
    button.disabled = !allowed;
    button.classList.toggle("is-active", button.dataset.adminTab === activeAdminTab);
  });

  if (activeAdminTab === "people") renderPeopleAdmin();
  if (activeAdminTab === "groups") renderGroupsAdmin();
  if (activeAdminTab === "roles") renderRolesAdmin();
  if (activeAdminTab === "curriculum") renderCurriculumAdmin();
}

function openAdmin() {
  if (!hasMyPageAccess()) return;
  elements.adminOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  renderAdmin();
  elements.closeAdminButton.focus();
}

function closeAdmin() {
  elements.adminOverlay.hidden = true;
  document.body.style.overflow = "";
  elements.myPageButton.focus();
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

function buildSignedAnswers(answer, spread = 8, formatter = (value) => String(value)) {
  const wrong = new Set();
  while (wrong.size < 3) {
    const value = answer + randomInt(1, spread) * pick([-1, 1]);
    if (value !== answer) wrong.add(value);
  }
  return shuffle([answer, ...wrong]).map((value) => ({ value, label: formatter(value) }));
}

function createCurriculumQuestion(grade = state.grade, term = state.term) {
  grade = normalizeGrade(grade);
  const curriculum = curriculumMap[grade]?.[term] || curriculumMap[4][1];
  const customTopics = currentUser?.grade === grade ? validSpecificTopics(currentUser) : [];
  const topic = pick(customTopics.length ? customTopics : curriculum.topics);

  if (topic === "counting") {
    const count = randomInt(1, grade === 0 ? 10 : 20);
    return question(
      "Counting",
      `How many stars are here? ${"★ ".repeat(count).trim()}`,
      count,
      buildAnswers(count, 4),
      "counting",
      true
    );
  }

  if (topic === "numberCompare") {
    const max = grade === 0 ? 10 : grade === 1 ? 20 : 100;
    const choices = new Set();
    while (choices.size < 4) choices.add(randomInt(1, max));
    const values = [...choices];
    const answer = Math.max(...values);
    return question(
      "Compare Numbers",
      "Which number is greatest?",
      answer,
      shuffle(values).map((value) => ({ value, label: String(value) })),
      "comparing"
    );
  }

  if (topic === "skipCounting") {
    const step = pick([2, 5, 10]);
    const start = randomInt(0, 4) * step;
    const answer = start + step * 4;
    return question(
      "Skip Counting",
      `${start}, ${start + step}, ${start + step * 2}, ${start + step * 3}, ___`,
      answer,
      buildAnswers(answer, step + 3),
      "patterns"
    );
  }

  if (topic === "placeValue") {
    const places =
      grade <= 2
        ? [10]
        : grade === 3
          ? [10, 100]
          : grade === 4
            ? [10, 100, 1000]
            : grade === 5
              ? [100, 1000, 10000, 100000]
              : [1000, 10000, 1000000];
    const place = pick(places);
    const digit = randomInt(2, 9);
    const number = digit * place + randomInt(1, Math.max(9, place - 1));
    const answer = digit * place;
    const values = shuffle([answer, digit, digit * 10, digit * 100, digit * 1000, digit * 10000].filter((value, index, all) => value !== answer ? all.indexOf(value) === index : true));
    const choices = [answer, ...values.filter((value) => value !== answer).slice(0, 3)];
    return question(
      "Place Value",
      `What is the value of the digit ${digit} in ${number.toLocaleString()}?`,
      answer,
      shuffle(choices).map((value) => ({ value, label: value.toLocaleString() })),
      "number",
      true
    );
  }

  if (topic === "addition" || topic === "subtraction") {
    if (grade === 0) {
      const total = randomInt(3, 10);
      const part = randomInt(1, total - 1);
      const answer = topic === "addition" ? total : total - part;
      const prompt = topic === "addition" ? `${part} + ${total - part} = ?` : `${total} − ${part} = ?`;
      return question(
        topic === "addition" ? "Make a Number" : "Take Away",
        prompt,
        answer,
        buildAnswers(answer, 3),
        "addition"
      );
    }
    const max = grade === 0 ? 10 : grade === 1 ? 20 : grade === 2 ? 100 : grade === 3 ? 1000 : grade === 4 ? 9000 : grade === 5 ? 90000 : 900000;
    const a = topic === "addition"
      ? randomInt(1, max - 1)
      : randomInt(Math.max(1, Math.floor(max * 0.15)), max);
    const b = topic === "addition"
      ? randomInt(1, max - a)
      : randomInt(1, Math.max(2, Math.floor(max * 0.45)));
    const high = Math.max(a, b);
    const low = Math.min(a, b);
    const answer = topic === "addition" ? a + b : high - low;
    const prompt = topic === "addition" ? `${a.toLocaleString()} + ${b.toLocaleString()} = ?` : `${high.toLocaleString()} − ${low.toLocaleString()} = ?`;
    return question(
      topic === "addition" ? "Addition" : "Subtraction",
      prompt,
      answer,
      buildAnswers(answer, grade <= 1 ? 5 : grade === 2 ? 15 : grade === 3 ? 60 : grade === 4 ? 90 : 900, (value) => value.toLocaleString()),
      "addition"
    );
  }

  if (topic === "multiplication") {
    const a = grade === 3 ? randomInt(2, 10) : grade === 4 ? randomInt(12, 99) : grade === 5 ? randomInt(25, 299) : grade === 7 ? randomInt(2, 12) : randomInt(35, 499);
    const b = grade === 3 ? randomInt(2, 5) : grade === 4 ? randomInt(2, 9) : grade === 5 ? randomInt(3, 12) : grade === 7 ? randomInt(2, 12) : randomInt(4, 15);
    const answer = a * b;
    return question("Multiplication", `${a} × ${b} = ?`, answer, buildAnswers(answer, Math.max(12, b * 4)), "multiplication");
  }

  if (topic === "division") {
    const divisor = grade === 3 ? randomInt(2, 5) : grade === 4 ? randomInt(2, 9) : grade === 5 ? randomInt(3, 12) : grade === 7 ? randomInt(2, 12) : randomInt(4, 15);
    const answer = grade === 3 ? randomInt(2, 10) : grade === 4 ? randomInt(12, 80) : grade === 5 ? randomInt(20, 160) : grade === 7 ? randomInt(2, 12) : randomInt(25, 220);
    if (grade === 5 && Math.random() < 0.5) {
      const remainder = randomInt(1, divisor - 1);
      const dividend = divisor * answer + remainder;
      const correctLabel = `${answer} R ${remainder}`;
      const distractors = new Set([
        `${answer + 1} R ${remainder}`,
        `${Math.max(1, answer - 1)} R ${remainder}`,
        `${answer} R ${(remainder % (divisor - 1)) + 1}`,
      ]);
      distractors.delete(correctLabel);
      while (distractors.size < 3) {
        distractors.add(`${answer + randomInt(2, 6)} R ${randomInt(0, divisor - 1)}`);
      }
      const choices = [
        { value: 0, label: correctLabel },
        ...[...distractors].slice(0, 3).map((label, index) => ({ value: index + 1, label })),
      ];
      return question(
        "Division with Remainders",
        `${dividend.toLocaleString()} ÷ ${divisor} = ?`,
        0,
        shuffle(choices),
        "division"
      );
    }
    return question("Division", `${(divisor * answer).toLocaleString()} ÷ ${divisor} = ?`, answer, buildAnswers(answer, 12), "division");
  }

  if (topic === "fractions") {
    if (grade === 3) {
      const denominator = pick([2, 3, 4, 6, 8]);
      const numerator = randomInt(1, denominator - 1);
      const labels = [
        `${numerator}/${denominator}`,
        `${denominator}/${numerator}`,
        `${Math.min(denominator - 1, numerator + 1)}/${denominator}`,
        `${numerator}/${denominator + 1}`,
      ];
      return question(
        "Fraction Concepts",
        `${numerator} of ${denominator} equal parts are shaded. Which fraction is that?`,
        0,
        shuffle(labels.map((label, index) => ({ value: index, label }))),
        "fractions",
        true
      );
    }
    if (grade >= 6) {
      const denominator = pick([3, 4, 5, 6]);
      const whole = randomInt(1, 4);
      const numerator = randomInt(1, denominator - 1);
      const improper = whole * denominator + numerator;
      const labels = [
        `${whole} ${numerator}/${denominator}`,
        `${whole + 1} ${numerator}/${denominator}`,
        `${whole} ${denominator - numerator}/${denominator}`,
        `${whole - 1} ${numerator}/${denominator}`,
      ];
      return question(
        "Mixed Numbers",
        `Which mixed number equals ${improper}/${denominator}?`,
        0,
        shuffle(labels.map((label, index) => ({ value: index, label }))),
        "fractions"
      );
    }
    const denominator = pick(grade === 4 ? [4, 5, 8, 10] : [5, 6, 8, 10, 12]);
    const a = randomInt(1, Math.floor(denominator / 2));
    const b = randomInt(1, denominator - a);
    const answer = a + b;
    return question(
      grade === 4 ? "Fractions" : "Equivalent Fractions",
      `${a}/${denominator} + ${b}/${denominator} = ?`,
      answer,
      buildAnswers(answer, 3, (value) => `${value}/${denominator}`),
      "fractions"
    );
  }

  if (topic === "decimals") {
    const scale = grade === 4 ? 100 : 1000;
    const digits = grade === 4 ? 2 : 3;
    if (grade >= 6) {
      const decimalPlaces = 2;
      const operation = pick(["multiply", "divide"]);
      const whole = randomInt(2, 9);
      if (operation === "multiply") {
        const decimalValue = randomInt(12, 450);
        const answer = decimalValue * whole;
        return question(
          "Decimal Multiplication",
          `${(decimalValue / 100).toFixed(decimalPlaces)} × ${whole} = ?`,
          answer,
          buildAnswers(answer, 35, (value) => (value / 100).toFixed(decimalPlaces)),
          "decimals"
        );
      }
      const answer = randomInt(12, 450);
      const dividend = answer * whole;
      return question(
        "Decimal Division",
        `${(dividend / 100).toFixed(decimalPlaces)} ÷ ${whole} = ?`,
        answer,
        buildAnswers(answer, 35, (value) => (value / 100).toFixed(decimalPlaces)),
        "decimals"
      );
    }
    const a = randomInt(Math.floor(scale * 0.25), scale * 8);
    const b = randomInt(Math.floor(scale * 0.1), scale * 4);
    const answer = a + b;
    return question(
      "Decimal Operations",
      `${(a / scale).toFixed(digits)} + ${(b / scale).toFixed(digits)} = ?`,
      answer,
      buildAnswers(answer, grade === 4 ? 12 : 25, (value) => (value / scale).toFixed(digits)),
      "decimals"
    );
  }

  if (topic === "patterns") {
    if (grade <= 1) {
      const patterns = [
        ["●", "▲", "●", "▲", "●", "▲"],
        ["★", "★", "○", "★", "★", "○"],
        ["■", "●", "▲", "■", "●", "▲"],
      ];
      const sequence = pick(patterns);
      const answerLabel = sequence[sequence.length - 1];
      const choices = shuffle(["●", "▲", "★", "○", "■"].filter((value, index, all) => all.indexOf(value) === index)).slice(0, 3);
      if (!choices.includes(answerLabel)) choices[0] = answerLabel;
      const unique = Array.from(new Set([answerLabel, ...choices])).slice(0, 4);
      return question(
        "Repeating Patterns",
        `${sequence.slice(0, -1).join("  ")}  ___`,
        0,
        shuffle(unique.map((label, index) => ({ value: label === answerLabel ? 0 : index + 1, label }))),
        "patterns"
      );
    }
    const start = randomInt(2, 25);
    const step = randomInt(3, grade === 6 ? 15 : 9);
    const sequence = [start, start + step, start + step * 2, start + step * 3];
    const answer = start + step * 4;
    return question("Number Patterns", `${sequence.join(", ")}, ___`, answer, buildAnswers(answer, step + 5), "patterns");
  }

  if (topic === "equations") {
    if (grade >= 7) {
      const answer = randomInt(2, 15);
      const multiplier = randomInt(2, 6);
      const add = randomInt(2, 12);
      return question(
        "Two-Step Equations",
        `${multiplier}x + ${add} = ${multiplier * answer + add}. What is x?`,
        answer,
        buildAnswers(answer, 6),
        "equations"
      );
    }
    const answer = randomInt(4, grade === 6 ? 60 : 35);
    const add = randomInt(3, 25);
    return question("One-Step Equations", `x + ${add} = ${answer + add}. What is x?`, answer, buildAnswers(answer, 8), "equations");
  }

  if (topic === "measurement") {
    if (grade <= 1) {
      const ribbon = randomInt(6, 10);
      const pencil = randomInt(2, 5);
      const labels = ["The ribbon", "The pencil", "They are equal", "We cannot tell"];
      return question(
        "Measurement",
        `A ribbon is ${ribbon} cubes long. A pencil is ${pencil} cubes long. Which is longer?`,
        0,
        labels.map((label, index) => ({ value: index, label })),
        "measurement",
        true
      );
    }
    const metres = randomInt(2, grade === 2 ? 6 : 15);
    return question(
      "Metric Measurement",
      `${metres} metres equals how many centimetres?`,
      metres * 100,
      buildAnswers(metres * 100, 180, (value) => `${value} cm`),
      "measurement"
    );
  }

  if (topic === "shapes") {
    const shape = pick([
      { name: "triangle", sides: 3 },
      { name: "square", sides: 4 },
      { name: "pentagon", sides: 5 },
      { name: "hexagon", sides: 6 },
    ]);
    return question(
      "Shapes & Geometry",
      `How many sides does a ${shape.name} have?`,
      shape.sides,
      buildAnswers(shape.sides, 3),
      "shapes"
    );
  }

  if (topic === "graphs") {
    if (grade >= 7) {
      const total = pick([80, 120, 160, 200]);
      const percent = pick([20, 25, 40, 50]);
      const answer = (total * percent) / 100;
      return question(
        "Circle Graphs",
        `A circle graph shows ${percent}% of ${total} students chose racing games. How many students is that?`,
        answer,
        buildAnswers(answer, 18),
        "graphs",
        true
      );
    }
    const cats = randomInt(2, 8);
    const dogs = cats + randomInt(1, 5);
    const answer = dogs - cats;
    return question(
      "Graphs & Data",
      `A picture graph shows ${cats} votes for cats and ${dogs} votes for dogs. How many more votes did dogs get?`,
      answer,
      buildAnswers(answer, 4),
      "graphs",
      true
    );
  }

  if (topic === "time") {
    const startHour = randomInt(8, 15);
    const startMinute = pick([0, 15, 30, 45]);
    const elapsed = pick([30, 45, 60, 75, 90, 120]);
    const totalMinutes = startHour * 60 + startMinute + elapsed;
    const endHour = Math.floor(totalMinutes / 60);
    const endMinute = totalMinutes % 60;
    const answer = elapsed;
    const startLabel = `${startHour > 12 ? startHour - 12 : startHour}:${String(startMinute).padStart(2, "0")}`;
    const endLabel = `${endHour > 12 ? endHour - 12 : endHour}:${String(endMinute).padStart(2, "0")}`;
    return question(
      "Elapsed Time",
      `A lesson starts at ${startLabel} and ends at ${endLabel}. How many minutes is it?`,
      answer,
      buildAnswers(answer, 25, (value) => `${value} min`),
      "time",
      true
    );
  }

  if (topic === "perimeter") {
    const length = randomInt(5, 18);
    const width = randomInt(3, 12);
    const answer = 2 * (length + width);
    return question(
      "Perimeter",
      `What is the perimeter of a ${length} m by ${width} m rectangle?`,
      answer,
      buildAnswers(answer, 15, (value) => `${value} m`),
      "geometry",
      true
    );
  }

  if (topic === "area") {
    const base = randomInt(5, 18);
    const height = randomInt(4, 14);
    const answer = base * height;
    return question(
      grade === 6 ? "Area of Parallelograms" : "Area",
      `${grade === 6 ? "A parallelogram" : "A rectangle"} has a base of ${base} cm and a height of ${height} cm. What is its area?`,
      answer,
      buildAnswers(answer, 22, (value) => `${value} cm²`),
      "geometry",
      true
    );
  }

  if (topic === "volume") {
    const length = randomInt(3, 9);
    const width = randomInt(2, 7);
    const height = randomInt(2, 6);
    const answer = length * width * height;
    return question(
      "Volume",
      `A box is ${length} cm × ${width} cm × ${height} cm. What is its volume?`,
      answer,
      buildAnswers(answer, 25, (value) => `${value} cm³`),
      "geometry",
      true
    );
  }

  if (topic === "probability") {
    if (grade <= 3) {
      const red = randomInt(4, 8);
      const blue = randomInt(1, 3);
      const labels = ["Red", "Blue", "Equally likely", "Impossible to know"];
      return question(
        "Chance & Likelihood",
        `A bag has ${red} red counters and ${blue} blue counters. Which colour is more likely to be picked?`,
        0,
        labels.map((label, index) => ({ value: index, label })),
        "probability",
        true
      );
    }
    if (grade >= 7) {
      const labels = ["1/12", "1/8", "1/6", "1/2"];
      return question(
        "Two Independent Events",
        "What is the probability of flipping heads and then rolling a 6 on a fair die?",
        0,
        labels.map((label, index) => ({ value: index, label })),
        "probability",
        true
      );
    }
    const sides = pick([4, 6, 8, 10]);
    const favourable = randomInt(1, Math.max(1, Math.floor(sides / 2)));
    const answer = favourable;
    return question(
      "Probability",
      `${favourable} of ${sides} equal spinner sections are blue. What is the probability of blue?`,
      answer,
      buildAnswers(answer, Math.max(2, Math.floor(sides / 2)), (value) => `${value}/${sides}`),
      "probability",
      true
    );
  }

  if (topic === "money") {
    if (grade <= 1) {
      const coin = pick([
        { name: "nickel", value: 5 },
        { name: "dime", value: 10 },
        { name: "quarter", value: 25 },
        { name: "loonie", value: 100 },
      ]);
      return question(
        "Canadian Coins",
        `How many cents is a ${coin.name} worth?`,
        coin.value,
        shuffle([5, 10, 25, 100].map((value) => ({ value, label: `${value}¢` }))),
        "money"
      );
    }
    if (grade === 2) {
      const quarters = randomInt(1, 3);
      const dimes = randomInt(1, 4);
      const answer = quarters * 25 + dimes * 10;
      return question(
        "Coin Combinations",
        `${quarters} quarter${quarters === 1 ? "" : "s"} and ${dimes} dime${dimes === 1 ? "" : "s"} are worth how much?`,
        answer,
        buildAnswers(answer, 25, (value) => `${value}¢`),
        "money",
        true
      );
    }
    if (grade === 8) {
      const smallCount = 4;
      const largeCount = 10;
      const smallPrice = randomInt(8, 14);
      const largePrice = smallPrice * 2 + randomInt(1, 5);
      const smallUnit = smallPrice / smallCount;
      const largeUnit = largePrice / largeCount;
      const answer = Math.abs(smallUnit - largeUnit) < 0.001 ? 2 : smallUnit < largeUnit ? 0 : 1;
      const labels = [
        `The ${smallCount}-pack at $${smallPrice}`,
        `The ${largeCount}-pack at $${largePrice}`,
        "They cost the same per item",
        "There is not enough information",
      ];
      return question(
        "Best Buys",
        "Which package has the lower unit price?",
        answer,
        labels.map((label, index) => ({ value: index, label })),
        "money",
        true
      );
    }
    if (grade === 7) {
      const original = pick([40, 60, 80, 120]);
      const discount = pick([10, 20, 25, 50]);
      const answer = original - (original * discount) / 100;
      return question(
        "Percent Discounts",
        `A $${original} item is ${discount}% off. What is the sale price?`,
        answer,
        buildAnswers(answer, 15, (value) => `$${value}`),
        "money",
        true
      );
    }
    const cost = randomInt(8, grade === 4 ? 65 : 180);
    const paid = Math.ceil((cost + randomInt(8, 45)) / 10) * 10;
    const answer = paid - cost;
    return question(
      "Financial Literacy",
      `An item costs $${cost}. You pay $${paid}. How much change should you get?`,
      answer,
      buildAnswers(answer, 12, (value) => `$${value}`),
      "money",
      true
    );
  }

  if (topic === "orderOperations") {
    const a = randomInt(3, 12);
    const b = randomInt(2, 9);
    const c = randomInt(2, 8);
    const answer = a + b * c;
    return question("Order of Operations", `${a} + ${b} × ${c} = ?`, answer, buildAnswers(answer, 15), "multiplication");
  }

  if (topic === "factors") {
    const pairs = pick([[12, 18], [16, 24], [18, 30], [20, 32], [24, 36], [28, 42]]);
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const answer = gcd(pairs[0], pairs[1]);
    return question(
      "Factors & Multiples",
      `What is the greatest common factor of ${pairs[0]} and ${pairs[1]}?`,
      answer,
      buildAnswers(answer, 8),
      "factors"
    );
  }

  if (topic === "ratios") {
    const a = randomInt(2, 6);
    const b = randomInt(3, 9);
    const multiplier = randomInt(2, 5);
    const answer = b * multiplier;
    return question(
      "Equivalent Ratios",
      `${a}:${b} = ${a * multiplier}:?`,
      answer,
      buildAnswers(answer, 8),
      "ratio"
    );
  }

  if (topic === "percents") {
    const percent = grade === 8 ? pick([0.5, 125, 150, 175]) : pick([10, 20, 25, 50, 75]);
    const total = pick([40, 60, 80, 100, 120, 160, 200]);
    const answer = (percent * total) / 100;
    return question(
      "Percents",
      `What is ${percent}% of ${total}?`,
      answer,
      buildAnswers(answer, Math.max(8, total / 10)),
      "percent"
    );
  }

  if (topic === "integers") {
    const a = randomInt(-15, 15);
    const b = randomInt(-12, 12);
    const operation = pick(["add", "subtract"]);
    const answer = operation === "add" ? a + b : a - b;
    const symbol = operation === "add" ? "+" : "−";
    const bLabel = b < 0 ? `(${b})` : String(b);
    return question(
      "Integer Operations",
      `${a} ${symbol} ${bLabel} = ?`,
      answer,
      buildSignedAnswers(answer, 8),
      "integers"
    );
  }

  if (topic === "linearRelations") {
    const slope = randomInt(2, 6);
    const intercept = randomInt(-5, 8);
    const x = randomInt(2, 9);
    const answer = slope * x + intercept;
    const sign = intercept < 0 ? `− ${Math.abs(intercept)}` : `+ ${intercept}`;
    return question(
      "Linear Relations",
      `If y = ${slope}x ${sign}, what is y when x = ${x}?`,
      answer,
      buildSignedAnswers(answer, 10),
      "linear"
    );
  }

  if (topic === "circles") {
    const radius = randomInt(2, 10);
    const answer = Math.round(2 * 3.14 * radius * 100);
    return question(
      "Circumference",
      `Using π ≈ 3.14, what is the circumference of a circle with radius ${radius} cm?`,
      answer,
      buildAnswers(answer, 80, (value) => `${(value / 100).toFixed(2)} cm`),
      "geometry",
      true
    );
  }

  if (topic === "coordinates") {
    const x = pick([-1, 1]) * randomInt(1, 8);
    const y = pick([-1, 1]) * randomInt(1, 8);
    const answer = x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 ? 3 : 4;
    return question(
      "Cartesian Coordinates",
      `Which quadrant contains the point (${x}, ${y})?`,
      answer,
      [1, 2, 3, 4].map((value) => ({ value, label: `Quadrant ${value}` })),
      "geometry"
    );
  }

  if (topic === "squaresRoots") {
    const base = randomInt(2, 12);
    const useCube = Math.random() < 0.35;
    const value = useCube ? base ** 3 : base ** 2;
    return question(
      useCube ? "Cube Roots" : "Square Roots",
      `What is the ${useCube ? "cube" : "square"} root of ${value}?`,
      base,
      buildAnswers(base, 5),
      "roots"
    );
  }

  if (topic === "fractionOperations") {
    const denominator = pick([3, 4, 5, 6, 8]);
    const a = randomInt(1, denominator - 1);
    const b = randomInt(1, denominator - 1);
    const answer = a + b;
    return question(
      "Fraction Operations",
      `${a}/${denominator} + ${b}/${denominator} = ?`,
      answer,
      buildAnswers(answer, 3, (value) => `${value}/${denominator}`),
      "fractions"
    );
  }

  if (topic === "surfaceArea") {
    const length = randomInt(3, 9);
    const width = randomInt(2, 7);
    const height = randomInt(2, 6);
    const answer = 2 * (length * width + length * height + width * height);
    return question(
      "Surface Area",
      `What is the surface area of a ${length} cm × ${width} cm × ${height} cm rectangular prism?`,
      answer,
      buildAnswers(answer, 30, (value) => `${value} cm²`),
      "geometry",
      true
    );
  }

  if (topic === "pythagorean") {
    const triple = pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]]);
    const answer = triple[2];
    return question(
      "Pythagorean Theorem",
      `A right triangle has legs ${triple[0]} cm and ${triple[1]} cm. What is the hypotenuse?`,
      answer,
      buildAnswers(answer, 6, (value) => `${value} cm`),
      "pythagorean",
      true
    );
  }

  if (topic === "centralTendency") {
    const middle = randomInt(4, 15);
    const values = [middle - 3, middle, middle, middle + 2, middle + 5];
    const ask = pick(["median", "mode"]);
    return question(
      "Mean, Median & Mode",
      `What is the ${ask} of ${values.join(", ")}?`,
      middle,
      buildAnswers(middle, 5),
      "data"
    );
  }

  return createGrade4Question();
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

  currentQuestion = createCurriculumQuestion(Number(state.grade), Number(state.term));
  currentQuestion.reward = 10 + Math.min(session.streak, 5) * 2 + Math.max(0, Number(state.grade) - 4) * 2;

  elements.topicLabel.textContent = currentQuestion.topic;
  elements.questionPrompt.textContent = currentQuestion.prompt;
  elements.questionPrompt.classList.toggle("is-word-problem", currentQuestion.isWordProblem);
  elements.questionReward.textContent = currentQuestion.reward;
  elements.tipText.textContent = tips[currentQuestion.tipKey] || tips.word;
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
  elements.termSelect.value = String(state.term);
  const curriculum = curriculumMap[state.grade]?.[state.term] || curriculumMap[4][1];
  const customTopics = currentUser ? validSpecificTopics(currentUser) : [];
  elements.curriculumTitle.textContent = customTopics.length
    ? `${gradeLabel(state.grade)} · Term ${state.term} · Custom Focus`
    : `${gradeLabel(state.grade)} · Term ${state.term} · ${curriculum.title}`;
  elements.curriculumTopics.textContent = customTopics.length
    ? customTopics.map(topicLabel).join(" · ")
    : curriculum.summary;
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
  if (!can("changeGrade")) {
    event.target.value = String(state.grade);
    return;
  }
  state.grade = normalizeGrade(event.target.value);
  updateCurrentUserProfile("grade", state.grade);
  updateCurrentUserProfile("specificTopics", []);
  session.streak = 0;
  saveState();
  updateUI();
  nextQuestion();
});
elements.termSelect.addEventListener("change", (event) => {
  if (!can("changeTerm")) {
    event.target.value = String(state.term);
    return;
  }
  state.term = Number(event.target.value);
  updateCurrentUserProfile("term", state.term);
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
elements.loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  elements.loginError.textContent = "";
  const success = await signIn(elements.loginUsername.value, elements.loginPassword.value);
  if (!success) {
    elements.loginError.textContent = "Username or password is incorrect.";
    elements.loginPassword.select();
  }
});
elements.logoutButton.addEventListener("click", signOut);
elements.myPageButton.addEventListener("click", openAdmin);
elements.closeAdminButton.addEventListener("click", closeAdmin);
elements.adminTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".admin-tab");
  if (!tab || tab.disabled) return;
  activeAdminTab = tab.dataset.adminTab;
  renderAdmin();
});
elements.adminOverlay.addEventListener("click", (event) => {
  if (event.target === elements.adminOverlay) closeAdmin();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.shopOverlay.hidden) closeShop();
  if (event.key === "Escape" && !elements.adminOverlay.hidden) closeAdmin();
});

function initializeApp() {
  saveClassroomData();
  const sessionUserId = localStorage.getItem(SESSION_STORAGE_KEY);
  const savedUser = classroomData.users.find((user) => user.id === sessionUserId);
  if (savedUser) {
    currentUser = savedUser;
    state = loadState();
    applyCurrentUser();
  } else {
    setSignedInView(false);
    elements.loginUsername.focus();
  }
}

initializeApp();
