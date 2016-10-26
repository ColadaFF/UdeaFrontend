import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listRooms} from './roomsDucks';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Col, Row} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import {itemsRoomType} from '../../../utils/constants';

const renderRows = ({_id, number, capacity, type, observations}, key) => {
    const typeLabel = _.find(itemsRoomType, ['value', type]);
    return (
        <TableRow key={key} selectable={false}>
            <TableRowColumn>{number}</TableRowColumn>
            <TableRowColumn>{capacity}</TableRowColumn>
            <TableRowColumn>{typeLabel.text}</TableRowColumn>
            <TableRowColumn>{observations}</TableRowColumn>
            <TableRowColumn>
                <div>
                    <Link to={`/rooms/edit/${_id}`}>
                        <IconButton
                            tooltip={"Editar"}
                            style={{margin: "5px auto"}}
                            tooltipPosition="bottom-left"
                            children={<EditIcon />}
                        />
                    </Link>

                    <IconButton
                        tooltip={"Eliminar"}
                        style={{margin: "5px auto"}}
                        tooltipPosition="bottom-left"
                        children={<DeleteIcon />}
                    />
                </div>
            </TableRowColumn>
        </TableRow>
    );
};

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

class RoomsTable extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listRooms();
    }

    render() {
        const {rooms} = this.props;
        console.log(rooms);
        return (
            <div>
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <Paper style={styles.paper}>
                            <AppBar
                                title="Listado de salones"
                                iconElementLeft={<IconButton><AddIcon/></IconButton>}
                                onLeftIconButtonTouchTap={e => {
                                    browserHistory.push("/rooms/add");
                                }}
                            />
                            <Row>
                                <Col xs={10} xsOffset={1}>
                                    <Table selectable={false}>
                                        <TableHeader adjustForCheckbox={false}
                                                     displaySelectAll={false}
                                                     enableSelectAll={false}>
                                            <TableRow>
                                                <TableHeaderColumn>Número</TableHeaderColumn>
                                                <TableHeaderColumn>Capacidad</TableHeaderColumn>
                                                <TableHeaderColumn>Tipo</TableHeaderColumn>
                                                <TableHeaderColumn>Observaciones</TableHeaderColumn>
                                                <TableHeaderColumn>Operaciones</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            {rooms.map(renderRows)}
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }

}

const mapStateToProps = ({rooms}) => {
    return {
        rooms: rooms.get('all')
    };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        listRooms
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(RoomsTable);


