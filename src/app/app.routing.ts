import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { TrackerComponent } from './components/tracker/tracker.component';

const routes: Routes = [
    {path: 'tracker', component: TrackerComponent},
    {path: 'projects', component: ProjectsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}