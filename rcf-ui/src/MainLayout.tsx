import React, { ReactNode } from 'react';
import { Layout, Drawer, Row, Col, Switch, Divider, Button, Input } from 'antd'; 
import { MenuInfo } from 'rc-menu/lib/interface';
import { ClockCircleFilled, KeyOutlined, LogoutOutlined, SettingTwoTone } from '@ant-design/icons';
import { withTranslation, WithTranslation } from 'react-i18next';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import cx from 'classnames';

import AppMenu from './layout/AppMenu';
import AppHeader, { SearchOption } from './layout/AppHeaderContainer';
import AppContent from './layout/AppContent';
import MenuConfig from './layout/menuConfig';
import RecentItemsDrawer from './drawers/recentItemsDrawer'

// import ChangePasswordFormContainer from './changePassword/ChangePasswordFormContainer';

// import { Rest } from './utils/utils';

export interface TabInfo {
    title: string;
    closable?: boolean;
    component: ReactNode;
}

interface RecentItem {
    type: 'I' | 'H' | 'P';
    description: string;
    date: Date;
    id: number;
}

interface State {
    tabs: TabInfo[];
    activeTabIndex: number;
    recentDrawerVisible?: boolean;
    configDrawerVisible?: boolean;
    recentItems: RecentItem[];
    menuCollapsed: boolean;
    changePasswordVisible?: boolean;
    changePasswordFormKey?: number;
}

const LOCAL_STORAGE_RECENT_ITEMS_KEY = 'gpc-bo-recentItems';

class App extends React.Component<WithTranslation & RouteComponentProps, State> {

    public state: State = {tabs: [], 
        activeTabIndex: -1,
        menuCollapsed: true,
        recentItems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_RECENT_ITEMS_KEY) || '[]') as RecentItem[]};

    private t = this.props.t;

    public render() {

        return (
            <>
                <Layout style={{minHeight:'100vh'}}>
                    <Layout.Header className='header-app'>
                        <AppHeader onClickConfigOption={() => this.setState({configDrawerVisible: true})}
                            onSelectSearchOption={this.onSelectSearchOption} />
                    </Layout.Header>
                    <Layout>
                        <Layout.Sider style={{backgroundColor:'white'}} 
                            collapsible 
                            collapsed={this.state.menuCollapsed} 
                            onCollapse={this.toogleMenuCollapse}>
                            <AppMenu onMenuOptionSelect={this.onMenuOptionSelect}/>
                        </Layout.Sider>
                        <Layout.Content className='main-layout'>
                            <AppContent tabs={this.state.tabs} 
                                activeTabIndex={this.state.activeTabIndex} 
                                onTabsChange={this.onTabsChange} 
                                onActiveTabChange={this.onActiveTabChange}
                                onCloseTab={this.closeTab}/>
                        </Layout.Content>
                    </Layout>
                </Layout>
                <div className={cx('recent-items-container', {
                    'recent-items-container--hidden': this.state.recentDrawerVisible || this.state.configDrawerVisible})}>
                    <ClockCircleFilled onClick={() => this.setState({recentDrawerVisible: true})}/>
                </div>
                {this.renderRecentItemsDrawer()}
                {this.renderConfigDrawer()}

                {/* form change password */}
                {/*<ChangePasswordFormContainer*/}
                {/*    key={this.state.changePasswordFormKey}*/}
                {/*    visible={this.state.changePasswordVisible}*/}
                {/*    onClose={this.onCloseFormChangePassword}*/}
                {/*/>*/}
            </>);
    }

    private renderRecentItemsDrawer = () =>
        <RecentItemsDrawer items={this.state.recentItems}
            visible={this.state.recentDrawerVisible}
            onClose={() => this.setState({recentDrawerVisible: false})}
            onClearAll={this.clearAllRecentItems}
            onRemoveItem={this.removeRecentItem}/>

    private renderConfigDrawer = () =>
        <Drawer className='configuration-drawer'
            title={<span><SettingTwoTone twoToneColor='gray' /> {this.t('config:title')}</span>}
            placement='right'
            closable={false}
            onClose={() => this.setState({configDrawerVisible: false})}
            visible={this.state.configDrawerVisible}
            width='350px'>
                <Row gutter={[16, 16]} justify='space-between'><Col span={18}>{this.t('config:notifications')} </Col> <Col span={6} style={{textAlign: 'right'}}><Switch defaultChecked/></Col></Row>
                <Row gutter={[16, 16]}><Col span={18}>{this.t('config:renewalProcess')} </Col> <Col span={6} style={{textAlign: 'right'}}><Switch defaultChecked/></Col></Row>
                <Row gutter={[16, 16]}><Col span={18}>{this.t('config:clientNotificationSProcess')} </Col> <Col span={6} style={{textAlign: 'right'}}><Switch defaultChecked/></Col></Row>
                <Row gutter={[16, 16]} align='middle'><Col span={18}>{this.t('config:maxRecentItemsToKeep')}</Col><Col span={6} style={{textAlign: 'right'}}><Input defaultValue='25'/></Col></Row>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col>
                        <Button type='primary' size='large' icon={<KeyOutlined />} onClick={this.changePassword}> {this.t('config:changePassword')}</Button>
                    </Col>
                    <Col>
                        <Button type='primary' size='large' danger icon={<LogoutOutlined />} onClick={this.logout}> {this.t('config:logout')}</Button>
                    </Col>
                </Row>
        </Drawer>

    private removeRecentItem = (index: number) => {
        const recentItems = this.state.recentItems.slice(0);
        recentItems.splice(index, 1);
        localStorage.setItem(LOCAL_STORAGE_RECENT_ITEMS_KEY, JSON.stringify(recentItems));
        this.setState({recentItems});
    }

    private onSelectSearchOption = (value: string, option: SearchOption) => {
        const recentItems = this.state.recentItems ? this.state.recentItems.slice(0) : [];
        recentItems.unshift({
            date: new Date(),
            description: option.label,
            type: option.type,
            id: option.id,
        });
        localStorage.setItem(LOCAL_STORAGE_RECENT_ITEMS_KEY, JSON.stringify(recentItems));
        this.setState({recentItems});
    }

    private clearAllRecentItems = () => {
        localStorage.removeItem(LOCAL_STORAGE_RECENT_ITEMS_KEY);
        this.setState({recentItems: []});
    }

    private onMenuOptionSelect = (info: MenuInfo ) => {

        let tabCaption = MenuConfig.getConfigById(info.key.toString()).tabCaption;
        tabCaption = this.t(tabCaption);

        const component = MenuConfig.getComponentById(info.key.toString(), this.addTab);
        this.addTab(tabCaption, component)
    }

    private closeTab = (tabToCloseIndex: number) => {
        const newActive = this.state.activeTabIndex >= tabToCloseIndex ? this.state.activeTabIndex - 1: this.state.activeTabIndex;
        const newTabs = this.state.tabs.filter((tab, index) => index !== tabToCloseIndex);
        
        this.setState({activeTabIndex: newActive, tabs: newTabs});
    }

    private onTabsChange = (tabs: TabInfo[]) => {
        this.setState({tabs});
    }

    private onActiveTabChange = (activeTabIndex: number) => {
        this.setState({activeTabIndex});
    }

    private addTab = (tabCaption: string, component: ReactNode) => {
        const existingTabIndex = this.state.tabs.findIndex(t => t.title === tabCaption);
        if (existingTabIndex !== -1) {
            this.setState({activeTabIndex: existingTabIndex});
        } else {
            let tabs = this.state.tabs.slice(0);
            tabs.push({title: tabCaption, component: component, closable: true});
            const activeTabIndex = tabs.length - 1;
            this.setState({tabs: tabs, activeTabIndex});
        }
    }

    private logout = () => {
        // Rest<{type: string},{}>().operation({type: 'Logout'})
        // .then(() => {
        //     this.props.history.push('/');
        // });
    }

    private toogleMenuCollapse = () => {
        this.setState({menuCollapsed: !this.state.menuCollapsed});
    }

    private changePassword = () => {
        this.setState({changePasswordVisible: true, changePasswordFormKey: new Date().getTime()});
    }

    private onCloseFormChangePassword = () => {
        this.setState({ changePasswordVisible: false});
    }
}

export default withTranslation(['menu', 'config', 'recentItems'])(withRouter(App));
