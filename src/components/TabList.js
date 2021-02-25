import Tab from './Tab.js';

function TabList(props) {
    return (
        props.tabs.map((tab) =>
            <Tab tab={tab} active={props.active} ctab={props.ctab}></Tab>
        )
    );
}

export default TabList;