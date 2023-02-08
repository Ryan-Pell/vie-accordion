import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';
import type { VNodeProps } from 'vue';

declare const _sfc_main: DefineComponent<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    style: PropType<any>;
    class: PropType<any>;
}, unknown, unknown, {}, {
    close(el: HTMLElement): void;
    open(el: HTMLElement): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    style: PropType<any>;
    class: PropType<any>;
}>>, {}>;
export default _sfc_main;

export { }
