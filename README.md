# ⚖️ 2026 BAR EXAM REVIEW TRACKER

**App Link:** [2026bar-reviewtracker.vercel.app](2026bar-reviewtracker.vercel.app/)

-----

## 💡 Application Overview

This project is a custom-built web application designed for comprehensive, subject-by-subject progress management tailored for the 2026 Bar Examinations. **Inspired by a Google Sheet bar exam review tracker,** it functions as a centralized, dynamic study hub, built using `HTML, JavaScript, jQuery, and FullCalendar`. All user progress and notes are stored locally within the browser for immediate access and data privacy.

| 🖥️ HEADER PREVIEW |
| :---: |
| ![Preview showing the header and overall progress meters](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-HEADER.png) |

-----

## 1\. Core Dashboard and Scheduling Features

### A. Deadline Tracking

* The application features **three dedicated countdown timers** tracking the time remaining until each of the three scheduled Bar Examination days (Day 1, Day 2, and Day 3).
* Target dates are **customizable** via a dedicated edit modal accessed through the date display.

### B. Progress Visualization

* The central dashboard includes a **Global Pie Chart** visualizing the **"Done"** vs. **"To-Read"** status across the entire comprehensive syllabus.
* The system displays the running total of **Topics Done** and **Topics To-Read** based on checklist completion.

### C. Exam Schedule Reference

* A summary table displays the **subject schedule** and the corresponding official **percentage weight** for each exam day.
* Each subject row features a live **sparkline progress bar** indicating the current completion rate based on syllabus tracking.

-----

## 2\. Subject Tracker and Progress Logic

The application incorporates six distinct, expandable subject panels that utilize a hierarchical tracking methodology.

### A. Syllabus Structure

* The syllabus for each subject is loaded dynamically and organized into a **hierarchical structure** (Sections, Depth 2 Topics, and supporting Depth 3 sub-points).

### B. Multi-Factor Tracking Mechanism

* Each core topic (Depth 2) includes a **five-point checklist** representing different review materials: **Codal, Books, Reviewer, Bar QAs, and Cases.**
* **Progress Metric:** A topic is officially marked as **"DONE"** and contributes to the overall metrics only upon checking **at least 3 out of 5** review method boxes for that topic.
* **Visual Feedback:** Checkbox completion colors are assigned based on the column type (e.g., Codal = Violet, Bar QAs = Green) for quick visual identification.

| SUBJECT | PREVIEW IMAGE |
| :---: | :---: |
| **Remedial Law** | ![Preview showing the detailed checklist for Remedial Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-REM.png) |
| **Criminal Law** | ![Preview showing the detailed checklist for Criminal Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-CRIM.png) |
| **Labor Law** | ![Preview showing the detailed checklist for Labor Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-LAB.png) |
| **Civil Law** | ![Preview showing the detailed checklist for Civil Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-CIV.png) |
| **Commercial Law** | ![Preview showing the detailed checklist for Commercial Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-COMM.png) |
| **Political Law** | ![Preview showing the detailed checklist for Political Law](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-POLI.png) |

-----

## 3\. Integrated Tools

### A. Review Calendar

* The **Review Calendar** allows users to visualize their study schedule by linking tasks and personal events to specific subject topics.
* Users can click any date to schedule a review task, which then displays the full subject and topic name (e.g., "POLI LAW - II. NATIONAL TERRITORY") on the calendar view.

| 📅 CALENDAR AND NOTEPAD PREVIEW |
| :---: |
| ![Preview showing the monthly calendar view and notepad](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-CALENDAR.png) |

### B. Digital Notepad

* A dedicated **Notepad Sidebar** provides quick documentation space for notes, deadlines, or temporary checklists.
* The notes feature includes essential utility functions such as **Undo, Redo, Clear, and Copy**, with content saved persistently in real-time.

-----

## 4\. Technical Specifications

### A. Data Persistence and Portability

* All user input (progress, custom dates, notes) is saved locally using **Local Storage**, ensuring data remains private and loads quickly.
* Data integrity is maintained through manual **Export All Data** and **Import Existing Data** functions, which manage progress backups using a `.json` format.

### B. Technical Requirements

* The application relies on external libraries (Tailwind CSS, FullCalendar, jQuery, etc.) and requires an **active internet connection** for initial asset loading.
* The application is primarily tested and optimized for **Google Chrome**.

| ⚙️ FOOTER AND DATA MANAGEMENT PREVIEW |
| :---: |
| ![Preview showing the data management buttons and footer quote](https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/2026%20Bar%20Review%20Tracker%20-%20Preview/Preview-FOOTER.png) |


---
<p align="center">
  <img src="https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/Images/missattycpa.PNG" alt="missattycpa watermark" height="20"/> | november 2025
</p>
