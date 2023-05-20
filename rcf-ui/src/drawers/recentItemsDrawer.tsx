import React from 'react';

import moment from 'moment';

import { List, Empty, Drawer, Button } from 'antd';

import { useTranslation } from 'react-i18next';
import { BankOutlined, ClockCircleTwoTone, CloseCircleTwoTone, FileProtectOutlined, UserOutlined } from '@ant-design/icons';

const RecentItemsDrawer = (props: {
    visible?: boolean;
    items?: {type: 'I' | 'H' | 'P', description: string, date: Date, id: number}[]
    onClose: () => void;
    onClearAll: () => void;
    onRemoveItem: (index: number) => void;
}) => {

    const { t } = useTranslation(['header']);

    const data = (props.items || []).map(item => 
        ({avatar: (item.type === 'I' && <UserOutlined />) || (item.type === 'H' && <BankOutlined />) || (item.type === 'P' && <FileProtectOutlined />),
        title: item.description,
        description: moment(item.date).format('llll')})
    );

    const title = <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
        <span><ClockCircleTwoTone /> {t('recentItems:title')}</span>
        <Button type='link' onClick={props.onClearAll}>{t('recentItems:clearAll')}</Button>
    </div>

    return (
        <Drawer className='configuration-drawer'
            title={title}
            placement='right'
            closable={false}
            onClose={props.onClose}
            visible={props.visible}
            width='350px'>
                {data.length === 0 ? <Empty description={t('recentItems:noData')} /> :
                    <List itemLayout='vertical' size='small' dataSource={data} pagination={false}
                    renderItem={(item, index) =>
                        <List.Item key={index} className='recent-item-container'>
                            <List.Item.Meta
                                avatar={item.avatar}
                                title={item.title}
                                description={item.description}/>
                            <CloseCircleTwoTone twoToneColor='red' onClick={() => props.onRemoveItem(index)}/>
                        </List.Item>} 
                    /> }       
        </Drawer>
    );
}

export default RecentItemsDrawer;