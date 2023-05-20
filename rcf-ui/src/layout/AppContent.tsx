import React from 'react';

import TabPanel, { TabPanelProps } from './TabPanel';

interface AppContentProps extends TabPanelProps {}

export default class AppContent extends React.Component<AppContentProps> {

    public render() {
        return (
            <TabPanel {...this.props} />
        );
    }    
}