import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import { decOfNum, priceRu } from "../../helpers/helpers";
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';
import Link from "next/link";

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] =	 useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto'},
		hidden: { opacity: 0, height: 0}
	}

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<img className={styles.logo} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt="" />
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>{product.price? priceRu(product.price): "Нет цены"}</div>
				<div className={styles.credit}>{product.credit? priceRu(product.credit): "Нет цены"}</div>
				<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
				<div className={styles.tags}>{product.categories.map(c=><Tag color='ghost' key={c}>{c}</Tag>)} </div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount} {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a> </div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div>{product.disadvantages}</div>
					</div>}
				</div>
				<Divider className={styles.hr} />
				<div className={styles.actions}>
					<Button appearance='primary'>Узнать подробнее</Button>
					<Button 
						appearance='ghost'
						arrow={isReviewOpened? 'down' : 'right'} 
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<motion.div 
				animate={isReviewOpened? 'visible': 'hidden'} 
				variants={variants}
				initial='hidden'
			>
				<Card color='blue' className={styles.reviews} ref={reviewRef}>
					{product.reviews.map(r => (
						<div key={r._id}>
							<Review  review={r}/>
							<Divider/>
						</div>
					))}
					<ReviewForm productId={product._id}/>
				</Card>
			</motion.div>
		</div>
	);
}));