// --- DATA SOAL ARAH MATA ANGIN & DERAJATNYA ---
const compassData = [
    { name: "Utara (North)", degree: "0°" },
    { name: "Timur Laut (Northeast)", degree: "45°" },
    { name: "Timur (East)", degree: "90°" },
    { name: "Tenggara (Southeast)", degree: "135°" },
    { name: "Selatan (South)", degree: "180°" },
    { name: "Barat Daya (Southwest)", degree: "225°" },
    { name: "Barat (West)", degree: "270°" },
    { name: "Barat Laut (Northwest)", degree: "315°" }
];

// --- STATE PERMAINAN ---
let currentQuestionIndex = 0;
let score = 0;
let questionsList = [];
const TOTAL_QUESTIONS = 5;

// --- AMBIL ELEMEN DOM ---
const questionNumberEl = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const directionTarget = document.getElementById("direction-target");
const optionsGrid = document.getElementById("options-grid");
const btnNext = document.getElementById("btn-next");

// --- ACAK ARRAY (SHUFFLE) ---
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// --- MULAI / RESET GAME ---
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    questionsList = shuffleArray(compassData).slice(0, TOTAL_QUESTIONS);
    loadQuestion();
}

// --- MUAT SOAL ---
function loadQuestion() {
    btnNext.classList.add("hidden");
    const currentQ = questionsList[currentQuestionIndex];

    questionNumberEl.textContent = `${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS}`;
    directionTarget.textContent = currentQ.name;

    // Buat pilihan jawaban (1 benar, 3 pengecoh acak)
    const correctAnswer = currentQ.degree;
    const wrongAnswers = compassData
        .filter((item) => item.degree !== correctAnswer)
        .map((item) => item.degree);

    const shuffledWrong = shuffleArray(wrongAnswers).slice(0, 3);
    const options = shuffleArray([correctAnswer, ...shuffledWrong]);

    // Render Tombol Pilihan
    optionsGrid.innerHTML = "";
    options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.textContent = opt;
        
        btn.addEventListener("click", () => handleAnswer(opt, correctAnswer, btn));
        optionsGrid.appendChild(btn);
    });
}

// --- PROSES JAWABAN ---
function handleAnswer(selected, correct, clickedBtn) {
    // Matikan semua tombol opsi setelah dipilih
    const allButtons = optionsGrid.querySelectorAll(".option-btn");
    allButtons.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
        }
    });

    if (selected === correct) {
        score += 20;
        scoreDisplay.textContent = score;
    } else {
        clickedBtn.classList.add("wrong");
    }

    // Tampilkan tombol lanjut atau selesai
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        btnNext.textContent = "➡️ LANJUT SOAL BERIKUTNYA";
    } else {
        btnNext.textContent = "🏆 LIHAT HASIL AKHIR";
    }
    btnNext.classList.remove("hidden");
}

// --- EVENT TOMBOL LANJUT ---
btnNext.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
        loadQuestion();
    } else {
        alert(`Kuis Selesai! Skor akhir kamu: ${score} dari 100 🎉`);
        initGame();
    }
});

// Inisialisasi awal permainan
initGame();
