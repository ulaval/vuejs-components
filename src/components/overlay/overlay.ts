import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { BackdropMode, Portal, PortalMixin, PortalTransitionDuration } from '../../mixins/portal/portal';
import { ModulVue } from '../../utils/vue/vue';
import { OVERLAY_NAME } from '../component-names';
import WithRender from './overlay.html?style=./overlay.scss';

@WithRender
@Component({
    mixins: [Portal]
})
export class MOverlay extends ModulVue {

    @Prop({ default: true })
    public focusManagement: boolean;

    @Prop({ default: true })
    public padding: boolean;
    @Prop({ default: true })
    public paddingHeader: boolean;
    @Prop({ default: true })
    public paddingBody: boolean;
    @Prop({ default: true })
    public paddingFooter: boolean;
    @Prop({ default: false })
    public disableSaveButton: boolean;

    public $refs: {
        dialogWrap: HTMLElement,
        header: HTMLElement,
        body: HTMLElement,
        footer: HTMLElement,
        article: Element
    };

    protected mounted(): void {
        this.as<Portal>().transitionDuration = PortalTransitionDuration.Regular + PortalTransitionDuration.XSlow;
    }

    private get popupBody(): any {
        return (this.$refs.article as Element).querySelector('.m-popup__body');
    }

    private get isAndroid(): boolean {
        return /(android)/i.test(window.navigator.userAgent);
    }

    private handleFooter(event): void {
        if (this.isAndroid) {
            if (event.type === 'focusin') {
                this.$refs.body.style.paddingBottom = '50%';
            } else if (event.type === 'focusout') {
                this.$refs.body.style.paddingBottom = '0';
            }
        }
    }

    private handlesFocus(): boolean {
        return this.focusManagement;
    }

    private doCustomPropOpen(value: boolean): boolean {
        return false;
    }

    private getBackdropMode(): BackdropMode {
        return BackdropMode.ScrollOnly;
    }

    private getPortalElement(): HTMLElement {
        return this.$refs.article as HTMLElement;
    }

    private get hasHeaderRightSlot(): boolean {
        return !!this.$slots['header-right'];
    }

    private get isSaveButtonDisabled(): boolean {
        return this.disableSaveButton;
    }

    private get hasFooterSlot(): boolean {
        return !!this.$slots.footer;
    }

    private save(e: MouseEvent): void {
        this.$emit('save', e);
    }

    private cancel(e: MouseEvent): void {
        this.$emit('cancel', e);
        this.close();
    }

    private close(): void {
        this.as<PortalMixin>().tryClose();
    }
}

const OverlayPlugin: PluginObject<any> = {
    install(v, options): void {
        v.component(OVERLAY_NAME, MOverlay);
    }
};

export default OverlayPlugin;