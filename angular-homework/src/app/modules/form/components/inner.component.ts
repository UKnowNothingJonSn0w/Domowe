import {Component} from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
    selector: 'app-form-inner',
    templateUrl: './inner.component.html',
})
export class InnerComponent {
    constructor(
        public form: NgForm
    ) { }
}
