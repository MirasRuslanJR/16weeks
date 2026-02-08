// ============================================
// HARDCODED 16-WEEK PLAN (READ-ONLY)
// ============================================

const plan16weeks = {
  "plan16weeks": [
    {
      "week": 1,
      "summary": "Старт: внедрить рутину, диета, начать тренировки и CF-рутину; mini-release фронтенда (navbar).",
      "days": [
        {"day": "Понедельник", "blocks": [
          {"block": "Блок0", "title": "Восстановление", "tasks": ["Поесть", "20 мин неэкранного отдыха"]},
          {"block": "Блок1", "title": "Учеба (90 мин)", "tasks": ["Математика: 2 Pomodoro, 1 тема + 3 задания"]},
          {"block": "Блок2", "title": "ДЗ (60 мин)", "tasks": ["Закрыть дедлайны"]},
          {"block": "Блок3", "title": "Тренировка A", "tasks": ["Приседания, отжимания, тяга, планка — записать повторы"]},
          {"block": "Блок4", "title": "Отдых", "tasks": ["Белковый перекус, запись самочувствия"]}
        ]},
        {"day": "Вторник", "blocks": [
          {"block": "Блок0", "title": "Восстановление", "tasks": ["Перекус, немного отдыха"]},
          {"block": "Блок1", "title": "Учеба", "tasks": ["Физика: 2 Pomodoro"]},
          {"block": "Блок2", "title": "ДЗ", "tasks": ["Закрыть обязательные задания"]},
          {"block": "Блок3", "title": "CF", "tasks": ["2 задачи: 1 easy + 1 medium, разбор"]},
          {"block": "Блок4", "title": "Отдых", "tasks": []}
        ]},
        {"day": "Среда", "blocks": [
          {"block": "Блок0", "title": "Восстановление", "tasks": []},
          {"block": "Блок1", "title": "Учеба", "tasks": ["Химия / Казахский: 2 Pomodoro"]},
          {"block": "Блок2", "title": "ДЗ", "tasks": []},
          {"block": "Блок3", "title": "JS базовые", "tasks": ["Переменные, операции, 30–45 мин практика"]},
          {"block": "Блок4", "title": "Отдых", "tasks": []}
        ]},
        {"day": "Четверг", "blocks": [
          {"block": "Блок0", "title": "Восстановление", "tasks": []},
          {"block": "Блок1", "title": "Учеба", "tasks": ["Право / повторение математики"]},
          {"block": "Блок2", "title": "ДЗ", "tasks": []},
          {"block": "Блок3", "title": "CF", "tasks": ["1 задача + разбор прошлых решений"]},
          {"block": "Блок4", "title": "Отдых", "tasks": []}
        ]},
        {"day": "Пятница", "blocks": [
          {"block": "Блок0", "title": "Восстановление", "tasks": []},
          {"block": "Блок1", "title": "Короткий учебный блок", "tasks": ["45–60 мин подготовка"]},
          {"block": "Блок2", "title": "ДЗ", "tasks": []},
          {"block": "Блок3", "title": "Frontend", "tasks": ["Сделать navbar и простую страницу (HTML+CSS). Мини-релиз."]},
          {"block": "Блок4", "title": "Отдых", "tasks": []}
        ]},
        {"day": "Суббота", "blocks": [
          {"block": "Утро", "title": "Тренировка B", "tasks": ["Тренировка ног/тяга — 60 мин"]},
          {"block": "День", "title": "Проект/CapEducation", "tasks": ["2–3 часа фронтенд-проекта или курс"]},
          {"block": "Вечер", "title": "Отдых", "tasks": []}
        ]},
        {"day": "Воскресенье", "blocks": [
          {"block": "Утро", "title": "Лёгкая активность", "tasks": ["Прогулка или растяжка"]},
          {"block": "День", "title": "Ревью недели", "tasks": ["Вес/замеры, задачи CF, прогресс по курсу, оценки. План на следующую неделю."]}
        ]}
      ]
    },
    {
      "week": 2,
      "summary": "Закрепление рутин; CF 3–4 задач; DOM основы.",
      "days": [
        {"day": "Понедельник", "blocks": [{"block":"Блок1","title":"Математика","tasks":["2 Pomodoro"]},{"block":"Блок3","title":"Тренировка A","tasks":["как в программе"]}]},
        {"day": "Вторник", "blocks": [{"block":"Блок1","title":"Физика","tasks":["2 Pomodoro"]},{"block":"Блок3","title":"CF","tasks":["2 задачи + разбор"]}]},
        {"day": "Среда", "blocks": [{"block":"Блок1","title":"Химия/Казахский","tasks":["2 Pomodoro"]},{"block":"Блок3","title":"JS DOM","tasks":["простое изменение элементов"]}]},
        {"day": "Четверг", "blocks": [{"block":"Блок1","title":"Право/повтор","tasks":[]},{"block":"Блок3","title":"CF","tasks":["1 задача"]}]},
        {"day": "Пятница", "blocks": [{"block":"Блок1","title":"Учёба","tasks":["короткий блок"]},{"block":"Блок3","title":"Frontend","tasks":["интерактивная кнопка (onclick). Релиз."]}]},
        {"day": "Суббота", "blocks": [{"block":"Утро","title":"Тренировка C","tasks":["60 мин"]},{"block":"День","title":"Проект","tasks":["работа над мини-проектом"]}]},
        {"day": "Воскресенье", "blocks": [{"block":"День","title":"Ревью","tasks":["анализ недели"]}]}
      ]
    },
    {
      "week": 3,
      "summary": "Увеличить интенсивность тренировок; форма в Frontend; CF: добавить 1 medium.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Математика","tasks":["2 Pomodoro"]},{"block":"Блок3","title":"Тренировка A","tasks":["увеличить 1 подход/повтор"]}]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["2 задачи (одна средняя) + разбор"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"JS","tasks":["event listeners, DOM"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Физика / Повтор","tasks":[]},{"block":"Блок3","title":"CF","tasks":["1 задача"]}]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Frontend","tasks":["Форма обратной связи + валидция JS"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Cap Education","tasks":["1–2 урока"]}]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":["настроить трекер"]}]}
      ]
    },
    {
      "week": 4,
      "summary": "Завершить мини-проект (форма) + deploy (GitHub Pages), virtual CF contest 1.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["разбор"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Deploy","tasks":["git push → gh-pages"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Finish mini-project","tasks":["README, релиз"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Подготовка к хакатону","tasks":["репетиция"]}]},
        {"day":"Воскресенье","blocks":[{"block":"Блок3","title":"Virtual CF contest","tasks":["симуляция, ревью"]}]}
      ]
    },
    {
      "week": 5,
      "summary": "Начать backend basics (Express или имитация); CF — maps/sets.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["3 задачи (включая DS)"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Backend basics","tasks":["простой API GET/POST (учебный пример)"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок3","title":"JS + localStorage","tasks":["сохранение формы"]}]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Frontend","tasks":["интеграция формы с локальным API"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Cap Education","tasks":["уроки"]}]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 6,
      "summary": "Прогрессия в тренировках; CF графы (BFS/DFS); fetch + JSON.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":["увеличить нагрузку"]}]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["2 medium + 1 easy"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"JS Fetch","tasks":["работа с JSON"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Mini-relase","tasks":["страница + fetch (отображать список)"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Проект","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 7,
      "summary": "DSU, backend простая база (Firestore/imitation), virtual CF 2.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["DSU практика"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Backend","tasks":["сохранение данных (имитация)"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок3","title":"JS + UI","tasks":["улучшения интерфейса"]}]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Frontend","tasks":["редактирование/удаление записей (локально)"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Подготовка к хакатону","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Virtual contest / ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 8,
      "summary": "Mid-term ревью: усилить учебные блоки, начать React basics (опционально).",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба (контрольные)","tasks":[]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["повторение слабых тем"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"React basics","tasks":["компоненты/props или продолжение vanilla JS"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"React component","tasks":["завершение маленького компонента"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Cap Education","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":["усиление учебных блоков при падении оценок"]}]}
      ]
    },
    {
      "week": 9,
      "summary": "1D DP основы; React state; controlled components.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["1 DP easy + 1 medium"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"React state","tasks":["controlled components"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Mini-relase","tasks":["React форма + запись в localStorage"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Задачи","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 10,
      "summary": "Комбинированные задачи; backend: простая аутентификация (имитация/Firebase опц.).",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["2–3 задачи"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Backend auth (имитация)","tasks":["логин/регистрация UI (учебно)"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Frontend + auth","tasks":["подключение UI логина/регистрации"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Cap Education","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 11,
      "summary": "Алгоритмы смешанного типа; адаптивный дизайн (CSS flex/grid).",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка A","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["разбор задач"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"CSS адаптивность","tasks":["flex/grid"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Mini-relase","tasks":["адаптивная страница (показать на телефоне)"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Проект","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 12,
      "summary": "Завершить Cap Education или ключевые модули; подготовка к хакатону (MVP + шаблоны).",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF virtual","tasks":["симуляция"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Завершение курса","tasks":["проходить оставшиеся модули"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок3","title":"Подготовка шаблонов хакатона","tasks":["auth + db + deploy шаблоны"]}]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Релиз проекта","tasks":["публичный демонстрационный билд"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Репетиция презентации","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью и план хакатона","tasks":[]} ]}
      ]
    },
    {
      "week": 13,
      "summary": "Соревнования/хакатоны; усиленная подготовка проблемных школьных предметов.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":["2 Pomodoro по математике"]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["подготовка кейса хакатона"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Хакатон/проект","tasks":["MVP или доработка"]}]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Frontend polishing","tasks":[]} ]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Хакатон/демо","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 14,
      "summary": "Исправление оценок; ревизия прогресса массы; корректировка питания.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":["математика/физика"]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"CF","tasks":["разбор ошибок"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Cap Education / повтор","tasks":[]} ]},
        {"day":"Четверг","blocks":[{"block":"Блок3","title":"Frontend + багфиксы","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Mini-contest","tasks":["тестовое прокачивание"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка C","tasks":[]},{"block":"Блок3","title":"Репетиция","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":["если вес не растёт — пересчитать калории"]}]}
      ]
    },
    {
      "week": 15,
      "summary": "Заключительный прогон: виртуальный CF контест; подготовка итоговых школьных работ.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":[]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок3","title":"Большой CF контест","tasks":["симуляция"]}]},
        {"day":"Среда","blocks":[{"block":"Блок3","title":"Разбор контеста","tasks":[]} ]},
        {"day":"Четверг","blocks":[{"block":"Блок3","title":"Итоговые работы","tasks":["завершение презентаций и эссе"]}]},
        {"day":"Пятница","blocks":[{"block":"Блок3","title":"Финальный релиз проекта","tasks":[]} ]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Тренировка B","tasks":[]},{"block":"Блок3","title":"Отдых","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Ревью","tasks":[]} ]}
      ]
    },
    {
      "week": 16,
      "summary": "Финиш: ревизия оценок, финальные дз, лёгкая нагрузка, упаковка проектов к 1 июня.",
      "days": [
        {"day":"Понедельник","blocks":[{"block":"Блок1","title":"Учёба","tasks":["90 мин главной учёбы"]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Вторник","blocks":[{"block":"Блок1","title":"Учёба","tasks":["90 мин главной учёбы"]},{"block":"Блок3","title":"CF/Frontend","tasks":["по очереди 60 мин"]}]},
        {"day":"Среда","blocks":[{"block":"Блок1","title":"Учёба","tasks":["90 мин"]},{"block":"Блок3","title":"Тренировка","tasks":[]} ]},
        {"day":"Четверг","blocks":[{"block":"Блок1","title":"Учёба","tasks":["90 мин"]},{"block":"Блок3","title":"CF/Frontend","tasks":[]} ]},
        {"day":"Пятница","blocks":[{"block":"Блок1","title":"Учёба","tasks":["90 мин"]},{"block":"Блок3","title":"Финальный релиз","tasks":["упаковка проектов (README, demo links)"]}]},
        {"day":"Суббота","blocks":[{"block":"Блок1","title":"Лёгкая тренировка","tasks":[]},{"block":"Блок3","title":"Подготовка на лето","tasks":[]} ]},
        {"day":"Воскресенье","blocks":[{"block":"День","title":"Финальное ревью","tasks":["итоговые метрики, план на лето"]}]}
      ]
    }
  ]
};

// ============================================
// APPLICATION STATE
// ============================================

const AppState = {
    currentPage: 'dashboard',
    currentWeek: 1,
    
    // Personal data stored in localStorage
    notes: [],
    trainingLog: [],
    cfTracker: [],
    pomodoroHistory: [],
    
    // Pomodoro timer state
    pomodoroTimer: {
        workDuration: 25 * 60, // seconds
        breakDuration: 5 * 60,
        currentTime: 25 * 60,
        isRunning: false,
        isBreak: false,
        interval: null
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadDataFromLocalStorage();
    initNavigation();
    initPlanView();
    initNotes();
    initPomodoro();
    initTraining();
    initCFTracker();
    initExport();
    updateDashboard();
    
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});

// ============================================
// LOCALSTORAGE MANAGEMENT
// ============================================

function loadDataFromLocalStorage() {
    AppState.notes = JSON.parse(localStorage.getItem('notes')) || [];
    AppState.trainingLog = JSON.parse(localStorage.getItem('trainingLog')) || [];
    AppState.cfTracker = JSON.parse(localStorage.getItem('cfTracker')) || [];
    AppState.pomodoroHistory = JSON.parse(localStorage.getItem('pomodoroHistory')) || [];
    AppState.currentWeek = parseInt(localStorage.getItem('currentWeek')) || 1;
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateToPage(page);
            
            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');
        });
    });
}

function navigateToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    document.getElementById(`page-${page}`).classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    AppState.currentPage = page;
}

// ============================================
// PLAN VIEW (READ-ONLY)
// ============================================

function initPlanView() {
    const container = document.getElementById('planContainer');
    const weeks = plan16weeks.plan16weeks;
    
    weeks.forEach(weekData => {
        const weekElement = createWeekElement(weekData);
        container.appendChild(weekElement);
    });
}

function createWeekElement(weekData) {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'week-item';
    
    const header = document.createElement('div');
    header.className = 'week-header';
    header.innerHTML = `
        <div>
            <h3>Неделя ${weekData.week}</h3>
            <div class="week-summary">${weekData.summary}</div>
        </div>
        <span class="toggle-icon">▼</span>
    `;
    
    const content = document.createElement('div');
    content.className = 'week-content';
    
    weekData.days.forEach(dayData => {
        const dayElement = createDayElement(dayData);
        content.appendChild(dayElement);
    });
    
    header.addEventListener('click', () => {
        weekDiv.classList.toggle('expanded');
    });
    
    weekDiv.appendChild(header);
    weekDiv.appendChild(content);
    
    return weekDiv;
}

function createDayElement(dayData) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day-item';
    
    const dayTitle = document.createElement('div');
    dayTitle.className = 'day-title';
    dayTitle.textContent = dayData.day;
    dayDiv.appendChild(dayTitle);
    
    dayData.blocks.forEach(blockData => {
        const blockDiv = document.createElement('div');
        blockDiv.className = 'block-item';
        
        const blockHeader = document.createElement('div');
        blockHeader.className = 'block-header';
        blockHeader.textContent = `${blockData.block}: ${blockData.title}`;
        blockDiv.appendChild(blockHeader);
        
        if (blockData.tasks && blockData.tasks.length > 0) {
            const tasksList = document.createElement('ul');
            tasksList.className = 'block-tasks';
            
            blockData.tasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task;
                tasksList.appendChild(taskItem);
            });
            
            blockDiv.appendChild(tasksList);
        }
        
        dayDiv.appendChild(blockDiv);
    });
    
    return dayDiv;
}

// ============================================
// NOTES SECTION
// ============================================

function initNotes() {
    const addBtn = document.getElementById('addNoteBtn');
    
    addBtn.addEventListener('click', addNote);
    renderNotes();
}

function addNote() {
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!title || !content) {
        alert('Пожалуйста, заполните заголовок и содержание заметки');
        return;
    }
    
    const note = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toISOString()
    };
    
    AppState.notes.unshift(note);
    saveToLocalStorage('notes', AppState.notes);
    
    titleInput.value = '';
    contentInput.value = '';
    
    renderNotes();
    updateDashboard();
}

function deleteNote(id) {
    AppState.notes = AppState.notes.filter(note => note.id !== id);
    saveToLocalStorage('notes', AppState.notes);
    renderNotes();
    updateDashboard();
}

function renderNotes() {
    const container = document.getElementById('notesList');
    container.innerHTML = '';
    
    if (AppState.notes.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Нет заметок. Добавьте свою первую заметку!</p>';
        return;
    }
    
    AppState.notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        
        noteDiv.innerHTML = `
            <div class="note-header">
                <div>
                    <div class="note-title">${escapeHtml(note.title)}</div>
                    <div class="note-date">${formatDate(note.date)}</div>
                </div>
                <button class="btn btn-danger" onclick="deleteNote(${note.id})">Удалить</button>
            </div>
            <div class="note-content">${escapeHtml(note.content)}</div>
        `;
        
        container.appendChild(noteDiv);
    });
}

// ============================================
// POMODORO TIMER
// ============================================

function initPomodoro() {
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const workInput = document.getElementById('workDuration');
    const breakInput = document.getElementById('breakDuration');
    
    startBtn.addEventListener('click', startPomodoro);
    pauseBtn.addEventListener('click', pausePomodoro);
    resetBtn.addEventListener('click', resetPomodoro);
    
    workInput.addEventListener('change', () => {
        AppState.pomodoroTimer.workDuration = parseInt(workInput.value) * 60;
        if (!AppState.pomodoroTimer.isRunning && !AppState.pomodoroTimer.isBreak) {
            AppState.pomodoroTimer.currentTime = AppState.pomodoroTimer.workDuration;
            updateTimerDisplay();
        }
    });
    
    breakInput.addEventListener('change', () => {
        AppState.pomodoroTimer.breakDuration = parseInt(breakInput.value) * 60;
    });
    
    renderPomodoroHistory();
    updateTimerDisplay();
}

function startPomodoro() {
    if (AppState.pomodoroTimer.isRunning) return;
    
    AppState.pomodoroTimer.isRunning = true;
    
    AppState.pomodoroTimer.interval = setInterval(() => {
        AppState.pomodoroTimer.currentTime--;
        updateTimerDisplay();
        
        if (AppState.pomodoroTimer.currentTime <= 0) {
            handlePomodoroComplete();
        }
    }, 1000);
}

function pausePomodoro() {
    AppState.pomodoroTimer.isRunning = false;
    clearInterval(AppState.pomodoroTimer.interval);
}

function resetPomodoro() {
    pausePomodoro();
    AppState.pomodoroTimer.isBreak = false;
    AppState.pomodoroTimer.currentTime = AppState.pomodoroTimer.workDuration;
    updateTimerDisplay();
}

function handlePomodoroComplete() {
    pausePomodoro();
    
    if (!AppState.pomodoroTimer.isBreak) {
        // Work session completed
        const noteInput = document.getElementById('sessionNote');
        const note = noteInput.value.trim();
        
        const session = {
            id: Date.now(),
            date: new Date().toISOString(),
            duration: Math.floor(AppState.pomodoroTimer.workDuration / 60),
            note: note
        };
        
        AppState.pomodoroHistory.unshift(session);
        saveToLocalStorage('pomodoroHistory', AppState.pomodoroHistory);
        
        noteInput.value = '';
        renderPomodoroHistory();
        updateDashboard();
        
        alert('Pomodoro завершён! Время для перерыва.');
        
        // Start break
        AppState.pomodoroTimer.isBreak = true;
        AppState.pomodoroTimer.currentTime = AppState.pomodoroTimer.breakDuration;
    } else {
        // Break completed
        alert('Перерыв окончен! Готовы к следующей сессии.');
        AppState.pomodoroTimer.isBreak = false;
        AppState.pomodoroTimer.currentTime = AppState.pomodoroTimer.workDuration;
    }
    
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(AppState.pomodoroTimer.currentTime / 60);
    const seconds = AppState.pomodoroTimer.currentTime % 60;
    
    const display = document.getElementById('timerDisplay');
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (AppState.pomodoroTimer.isBreak) {
        display.style.color = 'var(--secondary-color)';
    } else {
        display.style.color = 'var(--primary-color)';
    }
}

function renderPomodoroHistory() {
    const container = document.getElementById('pomodoroHistory');
    container.innerHTML = '';
    
    if (AppState.pomodoroHistory.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">История сессий пуста</p>';
        return;
    }
    
    AppState.pomodoroHistory.slice(0, 20).forEach(session => {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = 'history-item';
        
        sessionDiv.innerHTML = `
            <div style="font-weight: 600;">${formatDate(session.date)}</div>
            <div style="color: var(--text-secondary);">Длительность: ${session.duration} мин</div>
            ${session.note ? `<div style="margin-top: 5px;">${escapeHtml(session.note)}</div>` : ''}
        `;
        
        container.appendChild(sessionDiv);
    });
}

// ============================================
// TRAINING LOG
// ============================================

function initTraining() {
    const addBtn = document.getElementById('addTrainingBtn');
    const dateInput = document.getElementById('trainingDate');
    
    // Set today's date as default
    dateInput.valueAsDate = new Date();
    
    addBtn.addEventListener('click', addTraining);
    renderTraining();
}

function addTraining() {
    const dateInput = document.getElementById('trainingDate');
    const typeInput = document.getElementById('trainingType');
    const notesInput = document.getElementById('trainingNotes');
    
    const date = dateInput.value;
    const type = typeInput.value;
    const notes = notesInput.value.trim();
    
    if (!date || !notes) {
        alert('Пожалуйста, заполните дату и описание тренировки');
        return;
    }
    
    const training = {
        id: Date.now(),
        date: date,
        type: type,
        notes: notes,
        createdAt: new Date().toISOString()
    };
    
    AppState.trainingLog.unshift(training);
    saveToLocalStorage('trainingLog', AppState.trainingLog);
    
    notesInput.value = '';
    
    renderTraining();
    updateDashboard();
}

function deleteTraining(id) {
    AppState.trainingLog = AppState.trainingLog.filter(t => t.id !== id);
    saveToLocalStorage('trainingLog', AppState.trainingLog);
    renderTraining();
    updateDashboard();
}

function renderTraining() {
    const container = document.getElementById('trainingList');
    container.innerHTML = '';
    
    if (AppState.trainingLog.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Нет записей о тренировках</p>';
        return;
    }
    
    AppState.trainingLog.forEach(training => {
        const trainingDiv = document.createElement('div');
        trainingDiv.className = 'training-item';
        
        trainingDiv.innerHTML = `
            <div class="item-header">
                <div>
                    <div class="item-title">Тренировка ${training.type} - ${formatDate(training.date)}</div>
                    <div class="item-date">Добавлено: ${formatDate(training.createdAt)}</div>
                </div>
                <button class="btn btn-danger" onclick="deleteTraining(${training.id})">Удалить</button>
            </div>
            <div class="item-content">${escapeHtml(training.notes)}</div>
        `;
        
        container.appendChild(trainingDiv);
    });
}

// ============================================
// CF TRACKER
// ============================================

function initCFTracker() {
    const addBtn = document.getElementById('addCfBtn');
    const dateInput = document.getElementById('cfDate');
    
    // Set today's date as default
    dateInput.valueAsDate = new Date();
    
    addBtn.addEventListener('click', addCFTask);
    renderCFTracker();
}

function addCFTask() {
    const dateInput = document.getElementById('cfDate');
    const problemInput = document.getElementById('cfProblem');
    const difficultyInput = document.getElementById('cfDifficulty');
    const statusInput = document.getElementById('cfStatus');
    const notesInput = document.getElementById('cfNotes');
    
    const date = dateInput.value;
    const problem = problemInput.value.trim();
    const difficulty = difficultyInput.value;
    const status = statusInput.value;
    const notes = notesInput.value.trim();
    
    if (!date || !problem) {
        alert('Пожалуйста, заполните дату и номер задачи');
        return;
    }
    
    const cfTask = {
        id: Date.now(),
        date: date,
        problem: problem,
        difficulty: difficulty,
        status: status,
        notes: notes,
        createdAt: new Date().toISOString()
    };
    
    AppState.cfTracker.unshift(cfTask);
    saveToLocalStorage('cfTracker', AppState.cfTracker);
    
    problemInput.value = '';
    notesInput.value = '';
    
    renderCFTracker();
    updateDashboard();
}

function deleteCFTask(id) {
    AppState.cfTracker = AppState.cfTracker.filter(t => t.id !== id);
    saveToLocalStorage('cfTracker', AppState.cfTracker);
    renderCFTracker();
    updateDashboard();
}

function renderCFTracker() {
    const container = document.getElementById('cfList');
    container.innerHTML = '';
    
    if (AppState.cfTracker.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Нет решённых задач</p>';
        return;
    }
    
    AppState.cfTracker.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'cf-item';
        
        const difficultyBadge = `<span class="difficulty-badge difficulty-${task.difficulty}">${task.difficulty.toUpperCase()}</span>`;
        const statusBadge = `<span class="status-badge status-${task.status}">${getStatusText(task.status)}</span>`;
        
        taskDiv.innerHTML = `
            <div class="item-header">
                <div>
                    <div class="item-title">
                        ${difficultyBadge}
                        ${statusBadge}
                        ${escapeHtml(task.problem)}
                    </div>
                    <div class="item-date">${formatDate(task.date)}</div>
                </div>
                <button class="btn btn-danger" onclick="deleteCFTask(${task.id})">Удалить</button>
            </div>
            ${task.notes ? `<div class="item-content">${escapeHtml(task.notes)}</div>` : ''}
        `;
        
        container.appendChild(taskDiv);
    });
}

function getStatusText(status) {
    const statusMap = {
        'solved': 'Решена',
        'attempted': 'Попытка',
        'reviewed': 'Разбор'
    };
    return statusMap[status] || status;
}

// ============================================
// EXPORT/IMPORT
// ============================================

function initExport() {
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    
    exportBtn.addEventListener('click', exportData);
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', importData);
}

function exportData() {
    const data = {
        exportDate: new Date().toISOString(),
        notes: AppState.notes,
        trainingLog: AppState.trainingLog,
        cfTracker: AppState.cfTracker,
        pomodoroHistory: AppState.pomodoroHistory,
        currentWeek: AppState.currentWeek
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `16weeks-data-${formatDateForFilename(new Date())}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    
    alert('Данные успешно экспортированы!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.notes || !data.trainingLog || !data.cfTracker || !data.pomodoroHistory) {
                alert('Неверный формат файла');
                return;
            }
            
            if (confirm('Импорт данных перезапишет текущие данные. Продолжить?')) {
                AppState.notes = data.notes;
                AppState.trainingLog = data.trainingLog;
                AppState.cfTracker = data.cfTracker;
                AppState.pomodoroHistory = data.pomodoroHistory;
                AppState.currentWeek = data.currentWeek || 1;
                
                saveToLocalStorage('notes', AppState.notes);
                saveToLocalStorage('trainingLog', AppState.trainingLog);
                saveToLocalStorage('cfTracker', AppState.cfTracker);
                saveToLocalStorage('pomodoroHistory', AppState.pomodoroHistory);
                saveToLocalStorage('currentWeek', AppState.currentWeek);
                
                renderNotes();
                renderTraining();
                renderCFTracker();
                renderPomodoroHistory();
                updateDashboard();
                
                alert('Данные успешно импортированы!');
            }
        } catch (error) {
            alert('Ошибка при чтении файла: ' + error.message);
        }
    };
    
    reader.readAsText(file);
    event.target.value = '';
}

// ============================================
// DASHBOARD
// ============================================

function updateDashboard() {
    document.getElementById('currentWeek').textContent = AppState.currentWeek;
    document.getElementById('notesCount').textContent = AppState.notes.length;
    document.getElementById('pomodoroCount').textContent = AppState.pomodoroHistory.length;
    document.getElementById('trainingCount').textContent = AppState.trainingLog.length;
    
    // Count solved CF tasks
    const solvedCount = AppState.cfTracker.filter(t => t.status === 'solved').length;
    document.getElementById('cfCount').textContent = solvedCount;
    
    // Update progress bar
    const progressPercent = (AppState.currentWeek / 16) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('ru-RU', options);
}

function formatDateForFilename(date) {
    return date.toISOString().split('T')[0];
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make delete functions global
window.deleteNote = deleteNote;
window.deleteTraining = deleteTraining;
window.deleteCFTask = deleteCFTask;
