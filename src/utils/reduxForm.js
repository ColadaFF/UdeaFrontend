import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';
import SelectField from 'material-ui/SelectField';
import _ from 'lodash';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Field} from 'redux-form';
import {Col, Row} from 'react-flexbox-grid';

export const renderTextField = ({input, label, value, meta: {touched, error}, ...custom}) => {
    const realInput = _.assign({}, input, {
        value: typeof input.value == 'object' ? '' : input.value
    });
    const text = <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...realInput}
        {...custom}
    />;
    console.log(text);
    return text
};

export const renderCheckbox = ({input, label}) => (
    <Checkbox label={label}
              checked={input.value ? true : false}
              onCheck={input.onChange}/>
);

export const renderRadioGroup = ({input, ...rest}) => (
    <RadioButtonGroup {...input} {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}/>
);

export const renderSelectField = ({input, label, meta: {touched, error}, children}) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}/>
);

export const mapItemsSelect = (items) => {
    return _.map(items, ({value, text}, index) => {
        return <MenuItem key={index} value={value} primaryText={text}/>;
    });
};

export const renderArrayTextField = (labelSingular, labelField, labelAdd, labelRemove) =>
    ({fields, meta: {touched, error}}) => (
        <Row>
            <Col xs>
                <FlatButton label={labelAdd} onClick={() => fields.push({})} primary={true}/>
                {touched && error && <span>{error}</span>}
            </Col>
            {fields.map((member, index) =>
                <Col xs={12} key={index}>
                    <Col xs={8}>
                        <h4>{labelSingular} #{index + 1}</h4>
                        <Field name={member} component={renderTextField} label={labelField}/>
                    </Col>
                    <Col xs={4}>
                        <FlatButton label={labelRemove} onClick={() => fields.remove(index)} secondary={true}/>
                    </Col>
                </Col>
            )}
        </Row>
    );
