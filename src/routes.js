// pages
import indexComponent from '@/pages/index/index';
import mainComponent from '@/pages/main/main';

// Components
import contentComponent from '@/components/content/content';
import fullArticle from '@/components/fullArticle/fullArticle';
import newArticleComponent from '@/components/newArticle/newArticle';

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: indexComponent,
    },
    {
        path: '/main',
        name: 'main',
        component: mainComponent,
        children: [
            {
                path: '',
                redirect: '/main/content'
            },
            {
                path: 'content',
                component: contentComponent,
            },
            {
                path: 'fullArticle/:id',
                component: fullArticle,
            },
            {
                path: 'newArticle',
                component: newArticleComponent
            }
        ]
    },
]

export default routes;