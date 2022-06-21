// export type IPanel = {
//     type: string,
//     props: {
//         width: number,
//         height: number,
//         visible: boolean,
//     },
// };

// export type ILabel = {
//     type: string,
//     props: {
//         caption: string,
//         visible: boolean,
//     },
// };

// export type IButton = {
//     type: string,
//     props: {
//         caption: string,
//         width: number,
//         height: number,
//         visible: boolean,
//     },
// };

export type IElement = {
    type: string,
    props: {
        caption?: string,
        width?: number,
        height?: number,
        visible: boolean,
    },
    content?: IElement[],
};
