import React, { useContext } from 'react';
import { Button, ButtonProps } from 'reactstrap';

import { AlertContext } from './alertContext';

export interface AlertButtonProps extends ButtonProps {
    decline?: boolean
}

export const AlertButton: React.FC<AlertButtonProps> = ({ approve, decline, ...btnProps }) => {
    const alertContext = useContext(AlertContext);

    return (
        <Button
            color={ alertContext.color }
            outline={ decline }
            { ...btnProps }
        />
    );
}
