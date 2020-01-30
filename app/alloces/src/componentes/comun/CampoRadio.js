/**
 * @author Luis Manuel Torres Treviño
 * @date 16/11/2019
 * @description Este archivo contiene el componente de campo radio button
 */

import React  from 'react';
import { Form, Row } from 'react-bootstrap';
//import { getFormSyncErrors } from 'redux-form';
//import { connect } from 'react-redux';

class CampoRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //const { checado } = this.props
    }

    render() {
        const { id, input, label, type, meta, valor, ...rest } = this.props;

        return (
            <Form.Group as={Row}>
                <input
                    {...input}
                    {...rest}
                    value={valor}
                    type="radio"
                    checked={input.value === valor}
                    />
                <Form.Label for={id} column sm={3}>
                    {label}
                </Form.Label>
                {
                    meta.touched && meta.error &&
                    <span className="error text-danger">{meta.error}</span>
                }
            </Form.Group>
        );
    }
}

export default CampoRadio;