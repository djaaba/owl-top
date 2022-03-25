import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
import cn from 'classnames';

export const Divider = ({size = 'm', color = 'ghost', href, children, className, ...props}: TagProps): JSX.Element => {
	return (
		<hr className={cn(className, styles.hr)} {...props} />
	);
};