import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useState } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('')

	const router = useRouter();

	const doSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Enter') doSearch();
	}

	return (
		<div className={cn(styles.search, className)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={() => handleKeyDown}
			/>
			<Button 
				appearance='primary'
				className={styles.button}
				onClick={doSearch}
			>
				<SearchIcon className={styles.icon}/>
			</Button>
		</div>
	);
};