# Description
This is a web application for a gym that allows users to view the gym's information, schedule, and subscribe to activities. 

### Web Sections
- Landing page
- Log in page
- Sign up page
- Admin page (Waiting to have a user to test the app)

<br />

---

<br />

# Frontend Requirements 

### Header - Layout Component
- Social media links
- Log in button
- Sign up button

### Landing Page
  
#### For Unlogged Users
- Landing page with:
  - Gym information (Opening hours, introduction, Gym Image, etc.)
  - Gym Time Schedule by activity (As table) - Mobile friendly
  - Whatsapp link to contact the gym
  - Footer
 
#### Additional, for Logged Users
- ??? (Waiting to have a user to test the app)

#### Gym Time Schedule
- Gym time schedule by activity (As table) - Mobile friendly
- Activity Selector - To filter the activities by type (e.g. All Activities, Yoga, Crossfit, etc.)
- Subscribe button - To subscribe to the activity. 
  - If user is not logged in, will redirect to the login page.

#### Footer
- Who we are
- Where to find us - Google Map Integration
- Social media links - Facebook & Instagram
- Contact form

### Sign Up Page
- Form to create an account: 
    - Email
    - Password
    - First Name
    - Last Name
    - Gym ID
- Leyend : *Este es tu número de afiliado en el gimnasio. Si no estás seguro de cuál es, contactanos!*
- Button to Log in

### Log in Page
- Form to log in: 
    - Email
    - Password
- Button to Sign up
- Button for Password recovery
  
### Admin Page
- ??? (Waiting to have a user to test the app)

<br />

---

<br />

# DB Requirements 

### Tables
- **Users**
  - ID
  - First Name
  - Last Name
  - Email
  - Gym ID (?? Puede ser un ID de gimnasio o una lista de IDs de gimnasio??)

- **Gyms**
  - ID
  - Name
  - Address
  - Phone
  - Email

- **Activities**
  - ID
  - Name
  - Description
  - Schedule (Days and hours)
  - Gym ID

- **Subscriptions**
  - ID
  - User ID
  - Activity ID
  - Date
  - Time

<br />

--- 

<br />

# Auth Requirements 
### Roles
- **Admin Role**
- **User Role**

<br />

--- 

<br />

# Stack

- Next.js - Framework
- React - UI Library
- TypeScript - Language

### UI
- Tailwind CSS - CSS Framework
  
### Auth
- Kinde

### Database
- Postgres - From Neon (Trough Vercel Postgres)
- Prisma - ORM

### Hosting
- Vercel - Hosting

### Documentation & Project Management
- Storybook - For component documentation
- Todoist - For project management
- Discord - For team communication

### Misc
- CLSX - For conditional classnames
