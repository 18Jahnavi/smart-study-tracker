# Assignment 4: Smart Study Task Tracker – A Colorful Productivity App for Students

## Step 1: Create the React Project

* Created a new React project using Vite.
* Set up the project structure.
* Installed all required dependencies.

## Step 2: Install Required Libraries

* Installed Chakra UI for designing the interface.
* Installed Zustand for state management.
* Installed React Router for page navigation.
* Installed React Icons for sidebar icons.

## Step 3: Organize the Project Structure

Created separate folders for:

* components
* pages
* store
* types

This made the project clean and easy to maintain.

## Step 4: Create the Sidebar

* Designed a dark-colored sidebar.
* Added navigation links:

  * Dashboard
  * All Tasks
  * Completed
  * Statistics
  * Settings
* Added hover effects and active page highlighting.

## Step 5: Configure Routing

Created routes for:

* Dashboard
* All Tasks
* Completed
* Statistics
* Settings

Users can navigate between pages without refreshing the application.

## Step 6: Create the Dashboard

Designed the main dashboard that includes:

* Header section
* Statistics cards
* Search bar
* Add Task form
* Task list

## Step 7: Build the Task Form

Created a form where users can:

* Enter a task title
* Select task priority
* Add the task

Validation prevents empty tasks from being added.

## Step 8: Manage Tasks with Zustand

Created a global task store that:

* Adds tasks
* Marks tasks as completed
* Deletes tasks
* Clears tasks
* Persists data using local storage

## Step 9: Display Tasks

Created a reusable TaskCard component that displays:

* Task title
* Priority badge
* Completion checkbox
* Edit button
* Delete button

## Step 10: Implement Task Completion

Added a checkbox that:

* Marks tasks as completed
* Applies a line-through style
* Updates statistics automatically

## Step 11: Add Edit Functionality

Implemented an Edit button that:

* Opens a prompt
* Allows changing the task title
* Saves the updated task

## Step 12: Add Delete Confirmation

Instead of deleting immediately:

* Clicking Delete opens a confirmation dialog.
* Selecting "Yes" deletes the task.
* Selecting "No" cancels the action.

## Step 13: Create the Completed Page

Built a page that:

* Displays only completed tasks
* Shows a message when no completed tasks exist

## Step 14: Implement Search

Added a search feature that:

* Filters tasks by title
* Updates results while typing

## Step 15: Create the Statistics Page

Displayed:

* Total tasks
* Completed tasks
* Pending tasks
* High-priority tasks
* Overall completion progress percentage

## Step 16: Create Profile Settings

Developed a Settings page where users can:

* Update their name
* Update their email
* Save profile information

## Step 17: Save Profile Information

Used Zustand persistence so that:

* Name and email remain saved after refreshing the page.

## Step 18: Connect Header and Settings

Linked the profile section in the header to the Settings page.

After updating the profile:

* The new name appears in the dashboard header.
* The updated email is displayed automatically.

## Step 19: Show Success Message

After saving profile changes:

* A success alert is displayed to confirm the update.

## Step 20: Apply Chakra UI Styling

Used Chakra UI components such as:

* Box
* Flex
* Button
* Input
* Badge
* Checkbox
* Avatar
* Alert
* Progress
* Heading

This created a clean and modern user interface.

## Step 21: Improve User Experience

Added:

* Hover effects
* Rounded cards
* Shadows
* Smooth transitions
* Better spacing and alignment

## Step 22: Make the Application Responsive

Updated layouts to work on:

* Desktop
* Tablet
* Mobile devices

Applied responsive padding, font sizes, grids, and flexible layouts.

## Step 23: Persist Application Data

Configured Zustand Persist middleware so that:

* Tasks remain after refresh
* Profile information remains after refresh

## Step 24: Test the Application

Verified:

* Task creation
* Task editing
* Task deletion
* Task completion
* Search functionality
* Statistics updates
* Profile updates
* Navigation between pages

## Step 25: Prepare for Deployment

Configured the project for deployment by:

* Building the production version
* Preparing GitHub repository
* Setting up GitHub Pages deployment

## Final Features Implemented

* Dashboard
* Sidebar Navigation
* Add Task
* Edit Task
* Delete Task with Confirmation
* Complete Task
* Search Tasks
* Statistics Dashboard
* Completed Tasks Page
* Profile Settings
* Zustand State Management
* Local Storage Persistence
* Chakra UI Design
* React Router Navigation
* Responsive Layout
* GitHub Deployment Preparation

# Problems/Challenges Faced During Assignment 4: Smart Study Task Tracker

## 1. Setting Up the Project

* Faced difficulty creating the React + TypeScript project.
* Had to install and configure required dependencies correctly.

## 2. Installing Chakra UI and Zustand

* Encountered issues while installing Chakra UI and Zustand packages.
* Needed to verify whether the packages were installed correctly.

## 3. React Icons Import Errors

* Faced import errors such as "Failed to resolve import".
* Installed the correct `react-icons` package and updated imports.

## 4. Configuring React Router

* Initially had issues with page navigation.
* Configured routes properly to navigate between different pages.

## 5. Sidebar Layout Issues

* Sidebar design did not match the expected UI.
* Dashboard content was hidden behind the sidebar due to fixed width and margins.
* Adjusted spacing and layout to fix the issue.

## 6. Styling and Color Matching

* Faced challenges selecting the correct CSS colors and hover effects.
* Matched colors using RGB values to achieve the desired design.

## 7. Task Management Logic

* Implementing add, edit, delete, and complete functionalities required proper state updates.
* Ensured task changes reflected immediately in the UI.

## 8. Zustand State Management

* Understanding global state management with Zustand was initially challenging.
* Learned how to update and persist state effectively.

## 9. Data Persistence

* Without persistence, tasks disappeared after refreshing the page.
* Solved this by using Zustand's `persist` middleware.

## 10. Edit Task Functionality

* Implementing task editing while preserving existing task data required additional logic.

## 11. Delete Confirmation Dialog

* Needed to add a confirmation popup before deleting tasks.
* Integrated Chakra UI's `AlertDialog` component successfully.

## 12. Profile Management

* Creating a profile settings page and synchronizing updates with the dashboard required managing shared state.

## 13. Form Validation

* Prevented users from saving empty task titles or profile fields.
* Added validation checks before saving.

## 14. Search Functionality

* Implementing real-time search and filtering tasks by title required careful filtering logic.

## 15. Statistics Calculation

* Calculating completed, pending, and high-priority task counts and progress percentage required dynamic updates whenever tasks changed.

## 16. Mobile Responsiveness

* Fixed-width layouts caused display issues on smaller screens.
* Updated components with responsive Chakra UI properties for better mobile support.

## 17. TypeScript Errors

* Faced TypeScript warnings and type-related issues while defining interfaces and props.
* Corrected type definitions to improve code safety.

## 18. Git and GitHub

* Encountered issues while pushing code and managing branches.
* Learned how to commit, push, and manage repositories correctly.

## 19. GitHub Pages Deployment

* Faced deployment issues such as missing `deploy` scripts and incorrect GitHub Pages configuration.
* Updated `package.json` and deployment settings to publish the project.

## 20. Testing and Debugging

* Tested each feature multiple times.
* Fixed UI alignment issues, navigation problems, and state synchronization bugs to ensure smooth functionality.

# Installations Done for Assignment 4: Smart Study Task Tracker

## 1. Create React + Vite Project

### Installation Command

```bash
npm create vite@latest smart-study-tracker
```

### Go to Project Folder

```bash
cd smart-study-tracker
```

### Install Dependencies

```bash
npm install
```

### Verify

```bash
npm run dev
```

---

# 2. Install Chakra UI

### Installation Command

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Verify

```bash
npm list @chakra-ui/react
```

Expected output:

```
@chakra-ui/react@2.x.x
```

---

# 3. Install React Icons

### Installation Command

```bash
npm install react-icons
```

### Verify

```bash
npm list react-icons
```

Expected output:

```
react-icons@5.x.x
```

---

# 4. Install Zustand

### Installation Command

```bash
npm install zustand
```

### Verify

```bash
npm list zustand
```

Expected output:

```
zustand@5.x.x
```

---

# 5. Install React Router DOM

### Installation Command

```bash
npm install react-router-dom
```

### Verify

```bash
npm list react-router-dom
```

Expected output:

```
react-router-dom@7.x.x
```

---

# 6. Install TypeScript (Already Included with Vite Template)

### Verify

```bash
npm list typescript
```

Expected output:

```
typescript@6.x.x
```

---

# 7. Install gh-pages (For Deployment)

### Installation Command

```bash
npm install gh-pages --save-dev
```

### Verify

```bash
npm list gh-pages
```

Expected output:

```
gh-pages@6.x.x
```

---

# 8. Check All Installed Packages

```bash
npm list
```

This command displays all installed dependencies in the project.

---

# 9. Check Specific Package

```bash
npm list <package-name>
```

Example:

```bash
npm list zustand
npm list react-icons
npm list @chakra-ui/react
npm list react-router-dom
```

---

# 10. Check Project Scripts

```bash
npm run
```

This displays all available scripts such as:

* dev
* build
* preview
* lint
* deploy (if configured)

---

# 11. Build the Project

```bash
npm run build
```

Creates the production-ready build.

---

# 12. Run Development Server

```bash
npm run dev
```

Starts the local development server.

---

# 13. Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

---

# Summary of Installed Libraries

| Library          | Purpose                         |
| ---------------- | ------------------------------- |
| React            | Build UI components             |
| Vite             | Fast development and build tool |
| TypeScript       | Type safety                     |
| Chakra UI        | UI component library            |
| Emotion          | Styling support for Chakra UI   |
| Framer Motion    | Animations                      |
| React Router DOM | Page navigation                 |
| Zustand          | State management                |
| React Icons      | Icon library                    |
| gh-pages         | Deploy project to GitHub Pages  |

```

### Technologies Used
- React
- TypeScript
- Vite
- Chakra UI
- Zustand
- React Router DOM
- React Icons
- Git & GitHub
- GitHub Pages
```
