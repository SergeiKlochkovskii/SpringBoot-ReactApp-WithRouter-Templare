import React, { ReactNode } from 'react';
import NotFound from '../NotFound';

// import CollectiveList from '../collectives/CollectiveListContainer';
// import ProductList from '../products/ProductListContainer';
// import ProviderList from '../providers/ProviderListContainer';
// import PolicyList from '../policies/PolicyListContainer';
// import RequestListContainer from '../requests/RequestListContainer';
// import AppointmentList from '../appointments/AppointmentListContainer';
// import MedicalProviderList from '../providers/medicalProvider/MedicalProviderListContainer';
// import SettlementProcessList from '../settlements/SettlementProcessListContainer';
// import ServicePortfolioList from '../servicePortfolios/ServicePortfolioListContainer';
// import ExclusionsList from '../exclusions/exclusionsListContainer';
// import ModalityList from '../modalities/modalityListContainer';
// import ProductFeaturesList from '../productFeatures/productFeaturesListContainer';
// import RuleSetListContainer from '../rules/RuleSetListContainer';
// import PolicyListContainer from '../rules/PolicyListContainer';

export interface MenuOptionConfig {
    id: string;
    menuCaption: string;
    tabCaption: string;
}

export default {

    menuConfig: [
        {id: 'w', menuCaption: 'menu:productWorkshop', tabCaption: 'menu:productWorkshop'},
        {id: 'w1', menuCaption: 'menu:productProducts', tabCaption: 'menu:productProducts'},
        {id: 'w2', menuCaption: 'menu:productInsuranceProviders', tabCaption: 'menu:productInsuranceProviders'},
        {id: 'w2.1', menuCaption: 'menu:productInsuranceProvidersList', tabCaption: 'menu:productInsuranceProviders'},
        {id: 'w2.2', menuCaption: 'menu:productModalitiesList', tabCaption: 'menu:productModalitiesList'},
        {id: 'w2.3', menuCaption: 'menu:productFeaturesList', tabCaption: 'menu:productFeaturesList'},
        {id: 'w3', menuCaption: 'menu:productMedicalProviders', tabCaption: 'menu:productMedicalProviders'},
        {id: 'w4', menuCaption: 'menu:productCollectives', tabCaption: 'menu:productCollectives'},
        {id: 'p', menuCaption: 'menu:policyWorkshop', tabCaption: 'menu:policyWorkshop'},
        {id: 'p1', menuCaption: 'menu:policyPolicies', tabCaption: 'menu:policyPolicies'},
        {id: 'p2', menuCaption: 'menu:policyRequests', tabCaption: 'menu:policyRequests'},
        {id: 'p3', menuCaption: 'menu:policyAuthorizations', tabCaption: 'menu:policyAuthorizations'},
        {id: 'p4', menuCaption: 'menu:policyPortfolios', tabCaption: 'menu:policyPortfolios'},
        {id: 'p5', menuCaption: 'menu:exclusions', tabCaption: 'menu:exclusions'},
        {id: 's', menuCaption: 'menu:settlementWorkshop', tabCaption: 'menu:settlementWorkshop'},
        {id: 's1', menuCaption: 'menu:settlementSettlements', tabCaption: 'menu:settlementSettlements'},
        {id:'rs',menuCaption:'menu:rulesWorkshop', tabCaption:'menu:rulesWorkshop'},
        {id:'rs1',menuCaption:'menu:ruleSetList', tabCaption:'menu:ruleSetList'},
        {id:'rs2',menuCaption:'menu:policiesList', tabCaption:'menu:policiesList'}
    ] as MenuOptionConfig[],

    getConfigById(id: string) {
        const menuConfig = this.menuConfig.find(c => c.id === id);
        if (menuConfig) {
            return menuConfig;
        } else {
            return {id: id, menuCaption: 'Not implemented yet ' + id, tabCaption: 'Not implemented yet ' + id};
        }
    },

    getComponentById(id: string, addTab?: (tabCaption: string, component: ReactNode) => void) {
        switch(id) {
            case 'w1': 
                return <NotFound />;
            // case 'w2.1':
            //     return <ProviderList />;
            // case 'w2.2':
            //     return <ModalityList />;
            // case 'w2.3':
            //     return <ProductFeaturesList />;
            // case 'w3':
            //     return <MedicalProviderList />;
            // case 'w4':
            //     return <CollectiveList />;
            // case 'p1':
            //     return <PolicyList />;
            // case 'p2':
            //     return <RequestListContainer addTab={addTab}/>;
            // case 'p3':
            //     return <AppointmentList addTab={addTab}/>
            // case 'p4':
            //     return <ServicePortfolioList />
            // case 'p5':
            //     return <ExclusionsList />
            // case 's1':
            //     return <SettlementProcessList addTab={addTab} />
            // case 'rs1':
            //     return <RuleSetListContainer addTab={addTab}/>
            // case 'rs2':
            //     return <PolicyListContainer addTab={addTab}/>
            default:
                return <div></div>;
        }
    }
}