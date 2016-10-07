import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderTextField, renderSelectField, mapItemsSelect} from '../../../utils/reduxForm';
import {itemsRoomType} from '../../../utils/constants';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

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
class RoomsForm extends Component {
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
                                <h1 style={{textAlign: 'center', fontWeight: 400}}>Registro de salones</h1>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={6}>
                                            <Field name="number" component={renderTextField} label="Número"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="capacity" type="number" component={renderTextField}
                                                   label="Capacidad"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field
                                                name="type"
                                                component={renderSelectField}
                                                label="Tipo de salón"
                                            >
                                                {mapItemsSelect(itemsRoomType)}
                                            </Field>
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
RoomsForm = reduxForm({
    form: 'rooms' // a unique name for this form
})(RoomsForm);

export default RoomsForm;