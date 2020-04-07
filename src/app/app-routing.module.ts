import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {AboutComponent} from "./about/about.component"
import {ForumComponent} from "./forum/forum.component"
import {FormAuthComponent} from "./form-auth/form-auth.component"


const routes: Routes = [
	{path: "", component: ForumComponent },
	{path: "about", component: AboutComponent},
	{path: "registration", component: FormAuthComponent}
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}