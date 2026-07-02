# Learn With Games

Math Quest is a browser-based math game and classroom prototype for students in Grades 4–6. Players solve curriculum-matched questions, earn coins and XP, customize a character, and unlock rewards.

## Features

- BC Grade 4–6 questions organized into three tutor-controlled terms
- Coins, XP, levels, and answer streaks
- Female and male characters with custom names
- Expanded outfit, hair, shoe, and accessory shop
- Login with separate saved progress for each learner
- My Page for account registration, groups, grade/term assignment, and classroom roles
- Custom roles with a permission checklist
- Responsive desktop and mobile design
- Future world slots for racing, flying, space, and building games

## Starter administrator

- Username: `Hugh Kang`
- Password: `Hugh1234!!`

The account system is a front-end prototype. Passwords are stored as SHA-256 hashes in the browser's local storage, which is suitable for a local demo but not for a production classroom. A production version should use a secure server, database, password reset flow, and managed sessions.

## Curriculum

The question engine is aligned with the official BC Mathematics curriculum content for [Grade 4](https://curriculum.gov.bc.ca/curriculum/mathematics/4/core), [Grade 5](https://curriculum.gov.bc.ca/curriculum/mathematics/5/core), and [Grade 6](https://curriculum.gov.bc.ca/curriculum/mathematics/6/core). The three-term sequence is a tutoring-friendly organization of those topics rather than an official provincial term schedule.

## Run locally

Open `index.html` directly in a browser, or start a small local server:

```powershell
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.
