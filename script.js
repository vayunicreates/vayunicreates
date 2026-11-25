let currentTab = 'all';
let currentScript = 'english';

// Multi-script database (Vignanam-style script toggling)
const stotramScripts = {
  english: {
    ganesha: "Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada ||",
    gita: "Karmanye Vadhikaraste Ma Phaleshu Kadachana |\nMa Karma-Phala-Hetur-Bhurma Te Sango'stvakarmani ||",
    hanuman: "Buddhir Balam Yasho Dhairyam Nirbhayatvam Arogata |\nAjadyam Vak-Patutvam Cha Hanumat-Smaranad Bhavet ||"
  },
  devanagari: {
    ganesha: "рд╡рдХреНрд░рддреБрдгреНрдб рдорд╣рд╛рдХрд╛рдп рд╕реВрд░реНрдпрдХреЛрдЯрд┐ рд╕рдордкреНрд░рдн |\nрдирд┐рд░реНрд╡рд┐рдШреНрдирдВ рдХреБрд░реБ рдореЗ рджреЗрд╡ рд╕рд░реНрд╡рдХрд╛рд░реНрдпреЗрд╖реБ рд╕рд░реНрд╡рджрд╛ ||",
    gita: "рдХрд░реНрдордгреНрдпреЗрд╡рд╛рдзрд┐рдХрд╛рд░рд╕реНрддреЗ рдорд╛ рдлрд▓реЗрд╖реБ рдХрджрд╛рдЪрди |\nрдорд╛ рдХрд░реНрдордлрд▓рд╣реЗрддреБрд░реНрднреВрд░реНрдорд╛ рддреЗ рд╕рдЩреНрдЧреЛрд╜рд╕реНрддреНрд╡рдХрд░реНрдордгрд┐ ||",
    hanuman: "рдмреБрджреНрдзрд┐рд░реНрдмрд▓рдВ рдпрд╢реЛ рдзреИрд░реНрдпрдВ рдирд┐рд░реНрднрдпрддреНрд╡рдорд░реЛрдЧрддрд╛ |\nрдЕрдЬрд╛рдбреНрдпрдВ рд╡рд╛рдХреНрдкрдЯреБрддреНрд╡рдВ рдЪ рд╣рдиреБрдорддреНрд╕реНрдорд░рдгрд╛рджреНрднрд╡реЗрддреН ||"
  },
  telugu: {
    ganesha: "р░╡р░Хр▒Нр░░р░др▒Бр░Вр░б р░ор░╣р░╛р░Хр░╛р░п р░╕р▒Вр░░р▒Нр░пр░Хр▒Лр░Яр░┐ р░╕р░ор░кр▒Нр░░р░н |\nр░ир░┐р░░р▒Нр░╡р░┐р░Шр▒Нр░ир░В р░Хр▒Бр░░р▒Б р░ор▒З р░жр▒Зр░╡ р░╕р░░р▒Нр░╡р░Хр░╛р░░р▒Нр░пр▒Зр░╖р▒Б р░╕р░░р▒Нр░╡р░жр░╛ ||",
    gita: "р░Хр░░р▒Нр░ор░гр▒Нр░пр▒Зр░╡р░╛р░зр░┐р░Хр░╛р░░р░╕р▒Нр░др▒З р░ор░╛ р░лр░▓р▒Зр░╖р▒Б р░Хр░жр░╛р░Ър░и |\nр░ор░╛ р░Хр░░р▒Нр░ор░лр░▓р░╣р▒Зр░др▒Бр░░р▒Нр░нр▒Вр░░р▒Нр░ор░╛ р░др▒З р░╕р░Вр░Чр▒Лр░╜р░╕р▒Нр░др▒Нр░╡р░Хр░░р▒Нр░ор░гр░┐ ||",
    hanuman: "р░мр▒Бр░жр▒Нр░зр░┐р░░р▒Нр░мр░▓р░В р░пр░╢р▒Л р░зр▒Ир░░р▒Нр░пр░В р░ир░┐р░░р▒Нр░нр░пр░др▒Нр░╡р░ор░░р▒Лр░Чр░др░╛ |\nр░Ер░Ьр░╛р░бр▒Нр░пр░В р░╡р░╛р░Хр▒Нр░кр░Яр▒Бр░др▒Нр░╡р░В р░Ъ р░╣р░ир▒Бр░ор░др▒Нр░╕р▒Нр░ор░░р░гр░╛р░жр▒Нр░нр░╡р▒Зр░др▒Н ||"
  },
  tamil: {
    ganesha: "ро╡роХрпНро░родрпБрогрпНроЯ рооро╣ро╛роХро╛роп роЪрпВро░рпНропроХрпЛроЯро┐ роЪроорокрпНро░рок |\nроиро┐ро░рпНро╡ро┐роХрпНройроорпН роХрпБро░рпБ роорпЗ родрпЗро╡ роЪро░рпНро╡роХро╛ро░рпНропрпЗро╖рпБ роЪро░рпНро╡родро╛ ||",
    gita: "роХро░рпНроорогрпНропрпЗро╡ро╛родро┐роХро╛ро░ро╕рпНродрпЗ рооро╛ рокро▓рпЗро╖рпБ роХродро╛роЪрой |\nрооро╛ роХро░рпНроорокро▓ро╣рпЗродрпБро░рпНрокрпВро░рпНрооро╛ родрпЗ роЪроЩрпНроХрпЛро╕рпНродрпНро╡роХро░рпНроорогро┐ ||",
    hanuman: "рокрпБродрпНродро┐ро░рпНрокро▓роорпН ропро╢рпЛ родрпИро░рпНропроорпН роиро┐ро░рпНрокропродрпНро╡рооро░рпЛроХродро╛ |\nроЕроЬро╛роЯрпНропроорпН ро╡ро╛роХрпНрокроЯрпБродрпНро╡роорпН роЪ ро╣роирпБроородрпНро╕рпНрооро░рогро╛родрпНрокро╡рпЗродрпН ||"
  }
};

// All 6 Vayuni Portal Categories
const database = [
  {
    category: 'spiritual',
    tag: 'ЁЯк╖ Vignanam Spiritual Library тАв Stotram',
    title: 'Sri Ganesha Prarthana',
    dynamicKey: 'ganesha',
    action: 'ЁЯУЦ View Meaning & Swara',
    detail: 'Meaning: O Lord Ganesha of curved trunk and mighty body, whose brilliance equals ten million suns, please remove all obstacles from my endeavors always.'
  },
  {
    category: 'spiritual',
    tag: 'ЁЯк╖ Bhagavad Gita тАв Chapter 2, Verse 47',
    title: 'Karma Yoga Shloka',
    dynamicKey: 'gita',
    action: 'ЁЯУЦ Read Purport',
    detail: 'Meaning: You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction.'
  },
  {
    category: 'spiritual',
    tag: 'ЁЯк╖ Hanuman Stuti тАв Daily Chant',
    title: 'Hanuman Phala Shruti Shloka',
    dynamicKey: 'hanuman',
    action: 'ЁЯУЦ View Meaning',
    detail: 'Meaning: Intelligence, strength, fame, courage, fearlessness, good health, alertness, and eloquence are all attained by remembering Lord Hanuman.'
  },
  {
    category: 'quotes',
    tag: 'тЭЭ Inspirational Quote & Subhashitam',
    title: 'Vidya Dadati Vinayam',
    text: '"Knowledge gives humility, from humility comes worthiness, from worthiness one attains wealth, and from wealth comes righteousness and happiness." тАФ Hitopadesha',
    action: 'тЬи Sanskrit Verse',
    detail: 'рд╡рд┐рджреНрдпрд╛ рджрджрд╛рддрд┐ рд╡рд┐рдирдпрдВ рд╡рд┐рдирдпрд╛рджреНрдпрд╛рддрд┐ рдкрд╛рддреНрд░рддрд╛рдореН |\nрдкрд╛рддреНрд░рддреНрд╡рд╛рджреНрдзрдирдорд╛рдкреНрдиреЛрддрд┐ рдзрдирд╛рджреНрдзрд░реНрдордВ рддрддрдГ рд╕реБрдЦрдореН ||'
  },
  {
    category: 'science',
    tag: 'тЪЫя╕П Physics & Cosmos',
    title: 'Why Is the Sky Blue During the Day?',
    text: 'Sunlight reaches EarthтАЩs atmosphere and is scattered in all directions by gases and particles. Blue light travels in shorter, smaller waves and scatters nearly 10 times more than red light (Rayleigh Scattering).',
    action: 'ЁЯзк Try Mini Experiment',
    detail: 'Home Experiment: Shine a white flashlight through a clear glass of water mixed with two drops of milk in a dark room. From the side, the beam looks bluish (scattered short waves); from the end, it looks orange-red like a sunset!'
  },
  {
    category: 'discoveries',
    tag: 'ЁЯТб Ancient & Modern Inventions',
    title: 'The Invention of Zero (Shunya) & Decimal System',
    text: 'Mathematician Brahmagupta formalized the rules for zero in 628 CE in India, laying the mathematical foundation for modern computing, binary code, and space navigation.',
    action: 'ЁЯХ░я╕П Explore Timeline',
    detail: 'Key Milestones:\nтАв 3rdтАУ4th Century CE: Bakhshali Manuscript uses dot placeholder.\nтАв 628 CE: Brahmagupta writes Brahmasphutasiddhanta defining zero arithmetic.\nтАв 825 CE: Al-Khwarizmi introduces Indian numerals globally.'
  },
  {
    category: 'language',
    tag: 'ЁЯМР Did You Know + Learn a Language',
    title: 'Word of the Day: "Jij├▒─Бs─Б" (рдЬрд┐рдЬреНрдЮрд╛рд╕рд╛)',
    text: 'Meaning: The pure desire to know or curiosity.\nDid You Know? Sanskrit has over 65 words for different forms of water and is closely studied for natural language processing!',
    action: 'ЁЯЧгя╕П Practice Phrases',
    detail: 'Quick Multi-Language Greeting ("Namaste / Hello"):\nтАв Sanskrit: рдирдорд╕реНрддреЗ (Namaste)\nтАв Telugu: р░ир░ор░╕р▒Нр░Хр░╛р░░р░В (Namaskaram)\nтАв Tamil: ро╡рогроХрпНроХроорпН (Vanakkam)\nтАв Japanese: уБУуВУуБлуБбуБп (Konnichiwa)'
  },
  {
    category: 'aivideos',
    tag: 'ЁЯОм Fun AI Video Showcase',
    title: 'Time-Travel Interview with Aryabhata',
    text: 'An AI-generated animated short where a curious kid and a friendly robot visit 5th-century Kusumapura to learn how Aryabhata calculated EarthтАЩs rotation.',
    action: 'ЁЯОм View AI Prompt & Storyboard',
    detail: 'AI Video Storyboard:\nScene 1: Kid & glowing robot open an ancient golden book in a lush emerald valley.\nScene 2: Time portal opens to 499 CE observatory.\nScene 3: Aryabhata demonstrates Earth spinning on its axis using a wooden globe.'
  }
];

// Render cards into the workspace grid
function renderContent() {
  const grid = document.getElementById('contentGrid');
  const searchInput = document.getElementById('searchInput');
  const scriptBar = document.getElementById('scriptBar');
  if (!grid) return;

  const query = searchInput ? searchInput.value.toLowerCase() : '';

  if (scriptBar) {
    scriptBar.style.display = (currentTab === 'spiritual' || currentTab === 'all') ? 'flex' : 'none';
  }

  const filtered = database.filter(item => {
    const matchesTab = currentTab === 'all' || item.category === currentTab;
    const bodyText = item.dynamicKey ? stotramScripts[currentScript][item.dynamicKey] : item.text;
    const matchesQuery = item.title.toLowerCase().includes(query) || bodyText.toLowerCase().includes(query);
    return matchesTab && matchesQuery;
  });

  grid.innerHTML = filtered.map(item => {
    const bodyText = item.dynamicKey ? stotramScripts[currentScript][item.dynamicKey] : item.text;
    const safeTitle = item.title.replace(/'/g, "\\'");
    const safeDetail = item.detail.replace(/`/g, "\\`");

    return `
      <div class="item-box">
        <span class="item-tag">${item.tag}</span>
        <h4>${item.title}</h4>
        <p>${bodyText}</p>
        <span class="action-pill" onclick="openModal('${safeTitle}', \`${safeDetail}\`)">${item.action}</span>
      </div>
    `;
  }).join('');
}

// Switch active category tab
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  const titles = {
    all: 'Featured Across Vayuni',
    quotes: 'Quotes & Ancient Subhashitams',
    science: 'Science тАФ The Why Behind Our World',
    discoveries: 'Discoveries & Inventions',
    language: 'Did You Know & Learn a Language',
    spiritual: 'Spiritual Literature & Stotrams (Vignanam Edition)',
    aivideos: 'Fun AI Videos & Animated Stories'
  };

  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.textContent = titles[tab] || 'Featured Across Vayuni';
  }

  renderContent();

  const workspace = document.getElementById('workspace');
  if (workspace) {
    workspace.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Change Indic script for stotrams
function setScript(script, btnElement) {
  currentScript = script;
  document.querySelectorAll('.script-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderContent();
}

// Live search filter
function handleSearch() {
  renderContent();
}

// Modal controls
function openModal(title, body) {
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalBackdrop = document.getElementById('modalBackdrop');

  if (modalTitle && modalBody && modalBackdrop) {
    modalTitle.textContent = title;
    modalBody.textContent = body;
    modalBackdrop.style.display = 'grid';
  }
}

function closeModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.style.display = 'none';
  }
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', renderContent);
