import React from 'react';

import {
    Container
} from './../../../components';
import {
    ExampleProvider
} from './components/ExampleProvider';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import image1 from './images/image-1.jpg'
import image2 from './images/image-2.jpg';


export const CropImage = () => (
    <Container>
        <HeaderMain 
            title="Crop Images"
            className="mb-5 mt-4"
        />
        <div>
            <HeaderDemo 
                no={1} 
                title="Default" 
                subTitle="Default configuration of the crop component."
            />
            <ExampleProvider
                src={ image1 }
            />
        </div>
        <div className="mt-4">
            <HeaderDemo 
                no={2} 
                className="mt-5" 
                title="Limit Crop Size"
                subTitle={(
                    <React.Fragment>
                        You can limit the crop size by providing crop 
                        percentage using <code>minWidth</code>, <code>maxWidth</code>, 
                        <code>minHeight</code> and <code>minHeight</code> props.
                    </React.Fragment>
                )}
            />
            <ExampleProvider
                src={ image2 }
                cropProps={{
                    minWidth: 30,
                    maxWidth: 60,
                    minHeight: 30,
                    maxHeight: 60
                }}
                initialPosition={{
                    x: 20,
                    width: 60,
                    y: 20,
                    height: 60
                }}
            />
        </div>
    </Container>
);
