import Vue, { PluginObject } from 'vue';
import AccordionGroupPlugin from './accordion-group/accordion-group';
import AccordionPlugin from './accordion/accordion';
import ListItemPlugin from './list-item/list-item';
import ButtonPlugin from './button/button';
import ButtonGroupPlugin from './button-group/button-group';
import CarouselPlugin from './carousel/carousel';
import CheckboxPlugin from './checkbox/checkbox';
import DatepickerPlugin from './datepicker/datepicker';
import DialogPlugin from './dialog/dialog';
import DropdownPlugin from './dropdown/dropdown';
import DropdownItemPlugin from './dropdown-item/dropdown-item';
import DropdownGroupPlugin from './dropdown-group/dropdown-group';
import DynamicTemplatePlugin from './dynamic-template/dynamic-template';
import FlexTemplatePlugin from './flex-template/flex-template';
import I18nPlugin from './i18n/i18n';
import IconPlugin from './icon/icon';
import IconButtonPlugin from './icon-button/icon-button';
import InputStylePlugin from './input-style/input-style';
import LimitTextPlugin from './limit-text/limit-text';
import LinkPlugin from './link/link';
import MessagePlugin from './message/message';
import ModalPlugin from './modal/modal';
import NavBarPlugin from './navbar/navbar';
import NavBarItemPlugin from './navbar-item/navbar-item';
import menuPlugin from './menu/menu';
import menuItemPlugin from './menu-item/menu-item';
import PanelPlugin from './panel/panel';
import PhoneNumberPlugin from './phone-number/phone-number';
import PopperPlugin from './popper/popper';
import PopupPlugin from './popup/popup';
import RadioPlugin from './radio/radio';
import RadioGroupPlugin from './radio-group/radio-group';
import RadioStylePlugin from './radio-style/radio-style';
import ScrollTopPlugin from './scroll-top/scroll-top';
import SidebarPlugin from './sidebar/sidebar';
import SliderPlugin from './slider/slider';
import SpinnerPlugin from './spinner/spinner';
import Status from './status/status';
import StepPlugin from './step/step';
import SteppersPlugin from './steppers/steppers';
import SteppersItemPlugin from './steppers-item/steppers-item';
import SwitchPlugin from './switch/switch';
import TabPanelPlugin from './tab-panel/tab-panel';
import TabsPlugin from './tabs/tabs';
import TemplatePlugin from './template/template';
import TextareaPlugin from './textarea/textarea';
import TextfieldPlugin from './textfield/textfield';
import TimepickerPlugin from './timepicker/timepicker';
import TooltipPlugin from './tooltip/tooltip';
import UploadPlugin from './upload/upload';
import UploadInputPlugin from './upload-input/upload-input';
import UploadDragdropPlugin from './upload-dragdrop/upload-dragdrop';
import UploadFileslistPlugin from './upload-fileslist/upload-fileslist';
import ValidationMessagePlugin from './validation-message/validation-message';

const ComponentsPlugin: PluginObject<any> = {
    install(v, options) {
        Vue.use(AccordionGroupPlugin);
        Vue.use(AccordionPlugin);
        Vue.use(ButtonPlugin);
        Vue.use(ButtonGroupPlugin);
        Vue.use(CarouselPlugin);
        Vue.use(CheckboxPlugin);
        Vue.use(DatepickerPlugin);
        Vue.use(DialogPlugin);
        Vue.use(DropdownPlugin);
        Vue.use(DropdownItemPlugin);
        Vue.use(DropdownGroupPlugin);
        Vue.use(DynamicTemplatePlugin);
        Vue.use(FlexTemplatePlugin);
        Vue.use(I18nPlugin);
        Vue.use(IconPlugin);
        Vue.use(IconButtonPlugin);
        Vue.use(InputStylePlugin);
        Vue.use(LimitTextPlugin);
        Vue.use(LinkPlugin);
        Vue.use(ListItemPlugin);
        Vue.use(MessagePlugin);
        Vue.use(ModalPlugin);
        Vue.use(NavBarPlugin);
        Vue.use(NavBarItemPlugin);
        Vue.use(menuPlugin);
        Vue.use(menuItemPlugin);
        Vue.use(PanelPlugin);
        Vue.use(PhoneNumberPlugin);
        Vue.use(PopperPlugin);
        Vue.use(PopupPlugin);
        Vue.use(RadioPlugin);
        Vue.use(RadioGroupPlugin);
        Vue.use(RadioStylePlugin);
        Vue.use(ScrollTopPlugin);
        Vue.use(SidebarPlugin);
        Vue.use(SliderPlugin);
        Vue.use(SpinnerPlugin);
        Vue.use(Status);
        Vue.use(StepPlugin);
        Vue.use(SteppersPlugin);
        Vue.use(SteppersItemPlugin);
        Vue.use(SwitchPlugin);
        Vue.use(TabPanelPlugin);
        Vue.use(TabsPlugin);
        Vue.use(TemplatePlugin);
        Vue.use(TextareaPlugin);
        Vue.use(TextfieldPlugin);
        Vue.use(TimepickerPlugin);
        Vue.use(TooltipPlugin);
        Vue.use(UploadPlugin);
        Vue.use(UploadInputPlugin);
        Vue.use(UploadDragdropPlugin);
        Vue.use(UploadFileslistPlugin);
        Vue.use(ValidationMessagePlugin);
    }
};

export default ComponentsPlugin;
