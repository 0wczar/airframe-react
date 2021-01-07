import React, { useContext } from 'react';
import { Media } from 'reactstrap';

import { AlertContext } from './alertContext';
import { FaIcon, FaStack, FaIconProps } from './../faIcon';

const colorGlyphMap = new Map<string, string>([
    ['primary', 'play'],
    ['warning', 'exclamation'],
    ['danger', 'close'],
    ['success', 'check'],
    ['info', 'info'],
    ['dark', 'question']
]);

export interface AlertIconProps extends FaIconProps {
    large?: boolean,
    background?: boolean
}

export const AlertIcon: React.FC<AlertIconProps> = ({ large, background, ...iconProps}) => {
    const { inline, color } = useContext(AlertContext);

    const iconElement = (
        <FaIcon
            glyph={ colorGlyphMap.get(color) ?? 'info' }
            className="alert__icon"
            size={ large && !background ? 2 : 1 }
        />
    )

    if (!inline) {
        return (
            <Media left className="mr-2">
                {
                    (large && background) ? (
                        <FaStack>
                            <FaIcon glyph="circle" className="alert__bg-icon" />
                            { iconElement }
                        </FaStack>
                    ) : iconElement
                }
            </Media>
        )
    }

    return iconElement;
}
