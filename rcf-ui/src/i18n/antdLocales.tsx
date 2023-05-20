import enGB from 'antd/es/locale/en_GB';
import enUS from 'antd/es/locale/en_US';
import esES from 'antd/es/locale/es_ES';
import {Locale} from 'antd/lib/locale';


const getLocale = (languageCode: string): Locale =>  {
    if (languageCode.startsWith('es')) {
        return esES;
    } else if (languageCode === 'en-US') {
        return enUS;
    } else if (languageCode === 'en-GB' || languageCode.startsWith('en')) {
        return enGB;
    } else {
        return esES;
    }
};

export default getLocale;