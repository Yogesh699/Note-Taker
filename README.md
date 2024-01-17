# Note Taker

## Table of Contents

1. [Introduction](#introduction)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
   - [Landing Page](#landing-page)
   - [Notes Page](#notes-page)
   - [Saving Notes](#saving-notes)
   - [Viewing Existing Notes](#viewing-existing-notes)
   - [Creating New Note](#creating-new-note)
4. [Mockup](#mockup)
5. [Dependencies](#dependencies)
6. [Test Locally](#test-locally)
7. [Deployed URL](#Deployed-URL)

## Introduction

The Note Taker is an Express.js application designed for small business owners who need to organize their thoughts and keep track of tasks by writing and saving notes. This application features a user-friendly interface where users can create, view, and delete notes seamlessly. The backend is powered by Express.js, and note data is stored and retrieved from a JSON file.

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria

### Landing Page:

- When I open the Note Taker, I am presented with a landing page with a link to a notes page.

### Notes Page:

- When I click on the link to the notes page, I am presented with a page with existing notes listed in the left-hand column.
- The right-hand column contains empty fields to enter a new note title and the note’s text.

### Saving Notes:

- When I enter a new note title and text, a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page.
- Clicking on the "Save" button saves the new note, and it appears in the left-hand column with existing notes.
- After saving, the buttons in the navigation disappear.

### Viewing Existing Notes:

- Clicking on an existing note in the list shows that note in the right-hand column.
- A "New Note" button appears in the navigation.

### Creating New Note:

- Clicking on the "New Note" button presents empty fields to enter a new note title and text in the right-hand column, and the button disappears.

### Mockup

![image](https://github.com/Yogesh699/Note-Taker/assets/143371945/cc3dbc3d-645c-4959-aa8f-d76e38b4df69)

### Dependencies
```bash
node server.js
```

Install necessary dependencies using npm:

```bash
npm install express
```

### Deployed URL
https://note-taker-app-mode11-1924ea5469c7.herokuapp.com/