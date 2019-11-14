/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el componente de campo contraseña
 */
import React  from 'react';
import { Form, Row, Col } from 'react-bootstrap';

class CampoContrasena extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tipoCampo: this.props.type,
            botonVisible: true,
        }
        this.mostrarContrasena = this.mostrarContrasena.bind(this)
        this.ocultarContrasena = this.ocultarContrasena.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

    }

    mostrarContrasena(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            tipoCampo: 'input',
        });
    }

    ocultarContrasena(e) {
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            tipoCampo: 'password'
        });
    }

    handleChangePassword(e) {
        this.setState({
            botonVisible: e.currentTarget.value.length === 0 ? false : true,
        })
    }

    render() {
        const { input, label, type, meta, ...rest} = this.props;

        let claseBoton= [
            'btn_contrasenaMostrar',
            this.state.botonVisible ? 'btn_mostrar' : 'btn_Ocultar',
        ];
        claseBoton = claseBoton.join(' ');

        return (
            <Form.Group>
                <Form.Control {...input} {...rest}  className="campo" onChange={ e => {this.handleChangePassword(e); input.onChange() }} value={rest.value} placeholder={label} type={this.state.tipoCampo} />
                <span className={claseBoton} onMouseDown={this.mostrarContrasena} onMouseUp={this.ocultarContrasena}>{this.state.tipoCampo === 'input' ? 'Ocultar' : 'Mostrar'}</span>
                    {
                        meta.touched && meta.error &&
                        <span className="error text-danger">{meta.error}</span>
                    }

            </Form.Group>
        )
    }
}


export default CampoContrasena;