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
    class: {
        type: (StringConstructor | {
            (arrayLength: number): String[];
            (...items: String[]): String[];
            new (arrayLength: number): String[];
            new (...items: String[]): String[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        required: false;
    };
}, unknown, unknown, {}, {
    close(el: Element): void;
    open(el: Element): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    style: PropType<CSSProperties>;
    class: {
        type: (StringConstructor | {
            (arrayLength: number): String[];
            (...items: String[]): String[];
            new (arrayLength: number): String[];
            new (...items: String[]): String[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        required: false;
    };
}>>, {}, {}>;
export default _default;

export { }
