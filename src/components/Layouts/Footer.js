import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import withWidth from "@material-ui/utils/withWidth"

export default ({ muscles, category, onSelect }) => {
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelect = (e, index) =>
        onSelect(index === 0 ? " " : muscles[index - 1])

    return <Paper >
        <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered //{width !== "xs"}
        // scrollable={width === "xs"}
        >
            <Tab label="All" />
            {muscles.map(muscle =>
                <Tab key={muscle} label={muscle} />
            )}
        </Tabs>
    </Paper >
}



