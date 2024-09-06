import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./base/base.component";
import { ConverterComponent } from "./converter/converter.component";

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                component: ConverterComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule {}