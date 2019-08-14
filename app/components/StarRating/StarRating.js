import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './StarRating.scss';

export const StarRating = (props) => {
    const {
        className,
        max: maxStars,
        at: currentStars,
        starColor,
        onSelect,
        ...otherProps
    } = props;

    const starRatingClass = classNames(classes.starRating, className);

    const isInterctive = !!onSelect;
    const StartElement = isInterctive ? 'a' : 'i';

    return (
        <div className={ starRatingClass } {...otherProps}>
            {
                (() => {
                    const stars = [];

                    for(let i = 1; i <= maxStars; i++) {
                        const starProps = {
                            key: i,
                            className: classNames('fa fa-fw', {
                                'fa-star': i <= currentStars,
                                'fa-star-o': i > currentStars,
                                [`text-${starColor}`]: i <= currentStars
                            }),
                            onClick: () => isInterctive && onSelect(i)
                        };

                        if (isInterctive) {
                            starProps['href'] = 'javascript:;';
                        }

                        stars.push(<StartElement { ...starProps } key={ i }></StartElement>);
                    }

                    return stars;
                })()
            }
        </div>
    );
};

StarRating.propTypes = {
    className: PropTypes.string,
    max: PropTypes.number,
    at: PropTypes.number,
    starColor: PropTypes.string,
    onSelect: PropTypes.func
};

StarRating.defaultProps = {
    max: 5,
    at: 0,
    starColor: 'warning',
};
