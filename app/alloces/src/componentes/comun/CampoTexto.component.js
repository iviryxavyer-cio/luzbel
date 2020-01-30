import React from 'react';
import { Form, Row } from 'react-bootstrap';

class CampoTexto extends React.Component {

    render() {
        // importa los atributos del campo de texto
        const { input, label, type, placeholder, horizontal, meta, value, ...rest } = this.props;
        if (label === undefined) {

        }

        return (
            <>

                {
                    horizontal ?
                        <Form.Group>
                            <Form.Control {...input} {...rest}  onChange={input.onChange} placeholder={placeholder} type={type} />
                            {
                                meta.touched && meta.error &&
                                <span className="error text-danger">{meta.error}</span>
                            }
                        </Form.Group>
                        :

                        <Form.Group as={Row}>
                            <Form.Control {...input} {...rest} onChange={input.onChange} className="campo" placeholder={label} type={type} />
                            {
                                meta.touched && meta.error &&
                                <span className="error text-danger">{meta.error}</span>
                            }
                        </Form.Group>
                }

            </>
        );
    }

}
export default CampoTexto;