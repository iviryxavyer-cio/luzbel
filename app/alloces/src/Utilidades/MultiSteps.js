import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * 
 * @param {*} indx 
 * @param {*} length 
 */
var getNavStyles = function getNavStyles(indx, length) {
  var styles = [];

  for (var i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }

  return styles;
};


/**
 * determinar si para un paso se debe o no mostrar un boton
 * @param {*} indx 
 * @param {*} length 
 */
var getButtonsState = function getButtonsState(indx, length) {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
      showAceptarBtn: false
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showAceptarBtn: false
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
      showAceptarBtn: true
    };
  }
};


/**
 * 
 * @param {JSON} props {
 *  {array} steps [
 *    { name:"name", component: <Component></Component>, handleValidation: func () } 
 *  ...]
 * } 
 */
function MultiStep(props) {
  var _useState = useState(getNavStyles(0, props.steps.length)),
      _useState2 = _slicedToArray(_useState, 2),
      stylesState = _useState2[0],
      setStyles = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      compState = _useState4[0],
      setComp = _useState4[1];

  var _useState5 = useState(getButtonsState(0, props.steps.length)),
      _useState6 = _slicedToArray(_useState5, 2),
      buttonsState = _useState6[0],
      setButtons = _useState6[1];

  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  }

  /**
   * funcion que se ejecuta paravalidar si se puede ir al siguiente paso
   */
  var next = function next() {
    if (props.steps[compState] && props.steps[compState].handleValidation) {
      let validacion = props.steps[compState].handleValidation(props.data);
      if(validacion){
        setStepState(compState + 1);
      }else{
        alert("datos invalidos");
      }
    }else{
      return setStepState(compState + 1);
    }
  };

  /**
   * 
   */
  var previous = function previous() {
    return setStepState(compState > 0 ? compState - 1 : compState);
  };

  /**
   * funcion que se ejecuta en el boton de finalizar en la ultima estapa del wizard
   */
  var success = function success(){
    if(props.steps[compState] && props.steps[compState].handleSuccess){
      props.steps[compState].handleSuccess();
    }else{
      alert("no hay funcion de finalizado");
    }
    //return this.setState({ showModal: false });
  }

  var handleKeyDown = function handleKeyDown(evt) {
    return evt.which === 13 ? next(props.steps.length) : {};
  };

  /**
   * Funcion para manejar el click en navegador superior
   * @param {*} evt 
   */
  var handleOnClick = function handleOnClick(evt) {
    switch (props.canNavigateInMenu) {
      case (true, null, undefined):
          console.log("access");
          if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
            setStepState(props.steps.length);
          } else {
            setStepState(evt.currentTarget.value);
          }
        break;
      case false:
          alert("No se puede navegar");
        break;
      default:
        break;
    }
  };

  /**
   * 
   */
  var renderSteps = function renderSteps() {
    return props.steps.map(function (s, i) {
      return React.createElement("li", {
        className: `progtrckr-${stylesState[i]}`,
        onClick: handleOnClick,
        key: i,
        value: i
      },
      React.createElement("em", null, i + 1), React.createElement("span", null, props.steps[i].name));
    });
  };

  
  return React.createElement("div", {
    className: "container",
    onKeyDown: handleKeyDown
  },

    React.createElement("ol", {
      className: "text-center progtrckr"
    }, renderSteps()), props.steps[compState].component, 

    React.createElement("div", 
      {
        style: props.showNavigation ? 
        {
        }:
        {
          display: 'none'
        },
        className:"text-right"
      },

      React.createElement("button",
        {
          style: buttonsState.showPreviousBtn ? {} : {
            display: 'none'
          },
          className:"btn btn-primary",
          onClick: previous
        }, "Anterior"),

      React.createElement("button",
      {
        style: buttonsState.showNextBtn ? {} : {
          display: 'none'
        },
        className:"btn btn-primary",
        onClick: next
      }, "Siguiente"),

      React.createElement("button", 
      {
        style: buttonsState.showAceptarBtn ? 
          {
          } : 
          {
            display: 'none'
          },
        className:"btn btn-success",
        onClick: success
      }, "Aceptar")
    )
  );
}

MultiStep.defaultProps = {
  showNavigation: true
};

export default MultiStep;
//# sourceMappingURL=index.js.map
