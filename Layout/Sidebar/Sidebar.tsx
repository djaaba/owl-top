import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from '../mvideo.svg'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(styles.sidebar)} { ...props }>
			<Logo className={styles.logo}/>
			<Menu/>
		</div>
	);
};