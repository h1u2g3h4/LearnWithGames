# Learn With Games

Math Quest is a browser-based math game and classroom prototype for students from Kindergarten through Grade 8. Players solve curriculum-matched questions, earn coins and XP, customize a character, and unlock rewards.

## Features

- BC Kindergarten–Grade 8 questions organized into three tutor-controlled terms
- Per-student specific curriculum checklists that override the term mix when needed
- Coins, XP, levels, and answer streaks
- Five playable worlds that use the learner's assigned curriculum:
  - Math Quest — classic question and reward mode
  - Speedway — correct answers drive a race car toward the finish line
  - Skyward — answers gain altitude and complete flight paths
  - Cosmos — answers charge a spacecraft and unlock new sectors
  - Builders — answers place construction blocks and complete structures
- Cinematic HD backgrounds and detailed vehicles for every non-Math world
- Cosmos warp-boost animation with engine flare, speed streaks, and a synthesized rocket sound effect
- The Math Hero card automatically hides while another game world is active
- Female and male characters with custom names and selectable South Asian, Black, East Asian, and White appearances
- Expanded outfit, hair, shoe, and accessory shop
- Login with separate saved progress for each learner
- My Page for account registration, groups, grade/term assignment, and classroom roles
- Custom roles with a permission checklist
- Responsive desktop and mobile design
- Separate saved progress, levels, streak boosts, and completion bonuses for every game world

## Starter administrator

- Username: `Hugh Kang`
- Password: `Hugh1234!!`

The account system is a front-end prototype. Passwords are stored as SHA-256 hashes in the browser's local storage, which is suitable for a local demo but not for a production classroom. A production version should use a secure server, database, password reset flow, and managed sessions.

## Curriculum

The question engine follows the main skill areas in the official [BC Mathematics curriculum](https://curriculum.gov.bc.ca/curriculum/mathematics), from [Kindergarten](https://curriculum.gov.bc.ca/curriculum/mathematics/k/core) through [Grade 8](https://curriculum.gov.bc.ca/curriculum/mathematics/8/core). The three-term sequence is a tutoring-friendly organization of those topics rather than an official provincial term schedule.

Teachers can keep a learner on the normal term plan or open **Specific curriculum** in My Page and select only the topics that should appear. For example, a Grade 5 learner can practise only addition, subtraction, multiplication, and division while remaining assigned to Term 2.

## Run locally

Open `index.html` directly in a browser, or start a small local server:

```powershell
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.
