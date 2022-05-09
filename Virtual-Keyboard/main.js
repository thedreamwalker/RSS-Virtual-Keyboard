/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
 //let isLanguage = en;

var capsLock = 0;
var keyLayoutEN = [["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"], ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del"], ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"], ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "shift"], ["ctrl", "win", "alt", "space", "alt", "◄", "▼", "►", "ctrl"]]; // add buttons

var addKeys = function addKeys(keyboard) {
  var _loop = function _loop(i) {
    var keyRow = document.createElement('div');
    keyRow.classList.add('keyboard__row');
    keyboard.appendChild(keyRow);

    var _loop2 = function _loop2(j) {
      var keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__button');
      keyRow.appendChild(keyElement);

      switch (keyLayoutEN[i][j]) {
        case 'backspace':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = 'Backspace';
          keyElement.addEventListener('click', function () {});
          break;

        case 'caps':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key--activatable');
          keyElement.innerHTML = 'CapsLock';
          keyElement.addEventListener('click', function () {
            capsLock === 0 ? capsLock = 1 : capsLock = 0;
          });
          break;

        case 'enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = 'Enter';
          keyElement.addEventListener('click', function () {
            document.body.querySelector('.keyboard__textarea').innerHTML += '\n';
          });
          break;

        case 'tab':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = 'tab';
          keyElement.addEventListener('click', function () {
            document.body.querySelector('.keyboard__textarea').innerHTML += '\t';
          });
          break;

        case 'space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.innerHTML = '—';
          keyElement.addEventListener('click', function () {
            document.body.querySelector('.keyboard__textarea').innerHTML += ' ';
          });
          break;

        case 'shift':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key-double');
          keyElement.innerHTML = 'shift';
          keyElement.addEventListener('click', function () {});
          break;

        case 'ctrl':
          keyElement.classList.add('keyboard__key-double');
          keyElement.innerHTML = 'ctrl';
          keyElement.addEventListener('click', function () {});
          break;

        case 'alt':
          keyElement.classList.add('keyboard__key-double');
          keyElement.innerHTML = 'alt';
          keyElement.addEventListener('click', function () {});
          break;

        default:
          keyElement.textContent = keyLayoutEN[i][j].toLowerCase();
          keyElement.addEventListener('click', function () {
            document.body.querySelector('.keyboard__textarea').innerHTML += capsLock === 1 ? keyLayoutEN[i][j].toUpperCase() : keyLayoutEN[i][j].toLowerCase();
          });
          break;
      }
    };

    for (var j = 0; j < keyLayoutEN[i].length; j++) {
      _loop2(j);
    }
  };

  for (var i = 0; i < keyLayoutEN.length; i++) {
    _loop(i);
  }
};

var setKeyboard = function setKeyboard() {
  var textAreaWrapper = document.createElement('div');
  textAreaWrapper.classList.add('keyboard__textarea-wrapper');
  document.body.appendChild(textAreaWrapper);
  var textArea = document.createElement('textarea');
  textArea.classList.add('keyboard__textarea');
  textArea.setAttribute('rows', '10');
  textArea.setAttribute('autofocus', '');
  textAreaWrapper.appendChild(textArea);
  var keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.appendChild(keyboard);
  addKeys(keyboard);
};

setKeyboard();
var allButtons = document.querySelectorAll('.keyboard__button');
var allButtonsDouble = document.querySelectorAll('.keyboard__key-double');

var presserButton = function presserButton(event, action) {
  var keyName = event.key;
  var keyCode = event.code;
  allButtons.forEach(function (element) {
    if (element.innerHTML === keyName) {
      if (action === 'add') {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    }
  });

  switch (keyName) {
    case 'Tab':
      allButtons.forEach(function (element) {
        if (element.innerHTML === 'tab') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }

        ;
      });
      break;

    case "Delete":
      allButtons.forEach(function (element) {
        if (element.innerHTML === 'del') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }

        ;
      });
      break;

    case "Meta":
      allButtons.forEach(function (element) {
        if (element.innerHTML === 'win') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }

        ;
      });
      break;

    case "ArrowUp":
      allButtons.forEach(function (element) {
        if (element.innerHTML === '▲') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }

        ;
      });
      break;

    case "ArrowDown":
      allButtons.forEach(function (element) {
        if (element.innerHTML === '▼') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }

        ;
      });
      break;

    case "ArrowLeft":
      allButtons.forEach(function (element) {
        if (element.innerHTML === '◄') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      });
      break;

    case "ArrowRight":
      allButtons.forEach(function (element) {
        if (element.innerHTML === '►') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      });
      break;

    case " ":
      allButtons.forEach(function (element) {
        if (element.innerHTML === '—') {
          if (action === 'add') {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      });
      break;

    default:
      break;
  }

  switch (keyCode) {
    case "ShiftLeft":
      for (var i = 0; i < allButtonsDouble.length; i++) {
        if (allButtonsDouble[i].innerHTML === 'shift') {
          if (action === 'add') {
            allButtonsDouble[i].classList.add('active');
          } else {
            allButtonsDouble[i].classList.remove('active');
          }

          break;
        }
      }

      break;

    case "ShiftRight":
      for (var _i = allButtonsDouble.length - 1; _i >= 0; _i--) {
        if (allButtonsDouble[_i].innerHTML === 'shift') {
          if (action === 'add') {
            allButtonsDouble[_i].classList.add('active');
          } else {
            allButtonsDouble[_i].classList.remove('active');
          }

          break;
        }
      }

      break;

    case "AltLeft":
      for (var _i2 = 0; _i2 < allButtonsDouble.length; _i2++) {
        if (allButtonsDouble[_i2].innerHTML === 'alt') {
          if (action === 'add') {
            allButtonsDouble[_i2].classList.add('active');
          } else {
            allButtonsDouble[_i2].classList.remove('active');
          }

          break;
        }
      }

      break;

    case "AltRight":
      for (var _i3 = allButtonsDouble.length - 1; _i3 >= 0; _i3--) {
        if (allButtonsDouble[_i3].innerHTML === 'alt') {
          if (action === 'add') {
            allButtonsDouble[_i3].classList.add('active');
          } else {
            allButtonsDouble[_i3].classList.remove('active');
          }

          break;
        }
      }

      break;

    case 'ControlLeft':
      for (var _i4 = 0; _i4 < allButtonsDouble.length; _i4++) {
        if (allButtonsDouble[_i4].innerHTML === 'ctrl') {
          if (action === 'add') {
            allButtonsDouble[_i4].classList.add('active');
          } else {
            allButtonsDouble[_i4].classList.remove('active');
          }

          break;
        }
      }

      break;

    case 'ControlRight':
      for (var _i5 = allButtonsDouble.length - 1; _i5 >= 0; _i5--) {
        if (allButtonsDouble[_i5].innerHTML === 'ctrl') {
          if (action === 'add') {
            allButtonsDouble[_i5].classList.add('active');
          } else {
            allButtonsDouble[_i5].classList.remove('active');
          }

          break;
        }
      }

      break;

    default:
      break;
  }
};

document.addEventListener('keydown', function (event) {
  presserButton(event, 'add');
}, false); // keyup

document.addEventListener('keyup', function (event) {
  presserButton(event, 'remove');
}, false);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map