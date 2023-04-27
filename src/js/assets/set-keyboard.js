export default function setKeyboard() {
  const keyboard = `<main class="wrapper">
                      <section class="header">
                        <h1 class="title">RSS Виртуальная клавиатура</h1>
                        <p class="subtitle">Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: <span>левыe ctrl + alt</span></p>
                      </section>
                      <textarea class="textarea" id="textarea" cols="50" rows="5"></textarea>
                      <section class="keyboard">
                        <div class="row">
                          <div class="key letter symbol" data-key="backquote" id='Backquote'>\`</div>
                          <div class="key digit" id="Digit1">1</div>
                          <div class="key digit" id="Digit2">2</div>
                          <div class="key digit" id="Digit3">3</div>
                          <div class="key digit" id="Digit4">4</div>
                          <div class="key digit" id="Digit5">5</div>
                          <div class="key digit" id="Digit6">6</div>
                          <div class="key digit" id="Digit7">7</div>
                          <div class="key digit" id="Digit8">8</div>
                          <div class="key digit" id="Digit9">9</div>
                          <div class="key digit" id="Digit0">0</div>
                          <div class="key symbol" id="Minus">-</div>
                          <div class="key symbol" id="Equal">=</div>
                          <div class="key control-key backspace" id="Backspace">Backspace</div>
                        </div>
                        <div class="row">
                          <div class="key control-key tab" id="Tab">Tab</div>
                          <div class="key letter" data-key="q" id="KeyQ"></div>
                          <div class="key letter" data-key="w" id="KeyW"></div>
                          <div class="key letter" data-key="e" id="KeyE"></div>
                          <div class="key letter" data-key="r" id="KeyR"></div>
                          <div class="key letter" data-key="t" id="KeyT"></div>
                          <div class="key letter" data-key="y" id="KeyY"></div>
                          <div class="key letter" data-key="u" id="KeyU"></div>
                          <div class="key letter" data-key="i" id="KeyI"></div>
                          <div class="key letter" data-key="o" id="KeyO"></div>
                          <div class="key letter" data-key="p" id="KeyP"></div>
                          <div class="key letter symbol" data-key="[" id="BracketLeft">[</div>
                          <div class="key letter symbol" data-key="]" id="BracketRight">]</div>
                          <div class="key symbol" id="Backslash">\\</div>
                          <div class="key control-key del" id="Delete">Del</div>
                        </div>
                        <div class="row">
                          <div class="key control-key capslock" id="CapsLock">Caps lock</div>
                          <div class="key letter" data-key="a" id="KeyA"></div>
                          <div class="key letter" data-key="s" id="KeyS"></div>
                          <div class="key letter" data-key="d" id="KeyD"></div>
                          <div class="key letter" data-key="f" id="KeyF"></div>
                          <div class="key letter" data-key="g" id="KeyG"></div>
                          <div class="key letter" data-key="h" id="KeyH"></div>
                          <div class="key letter" data-key="j" id="KeyJ"></div>
                          <div class="key letter" data-key="k" id="KeyK"></div>
                          <div class="key letter" data-key="l" id="KeyL"></div>
                          <div class="key letter symbol" data-key=";" id="Semicolon"></div>
                          <div class="key letter symbol" data-key="quotes" id="Quote"></div>
                          <div class="key control-key enter" id="Enter">Enter</div>
                        </div>
                        <div class="row">
                          <div class="key control-key shift" id="ShiftLeft">Shift</div>
                          <div class="key letter" data-key="z" id="KeyZ"></div>
                          <div class="key letter" data-key="x" id="KeyX"></div>
                          <div class="key letter" data-key="c" id="KeyC"></div>
                          <div class="key letter" data-key="v" id="KeyV"></div>
                          <div class="key letter" data-key="b" id="KeyB"></div>
                          <div class="key letter" data-key="n" id="KeyN"></div>
                          <div class="key letter" data-key="m" id="KeyM"></div>
                          <div class="key letter symbol" data-key="comma" id="Comma"></div>
                          <div class="key letter symbol" data-key="period" id="Period"></div>
                          <div class="key symbol" data-key="slash" id="Slash">/</div>
                          <div class="key control-key arrow" id="ArrowUp">↑</div>
                          <div class="key control-key shift" id="ShiftRight">Shift</div>
                        </div>
                        <div class="row">
                          <div class="key control-key ctrl-left" id="ControlLeft">Ctrl</div>
                          <div class="key control-key win" id="MetaLeft">⊞</div>
                          <div class="key control-key alt-left alt" id="AltLeft">Alt</div>
                          <div class="key space" id="Space"> </div>
                          <div class="key control-key alt" id="AltRight">Alt</div>
                          <div class="key control-key arrow" id="ArrowLeft">←</div>
                          <div class="key control-key arrow" id="ArrowDown">↓</div>
                          <div class="key control-key arrow" id="ArrowRight">→</div>
                          <div class="key control-key ctrl-right" id="ControlRight">Ctrl</div>
                        </div>
                      </section>
                    </main>`;
  return keyboard;
}
