import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  const containerStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
  };
  return (
    <section style={containerStyles}>
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
