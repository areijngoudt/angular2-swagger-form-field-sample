/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */

import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';

import { Address } from './address.model';

export interface IVeterinarian {
    name: string;
    address?: Address;
}

export class Veterinarian extends BaseModel implements IVeterinarian {
    name: string;
    address: Address;

    /** 
     * constructor
     * @param values Can be used to set a webapi response to this newly constructed model   
    */
    constructor(values?: any) {
        super();
        this.address = new Address();
        if (values) {
            this.setValues(values);
        }
    }

    /** 
     * set the values.
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    setValues(values: any): void {
        if (values) {
            this.name = values.name;
            this.address.setValues(values.address);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                name: new FormControl(this.name, [Validators.required, Validators.minLength(1), ]),
                address: this.address.$formGroup,
            });
        }
        return this._formGroup;
    }

    setFormGroupValues() {
        if (this._formGroup) {
            this._formGroup.controls['name'].setValue(this.name);
            this.address.setFormGroupValues();
        }
    }
}
