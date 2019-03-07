import { NavigationActions } from 'react-navigation';

class NavigationServiceImpl {
    navigator;

    setTopLevelNavigator(navigatorRef) {
        this.navigator = navigatorRef;
    }

    navigate(routeName, params) {
        this.navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}

export const NavigationService = new NavigationServiceImpl();
