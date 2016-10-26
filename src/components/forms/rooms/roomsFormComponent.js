import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderTextField, renderSelectField, mapItemsSelect} from '../../../utils/reduxForm';
import {itemsRoomType} from '../../../utils/constants';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {loadRoom, saveRoom, updateRoom} from './roomsDucks';
import {browserHistory} from 'react-router';

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
        this.submitValues = this.submitValues.bind(this);
    }

    componentWillMount() {
        const {params} = this.props;
        if (_.has(params, 'roomId')) {
            this.props.loadRoom(_.get(params, 'roomId'));
        }
    }

    submitValues(values) {
        console.log(values);
        const {params} = this.props;
        if (_.has(params, 'roomId')) {
            this.props.updateRoom(_.set(values, '_id', params.roomId));
        } else {
            this.props.saveRoom(values);
        }
        browserHistory.push("/rooms/list");
    }

    render() {
        const {handleSubmit, fieldValues, pristine, submitting} = this.props;
        const capacityText = _.isEqual(_.get(fieldValues, 'type'), "computersRoom") ? "Número de computadores" : "Capacidad";
        return (
            <Row>
                <Col xs={8} xsOffset={2}>
                    <Paper style={styles.paper}>
                        <Row>
                            <Col xs={10} xsOffset={1}>
                                <h1 style={{textAlign: 'center', fontWeight: 400}}>Registro de salones</h1>
                                <form onSubmit={handleSubmit(this.submitValues)}>
                                    <Row>
                                        <Col xs={6}>
                                            <Field name="number" component={renderTextField} label="Número"/>
                                        </Col>
                                        <Col xs={6}>
                                            <Field name="capacity" type="number" component={renderTextField}
                                                   label={capacityText}/>
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
                                        <Col xs={6}>
                                            <Field
                                                name="observations"
                                                component={renderTextField}
                                                label="Observaciones"
                                                multiLine={true}
                                                rows={2}/>
                                        </Col>
                                    </Row>
                                    <RaisedButton disabled={pristine || submitting}
                                                  style={styles.button}
                                                  type="submit"
                                                  label="Guardar"
                                    />
                                </form>
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps({form, rooms}, ownProps) {
    const values = _.has(form.rooms, 'values') ? form.rooms.values : {};
    if (_.has(ownProps, 'params.roomId')) {
        return {
            initialValues: rooms.get('current')
        }
    } else {
        return {
            fieldValues: values
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loadRoom,
        saveRoom,
        updateRoom
    }, dispatch);
};


// Decorate the form component
RoomsForm = reduxForm({
    form: 'rooms', // a unique name for this form,
    enableReinitialize: true
})(RoomsForm);
RoomsForm = connect(mapStateToProps, mapDispatchToProps)(RoomsForm);

export default RoomsForm;