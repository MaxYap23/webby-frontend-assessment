Webby Frontend Assessment App
Project Overview

This is a frontend-only web application developed as part of the Webby Group Frontend Engineer assessment. The project demonstrates practical skills in React, TypeScript, Next.js, Material UI, and state management with Zustand.

The application includes multiple pages:

Task Tracker – allows users to create, edit, and delete tasks with validation.

Country Listing – fetches and displays information about countries from a public REST API.

Home & About Pages – provide navigation and project context.

All features are implemented client-side, making the project fully frontend and responsive.

Public API Used

REST Countries API (https://restcountries.com
)

Endpoint: https://restcountries.com/v3.1/all?fields=name,region,currencies,languages,flags

Used to fetch country data including name, region, currency, languages, and flags.

Client-side fetch with loading and error handling.

Known Issues & Challenges

Task form validation – Initially, the task name validation didn’t update properly when editing.

Solution: Correctly integrated React Hook Form + Zod and used reset() when editing tasks.

Material UI Grid TypeScript issues – Using item + component together caused type errors.

Solution: Followed the task tracker pattern and applied inline styles (style={{ width, maxWidth }}) instead of item for Grid children.

REST Countries API filtering – API requires specifying fields when calling /v3.1/all.

Solution: Fetched only the required fields (name, region, currencies, languages, flags) to reduce payload and avoid errors.

Additional Materials (Optional)

Design Mockups: The app follows a simple, clean, and responsive Material UI layout.

Test Cases: Manual testing was done for task creation, editing, deletion, and API listing display.
