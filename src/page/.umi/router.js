import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/Video",
    "exact": true,
    "component": require('../Video.js').default
  },
  {
    "path": "/comment",
    "exact": true,
    "component": require('../comment.js').default
  },
  {
    "path": "/CourseContainer",
    "exact": true,
    "component": require('../CourseContainer.js').default
  },
  {
    "path": "/clist",
    "exact": true,
    "component": require('../clist.js').default
  },
  {
    "path": "/list",
    "exact": true,
    "component": require('../list.js').default
  },
  {
    "path": "/Course",
    "exact": true,
    "component": require('../Course.js').default
  },
  {
    "path": "/cform",
    "exact": true,
    "component": require('../cform.js').default
  },
  {
    "path": "/App",
    "exact": true,
    "component": require('../App.js').default
  },
  {
    "path": "/VideoPlayer",
    "exact": true,
    "component": require('../VideoPlayer.js').default
  },
  {
    "path": "/zapp",
    "exact": true,
    "component": require('../zapp.js').default
  },
  {
    "path": "/icorn",
    "exact": true,
    "component": require('../icorn.js').default
  },
  {
    "component": () => React.createElement(require('C:/Users/zhendong/antd-course/node_modules/_umi-build-dev@1.2.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
