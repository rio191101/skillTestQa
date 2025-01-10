
# Automation-Web-with- Playwright-Javascript-

## Installation

Before cloning the project, install git and node.js or yarn. Once the installation is complete, clone the project using cmd.

```bash
git clone https://github.com/rio191101/skillTestQa.git
```

Then install the Playwright package.

```bash
npm install
```

## Run

Run Script command
| Script | Description |example |
| ------------- | ------------- | ------------- |
| **npx playwright test** | This command will run all test files or .spec.js files on 3 browsers: c hromium, webkit, firefox | npx playwright test |
| **npx playwright show-report** | When the test is complete, you can view the report using this command |npx playwright show-report|
| **npx playwright test [filename]** | Use Run Script for specific file| npx playwright test 01_Create_and_RunTest.spec.js |
| **npx playwright test [filename] --project=[browser name]** | Use Run Script for specific browser |npx playwright test 01_Create_and_RunTest.spec.js --project=chromium
| **npx playwright test [filename] --project=[browser name] --headed** | mode Run Script by opening real browser | npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --headed
| **npx playwright test [filename] --project=[browser name] --debug ** | mode debug | npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --debug
| ** npx playwright test [filename] --project=[browsername] --ui ** | playwright ui mode |npx playwright test 01_Create_and_RunTest.spec.js --project=chromium --ui

## Record and Generate code

playwright can generate code from browser click with command

```bash
npx playwright codegen
```

# TC_001: Verify Home Page Title

![Screenshot_11-1-2025_3251_localhost](https://github.com/user-attachments/assets/86d32ce2-56f9-44a6-91a9-7855589404e2)

# TC_002: Verify menu Who We Are Page
![Screenshot_11-1-2025_32140_localhost](https://github.com/user-attachments/assets/74eace1c-d507-4149-b5b6-8115766d4b42)

# TC_003: Verify menu Strategic Framework
![Screenshot_11-1-2025_15923_localhost](https://github.com/user-attachments/assets/4860472a-251d-4b03-a09b-a6704cb74daf)

# TC_004: Verify menu Product
![Screenshot_11-1-2025_23123_localhost](https://github.com/user-attachments/assets/0055cde3-e408-4445-8170-c3124a8328b4)

# TC_005: Verify menu News
![Screenshot_11-1-2025_44818_localhost](https://github.com/user-attachments/assets/9bf88fac-6cb2-499f-8466-f859b71530ba)

# TC_006: Verify menu i2 Academy
![Screenshot_11-1-2025_31811_localhost](https://github.com/user-attachments/assets/7b05e371-29ca-498f-821a-1266e1305bf4)

# TC_007: Negative Test Invalid Navigation
![Screenshot_11-1-2025_44528_localhost](https://github.com/user-attachments/assets/3d42b1b3-ca81-4f79-874c-309b715943ae)
