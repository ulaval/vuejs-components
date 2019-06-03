import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import ModulPlugin from '../../utils/modul/modul';
import { ModulVue } from '../../utils/vue/vue';
import { EXPANDABLE_LAYOUT_NAME } from '../component-names';
import WithRender from './expandable-layout.html?style=./expandable-layout.scss';

export enum MExpandableLayoutPanelPosition {
    Left = 'left',
    Right = 'right'
}
@WithRender
@Component
export class MExpandableLayout extends ModulVue {
    @Prop({
        default: false
    })
    public open: boolean;

    @Prop({
        default: MExpandableLayoutPanelPosition.Left,
        validator: value =>
            value === MExpandableLayoutPanelPosition.Left ||
            value === MExpandableLayoutPanelPosition.Right
    })
    public panelPosition: MExpandableLayoutPanelPosition;

    @Prop({ default: '320px' })
    panelWidth: string;

    $refs: {
        panelContent: HTMLDivElement
    };

    mounted(): void {
        this.$modul.event.$on('scroll', this.setPanelPosition);
        this.$modul.event.$on('resize', this.setPanelPosition);
    }

    beforeDestroy(): void {
        this.$modul.event.$off('scroll', this.setPanelPosition);
        this.$modul.event.$off('resize', this.setPanelPosition);
    }

    setPanelPosition(): void {
        let { top, bottom } = this.$el.getBoundingClientRect();
        if (top < 0) {
            this.$refs.panelContent.style.top = -top + 'px';
        } else {
            this.$refs.panelContent.style.top = '';
        }
        if (bottom > document.documentElement.clientHeight) {
            this.$refs.panelContent.style.bottom = (bottom - document.documentElement.clientHeight) + 'px';
        } else {
            this.$refs.panelContent.style.bottom = '';
        }
    }

    get panelPositionClass(): string {
        return `m--has-${this.panelPosition}-panel`;
    }

    get panelStyle(): { [prop: string]: string } {
        return {
            width: this.open ? this.panelWidth : '0'
        };
    }

    get panelContentStyle(): { width: string } {
        return {
            width: this.panelWidth
        };
    }
}

const ExpandableLayoutPlugin: PluginObject<any> = {
    install(v, options): void {
        v.use(ModulPlugin);
        v.component(EXPANDABLE_LAYOUT_NAME, MExpandableLayout);
    }
};

export default ExpandableLayoutPlugin;
