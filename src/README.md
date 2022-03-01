# Angular 13
## Common folder for shared state.
- Template Driven Form: create interface - `ng g interface common/models/course`
- Services: create using `ng g s common/services/courses`
- Lessons service: `ng g s common/services/lessons`
- Component driven architecture: Stateflow parents class components & Event binding from presentations child components`ng g c courses/courses-list -m app.module.ts -d` and `ng g c courses/course-details -m app.module.ts`