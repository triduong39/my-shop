import { BrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

type CustormRouter = {
    basename?: string;
    children: React.ReactNode;
    history: BrowserHistory;
};
const CustomRouter = ({ basename, children, history }: CustormRouter) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
            {children}
        </Router>
    );
};

export default CustomRouter;
