const state = { history: [], answers: {}, current: 'accueil' };

const screens = {
  accueil: {
    type: 'question', back: false, eyebrow: "L’art du sur-mesure",
    title: "Quelle augmentation mammaire est faite pour vous ?",
    lead: "Ce questionnaire aide à identifier les grandes options possibles selon votre morphologie et votre souhait de volume. Il ne remplace pas une consultation médicale.",
    visual: { kicker:"Questionnaire", title:"Une première orientation avant votre consultation", caption:"Une approche simple : ptose, volume souhaité, qualité des tissus, puis indication possible." },
    answers: [{ label:"Commencer le questionnaire", next:'ptose', primary:true }]
  },
  ptose: {
    questionKey:'ptose', eyebrow:"Étape 1", title:"Ai-je une ptose mammaire ?",
    lead:"La ptose correspond à une descente du sein, souvent après grossesse, allaitement, amaigrissement ou avec le temps.",
    helper:"Repère simple : si l’aréole est au niveau ou sous le sillon sous-mammaire, une correction de ptose peut être nécessaire.",
    visual:{ kicker:"Repère morphologique", title:"Position de l’aréole par rapport au sillon", caption:"Cet écran pourra ensuite utiliser une illustration médicale ou une photo schématique validée." },
    answers:[{label:"Oui, mes seins sont tombants", value:'oui', next:'ptose_volume'}, {label:"Non, ou très légèrement", value:'non', next:'volume'}]
  },
  ptose_volume: {
    questionKey:'ptoseVolume', eyebrow:"Étape 2", title:"Souhaitez-vous aussi augmenter le volume ?",
    lead:"Lorsqu’il existe une ptose, il faut distinguer le besoin de remonter le sein et le souhait d’ajouter du volume.",
    visual:{ kicker:"Ptose", title:"Remonter seul ou remonter + augmenter", caption:"La décision dépend du volume actuel, du relâchement cutané et de l’objectif esthétique." },
    answers:[{label:"Oui, je souhaite plus de volume", value:'oui', result:'mastopexie-prothese'}, {label:"Non, je souhaite surtout remonter mes seins", value:'non', result:'mastopexie'}]
  },
  volume: {
    questionKey:'volume', eyebrow:"Étape 2", title:"Quelle augmentation souhaitez-vous ?",
    lead:"Le volume souhaité est un critère important pour orienter la technique.",
    helper:"Une augmentation légère à modérée correspond généralement à un gain d’environ 1 à 2 bonnets.",
    visual:{ kicker:"Volume", title:"Discret ou plus marqué", caption:"La technique Preservé® est surtout envisagée pour des augmentations naturelles et modérées." },
    answers:[{label:"Légère à modérée, environ 1 à 2 bonnets", value:'modere', next:'camouflage'}, {label:"Importante, plus de 2 bonnets", value:'important', next:'lipofilling_large'}]
  },
  camouflage: {
    questionKey:'camouflage', eyebrow:"Étape 3", title:"Le camouflage des implants paraît-il suffisant ?",
    lead:"La qualité de couverture par la glande et la graisse aide à choisir le plan de pose.",
    helper:"Repère simple : lorsque vous pincez le haut du sein, au-dessus de l’aréole, l’épaisseur vous semble-t-elle confortable, autour de 2 cm ou plus ?",
    visual:{ kicker:"Couverture tissulaire", title:"Bonne épaisseur ou tissus fins", caption:"En consultation, ce point est évalué précisément par l’examen clinique." },
    answers:[{label:"Oui, j’ai une bonne épaisseur de tissu", value:'oui', result:'preserve'}, {label:"Non, mes tissus semblent fins", value:'non', result:'dual-plan'}]
  },
  lipofilling_large: {
    questionKey:'lipofillingLarge', eyebrow:"Étape 3", title:"Souhaitez-vous utiliser votre propre graisse ?",
    lead:"Pour les augmentations plus importantes, la technique de référence reste souvent une pose de prothèses. Le lipofilling peut parfois améliorer le naturel du résultat.",
    helper:"Le lipofilling nécessite une réserve graisseuse suffisante prélevable par liposuccion.",
    visual:{ kicker:"Option composite", title:"Prothèse + lipofilling", caption:"Le lipofilling permet d’adoucir les contours de l’implant chez certaines patientes." },
    fields:true,
    answers:[{label:"Oui, je suis intéressée par le lipofilling", value:'oui', result:'composite'}, {label:"Non, je préfère sans lipofilling", value:'non', result:'dual-plan'}]
  }
};

const results = {
  preserve:{ title:"La technique Preservé® pourrait correspondre à votre projet.", tag:"Augmentation mammaire mini-invasive Preservé®", intro:"Cette orientation convient surtout aux patientes sans ptose significative, souhaitant une augmentation naturelle et modérée, avec un camouflage tissulaire favorable.", details:"L’objectif est d’obtenir un résultat harmonieux, avec une cicatrice courte sous-mammaire et une récupération souvent plus simple. L’indication doit être confirmée en consultation par l’examen clinique.", page:"Préparer une page dédiée Preservé®" },
  'dual-plan':{ title:"Une augmentation mammaire par prothèses en dual plan semble plus adaptée.", tag:"Augmentation mammaire classique / dual plan", intro:"Cette orientation est souvent pertinente lorsqu’une augmentation plus importante est souhaitée ou lorsque les tissus sont fins.", details:"Le dual plan permet d’améliorer la couverture de l’implant au pôle supérieur, avec un résultat naturel lorsque l’indication et le choix de l’implant sont bien posés.", page:"Préparer une page dédiée Dual Plan" },
  composite:{ title:"Une augmentation composite pourrait être intéressante.", tag:"Prothèse + lipofilling", intro:"Cette orientation associe la fiabilité volumétrique d’un implant et l’apport du lipofilling pour adoucir les contours.", details:"Elle nécessite une réserve graisseuse suffisante et une indication adaptée. Elle peut être intéressante pour améliorer le décolleté et le naturel du pôle supérieur.", page:"Préparer une page dédiée Composite" },
  mastopexie:{ title:"Une correction de ptose semble prioritaire.", tag:"Mastopexie seule", intro:"Lorsque le sein est descendu mais que le volume est jugé suffisant, une mastopexie peut permettre de remonter et remodeler la poitrine sans ajouter d’implant.", details:"La cicatrice dépend du degré de ptose : péri-aréolaire, verticale ou en T inversé selon les cas.", page:"Préparer une page dédiée Mastopexie" },
  'mastopexie-prothese':{ title:"Une mastopexie avec prothèses pourrait être adaptée.", tag:"Mastopexie + augmentation mammaire", intro:"Lorsqu’il existe une ptose et un souhait d’augmenter le volume, il faut souvent associer un lifting du sein à une prothèse.", details:"Cette intervention corrige à la fois la position de l’aréole, le relâchement cutané et le manque de volume.", page:"Préparer une page dédiée Mastopexie-prothèses" }
};

function render(){
  const route = location.hash.replace('#/','') || 'accueil';
  state.current = route;
  if(results[route]) return renderResult(route);
  renderQuestion(screens[route] ? route : 'accueil');
}
function renderQuestion(id){
  const s = screens[id];
  const tpl = document.getElementById('screen-template').content.cloneNode(true);
  const root = tpl.querySelector('.screen');
  tpl.querySelector('.eyebrow').textContent = s.eyebrow || '';
  tpl.querySelector('h1').textContent = s.title;
  tpl.querySelector('.lead').textContent = s.lead || '';
  tpl.querySelector('.helper').innerHTML = s.helper || '';
  tpl.querySelector('.visual-kicker').textContent = s.visual?.kicker || '';
  tpl.querySelector('.visual-title').textContent = s.visual?.title || '';
  tpl.querySelector('.visual-caption').textContent = s.visual?.caption || '';
  tpl.querySelector('.visual-illustration').innerHTML = '<span class="line one"></span><span class="line two"></span><span class="dot a"></span><span class="dot b"></span>';
  const back = tpl.querySelector('.back');
  if(s.back === false || state.history.length===0) back.style.visibility='hidden';
  back.onclick = goBack;
  const fields = tpl.querySelector('.fields');
  if(s.fields){ fields.innerHTML = `<label class="field-row"><span>Poids (kg)</span><input id="poids" inputmode="decimal" placeholder="70"></label><label class="field-row"><span>Taille (cm)</span><input id="taille" inputmode="decimal" placeholder="170"></label><div class="bmi">Score IMC : <strong id="bmi">—</strong></div>`; setTimeout(setupBMI,0); }
  const answers = tpl.querySelector('.answers');
  s.answers.forEach(a=>{ const btn=document.createElement('button'); btn.className=a.primary?'primary':'answer'; btn.textContent=a.label; btn.onclick=()=>choose(id,a); answers.appendChild(btn); });
  tpl.querySelector('.disclaimer').textContent = "Ce questionnaire est une première orientation. Seule une consultation médicale permet de poser une indication personnalisée.";
  document.getElementById('app').replaceChildren(tpl);
}
function setupBMI(){
  const p=document.getElementById('poids'), t=document.getElementById('taille'), out=document.getElementById('bmi');
  function calc(){ const poids=parseFloat(String(p.value).replace(',','.')); const taille=parseFloat(String(t.value).replace(',','.'))/100; out.textContent = poids>0 && taille>0 ? (poids/(taille*taille)).toFixed(1) : '—'; }
  p.addEventListener('input',calc); t.addEventListener('input',calc);
}
function choose(id,a){
  if(screens[id]?.questionKey) state.answers[screens[id].questionKey]=a.value;
  state.history.push(id);
  if(a.result) location.hash = '#/' + a.result; else location.hash = '#/' + a.next;
}
function goBack(){ const prev=state.history.pop(); location.hash = '#/' + (prev || 'accueil'); }
function renderResult(id){
  const r=results[id];
  document.getElementById('app').innerHTML = `<section class="result-hero"><div><button class="back" onclick="goBack()">‹ Retour</button><h1>L’intervention adaptée pour vous</h1><p>Voici l’orientation proposée par le questionnaire :</p><div class="result-card">${r.tag}</div></div></section><section class="result-body"><h2>${r.title}</h2><p>${r.intro}</p><p>${r.details}</p><div class="cta-row"><a class="primary" href="https://www.doctolib.fr/" target="_blank" rel="noreferrer">Prendre rendez-vous</a><button class="secondary" onclick="restart()">Recommencer le questionnaire</button></div><p class="disclaimer">Cette proposition ne remplace pas une consultation médicale. Elle constitue une première orientation à confirmer lors de l’examen clinique.</p></section>`;
}
function restart(){ state.history=[]; state.answers={}; location.hash='#/accueil'; }
window.addEventListener('hashchange', render); render();
