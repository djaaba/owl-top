import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import StarIcon from './star.svg'
import cn from 'classnames';

// eslint-disable-next-line react/display-name
export const Rating = forwardRef(({isEditable = false, rating, error, setRating, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray =  ratingArray.map((r: JSX.Element, i: number) => {
			return (
				// eslint-disable-next-line react/jsx-key
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating
					})}
					onMouseEnter={() => changeDisplay(i+1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable){
			return;
		}
		constructRating(i);
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRating){
			return;
		}
		setRating(i);
	}

	return (
		<div className={styles.ratingWrapper} {...props} ref={ref}>
			{ratingArray.map((r, i) => (<span key = {i}>{r}</span>))}
			{ error && <span className={styles.errorMessage}>{error.message}</span> }
		</div>
	);
});