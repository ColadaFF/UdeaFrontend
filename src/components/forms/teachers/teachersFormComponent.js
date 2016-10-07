import React, {Component} from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import {renderTextField, renderSelectField, mapItemsSelect, renderArrayTextField} from '../../../utils/reduxForm';
import {itemsIdType} from '../../../utils/constants';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const arrayFieldNumbers = renderArrayTextField("Número", "Número", "Agregar número telefónico", "Eliminar");
const styles = {
    button: {
        margin: 20,
        float: 'right'
    },
    paper: {
        marginTop: 20,
        marginBottom: 20
    }
};
class TeachersForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Row>
                <Col xs={8} xsOffset={2}>
                    <Paper style={styles.paper}>
                        <Row>
                            <Col xs={10} xsOffset={1}>
                                <h1 style={{textAlign: 'center', fontWeight: 400}}>Registro de profesores</h1>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={6}>
                                            <Field
                                                name="idType"
                                                component={renderSelectField}
                                                label="Tipo de identificación"
                                            >
                                                {mapItemsSelect(itemsIdType)}
                                            </Field>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="id" component={renderTextField} label="Identificación"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="name" component={renderTextField} label="Nombres"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="lastName" component={renderTextField} label="Apellidos"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="linkCv" component={renderTextField} label="Url Hoja de vida"/>
                                        </Col >
                                        <Col xs={6}>
                                            <Field name="email" component={renderTextField} label="Correo electrónico"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="address" component={renderTextField} label="Dirección"/>
                                        </Col>
                                        <Col xs={6}>
                                            <FieldArray name="numbers" component={arrayFieldNumbers}/>
                                        </Col>
                                    </Row>
                                    <RaisedButton style={styles.button} type="submit" label="Guardar"/>
                                </form>
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

// Decorate the form component
TeachersForm = reduxForm({
    form: 'teachers' // a unique name for this form
})(TeachersForm);

export default TeachersForm;