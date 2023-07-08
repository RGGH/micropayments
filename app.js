
async function getInfo() {
    if (typeof window.webln === "undefined") {
        return alert("No WebLN available.");
    }

    try {
        await window.webln.enable();
        const info = await window.webln.getInfo();
        showResult(info);
        celebrate();
    } catch (error) {
        console.log(error);
        alert("An error occurred during the getInfo() call.");
    }
}

function showResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = JSON.stringify(result, null, 4);
    resultElement.style.display = "block";
}

function celebrate() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ emojis: ["⚡"] });
}


async function keysend() {
    if (typeof window.webln === "undefined") {
        return alert("No WebLN available.");
    }

    try {
        await window.webln.enable();
        const result = await webln.keysend({
            destination: "03006fcf3312dae8d068ea297f58e2bd00ec1ffe214b793eda46966b6294a53ce6",
            amount: "1",
            customRecords: {
                "34349334": "Hello! ⚡"
            }
        });
        showResult(result);
        celebrate();
    } catch (error) {
        throw error;
        alert("User denied permission or cancelled.");
    }
}