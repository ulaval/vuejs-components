/* tslint:disable:no-console */
import 'intersection-observer';
import { DirectiveOptions, PluginObject, VNode, VNodeDirective } from 'vue';
import { SCROLL_SPY_NAME } from '../directive-names';

let myScrollSpy: ScrollSpy;

export enum MScrollSpyClassNames {
    Current = 'm--is-current'
}

class ScrollSpy {

    private sectionsMap: Map<string, boolean> = new Map<string, boolean>();
    private elementsMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();
    private observer: IntersectionObserver;

    constructor(private element: HTMLElement, private id: string) { }

    public createMapObserver(): void {
        this.elementsMap.set(this.id, this.element);
        const section: HTMLElement | null = document.getElementById(this.id);
        this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.sectionsMap.set(entry.target.id, entry.isIntersecting);
                } else {
                    this.sectionsMap.set(entry.target.id, entry.isIntersecting);
                }
            });

            this.searchFirstCurrent();
        });
        if (section) {
            this.observer.observe(section);
            this.sectionsMap.set(section.id, false);
        }
    }

    public killMapObserver(): void {
        this.observer.disconnect();
    }

    private searchFirstCurrent(): void {
        let elementFound: Boolean = false;
        this.sectionsMap.forEach((value: boolean, key: string) => {
            const myCurentHTMLElement: HTMLElement | undefined = this.elementsMap.get(key);
            if (myCurentHTMLElement) {
                myCurentHTMLElement.classList.remove(MScrollSpyClassNames.Current);

                if (value && !elementFound) {
                    myCurentHTMLElement.classList.add(MScrollSpyClassNames.Current);
                    elementFound = true;
                }
            }
        });
    }
}

const observeDirective: DirectiveOptions = {
    inserted(element: HTMLElement, binding: VNodeDirective, _node: VNode): void {
        myScrollSpy = new ScrollSpy(element, binding.value);
        myScrollSpy.createMapObserver();
    },
    update(element: HTMLElement, binding: VNodeDirective, node: VNode): void {
        myScrollSpy = new ScrollSpy(element, binding.value);
        myScrollSpy.createMapObserver();
    },
    unbind(_element: HTMLElement): void {
        myScrollSpy.killMapObserver();
    }
};

const ScrollSpyPlugin: PluginObject<any> = {
    install(v, _options): void {
        v.directive(SCROLL_SPY_NAME, observeDirective);
    }
};

export default ScrollSpyPlugin;
