import { SortEnum, SortProps } from "./Sort.props";
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg'
import { useState, useEffect } from 'react';

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
	const [sortRating, setSortRating] = useState(true);
	const [sortPrice, setSortPrice] = useState(true);

	return (
		<div className={cn(styles.sort, className)} {...props}>
			<span
				onClick={() => {
					if (sortRating){
						console.log()
						setSort(SortEnum.Rating)
						setSortRating(false);
					}else{
						setSort(SortEnum.RatingAscending)
						setSortRating(true);
					}
				}}
				className={cn({
					[styles.active]: sort == SortEnum.Rating,
				})}
			>
				<SortIcon className={ sortRating ? cn(styles.sortIcon) : cn(styles.sortIcon, styles.rotate) }/> По&nbsp;рейтингу
			</span>
			<span
				onClick={() => {
					if (sortPrice){
						setSort(SortEnum.Price)
						setSortPrice(false);
					}else{
						setSort(SortEnum.PriceAscending)
						setSortPrice(true);
					}
				}}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={sortPrice ? styles.sortIcon : cn(styles.sortIcon, styles.rotate) }/> По&nbsp;цене
			</span>
		</div>
	);
};