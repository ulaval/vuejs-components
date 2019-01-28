import { FormFieldState } from '../form-field-state/form-field-state';

/**
 * Form Field Class
 */
export class FormField<T> {
    private internalValue: T;
    private oldValue: T;
    private internalState: FormFieldState;
    private messageAfterTouched: boolean = true;
    private touched: boolean = false;

    /**
     *
     * @param value function called to initialize the value of a field
     * @param validationCallback function called to validate
     */
    constructor(public accessCallback: () => T, public validationCallback?: (value: T) => FormFieldState) {
        this.internalValue = accessCallback();
        this.internalState = new FormFieldState();
    }

    /**
     * value of the field
     */
    get value(): T {
        return this.internalValue;
    }

    /**
     * set the value of the field
     */
    set value(newValue: T) {
        this.change(newValue);
    }

    /**
     * determine if the message should be available only when field has been touched
     */
    set isMessageAfterTouched(value: boolean) {
        this.messageAfterTouched = value;
    }

    /**
     * indicates if the field has error(s)
     */
    get hasError(): boolean {
        return this.internalState.hasError;
    }

    /**
     * indicates if the field is touched
     */
    get isTouched(): boolean {
        return this.touched;
    }

    /**
     * message to show under the form field
     */
    get errorMessage(): string {
        if (this.messageAfterTouched && this.touched && this.hasError) {
            return this.internalState.errorMessage;
        }

        return '';
    }

    /**
     * message to show in the error summary
     */
    get errorMessageSummary(): string {
        return this.internalState.errorMessageSummary;
    }

    /**
     * execute validations
     */
    validate(): void {
        if (this.validationCallback) {
            this.changeState(this.validationCallback(this.internalValue));
        }
    }

    /**
     * reset the field without validating
     */
    reset(): void {
        this.internalValue = this.accessCallback();
        this.oldValue = this.internalValue;
        this.internalState = new FormFieldState();
        this.touched = false;
    }

    /**
     * Mark the field as touched
     */
    markAsTouched(): void {
        this.touched = true;
        this.validate();
    }

    /**
     * changes the value and execute validations
     * @param value the new value of the field
     */
    private change(value: T): void {
        if (value !== this.oldValue) {
            this.internalValue = value;
            this.oldValue = this.internalValue;
            this.validate();
        }
    }

    private changeState(etat: FormFieldState): void {
        this.internalState.hasError = etat.hasError;
        this.internalState.errorMessage = etat.errorMessage;
        this.internalState.errorMessageSummary = etat.errorMessageSummary;
    }
}
