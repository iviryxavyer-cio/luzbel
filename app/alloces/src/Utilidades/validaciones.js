/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene las validaciones que se necesitan
 * en los formularios.
 */

export const required = value =>  value ? undefined : 'El campo es obligatorio';

export const maxLength = max => value =>
    value && value.length > max ? `Debe contener maximo ${max} caracteres` : undefined


export const maxLength10 = maxLength(10)
