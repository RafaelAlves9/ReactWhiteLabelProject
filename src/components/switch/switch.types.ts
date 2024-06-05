export type ErrorType = {
    control?: any;
    name?: string;
    errors?: any;
    change?: (...event: any[]) => void;
    value?: boolean;
    mandatory?: boolean;
    disabled?: boolean;
    label?: string;
    cyTestName?: string;
};
