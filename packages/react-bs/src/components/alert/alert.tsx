import React from 'react';
import {
    Alert as BSAlert,
    AlertProps as BSAlertProps
} from 'reactstrap';
import cn from 'classnames';

import { AlertContext } from './alertContext';

export interface AlertProps extends BSAlertProps {
    inline?: boolean;
}

export const Alert: React.FC<AlertProps> = ({ inline, ...alertProps }) => {
    const className = cn(alertProps.className, {
        'alert--inline': inline
    });

    return (
        <AlertContext.Provider
            value={{
                color: alertProps.color ?? 'primary',
                inline: inline ?? false
            }}
        >
            <BSAlert { ...alertProps } className={ className } />
        </AlertContext.Provider>
    );
}
