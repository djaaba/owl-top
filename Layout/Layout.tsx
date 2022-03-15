import styles from './Layout.module.css';
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { Component, FunctionComponent } from 'react';
import cn from 'classnames';

const Layout = ({children}: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper} >
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body} >
				{children}
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T){
		return (
			<Layout>
				<Component { ...props } />
			</Layout>
		);
	};
};