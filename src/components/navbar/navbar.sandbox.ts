import Vue, { PluginObject } from 'vue';
import { Component } from 'vue-property-decorator';

import { NAVBAR_NAME } from '../component-names';
import WithRender from './navbar.sandbox.html';

@WithRender
@Component
export class MNavbarSandbox extends Vue {
    private selected: string = 'TVA4';
    private selectedItem: string = 'item4';
}

const NavbarSandboxPlugin: PluginObject<any> = {
    install(v, options): void {
        v.component(`${NAVBAR_NAME}-sandbox`, MNavbarSandbox);
    }
};

export default NavbarSandboxPlugin;
