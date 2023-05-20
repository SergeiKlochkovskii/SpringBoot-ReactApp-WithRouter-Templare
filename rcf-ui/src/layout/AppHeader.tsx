import React from 'react';

import { AutoComplete, Badge, Col, Input, Row } from 'antd'; 

import { useTranslation } from 'react-i18next';

import { Props as ContainerProps, SearchOption } from './AppHeaderContainer';

import logo from '../images/logo.png';
import logoDelonia from '../images/logoDelonia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';

const { Search } = Input;

const AppHeader = (props: {
    onSearchInputChange: (value: string) => void, 
    onSelectSearchOption: (value: string, option: any) => void,
    onClickConfigOption: () => void,
    options: SearchOption[]} & ContainerProps) => {

    const { t } = useTranslation(['header']);

    return (
        <>
            <Row align='middle' style={{height: '100%'}}>
                <Col span={8}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='header--logo'>
                            <div className='header--logo--inner'>
                                <img src={logoDelonia} alt=''/>
                            </div>
                        </div>
                        <img src={logo} alt='' style={{width: '300px'}}/>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{lineHeight: '0'}} className='header-search'>
                        <AutoComplete style={{width: '100%'}} options={props.options}
                            onSearch={props.onSearchInputChange} onSelect={props.onSelectSearchOption}>
                            <Search className='search-input' enterButton
                                placeholder={t('header:searchInputPlaceholder')} size='large'/>
                        </AutoComplete>
                    </div>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <div className='header-options--container' style={{lineHeight: '0'}}>
                        <Badge count={1} className='header-options--option'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#40a9ff' }}/>
                        </Badge>
                        <Badge count={4} className='header-options--option'>
                            <FontAwesomeIcon icon={faBell} style={{ color: 'gold' }}/>
                        </Badge>
                        <FontAwesomeIcon icon={faCog} style={{ color: 'gray' }} className='header-options--option'
                            onClick={props.onClickConfigOption}/>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default AppHeader;