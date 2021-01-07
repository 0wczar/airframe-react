import React from 'react';
import cn from 'classnames';

const MIN_SIZE_RANGE = 1;
const MAX_SIZE_RANGE = 5;

const getSizeClass = (size?: number, stack?: boolean) => {
    if (typeof size !== 'undefined') {
        let s = `${size}x`;

        if (size < MIN_SIZE_RANGE) { s = '1x' }
        if (size > MAX_SIZE_RANGE) { s = '5x' }

        return `fa${stack ? '-stack' : ''}-${ s }`
    }

    return '';
}

export interface FaIconProps {
    glyph: string,
    size?: number,
    fW?: boolean,
    list?: boolean,
    border?: boolean,
    pull?: 'left' | 'right',
    animate?: 'spin' | 'pulse',
    rotate?: '90' | '180' | '270',
    flip?: 'horizontal' | 'vertical',
    stack?: boolean,
    inverse?: boolean,
    className?: string,
    style?: React.CSSProperties
}

export const FaIcon: React.FC<FaIconProps> = ({
    glyph,
    size,
    fW,
    list,
    border,
    pull,
    animate,
    rotate,
    flip,
    stack,
    inverse,
    ...otherProps
}) => {
    const className = cn(
        otherProps.className,
        'fa',
        `fa-${glyph}`,
        getSizeClass(size, stack),
        (pull ? `fa-${pull}` : ''),
        (animate ? `fa-${animate}` : ''),
        (rotate ? `fa-rotate-${rotate}` : ''),
        (flip ? `fa-flip-${flip}` : ''),
        {
            'fa-fw': fW,
            'fa-li': list,
            'fa-border': border,
            'fa-inverse': inverse
        }
    );

    return (
        <i { ...otherProps } className={ className } />
    );
}
