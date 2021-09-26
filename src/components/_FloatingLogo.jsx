const FloatingLogo = ({ posStyles, elId }) => {

  const logoStyle = {
    ...posStyles
  };

  return (
    <div className={`floating-logo floating-logo-${elId}`} style={ logoStyle }>
      <img src="./svg/my-logo/mg_logo_white.svg" alt="white-logo" />
    </div>
  );
}

export default FloatingLogo;