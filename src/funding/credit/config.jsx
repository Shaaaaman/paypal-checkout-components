/* @flow */
/** @jsx node */

import { COUNTRY } from '@paypal/sdk-constants/src';
import { node, Fragment } from 'jsx-pragmatic/src';
import { CreditLogo, PPLogo, PayPalLogo, LOGO_COLOR } from '@paypal/sdk-logos/src';

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_LAYOUT, DEFAULT } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, DEFAULT_LABEL_CONFIG, type FundingSourceConfig } from '../common';

export function getCreditConfig() : FundingSourceConfig {
    return {
        ...DEFAULT_FUNDING_CONFIG,
    
        defaultLabel: BUTTON_LABEL.CREDIT,

        layouts: [
            BUTTON_LAYOUT.HORIZONTAL,
            BUTTON_LAYOUT.VERTICAL
        ],
    
        labels: {
            [BUTTON_LABEL.CREDIT]: {
                ...DEFAULT_LABEL_CONFIG,
    
                Label: ({ locale, logoColor }) => {
                    if (locale.country === COUNTRY.DE) {
                        return <CreditLogo logoColor={ logoColor } locale={ locale } />;
                    }
    
                    return (
                        <Fragment>
                            <PPLogo logoColor={ logoColor } /> <PayPalLogo logoColor={ logoColor } /> <CreditLogo logoColor={ logoColor } locale={ locale } />
                        </Fragment>
                    );
                },
    
                colors: [
                    BUTTON_COLOR.DARKBLUE,
                    BUTTON_COLOR.BLACK,
                    BUTTON_COLOR.WHITE
                ],

                secondaryColors: {
                    ...DEFAULT_LABEL_CONFIG.secondaryColors,
                    
                    [ DEFAULT ]: BUTTON_COLOR.DARKBLUE
                },

                logoColors: {
                    [ DEFAULT ]:            LOGO_COLOR.WHITE,
                    [ BUTTON_COLOR.WHITE ]: LOGO_COLOR.BLUE
                }
            }
        }
    };
}
