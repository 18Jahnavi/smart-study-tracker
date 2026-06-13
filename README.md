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
