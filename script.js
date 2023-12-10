document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const balance = document.getElementById("balance");
    const input = document.getElementById("input");
    const cashAppIcon = document.getElementById("cashappiconm");
    let money = localStorage.getItem("money");
    let def1 = 2.5;
    let def2 = 2;

    if (money === null) {
        money = 0;
        localStorage.setItem("money", money);
    }

    balance.innerHTML = formatBalance(money);
    input.value = money;

    if (title) {
        title.addEventListener("click", refresh);
    }

    function refresh() {
        window.location.href = "index.html";
    }

    function formatBalance(amount) {
        let formattedBalance = "";
        if (amount >= 1000000) {
            formattedBalance = "$" + (amount / 1000000).toFixed(1) + "M";
        } else if (amount >= 1000) {
            formattedBalance = "$" + (amount / 1000).toFixed(1) + "K";
        } else {
            formattedBalance = "$" + amount;
        }
        return formattedBalance;
    }

    function updateAnimationSpeed(balanceValue) {
        def1 = 2.5 - (balanceValue * 0.0001); // Adjusting the duration based on balance
        def2 = 2 - (balanceValue * 0.00008); // Adjusting the duration based on balance
        cashAppIcon.style.animation = `-webkit-animation: heartbeat ${def1}s ease-in-out 1s infinite both; animation: heartbeat ${def2}s ease-in-out infinite both;`;
    }

    input.addEventListener("input", function() {
        const inputValue = parseFloat(input.value); // Parse input value as a float
        balance.innerHTML = formatBalance(inputValue);
        updateAnimationSpeed(inputValue); // Update animation speed based on balance
        
        money = inputValue;
        localStorage.setItem("money", money);
    });
});