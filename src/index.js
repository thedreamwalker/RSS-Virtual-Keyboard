import './styles/main.scss';

//let isLanguage = en;
let capsLock = 0;

const keyLayoutEN = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
  ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del"],
  ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
  ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "shift"],
  ["ctrl", "win", "alt", "space", "alt", "◄", "▼", "►", "ctrl"]
];

// add buttons

const addKeys = (keyboard) => {
  for (let i = 0; i < keyLayoutEN.length; i++) {
    const keyRow = document.createElement('div');
    keyRow.classList.add('keyboard__row');
    keyboard.appendChild(keyRow);
  
    for (let j = 0; j < keyLayoutEN[i].length; j++) {
      const keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__button');
      keyRow.appendChild(keyElement);
  
      switch (keyLayoutEN[i][j]) {
        case 'backspace':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = 'Backspace';
  
          keyElement.addEventListener('click', () => {

          });
  
        break;
  
        case 'caps':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key--activatable');
          keyElement.innerHTML = 'CapsLock';
  
          keyElement.addEventListener('click', () => {
            capsLock === 0 ? capsLock = 1 : capsLock = 0;
          });
  
        break;
  
        case 'enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = 'Enter';
  
          keyElement.addEventListener('click', () => {
            document.body.querySelector('.keyboard__textarea').innerHTML += '\n';
          });
  
        break;
  
        case 'space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.innerHTML = '—';
  
          keyElement.addEventListener('click', () => {
            document.body.querySelector('.keyboard__textarea').innerHTML += ' ';
          });
  
          break;
  
        case 'shift':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key-double');
          keyElement.innerHTML = 'shift';
  
          keyElement.addEventListener('click', () => {

          });
  
          break;

          case 'ctrl':
            keyElement.classList.add('keyboard__key-double');
            keyElement.innerHTML = 'ctrl';
    
            keyElement.addEventListener('click', () => {

            });
    
            break;

            case 'alt':
            keyElement.classList.add('keyboard__key-double');
            keyElement.innerHTML = 'alt';
    
            keyElement.addEventListener('click', () => {

            });
    
            break;
  
        default:
          keyElement.textContent = keyLayoutEN[i][j].toLowerCase();
  
        keyElement.addEventListener('click', () => {
          document.body.querySelector('.keyboard__textarea').innerHTML += capsLock === 1 ? keyLayoutEN[i][j].toUpperCase() : keyLayoutEN[i][j].toLowerCase();
        });
  
        break;
      }
    };
  };
};

const setKeyboard = () => {
  const textAreaWrapper = document.createElement('div');
  textAreaWrapper.classList.add('keyboard__textarea-wrapper');
  document.body.appendChild(textAreaWrapper);
  const textArea = document.createElement('textarea');
  textArea.classList.add('keyboard__textarea');
  textArea.setAttribute('rows', '10');
  textArea.setAttribute('autofocus', '');
  textAreaWrapper.appendChild(textArea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.appendChild(keyboard);

  addKeys(keyboard);
};

setKeyboard();

const allButtons = document.querySelectorAll('.keyboard__button');

const allButtonsDouble = document.querySelectorAll('.keyboard__key-double');

const presserButton = (event, action) => {
  const keyName = event.key;
  const keyCode = event.code;

  allButtons.forEach(element => {

    if (element.innerHTML === keyName) {
      action === 'add' ? element.classList.add('active') : element.classList.remove('active');
    };
  });

  switch (keyName) {
    case "Tab":
      allButtons.forEach(element => {
        if (element.innerHTML === 'tab') {
          action === 'add' ? element.classList.add('active') : element.classList.remove('active');
        };
      });

      break;

      case "Delete":
        allButtons.forEach(element => {
          if (element.innerHTML === 'del') {
            action === 'add' ? element.classList.add('active') : element.classList.remove('active');
          };
        });
  
        break;


    case "Meta":
      allButtons.forEach(element => {
        if (element.innerHTML === 'win') {
          action === 'add' ? element.classList.add('active') : element.classList.remove('active');
        };
      });
      break;

    case "ArrowUp":
      allButtons.forEach(element => {
        if (element.innerHTML === '▲') {
          action === 'add' ? element.classList.add('active') : element.classList.remove('active');
        };
      });
      break;

      case "ArrowDown":
        allButtons.forEach(element => {
          if (element.innerHTML === '▼') {
            action === 'add' ? element.classList.add('active') : element.classList.remove('active');
          };
        });
      break;

    case "ArrowLeft":
      allButtons.forEach(element => {
        if (element.innerHTML === '◄') {
          action === 'add' ? element.classList.add('active') : element.classList.remove('active');
        };
      });
      break;

      case "ArrowRight":
        allButtons.forEach(element => {
          if (element.innerHTML === '►') {
            action === 'add' ? element.classList.add('active') : element.classList.remove('active');
          };
        });
        break;

    case " ":
      allButtons.forEach(element => {
        if (element.innerHTML === '—') {
          action === 'add' ? element.classList.add('active') : element.classList.remove('active');
        };
      });

      break;

    default:

      break;
  }

  switch (keyCode) {
    case "ShiftLeft":

    for (let i = 0; i < allButtonsDouble.length; i++) {
      if (allButtonsDouble[i].innerHTML === 'shift') {
        action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
        break;
      }
    }
    break;

    case "ShiftRight":

      for (let i = allButtonsDouble.length - 1; i >= 0; i--) {
        if (allButtonsDouble[i].innerHTML === 'shift') {
          action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
          break;
        }
      }
    break;


    case "AltLeft":
      for (let i = 0; i < allButtonsDouble.length; i++) {
        if (allButtonsDouble[i].innerHTML === 'alt') {
          action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
          break;
        }
      }
        break;

    case "AltRight":

      for (let i = allButtonsDouble.length - 1; i >= 0; i--) {
        if (allButtonsDouble[i].innerHTML === 'alt') {
          action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
          break;
        }
      }
    break;

    case "ControlLeft":
      for (let i = 0; i < allButtonsDouble.length; i++) {
        if (allButtonsDouble[i].innerHTML === 'ctrl') {
          action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
          break;
        }
      }
        break;

    case "ControlRight":

      for (let i = allButtonsDouble.length - 1; i >= 0; i--) {
        if (allButtonsDouble[i].innerHTML === 'ctrl') {
          action === 'add' ? allButtonsDouble[i].classList.add('active') : allButtonsDouble[i].classList.remove('active');
          break;
        }
      }
    break;

    default:

      break;
  }

};

document.addEventListener('keydown', (event) => {

  presserButton(event, 'add');

  if (keyName === 'Control') {
    // not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Хотя event.key это не 'Control' (например, нажата клавиша 'a'),
    // то всё же event.ctrlKey может быть true, если ударживается клавиша Ctrl.
    //alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    //alert(`Key pressed ${keyName}`);
  }
}, false);

// keyup

document.addEventListener('keyup', (event) => {

  presserButton(event, 'remove');

  const keyName = event.key;
  const keyCode = event.code;
/*
  allButtons.forEach(element => {
    if (element.innerHTML === keyName) {
      element.classList.remove('active');
    };
  });*/

  // Как только пользователь отпустит клавишу Ctrl, то она больше не будет активной.
  // Поэтому event.ctrlKey = false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);

allButtons.addEventListener("click", () => {
  console.log(this.key);
});