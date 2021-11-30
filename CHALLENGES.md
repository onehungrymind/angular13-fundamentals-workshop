
# Module 01: Component Challenges
In the `src/app/courses/courses.component.ts` file, complete the following challenges.
- Display courses using `ngFor`
- Add event handler to select course
- Display raw JSON of selected course

# Module 02: Form Challenges
In the `src/app/courses/courses.component.ts` file, complete the following challenges.
- Update the form to show `percentComplete`
- Update the form to show `favorite`

# Module 03: Services Challenges
Complete the following challenges.
- Generate a `LessonsService` service
- Inject `LessonsService` into `HomeComponent`
- Move `lessons` to the `LessonsService` and consume in the `HomeComponent`

**HINT:** `ng g s shared/services/lessons -d`

# Module 04: Server Communication Challenges
Complete the following challenges.
- Complete remote update call functionality in the `CoursesService`
- Complete remote delete call functionality in the `CoursesService`
- Update the `CoursesComponent` to display remote data

# Module 05: Component Driven Architecture Challenges
Complete the following challenges.
- Generate a `LessonsListComponent` component 
- Create the appropriate inputs and outputs
- Render `LessonsList` component

**HINT:** `ng g c lessons/lessons -m app.module.ts -d`

# Module 06: Routing Challenges
Complete the following challenges.
- Generate a `UsersComponent` component
- Create a new `users` route
- Update the `AppComponent` to create link to the `users` route in the `SideNav`
