import { ValidatorKeys } from "../../../../components/form/validator-error-keys";
import { FormatMode } from "../../../i18n/i18n";
import { ModulVue } from "../../../vue/vue";
import { ControlValidatorValidationType } from "../../control-validator-validation-type";
import { FormControl } from "../../form-control";
import { FormGroup } from "../../form-group";
import { ControlValidator, ControlValidatorOptions } from "../control-validator";

/**
 * Bound included
 */
export const MaxValidator: Function = (controlName: string, max: number | Date, options?: ControlValidatorOptions): ControlValidator => {
    return {
        key: ValidatorKeys.Max,
        validationFunction: (control: FormControl<any>): Promise<boolean> => {
            if (control instanceof FormGroup) {
                throw Error('the max validator should not be attached to a form group');
            }

            let isMax: boolean;

            if (!control.value && control.value !== 0) {
                isMax = true;
            } else {
                let value: number | Date = control.value;

                if (max instanceof Date) {
                    value = new Date(control.value);
                }

                isMax = value <= max;
            }

            return Promise.resolve(isMax);
        },
        error: options && options.error ?
            options.error : {
                message: (ModulVue.prototype.$i18n).translate(
                    'm-form:maxValidatorErrorMessage',
                    { max: max instanceof Date ? max.toLocaleDateString() : max },
                    undefined, undefined, undefined, FormatMode.Sprintf
                ),
                groupMessage: (ModulVue.prototype.$i18n).translate(
                    'm-form:maxValidatorErrorSummaryMessage',
                    {
                        controlName,
                        max: max instanceof Date ? max.toLocaleDateString() : max
                    },
                    undefined, undefined, undefined, FormatMode.Sprintf
                )
            },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
