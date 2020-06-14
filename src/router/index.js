import DashBoard from '../views/DashBoard'
import Demo1 from '../views/Demo1'
import Demo2 from '../views/Demo2'

const routes = [
  {
    path: '/',
    exact: true,
    component: DashBoard,
  },
  {
    path: '/demo1',
    component: Demo1,
  },
  {
    path: '/demo2',
    component: Demo2,
  },
]

export default routes
