export default function setKeyboard() {
  const keyboard = `<main class="wrapper">
                      <div class="icon">
                        <svg class="sound-on" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 8.00022C15.621 8.46595 16.125 9.06987 16.4721 9.76415C16.8193 10.4584 17 11.224 17 12.0002C17 12.7764 16.8193 13.542 16.4721 14.2363C16.125 14.9306 15.621 15.5345 15 16.0002M17.7 5.00022C18.744 5.84387 19.586 6.91034 20.1645 8.12154C20.7429 9.33273 21.0431 10.658 21.0431 12.0002C21.0431 13.3425 20.7429 14.6677 20.1645 15.8789C19.586 17.0901 18.744 18.1566 17.7 19.0002M6 15.0002H4C3.73478 15.0002 3.48043 14.8949 3.29289 14.7073C3.10536 14.5198 3 14.2654 3 14.0002V10.0002C3 9.735 3.10536 9.48065 3.29289 9.29311C3.48043 9.10557 3.73478 9.00022 4 9.00022H6L9.5 4.50022C9.5874 4.33045 9.73265 4.19754 9.90949 4.12551C10.0863 4.05348 10.2831 4.04708 10.4643 4.10746C10.6454 4.16784 10.799 4.29103 10.8972 4.45476C10.9955 4.61849 11.0319 4.81196 11 5.00022V19.0002C11.0319 19.1885 10.9955 19.3819 10.8972 19.5457C10.799 19.7094 10.6454 19.8326 10.4643 19.893C10.2831 19.9534 10.0863 19.947 9.90949 19.8749C9.73265 19.8029 9.5874 19.67 9.5 19.5002L6 15.0002Z" stroke="#afafaf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="sound-off" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 10.0002L20 14.0002M20 10.0002L16 14.0002M6 15.0002H4C3.73478 15.0002 3.48043 14.8949 3.29289 14.7073C3.10536 14.5198 3 14.2654 3 14.0002V10.0002C3 9.735 3.10536 9.48065 3.29289 9.29311C3.48043 9.10557 3.73478 9.00022 4 9.00022H6L9.5 4.50022C9.5874 4.33045 9.73265 4.19754 9.90949 4.12551C10.0863 4.05348 10.2831 4.04708 10.4643 4.10746C10.6454 4.16784 10.799 4.29103 10.8972 4.45476C10.9955 4.61849 11.0319 4.81196 11 5.00022V19.0002C11.0319 19.1885 10.9955 19.3819 10.8972 19.5457C10.799 19.7094 10.6454 19.8326 10.4643 19.893C10.2831 19.9534 10.0863 19.947 9.90949 19.8749C9.73265 19.8029 9.5874 19.67 9.5 19.5002L6 15.0002Z" stroke="#afafaf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
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
