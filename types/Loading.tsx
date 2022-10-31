
type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
export interface ILoadingProps {
    color?: string;
    type?: LoadingType;
}