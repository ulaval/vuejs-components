import Vue, { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import { MESSAGE_NAME } from '../component-names';
import I18nPlugin from '../i18n/i18n';
import IconButtonPlugin from '../icon-button/icon-button';
import IconPlugin from '../icon/icon';
import WithRender from './message.html?style=./message.scss';

export enum MMessageState {
    Success = 'success',
    Information = 'information',
    Warning = 'warning',
    Error = 'error'
}

export enum MMessageSkin {
    Default = 'default',
    Light = 'light',
    Page = 'page'
}

@WithRender
@Component
export class MMessage extends Vue {
    @Prop({
        default: MMessageState.Success,
        validator: value =>
            value === MMessageState.Success ||
            value === MMessageState.Information ||
            value === MMessageState.Warning ||
            value === MMessageState.Error
    })
    public state: MMessageState;

    @Prop({
        default: MMessageSkin.Default,
        validator: value =>
            value === MMessageSkin.Default ||
            value === MMessageSkin.Light ||
            value === MMessageSkin.Page
    })
    public skin: MMessageSkin;

    @Prop({ default: true })
    public icon: boolean;

    @Prop()
    public title: string;

    @Prop()
    public closeButton: boolean;

    @Prop({ default: true })
    public visible: boolean;

    private internalVisible: boolean = true;
    private animReady: boolean = false;

    protected mounted(): void {
        this.propVisible = this.visible;
        setTimeout(() => {
            this.animReady = true;
        });
    }

    @Watch('visible')
    private onVisibleChange(value: boolean): void {
        this.propVisible = value;
    }

    private get propVisible(): boolean {
        return this.internalVisible;
    }

    private set propVisible(visible: boolean) {
        this.internalVisible = visible === undefined ? true : visible;
        this.$emit('update:visible', this.internalVisible);
    }

    private onClose(event): void {
        this.propVisible = false;
        this.$emit('close', event);
    }

    private getIcon(): string {
        let icon: string = '';
        switch (this.state) {
            case MMessageState.Success:
                icon = 'm-svg__confirmation';
                break;
            case MMessageState.Information:
                icon = 'm-svg__information';
                break;
            case MMessageState.Warning:
                icon = 'm-svg__warning';
                break;
            case MMessageState.Error:
                icon = 'm-svg__error';
                break;
            default:
                break;
        }
        return icon;
    }

    private get isSkinDefault(): boolean {
        return this.skin === MMessageSkin.Default;
    }

    private get isSkinLight(): boolean {
        return this.skin === MMessageSkin.Light;
    }

    private get isSkinPage(): boolean {
        return this.skin === MMessageSkin.Page;
    }

    private get isStateInformation(): boolean {
        return this.state === MMessageState.Information;
    }

    private get isStateWarning(): boolean {
        return this.state === MMessageState.Warning;
    }

    private get isStateError(): boolean {
        return this.state === MMessageState.Error;
    }

    private get isStateSuccess(): boolean {
        return this.state === MMessageState.Success;
    }

    private get showCloseButton(): boolean {
        return this.skin === MMessageSkin.Default && this.closeButton;
    }

}

const MessagePlugin: PluginObject<any> = {
    install(v, options): void {
        v.prototype.$log.debug(MESSAGE_NAME, 'plugin.install');
        v.use(IconPlugin);
        v.use(IconButtonPlugin);
        v.use(I18nPlugin);
        v.component(MESSAGE_NAME, MMessage);
    }
};

export default MessagePlugin;
