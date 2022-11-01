const counterValueEl = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action ="increment"]');

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
}
decrementBtn.addEventListener("click", () => {    
    counter.decrement();
    counterValueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", () => {    
    counter.increment();
    counterValueEl.textContent = counter.value;
});