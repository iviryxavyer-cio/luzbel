/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el formulario de creacion 
 * y modificación de usuarios.
 */
import React, { Component } from 'react';
import { usersActions } from '../../../actions/usuarios.actions';
import { Field, reduxForm, getFormSyncErrors } from 'redux-forms';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { maxLength10 } from '../../../Utilidades/validaciones'

