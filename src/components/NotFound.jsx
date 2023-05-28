import NotFoundImg from '../images/404 robot.png';

const NotFound = () => {
  return (
    <section
      style={{
        padding: '30px 16px',
        backgroundColor: '#FFEFD5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'xxx-large',
          textAlign: 'center',
        }}
      >
        {' '}
        Opss, this page <br /> not found
      </h1>
      <img src={NotFoundImg} alt="Not found page img 404" width="800px" />
    </section>
  );
};

export default NotFound;
