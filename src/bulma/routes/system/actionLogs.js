import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./actionLogs/*.js', { eager: true }));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'actionLogs',
    component: Router,
    meta: {
        breadcrumb: 'action logs',
        route: 'system.actionLogs.index',
        keepAlive: false,
    },
    children: routes,
};
