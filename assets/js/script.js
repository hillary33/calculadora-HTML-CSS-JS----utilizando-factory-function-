function createCalc() {
    return {
        display: document.querySelector('.display'),        
        start() {
            this.clickButtons();
            this.pressEnter();
            this.pressBackSpace();
        },

        pressBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.total();
                }
            })
        },
        
        total () {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                
                if(!conta) {
                    alert('Conta invalida ');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta invalida');
                return;
            }
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne () {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnStopDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.total();
                }
                this.display.focus();
          });
        },
        btnStopDisplay(valor) {
            this.display.value += valor;

        }
    };
}

const calc = createCalc();
calc.start();