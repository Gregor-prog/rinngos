# RINNGOS Ready-to-Launch Website Package

This package is a responsive static website for Rivers Network of NGOs (RINNGOS), built with HTML, CSS and vanilla JavaScript.

## Included
- Official RINNGOS logo taken from the supplied branding artwork.
- Responsive homepage and full navigation.
- Membership registration portal.
- Ten-programme portfolio.
- Community Development Plan menu for all 23 Rivers State LGAs.
- Regulatory and self-regulation policy hub.
- Training materials and resource library.
- Sweep Academy page and enrolment form.
- RINNGOS Clinic AI: client-side knowledge assistant for common NGO/sub-national issues.
- Annual webinar schedule and registration form.
- Co-working space booking form.
- Rimpact/news, team, strategic plan, feedback and contact pages.
- Privacy, terms and accessibility pages.
- Sitemap, robots.txt, 404 page and security-oriented Netlify headers.

## Forms
All key forms use Netlify Forms (`data-netlify=true`) and also create a local browser backup when the site is opened directly from a computer for testing. After deployment to Netlify, form submissions appear in the Netlify Forms dashboard.

Forms included:
1. Membership Registration
2. Webinar Registration
3. Sweep Academy Enrolment
4. Co-Working Booking
5. Feedback Mechanism
6. Contact / Partnership Enquiry

## Launch on Netlify
1. Create a Netlify account.
2. Drag the entire unzipped `rinngos-launch` folder into Netlify Drop, or connect the folder to a Git repository.
3. In the Netlify dashboard, confirm that Forms are enabled and submit a test form.
4. Connect `www.rinngos.org` under Domain Management and update DNS records as instructed by Netlify.
5. Enable HTTPS (Netlify normally provisions this automatically).

## Before public launch
- Confirm the official public email(s), address and phone numbers.
- Add verified leadership names/photos to `team.html`.
- Replace webinar registration-only workflow with actual Zoom/Teams links when available.
- Upload downloadable official PDFs and link them from `resources.html` if required.
- Have the Secretariat review privacy, terms and regulatory wording.
- If you want a true generative AI Clinic, connect `clinic-ai.html` to a secure server-side AI endpoint. The included Clinic is fully functional for a curated knowledge base but does not call an external AI service.

## Contact configured in website
- Phone: +234 803 340 2264
- Email: info@rinngos.org
- Website: www.rinngos.org
- Facebook: https://www.facebook.com/Riversnetworkofngos



## Partnership page
The primary navigation now includes **Partner With Us**, with a Netlify-enabled partnership enquiry form. The previous Partner With Us page remains in the package as an optional support page but is no longer part of the main navigation.
