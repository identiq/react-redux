import Loader from './Loader';

it('Should only be display block on loading true', () => {
  const loader = Loader({loading: true});

  expect(loader.props.style.display).toEqual('block');

  const loaderHide = Loader({loading: false});

  expect(loaderHide.props.style.display).toEqual('none');

});
