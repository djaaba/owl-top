import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from './logo.svg'
import Link from "next/link";
import { Search } from '../../components/Search/Search';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(styles.sidebar)} { ...props }>
			<Link href='/' passHref>
				<Logo className={cn(styles.logo, styles.logoLink)}/>
			</Link>
			<Search/>
			<Menu/>
		</div>
	);
};