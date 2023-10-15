import "./MainButton.css";

/*
children: comp must have a children, if not, error will throw
customClass: string
customStyle: object
onClickFunc: function
*/

const MainButton = ({ children, customClass, customStyle, onClickFunc }) => {
  const { type: firstChildType } = children[0];
  const btnClss = firstChildType === "img" ? "main-btn-wimg" : "";

  return (
    <button
      style={
        customStyle !== "undefined" && typeof customStyle === "object"
          ? customStyle
          : {}
      }
      className={`main-btn ${btnClss} ${
        customClass !== undefined ? customClass : ""
      }`}

      onClick={onClickFunc !== undefined ? onClickFunc : () => {}}
    >
      {children}
    </button>
  );
};

export default MainButton;
