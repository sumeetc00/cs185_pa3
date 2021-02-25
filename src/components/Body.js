import Text from './Text.js';
import Images from './Images.js';
import Videos from './Videos.js';
import Table from './Table.js';
import Email from './Email.js';

import { Component } from 'react';

class Body extends Component {
    render() {
        var displayContent = () => {
            if (this.props.active == 1) {
                return <Text/>
            } else if (this.props.active == 2) {
                return <Images/>
            } else if (this.props.active == 3) {
                return <Videos/>
            } else if (this.props.active == 4) {
                return <Table/>
            } else if (this.props.active == 5) {
                return <Email/>
            }
        }

        return (displayContent());
    }
}

export default Body;