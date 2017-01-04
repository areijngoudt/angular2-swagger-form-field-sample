/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */

import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator } from './validators';
import { BaseModel } from './base-model';


export interface ISubModel {
    id: number;
}

export class SubModel extends BaseModel implements ISubModel {
    id: number;

    /** 
     * constructor
     * @param values Can be used to set a webapi response to this newly constructed model   
    */
    constructor(values?: any) {
        super();
        if (values) {
            this.setValues(values);
        }
    }

    /** 
     * set the values.
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    setValues(values: any): void {
        this.id = values.id;
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                id: new FormControl(this.id, [Validators.required, maxValueValidator(2147483647), ]),
            });

            // generate FormArray control elements
        }
        return this._formGroup;
    }
}
