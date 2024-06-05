
export const formatedShortString = (
    name: string,
    maxLength: number = 25
): string => {
    let formatedName = name || "";
    if(formatedName.length > maxLength){
        formatedName = `${name.slice(0, maxLength)}...`;
    };

    return formatedName;
};

export const replaceStringToOnlyNumber = (string: string) => {
    return string.replace(/\D/g, "");
};
