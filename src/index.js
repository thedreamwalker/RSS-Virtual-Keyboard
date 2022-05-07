import './styles/main.scss';

//let isLanguage = en;

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
        case "backspace":
          keyElement.classList.add("keyboard__key-wide");
          keyElement.innerHTML = 'backspace';
  
          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
          });
  
          break;
  
        case "caps":
          keyElement.classList.add("keyboard__key-wide", "keyboard__key--activatable");
          keyElement.innerHTML = 'caps';
  
          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key-active", this.properties.capsLock);
          });
  
          break;
  
        case "enter":
          keyElement.classList.add("keyboard__key-wide");
          keyElement.innerHTML = 'enter';
  
          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });
  
          break;
  
        case "space":
          keyElement.classList.add("keyboard__key-extra-wide");
          keyElement.innerHTML = '—';
  
          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });
  
          break;
  
        case "shift":
          keyElement.classList.add("keyboard__key-wide");
          keyElement.innerHTML = 'shift';
  
          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });
  
          break;
  
        default:
          keyElement.textContent = keyLayoutEN[i][j].toLowerCase();
  
        keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock ? keyLayoutEN[i][j].toUpperCase() : keyLayoutEN[i][j].toLowerCase();
            this._triggerEvent("oninput");
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