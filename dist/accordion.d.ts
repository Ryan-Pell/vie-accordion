import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: DefineComponent<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    style: PropType<CSSProperties>;
    class: StringConstructor;
}, unknown, unknown, {}, {
    close(el: Element): void;
    open(el: Element): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    style: PropType<CSSProperties>;
    class: StringConstructor;
}>>, {}, {}>;
export default _default;

export { }
