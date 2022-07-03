
import React from "react"
import MobileStoreButton from 'react-mobile-store-button';


const InputButton = props => {
    if(props.color)
    switch(props.app){
        case 'iOSUrl':
            url = "https://apps.apple.com/app/iban/id1450159114"
            linkProps = "{{ title: 'iOS Store Button' }}"
            store="ios"
            break;
        case 'androidUrl':
            url = "https://play.google.com/store/apps/details?id=com.myibanwallet.gazoo"
            linkProps = "{title: 'Android Store Button'}"
            store="android"
            break;
        default:
            url = "/"
            break;
    }
    else
        switch(props.red){
            case 'iOSUrl':
                url = "https://apps.apple.com/app/iban/id1450159114"
                linkProps = "{{ title: 'iOS Store Button' }}"
                store="ios"
                break;
            case 'androidUrl':
                url = "https://play.google.com/store/apps/details?id=com.myibanwallet.gazoo"
                linkProps = "{title: 'Android Store Button'}"
                store="android"
                break;
            default:
                url = "/"
                break;
        }
  return (
    <div className="d-flex justify-content-center w-75 ">
			<div>
				<MobileStoreButton
				  store={store}
				  url={url}
                  linkProps={linkProps}
                  app={app}
				/>
			</div>
    </div>
  )
}

export default InputButton