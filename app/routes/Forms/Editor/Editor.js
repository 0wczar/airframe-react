import React from 'react';
import ReactQuill from 'react-quill';
import faker from 'faker/locale/en_US';

import {
    Container,
    Card
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

export class Editor extends React.Component {
    state = {
        text: `
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
        `
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent'
    ]

    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Editor"
                    className="mb-5 mt-4"
                />
                <p>
                    <strong>Quill</strong> is a modern rich text editor built for compatibility and extensibility.
                </p>
                <Card>
                    <ReactQuill
                        value={ this.state.text }
                        onChange={ this._handleChange }
                        modules={ this.modules }
                        formats={ this.formats }
                        style={{
                            minHeight: '480px'
                        }}
                    />
                </Card>
            </Container>
        );
    }

    _handleChange = (text) => {
        this.setState({ text })
    }
}
