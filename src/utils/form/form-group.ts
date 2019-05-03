import { AbstractControl } from "./abstract-control";
import { ControlEditionContext } from "./control-edition-context";
import { ControlOptions } from "./control-options";
import { FormControl } from "./form-control";
import { ControlValidator } from "./validators/control-validator";

export class FormGroup extends AbstractControl {
    constructor(
        public readonly name: string,
        public controls: AbstractControl[],
        public readonly validators: ControlValidator[] = [],
        options?: ControlOptions
    ) {
        super(name, validators, options);
    }

    public get isValid(): boolean {
        return this.validators.every(v => !!v.lastCheck) && this.controls.every(c => c.isValid);
    }

    public getControl(name: string): AbstractControl {
        let control: AbstractControl | undefined = this.controls.find(c => c.name === name);

        if (!control) {
            throw Error(`There is no control with the name ${name} in this group`);
        }

        return control;
    }

    public addControl(control: AbstractControl): void {
        if (this.controls.find(c => c.name === control.name)) {
            throw Error(`There is already a control with name ${control.name} in this group`);
        }

        this.controls.push(control);
    }

    public removeControl(name: string): void {
        if (this.controls.find(c => c.name === name)) {
            throw Error(`There is no control with name ${name} in this group`);
        }

        this.controls = this.controls.filter(c => c.name === name);
    }

    public async validate(manualy: boolean = false): Promise<void> {
        await super.validate(manualy);
        await Promise.all(this.controls.map(c => c.validate(manualy)));
    }

    private interval: any;
    private timeout: any;

    public initEdition(): void {
        this.interval = setInterval(() => async () => {
            await Promise.all(this.validators.map(async v => v.lastCheck = await !!v.validationFunction(control)));
            this._updateErrors();
        }, 100);

        clearTimeout(this.timeout);

        const populate: boolean = !!this.controls
            .filter(c => c instanceof FormControl)
            .find((fc: FormControl<any>) => !!fc.value === true);
        const pristine: boolean = this.controls
            .filter(c => c instanceof FormControl)
            .every((fc: FormControl<any>) => fc.value === fc['_oldValue'] && fc.value === fc['_initialValue']);
        const isValid: boolean = this.validators.every(v => !!v.lastCheck);

        if (this.errors.length > 0) {
            this._editionContext = ControlEditionContext.HasErrors;
        } else if (pristine) {
            this._editionContext = ControlEditionContext.Pristine;
        } else if (!populate && isValid) {
            this._editionContext = ControlEditionContext.EmptyAndValid;
        } else if (populate && isValid) {
            this._editionContext = ControlEditionContext.PopulateAndValid;
        }
    }

    public endEdition(): void {
        this.timeout = setTimeout(() => {
            clearTimeout(this.timeout);
            clearInterval(this.interval);

            this._editionContext = ControlEditionContext.None;
            this._resetManualValidators();
            super.validate();
        }, 500);
    }

    public reset(): void {
        super.reset();
        this.controls.forEach(c => c.reset());
    }
}
