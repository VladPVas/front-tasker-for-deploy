import React from 'react';
import RouterConfig from './providers/RouterConfig';
import MainPageRouting from '../pages/MainPage/MainPageRouting';
import AuthPageRouting from '../pages/AuthPage/AuthPageRouting';

function App() {
    return (
        <RouterConfig>
            <AuthPageRouting/>
            <MainPageRouting/>
        </RouterConfig>
    );
}

export default App;
