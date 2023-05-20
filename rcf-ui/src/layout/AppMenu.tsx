import React from 'react';

import { Menu } from 'antd'; 
import { MenuInfo } from 'rc-menu/lib/interface';
import { useTranslation } from 'react-i18next';
import { ToolOutlined, MedicineBoxOutlined, BankOutlined, UnorderedListOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuConfig from './menuConfig';

const AppMenu = (props: {onMenuOptionSelect: (param: MenuInfo) => void}) => {

    const { t } = useTranslation(['menu']);

    const productWorkshopOption = MenuConfig.getConfigById('w');
    const productWorkshopProductsOption = MenuConfig.getConfigById('w1');
    const productWorkshopProvidersOption = MenuConfig.getConfigById('w2');
    const productWorkshopProvidersListOption = MenuConfig.getConfigById('w2.1');
    const productWorkshopProvidersModalityOption = MenuConfig.getConfigById('w2.2');
    const productWorkshopProductFeatureOption = MenuConfig.getConfigById('w2.3');
    const productWorkshopMedicalProvidersOption = MenuConfig.getConfigById('w3');
    const productWorkshopCollectivesOption = MenuConfig.getConfigById('w4');
    const policyWorkshopOption = MenuConfig.getConfigById('p');
    const policytWorkshopPolicyOption = MenuConfig.getConfigById('p1');
    const policytWorkshopRequestOption = MenuConfig.getConfigById('p2');
    const policytWorkshopAuthorizationsOption = MenuConfig.getConfigById('p3');
    const policytWorkshopPortfoliosOption = MenuConfig.getConfigById('p4');
    const policytWorkshopExclusionsOption = MenuConfig.getConfigById('p5');
    const settlementWorkshopOption = MenuConfig.getConfigById('s');
    const settlementtWorkshopSettlementsOption = MenuConfig.getConfigById('s1');
    const ruleSetWorkShopOption = MenuConfig.getConfigById('rs');
    const ruleSetListWorkShopOption = MenuConfig.getConfigById('rs1');
    const rulePolicyListShopOption = MenuConfig.getConfigById('rs2');
    
    return (

        <>
            <Menu onClick={props.onMenuOptionSelect} mode='inline'>
                <SubMenu key={productWorkshopOption.id} title={t(productWorkshopOption.menuCaption)} icon={<ToolOutlined />}>
                    <Menu.Item key={productWorkshopProductsOption.id}><span>{t(productWorkshopProductsOption.menuCaption)}</span></Menu.Item>
                    <SubMenu key={productWorkshopProvidersOption.id} title={t(productWorkshopProvidersOption.menuCaption)}>
                        <Menu.Item key={productWorkshopProvidersListOption.id}><span>{t(productWorkshopProvidersListOption.menuCaption)}</span></Menu.Item>
                        <Menu.Item key={productWorkshopProvidersModalityOption.id}><span>{t(productWorkshopProvidersModalityOption.menuCaption)}</span></Menu.Item>
                        <Menu.Item key={productWorkshopProductFeatureOption.id}><span>{t(productWorkshopProductFeatureOption.menuCaption)}</span></Menu.Item>
                    </SubMenu>
                    <Menu.Item key={productWorkshopMedicalProvidersOption.id}><span>{t(productWorkshopMedicalProvidersOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={productWorkshopCollectivesOption.id}><span>{t(productWorkshopCollectivesOption.menuCaption)}</span></Menu.Item>
                </SubMenu>
                <SubMenu key={policyWorkshopOption.id} title={t(policyWorkshopOption.menuCaption)} icon={<MedicineBoxOutlined />}>
                    <Menu.Item key={policytWorkshopPolicyOption.id}><span>{t(policytWorkshopPolicyOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={policytWorkshopRequestOption.id}><span>{t(policytWorkshopRequestOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={policytWorkshopAuthorizationsOption.id}><span>{t(policytWorkshopAuthorizationsOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={policytWorkshopPortfoliosOption.id}><span>{t(policytWorkshopPortfoliosOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={policytWorkshopExclusionsOption.id}><span>{t(policytWorkshopExclusionsOption.menuCaption)}</span></Menu.Item>
                </SubMenu>
                <SubMenu key={settlementWorkshopOption.id} title={t(settlementWorkshopOption.menuCaption)} icon={<BankOutlined />}>
                    <Menu.Item key={settlementtWorkshopSettlementsOption.id}><span>{t(settlementtWorkshopSettlementsOption.menuCaption)}</span></Menu.Item>
                </SubMenu>
                <SubMenu key={ruleSetWorkShopOption.id} title={t(ruleSetWorkShopOption.menuCaption)} icon={<UnorderedListOutlined />}>
                    <Menu.Item key={ruleSetListWorkShopOption.id}><span>{t(ruleSetListWorkShopOption.menuCaption)}</span></Menu.Item>
                    <Menu.Item key={rulePolicyListShopOption.id}><span>{t(rulePolicyListShopOption.menuCaption)}</span></Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );
}

export default AppMenu;