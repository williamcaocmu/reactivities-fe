# 06-04-2025
- Setup Frontend 
- Design Schema for Activity : ERD (Activity)


# 11-04-2025
- Backend: Create, Update, Delete Activity
- Frontend: Create In ActivityForm


# 16-04-2025
### Inclass
- [x] Backend: Sign up, Sign in
- [x] Frontend: RegisterForm, LoginForm
### Homework
- [x] Backend: Add zod validation to Activity endpoint(create, update)
- [x] Backend: API get current user 
- [x] Frontend: integrate with sign in, sign up
- [x] Frontend: After sign up, redirect to login
- [x] Frontend: After sign in, redirect to activity dashboard
- [x] Frontend: Show logged in user in Navbar
- [ ] (Optional): Refresh token
  

# 19-04-2025

### Homework
- [x] Backend: Add verification token to all endpoints
- [x] Frontend: Private Route 
- [x] Backend + Frontend: Get Activity Detail
- [x] Database: Design Attendee Table  ( Prisma Schema)
- [ ] Design API (19.04-01)
  - [x] Host: 
    - [x] Manage Event: (Edit Event Info) => only host can edit
    - [x] Cancel/Re-activate Event => only host can cancel
  - [x] Attendee:
    - [x] Join Activity
    - [x] Cancel Attendance


# 23-04-2025
### Homework
- [ ] Frontend: Public Route
- [x] Frontend: ActivityCard: show attendee list
- [x] Frontend: ActivityDetailsSidebar: show attendee list with information (host or attendee)
- [x] Follow design UI by (19.04-01)


# 27-04-2025
### Homework
- [ ] Backend + Frontend: Filter activities (All Events, I'm Hosting, I'm Going)



# 14-05-2025
### Inclass - Homework
- [ ] Setup React Query:
- [ ] Apply React Query for Activities: Fetching data, Mutation


# 17-05-2025
### inclass
- [x] UI: Profile Page
- [x] API: Get Profile by Id
- [x] Hook: useProfile

### Homework
- [ ] Convert User to useAccount (/me)
- [ ]  useAccount() => return { loginUser, user, logoutUser, isLoadingUser, registerUser };
- [ ]  Tab About => create Textarea to edit about me (2 mode: read, edit) + api (update profile)
  
- [ ] API
  - [ ] Follow/Unfollow User: POST(/DELETE) /profiles/:id/follow
  - [ ] API Profiles/:id => add followings, followers count
  - [ ] Get Follow List: GET /profiles/:id/follow-list?predicate=followers|followings
