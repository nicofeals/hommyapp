import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export interface IconProps {
  active?: boolean;
}

const numberOfIcons = 5;
const horizontalPadding = 48;
export const DURATION = 450;
export const PADDING = 16;
export const SEGMENT = width / numberOfIcons;
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  primary: "#a798b8",
  border: "#616164"
};
