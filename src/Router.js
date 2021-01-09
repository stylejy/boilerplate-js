import Main from './component/Main';
import Game from './component/Game';
import Complete from './component/Complete';

export default (() => {
  const routers = {
    '/': Main,
    '/game': Game,
    '/complete': Complete,
  };

  const render = path => {
    const component = routers[path];
  };
})();
