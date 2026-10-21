KLAIRE DIGITAL TECHNOLOGY — PORTFOLIO WEBSITE
================================================

WHAT IS INCLUDED
- index.html       Home page with an automatic/manual hero slideshow
- services.html    Services page
- projects.html    Projects page with a second slideshow
- about.html       About page
- contact.html     Contact page with an email-preparing form
- style.css        Shared responsive blue-and-orange styling
- script.js        Mobile navigation, slideshows, year and contact form logic

IMPORTANT BEFORE PUBLISHING
1. Open script.js and replace:
   YOUR_EMAIL@example.com
   with the real email address you want visitors to contact.
   Until you do, the contact form intentionally will not open an email.
2. The hero slideshow uses image URLs from Unsplash. An internet connection is needed for those photos to load. The rest of the page styling is local.
3. The project cards are honest concept previews, not claims of completed client work. Replace them with real screenshots as you complete projects.
4. Check all copy and links before you publish.

HOW TO ADD THIS TO YOUR EXISTING GITHUB REPOSITORY ON ANDROID
SAFEST OPTION: make a backup branch first.
1. Open https://github.com/klairr011/klaire-digital-portfolio
2. Before replacing anything, use the branch selector to create a branch named:
   portfolio-redesign-backup
   (If branch creation is confusing, at minimum save a copy of the current index.html and style.css somewhere safe.)
3. Download and extract the ZIP on your phone.
4. In the repository, upload the files to the repository's top/root folder.
   GitHub mobile/web interface may require adding files one at a time.
5. The new index.html and style.css replace the old versions; upload the other new HTML pages and script.js as new files.
6. Commit the changes with a message such as:
   Build multi-page portfolio with slideshows
7. Wait for GitHub Pages to publish, then open the website and test Home, Services, Projects, About and Contact.

WHY THIS DOES NOT USE REACT
This version uses plain HTML, CSS and JavaScript so it can be published directly by GitHub Pages without installing Node.js or building a React app. GitHub Pages can serve static HTML, CSS and JavaScript files directly. If you later want React, we can convert it and add a build/deployment workflow.

FILE STRUCTURE
index.html
services.html
projects.html
about.html
contact.html
style.css
script.js
README-SETUP.txt
