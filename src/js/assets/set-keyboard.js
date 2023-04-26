export default function setKeyboard() {
  const keyboard = `<main class="wrapper">
                      <h1 class="title">RSS Виртуальная клавиатура</h1>
                      <textarea class="textarea" id="textarea" cols="50" rows="5"></textarea>
                      <section class="keyboard">
                        <div class="row">
                          <div class="key" data-key="backquote" id='Backquote'>\`</div>
                          <div class="key" id="Digit1">1</div>
                          <div class="key" id="Digit2">2</div>
                          <div class="key" id="Digit3">3</div>
                          <div class="key" id="Digit4">4</div>
                          <div class="key" id="Digit5">5</div>
                          <div class="key" id="Digit6">6</div>
                          <div class="key" id="Digit7">7</div>
                          <div class="key" id="Digit8">8</div>
                          <div class="key" id="Digit9">9</div>
                          <div class="key" id="Digit0">0</div>
                          <div class="key" id="Minus">-</div>
                          <div class="key" id="Equal">=</div>
                          <div class="key" id="Backspace">Backspace</div>
                        </div>
                        <div class="row">
                          <div class="key" id="Tab">Tab</div>
                          <div class="key" data-key="q" id="KeyQ"></div>
                          <div class="key" data-key="w" id="KeyW"></div>
                          <div class="key" data-key="e" id="KeyE"></div>
                          <div class="key" data-key="r" id="KeyR"></div>
                          <div class="key" data-key="t" id="KeyT"></div>
                          <div class="key" data-key="y" id="KeyY"></div>
                          <div class="key" data-key="u" id="KeyU"></div>
                          <div class="key" data-key="i" id="KeyI"></div>
                          <div class="key" data-key="o" id="KeyO"></div>
                          <div class="key" data-key="p" id="KeyP"></div>
                          <div class="key" data-key="[" id="BracketLeft">[</div>
                          <div class="key" data-key="]" id="BracketRight">]</div>
                          <div class="key" id="Backslash">\\</div>
                          <div class="key" id="Delete">Del</div>
                        </div>
                        <div class="row">
                          <div class="key" id="CapsLock">Caps lock</div>
                          <div class="key" data-key="a" id="KeyA"></div>
                          <div class="key" data-key="s" id="KeyS"></div>
                          <div class="key" data-key="d" id="KeyD"></div>
                          <div class="key" data-key="f" id="KeyF"></div>
                          <div class="key" data-key="g" id="KeyG"></div>
                          <div class="key" data-key="h" id="KeyH"></div>
                          <div class="key" data-key="j" id="KeyJ"></div>
                          <div class="key" data-key="k" id="KeyK"></div>
                          <div class="key" data-key="l" id="KeyL"></div>
                          <div class="key" data-key=";" id="Semicolon"></div>
                          <div class="key" data-key="quotes" id="Quote"></div>
                          <div class="key" id="Enter">Enter</div>
                        </div>
                        <div class="row">
                          <div class="key" id="ShiftLeft">Shift</div>
                          <div class="key" data-key="z" id="KeyZ"></div>
                          <div class="key" data-key="x" id="KeyX"></div>
                          <div class="key" data-key="c" id="KeyC"></div>
                          <div class="key" data-key="v" id="KeyV"></div>
                          <div class="key" data-key="b" id="KeyB"></div>
                          <div class="key" data-key="n" id="KeyN"></div>
                          <div class="key" data-key="m" id="KeyM"></div>
                          <div class="key" data-key="comma" id="Comma"></div>
                          <div class="key" data-key="period" id="Period"></div>
                          <div class="key" data-key="slash" id="Slash">/</div>
                          <div class="key" id="ArrowUp">↑</div>
                          <div class="key" id="ShiftRight">Shift</div>
                        </div>
                        <div class="row">
                          <div class="key" id="ControlLeft">Ctrl</div>
                          <div class="key" id="MetaLeft">Win</div>
                          <div class="key" id="AltLeft">Alt</div>
                          <div class="key" id="Space"> </div>
                          <div class="key" id="AltRight">Alt</div>
                          <div class="key" id="ArrowLeft">←</div>
                          <div class="key" id="ArrowDown">↓</div>
                          <div class="key" id="ArrowRight">→</div>
                          <div class="key" id="ControlRight">Ctrl</div>
                        </div>
                      </section>
                    </main>`;
  return keyboard;
}
