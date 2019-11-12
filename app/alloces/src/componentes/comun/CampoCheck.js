/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el componente del campo check
 */

import React, { Component } from 'react';
import { Form, Row, Col } from "react-bootstrap";

class CampoCheck extends Component {
    constructor(props) {
        super(props);

        const { checked } = this.props;

        this.state = {
            isChecked: typeof checked == 'undefined' ? false : checked;
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {
        // importa los atributos del campo check
        const { input, label, type, meta, id, checked, onChange, izquierdaLabel, ...rest } = this.props;

        return (
            <>
                {
                    izquierdaLabel ?
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={3}>
                                {label}
                            </Form.Label>
                            <Form.Check
                                {...input} {...rest}
                                className="form-check-with-label"
                                inline
                                type={'checkbox'}
                                id={id}
                                onChange={e => { this.toggle(e); input.onChange(e) }}

                                checked={this.state.isChecked}
                            />
                        </Form.Group>
                        :
                        <Form.Check
                            {...input} {...rest}
                            className="form-check-with-label"
                            inline
                            type={'checkbox'}
                            id={id}
                            onChange={e => { this.toggle(e); input.onChange(e) }}

                            checked={this.state.isChecked}
                        />
                }
                {meta.touched && meta.error && <span className="error text-danger">{meta.error}</span>}
            </>
        );
    }
}

export default CampoCheck;