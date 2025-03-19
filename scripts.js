let selectedElectron = null;

function drag(event) {
    selectedElectron = event.target;
}

function allowDrop(event) {
    event.preventDefault();
}

// دعم اللمس على الهواتف
document.addEventListener("touchstart", function(event) {
    if (event.target.classList.contains("electron")) {
        selectedElectron = event.target;
    }
});

document.addEventListener("touchmove", function(event) {
    if (selectedElectron) {
        let touch = event.touches[0];
        selectedElectron.style.position = "absolute";
        selectedElectron.style.left = touch.clientX - 10 + "px";
        selectedElectron.style.top = touch.clientY - 10 + "px";
    }
});

document.addEventListener("touchend", function(event) {
    selectedElectron = null;
});

function drop(event) {
    event.preventDefault();
    if (!selectedElectron) return;

    // وضع الإلكترون داخل المدار
    const newElectron = document.createElement("div");
    newElectron.className = "electron";
    newElectron.style.position = "absolute";
    newElectron.style.left = event.offsetX + "px";
    newElectron.style.top = event.offsetY + "px";
    event.target.appendChild(newElectron);

    // التحقق من عدد الإلكترونات وعرض اسم العنصر
    checkElement(event.target);
}

function checkElement(target) {
    const electronsCount = target.querySelectorAll(".electron").length;

    const elementsData = {
        1: { name: "الهيدروجين", symbol: "H", atomicNumber: 1, description: "أخف العناصر وأكثرها وفرة في الكون." },
        2: { name: "الهيليوم", symbol: "He", atomicNumber: 2, description: "غاز نبيل يستخدم في البالونات والمبردات." },
        3: { name: "الليثيوم", symbol: "Li", atomicNumber: 3, description: "يستخدم في صناعة البطاريات القابلة لإعادة الشحن." },
        4: { name: "البيريليوم", symbol: "Be", atomicNumber: 4, description: "يستخدم في صناعات الطيران والفضاء." },
        5: { name: "البورون", symbol: "B", atomicNumber: 5, description: "يدخل في صناعة الزجاج المقاوم للحرارة." },
        6: { name: "الكربون", symbol: "C", atomicNumber: 6, description: "أساس الحياة ويستخدم في العديد من المركبات العضوية." },
        7: { name: "النيتروجين", symbol: "N", atomicNumber: 7, description: "يشكل 78% من الغلاف الجوي." },
        8: { name: "الأكسجين", symbol: "O", atomicNumber: 8, description: "ضروري لعملية التنفس." }
    };

    const elementInfo = document.getElementById("element-info");

    if (elementsData[electronsCount]) {
        elementInfo.innerHTML = `
            <h3>معلومات العنصر:</h3>
            <strong>اسم العنصر:</strong> ${elementsData[electronsCount].name} <br>
            <strong>الرمز الكيميائي:</strong> ${elementsData[electronsCount].symbol} <br>
            <strong>العدد الذري:</strong> ${elementsData[electronsCount].atomicNumber} <br>
            <strong>الوصف:</strong> ${elementsData[electronsCount].description}
        `;
    }
}
