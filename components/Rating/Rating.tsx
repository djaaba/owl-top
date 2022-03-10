import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg'
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
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
		<div {...props}>
			{ratingArray.map((r, i) => (<span key = {i}>{r}</span>))}
		</div>
	);
};