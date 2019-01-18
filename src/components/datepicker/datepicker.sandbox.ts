import Vue, { PluginObject } from 'vue';
import { Component } from 'vue-property-decorator';
import { DATEPICKER_NAME } from '../component-names';
import DatepickerPlugin from './datepicker';
import WithRender from './datepicker.sandbox.html';


@WithRender
@Component
export class MDatepickerSandbox extends Vue {
    model: string = '';
}

const DatepickerSandboxPlugin: PluginObject<any> = {
    install(v, options): void {
        v.use(DatepickerPlugin);
        v.component(`${DATEPICKER_NAME}-sandbox`, MDatepickerSandbox);
    }
};

export default DatepickerSandboxPlugin;
