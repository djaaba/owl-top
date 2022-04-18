import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import UpIcon from './arrow.svg';
import CloseIcon from './close.svg';
import MenuIcon from './menu.svg';

export const icons = {
	UpIcon,
	CloseIcon,
	MenuIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	icon: IconName;
	appearance: 'primary' | 'white';
}