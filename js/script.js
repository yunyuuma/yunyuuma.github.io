function showSection(id) {
    const sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    showSection("about");
    const savedDiary = localStorage.getItem("myDiary");
    if (savedDiary) {
        document.getElementById("diaryText").value = savedDiary;
    }
});

// 日記
// ページ読み込み
document.addEventListener("DOMContentLoaded", function () {
    showSection("home");

    const today = new Date().toISOString().split("T")[0];
    document.getElementById("diaryDate").value = today;

    loadDiary();
});

// 日付変更時に読み込み
document.getElementById("diaryDate").addEventListener("change", loadDiary);

// 日記保存（1日1件）
function saveDiary() {
    const date = document.getElementById("diaryDate").value;
    const text = document.getElementById("diaryText").value;

    if (!date) {
        alert("日付を選択してください");
        return;
    }

    localStorage.setItem("diary-" + date, text);
    document.getElementById("savedMessage").innerText = "保存しました！";
}

// 日記読み込み
function loadDiary() {
    const date = document.getElementById("diaryDate").value;
    const savedText = localStorage.getItem("diary-" + date);

    document.getElementById("diaryText").value = savedText ? savedText : "";
}


function previewImage(event, previewId) {
    const reader = new FileReader();
    reader.onload = function(){
        document.getElementById(previewId).src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}


function toggleHobby(element) {
    const detail = element.querySelector(".hobby-detail");

    if (detail.style.maxHeight) {
        detail.style.maxHeight = null;
    } else {
        detail.style.maxHeight = detail.scrollHeight + "px";
    }
}

/*home*/
document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById('homeSkillChart');

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['発想力','論理性','挑戦力','継続力','分析力'],
        datasets: [{
            data: [60, 95, 85, 30, 85],
            backgroundColor: 'rgba(255,99,132,0.3)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        scales: {
            r: {
                min: 0,          
                max: 100,       
                ticks: {
                    stepSize: 20,   
                    color: "white",
                    backdropColor: "transparent"
                },
                pointLabels: {
                    color: "white",
                    font: { size: 14 }
                },
                grid: {
                    color: "rgba(255,255,255,0.2)"
                },
                angleLines: {
                    color: "rgba(255,255,255,0.2)"
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});


});

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el));

function showSection(id) {

    // 全セクション非表示
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });

    // 指定セクション表示
    const activeSection = document.getElementById(id);
    activeSection.style.display = 'block';

    // ===== フェード再実行 =====
    const fadeElements = activeSection.querySelectorAll('.fade-in');

    // 一度リセット
    fadeElements.forEach(el => {
        el.classList.remove('show');
    });

    // 順番に表示（スタッガー演出）
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 150);
    });
}

