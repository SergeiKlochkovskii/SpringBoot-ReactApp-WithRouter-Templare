import React from 'react';
import { Tabs } from 'antd';

import { CloseCircleTwoTone } from '@ant-design/icons';
import { TabInfo } from '../MainLayout';

const TabPane = Tabs.TabPane;

export interface TabPanelProps {
    tabs: TabInfo[],
    activeTabIndex: number;
    onTabsChange: (tabs: TabInfo[]) => void,
    onActiveTabChange: (activeTabIndex: number) => void,
    onCloseTab: (tabIndex: number) => void
}

const TabPanel = (props: TabPanelProps) => {

    const tabs = props.tabs.map((tab, index) =>
        <TabPane tab = { <TabTitle title={tab.title} closable={tab.closable} 
                onCloseClick={() => props.onCloseTab(index)} /> }
            key = { String(index) } 
            closable = { true } >
            { tab.component }
        </TabPane>
    );

    const onTabClick = (tabKey: string) => props.onActiveTabChange(Number(tabKey));

    return (
        <Tabs activeKey = { String(props.activeTabIndex) }  onTabClick = { onTabClick } className='tabpanel-height-100'>
            { tabs }
        </Tabs>
    )
}

interface TabTitleProps {
    title: string, 
    closable?: boolean, 
    onCloseClick: () => void
}

const TabTitle = (props: TabTitleProps) =>
    <div className = 'tab-title' > 
        { props.title }
        { props.closable ? <CloseCircleTwoTone onClick = { e => { e.preventDefault(); e.stopPropagation(); props.onCloseClick(); } } /> : null }
    </div>

export default TabPanel;