Webby Frontend Assessment App

Project Overview:
This is a frontend web application developed as part of the Webby Group Frontend Engineer Candidates assessment. The project demonstrates practical skills in React, TypeScript, Next.js, Material UI, and state management with Zustand.

The application includes multiple pages:
1. Task Tracker – Allows users to create, edit, and delete tasks with validation.
2. Country Listing – Fetches and displays information about countries from a public REST API.
3. Home & About Pages – Provide navigation and project context.

Setup Instructions:
npm run dev

Public API Used:
REST Countries API (https://restcountries.com)
- Endpoint: https://restcountries.com/v3.1/all?fields=name,region,currencies,languages
- Used to fetch country data including name, region, currency, languages, and flags.
- Client-side fetch with loading and error handling.

Known Issues & Challenges:
1. Task form validation: Initially, the task name validation didn’t update properly when editing.
- Solution: Correctly integrated React Hook Form and Zod and used reset() when editing tasks.
2. Material UI Grid TypeScript issues: Using item + component together caused type errors.
- Solution: Applied inline styles (style={{ width, maxWidth }}) instead of item for Grid children.
3. REST Countries API filtering: API requires specifying fields when calling /v3.1/all.
- Solution: Fetched only the required fields (name, region, currencies, languages).

Additional Materials:
Design Mockups: The app follows a simple, clean, and responsive Material UI layout.
Test Cases: Manual testing was done for task creation, editing, deletion, and API listing display.
