import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleLeftBar} from './appBarDucks';
import Drawer from 'material-ui/Drawer';
import ListItem from 'material-ui/List/ListItem';
import {Link} from 'react-router'

class LeftBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appState = this.props.app;
        return (
            <Drawer
                docked={false}
                width={250}
                open={appState.get('leftBarOpened')}
                onRequestChange={(open) => this.props.toggleLeftBar()}
            >
                <ListItem
                    onTouchTap={this.props.toggleLeftBar}
                    containerElement={<Link to='/teachers/add'/>}
                    linkButton={true}
                >
                    Profesores
                </ListItem>
                <ListItem
                    onTouchTap={this.props.toggleLeftBar}
                    containerElement={<Link to='/rooms/list'/>}
                    linkButton={true}
                >
                    Salones
                </ListItem>
                <ListItem
                    onTouchTap={this.props.toggleLeftBar}
                    containerElement={<Link to='/courses/add'/>}
                    linkButton={true}
                >
                    Cursos
                </ListItem>
            </Drawer>
        );
    }
}

const mapStateToProps = ({app}) => ({
    app
});


const mapActionsToProps = dispatch => {
    return bindActionCreators({
        toggleLeftBar
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LeftBarComponent);