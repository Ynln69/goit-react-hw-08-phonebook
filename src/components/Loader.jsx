import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <section>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </section>
  );
};

export default Loader;
