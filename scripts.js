function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedElement = document.createElement("div");
    draggedElement.className = "electron";
    draggedElement.style.position = "absolute";
    draggedElement.style.left = event.offsetX + "px";
    draggedElement.style.top = event.offsetY + "px";
    event.target.appendChild(draggedElement);

    const electronsCount = event.target.querySelectorAll(".electron").length;

    const elementsData = {
        1: { name: "الهيدروجين", symbol: "H", atomicNumber: 1, atomicMass: "1.008", category: "لافلز", state: "غاز", description: "الهيدروجين هو أخف العناصر وأكثرها وفرة في الكون." },
        2: { name: "الهيليوم", symbol: "He", atomicNumber: 2, atomicMass: "4.0026", category: "غاز نبيل", state: "غاز", description: "الهيليوم يستخدم في البالونات والغازات المبردة." },
        3: { name: "الليثيوم", symbol: "Li", atomicNumber: 3, atomicMass: "6.94", category: "فلز قلوي", state: "صلب", description: "يستخدم الليثيوم في صناعة البطاريات القابلة لإعادة الشحن." },
        4: { name: "البيريليوم", symbol: "Be", atomicNumber: 4, atomicMass: "9.0122", category: "فلز قلوي ترابي", state: "صلب", description: "البيريليوم عنصر نادر يستخدم في صناعات الطيران والفضاء." },
        5: { name: "البورون", symbol: "B", atomicNumber: 5, atomicMass: "10.81", category: "شبه فلز", state: "صلب", description: "يستخدم البورون في صناعة الزجاج المقاوم للحرارة." },
        6: { name: "الكربون", symbol: "C", atomicNumber: 6, atomicMass: "12.011", category: "لافلز", state: "صلب", description: "الكربون هو العنصر الأساسي في جميع أشكال الحياة المعروفة." },
        7: { name: "النيتروجين", symbol: "N", atomicNumber: 7, atomicMass: "14.007", category: "لافلز", state: "غاز", description: "يشكل النيتروجين 78% من الغلاف الجوي للأرض." },
        8: { name: "الأكسجين", symbol: "O", atomicNumber: 8, atomicMass: "15.999", category: "لافلز", state: "غاز", description: "الأكسجين ضروري للحياة ويستخدم في عمليات التنفس." }
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

// لتحسين الدعم لأجهزة اللمس
function touchStart(event) {
    event.preventDefault();
    const draggedElement = event.target;
    event.dataTransfer.setData("text", draggedElement.id);
}

function touchMove(event) {
    event.preventDefault();
    const draggedElement = event.target;
    // تحسين ليدعم السحب على اللمس
    draggedElement.style.left = event.touches[0].clientX + "px";
    draggedElement.style.top = event.touches[0].clientY + "px";
}

function touchEnd(event) {
    event.preventDefault();
    const targetBox = document.querySelector("#electron-box");
    targetBox.appendChild(event.target);
}

document.querySelectorAll('.electron').forEach(function(el) {
    el.addEventListener("touchstart", touchStart);
    el.addEventListener("touchmove", touchMove);
    el.addEventListener("touchend", touchEnd);
});
