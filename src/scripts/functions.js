const keyName = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "slash2", "Delete"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "Backslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
  ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"],
];

const key = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  ["Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\"", "Enter"],
  ["Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

const keyShift = [
  ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
  ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
  ["Shift", "|", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

const keyCaps = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del"],
  ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "\"", "Enter"],
  ["Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

const keyRu = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
  ["Caps Lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ["Shift", "\\", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

const keyRuShift = [
  ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
  ["Caps Lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ["Shift", "/", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

const keyRuCaps = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del"],
  ["Caps Lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ["Shift", "\\", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"],
];

function createElem(name, id, classes) {
  const elem = document.createElement(name);
  if (id) {
    elem.id = id;
  }
  if (classes) {
    elem.className = classes;
  }

  return document.body.appendChild(elem);
}

function createChildElem(root, name, id, classes) {
  const elem = document.createElement(name);
  if (id) {
    elem.id = id;
  }
  if (classes) {
    elem.className = classes;
  }

  return root.appendChild(elem);
}

class Keyboard {
  constructor() {
    this.bodyTextArea = null;
    this.bodyKb = null;
    this.keysInRows = null;
    this.EN = true;
    this.Caps = false;
    this.Shift = false;
    this.Alt = false;
  }

  init() {
    if (localStorage.getItem("vrKbEN") === null) {
      localStorage.setItem("vrKbEN", true);
    } else if (localStorage.getItem("vrKbEN") === "false") {
      this.EN = false;
    } else {
      this.EN = true;
    }

    this.bodyWrapper = createElem("div", "wrapper", "wrapper");
    createChildElem(this.bodyWrapper, "div", "tittle", "title").textContent = "Virtual keyboard";
    createChildElem(this.bodyWrapper, "p").textContent = "Language switch: AltLeft + ShiftLeft";

    this.bodyTextArea = createChildElem(this.bodyWrapper, "textarea", "textarea", "textarea");
    this.bodyKb = createChildElem(this.bodyWrapper, "div", "keyboard", "keyboard");

    for (let indexRow = 0; indexRow < 5; indexRow += 1) {
      const rootRow = createChildElem(this.bodyKb, "div", "row", "row");
      const numberKeysInRow = this.keysInRows[this.keysInRows.length - 1 - indexRow];

      for (let indexCol = 0; indexCol < numberKeysInRow; indexCol += 1) {
        const elem = document.createElement("div");
        elem.id = keyName[indexRow][indexCol];
        elem.className = "key";
        if (this.EN) {
          elem.textContent = key[indexRow][indexCol];
        } else {
          elem.textContent = keyRu[indexRow][indexCol];
        }
        rootRow.appendChild(elem);
      }
    }

    this.bodyTextArea.focus();
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      this.keyDown(e.code);
    });
    document.addEventListener("keyup", (e) => this.keyUp(e.code));

    const keysAll = document.querySelectorAll(".key");
    for (let index = 0; index < keysAll.length; index += 1) {
      keysAll[index].addEventListener("mousedown", (e) => this.keyDown(e.target.id));
      keysAll[index].addEventListener("mouseup", (e) => this.keyUp(e.target.id));
    }
  }

  keyDown(code) {
    let char = "";
    const keysAll = document.querySelectorAll(".key");

    for (let index = 0; index < keysAll.length; index += 1) {
      const el = keysAll[index];
      const keyCode = el.getAttribute("id");

      if (code === keyCode) {
        el.classList.add("active");
        char = el.textContent;

        if (code === "ShiftLeft" || code === "ShiftRight") {
          this.Shift = true;
          if (this.Alt) this.changeLang();
          else this.shiftPress();
        }

        if (code === "CapsLock") {
          el.classList.toggle("caps_active");
          if (this.Caps) this.Caps = false;
          else this.Caps = true;
          this.capsPress();
        }

        if (code === "Enter") char = "\n";

        if (code === "Space") this.bodyTextArea.textContent += " ";

        if (code === "Tab") this.bodyTextArea.textContent += "\t";

        if (code === "AltLeft") {
          this.Alt = true;
          if (this.Shift) this.changeLang();
        }

        if (code === "Backspace" || code === "Delete") {
          const { length } = this.bodyTextArea.textContent;
          this.bodyTextArea.textContent = this.bodyTextArea.textContent.substring(0, (length - 1));
          char = "";
        }

        if (char.length === 1) this.bodyTextArea.textContent += char;

        this.bodyTextArea.selectionStart = this.bodyTextArea.textContent.length;
        this.bodyTextArea.selectionEnd = this.bodyTextArea.selectionStart;
        return;
      }
    }

    this.bodyTextArea.focus();
  }

  keyUp(code) {
    const keysAll = document.querySelectorAll(".key");

    for (let index = 0; index < keysAll.length; index += 1) {
      const el = keysAll[index];
      const keyCode = el.getAttribute("id");

      if (keyCode === code) {
        el.classList.remove("active");
        this.bodyTextArea.focus();

        if (code === "ShiftLeft" || code === "ShiftRight") {
          this.Shift = false;
          this.shiftPress();
          el.classList.remove("shift_active");
        }

        if (code === "AltLeft" || code === "AltRight") {
          this.Alt = false;
        }

        return;
      }
    }

    this.bodyTextArea.focus();
  }

  shiftPress() {
    const array = this.bodyKb.querySelectorAll(".key");
    for (let index = 0; index < array.length; index += 1) {
      if (this.Shift && this.EN) {
        array[index].textContent = (keyShift.flat())[index];
      }
      if (this.Shift && !this.EN) {
        array[index].textContent = (keyRuShift.flat())[index];
      }
      if (!this.Shift && this.EN) {
        array[index].textContent = (key.flat())[index];
      }
      if (!this.Shift && this.EN && this.Caps) {
        array[index].textContent = (keyCaps.flat())[index];
      }
      if (!this.Shift && !this.EN) {
        array[index].textContent = (keyRu.flat())[index];
      }
      if (!this.Shift && !this.EN && this.Caps) {
        array[index].textContent = (keyRuCaps.flat())[index];
      }
    }
  }

  capsPress() {
    const array = this.bodyKb.querySelectorAll(".key");
    for (let index = 0; index < array.length; index += 1) {
      if (this.Caps && this.EN) {
        array[index].textContent = (keyCaps.flat())[index];
      }
      if (this.Caps && !this.EN) {
        array[index].textContent = (keyRuCaps.flat())[index];
      }
      if (!this.Caps && this.EN) {
        array[index].textContent = (key.flat())[index];
      }
      if (!this.Caps && !this.EN) {
        array[index].textContent = (keyRu.flat())[index];
      }
    }
  }

  changeLang() {
    if (this.EN) {
      this.EN = false;
      localStorage.setItem("vrKbEN", "false");
    } else {
      this.EN = true;
      localStorage.setItem("vrKbEN", "true");
    }
  }
}

export default {
  Keyboard,
};
