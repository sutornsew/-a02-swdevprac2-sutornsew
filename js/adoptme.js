const form = document.getElementById("retard-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const petCount = document.getElementById("pet-count").value;
    const disclaimer = document.getElementById("disclaimer").checked;
    if (petCount === "" || petCount <= 0 || petCount >= 100) {
        alert("ระบุจำนวนสัตว์เลี้ยงเป็นตัวเลขตั้งแต่ 1 ถึง 99 เท่านั้น [1, 99]");
        return;
    }

    if (!disclaimer) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        return;
    }

    alert("กรอกฟอร์มสำเร็จ")
    form.submit();
});