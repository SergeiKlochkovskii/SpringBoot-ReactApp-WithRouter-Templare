import React from 'react';

import AppHeader from './AppHeader';
// import Stores from '../stores/stores';
import { withTranslation, WithTranslation } from 'react-i18next';

export interface SearchOption {
    value: string; 
    label: string;
    id: number;
    type: 'I' | 'H' | 'P';
}

interface State {
    options: SearchOption[];
}

export interface Props {
    onClickConfigOption: () => void;
    onSelectSearchOption: (value: string, option: SearchOption) => void;
}

class AppContent extends React.Component<Props & WithTranslation, State> {

    public state = {options: []};

    private t = this.props.t;

    public render() {
        return (
            <AppHeader onSearchInputChange={this.search} 
                onSelectSearchOption={this.props.onSelectSearchOption}
                options={this.state.options}
                onClickConfigOption={this.props.onClickConfigOption}/>
        );
    }

    private search = (value: string) => {

    //     const optionsInsureds = Stores.clients
    //         .filter(c => c.typePerson==='NP' && c.nameClient.toLowerCase().includes(value.toLowerCase()))
    //         .map(c => ({value: c.nameClient, label: c.nameClient, type: 'I', id: c.idClient} as SearchOption));
    //
    //     const optionsHolders = Stores.clients
    //         .filter(c => c.typePerson==='LE' && c.nameClient.toLowerCase().includes(value.toLowerCase()))
    //         .map(c => ({value: c.nameClient, label: c.nameClient, type: 'H', id: c.idClient} as SearchOption));
    //
    //     const optionsPolicies = Stores.policies
    //         .filter(p => p.code.includes(value.toLowerCase()) || Stores.clients.find(c => c.idClient === p.idHolder && c.nameClient.toLowerCase().includes(value.toLowerCase())))
    //         .map(p => {
    //             const label = p.code + ' - ' + Stores.clients.find(c => c.idClient === p.idHolder)?.nameClient;
    //             return {value: label, label, type: 'P', id: p.idPolicy} as SearchOption;
    //         });
    //
    //     //Ahora como vamos a dividir las options?
    //     const options = [];
    //     if (optionsInsureds.length > 0) {
    //         options.push({ label: this.t('header:searchInputResultCategoryInsureds'), options: optionsInsureds.slice(0, 5) });
    //     }
    //
    //     if (optionsHolders.length > 0) {
    //         options.push({ label: this.t('header:searchInputResultCategoryHolders'), options: optionsHolders.slice(0, 5) });
    //     }
    //
    //     if (optionsPolicies.length > 0) {
    //         options.push({ label: this.t('header:searchInputResultCategoryPolicies'), options: optionsPolicies.slice(0, 5) });
    //     }
    //
    //     this.setState({options:optionsInsureds.concat(optionsHolders).concat(optionsPolicies)});
    }
}

export default withTranslation()(AppContent);