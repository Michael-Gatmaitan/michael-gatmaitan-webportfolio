const FloatingLogo = ({ posStyles }) => {

  const logoStyle = {
    opacity: 0.08,
    pointerEvents: 'none',
    position: 'absolute',
    ...posStyles
  };

  return (
    <div className="floating-logo" style={ logoStyle }>
      <img src="./svg/my-logo/mg_logo_white.svg" alt="white-logo" width="192" />
    </div>
  );
}

export default FloatingLogo;