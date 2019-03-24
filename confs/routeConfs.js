import Center from '../components/Center';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
const ROUTES = [
    {
        path: '/',
        component: Center,
        tabTitle: 'center-React Router'
    },
    {
        path: '/orders/page1',
        component: Page1,
        tabTitle: 'Page1-React Router',
    },
    {
        path: '/orders/page2',
        component: Page2,
        tabTitle: 'Page2-React Router',
    }
];
export default ROUTES;