const state = { history: [], answers: {}, current: 'accueil' };

const illustrations = {
  accueil: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Silhouette abstraite harmonieuse">
    <defs>
      <linearGradient id="skinA" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f7d8c8"/><stop offset="1" stop-color="#d9a995"/></linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#8b604c" flood-opacity=".16"/></filter>
    </defs>
    <rect x="70" y="48" width="420" height="310" rx="44" fill="rgba(255,255,255,.32)"/>
    <path d="M290 56 C360 92 406 158 414 246 C421 322 367 366 284 366 C201 366 146 318 151 244 C157 156 213 89 290 56Z" fill="url(#skinA)" opacity=".58" filter="url(#softShadow)"/>
    <path d="M203 232 C226 190 261 185 281 225 C303 185 341 190 363 232" fill="none" stroke="#8e6d5d" stroke-width="5" stroke-linecap="round" opacity=".50"/>
    <path d="M178 108 C221 77 271 70 323 84 C367 96 399 121 424 158" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity=".76"/>
    <circle cx="212" cy="244" r="8" fill="#b88d77" opacity=".65"/><circle cx="350" cy="244" r="8" fill="#b88d77" opacity=".65"/>
    <path d="M166 286 C224 328 338 331 399 286" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".64"/>
    <g opacity=".80"><circle cx="114" cy="98" r="4" fill="#c6a56a"/><circle cx="450" cy="88" r="4" fill="#c6a56a"/><circle cx="472" cy="300" r="4" fill="#c6a56a"/></g>
  </svg>`,
  ptose: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Schéma ptose mammaire">
    <defs><linearGradient id="skinP" x1="0" x2="1"><stop offset="0" stop-color="#f4d3c3"/><stop offset="1" stop-color="#d6a08c"/></linearGradient></defs>
    <rect x="56" y="62" width="448" height="296" rx="34" fill="rgba(255,255,255,.30)"/>
    <line x1="96" x2="464" y1="210" y2="210" stroke="#8e6d5d" stroke-width="4" stroke-dasharray="15 12" opacity=".55"/>
    <text x="376" y="196" fill="#67534a" font-size="18" font-weight="600">sillon</text>
    <path d="M158 111 C198 90 241 105 258 147 C274 190 240 231 197 229 C154 227 126 189 136 150 C140 133 147 120 158 111Z" fill="url(#skinP)" opacity=".82"/>
    <path d="M303 119 C344 94 395 112 416 160 C438 212 404 276 347 279 C293 282 258 232 269 182 C275 152 286 132 303 119Z" fill="url(#skinP)" opacity=".82"/>
    <circle cx="197" cy="185" r="13" fill="#8e5f4d" opacity=".72"/><circle cx="349" cy="235" r="13" fill="#8e5f4d" opacity=".72"/>
    <text x="150" y="330" fill="#2f2e32" font-size="20" font-weight="650">sans ptose</text>
    <text x="310" y="330" fill="#2f2e32" font-size="20" font-weight="650">ptose</text>
  </svg>`,
  ptose_volume: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Schéma mastopexie seule ou avec volume">
    <defs><linearGradient id="skinPV" x1="0" x2="1"><stop offset="0" stop-color="#f4d3c3"/><stop offset="1" stop-color="#d6a08c"/></linearGradient></defs>
    <rect x="62" y="60" width="436" height="300" rx="36" fill="rgba(255,255,255,.32)"/>
    <path d="M165 240 C195 216 229 216 258 240" fill="none" stroke="#8e6d5d" stroke-width="5" stroke-linecap="round" opacity=".55"/>
    <path d="M308 240 C340 198 384 198 416 240" fill="none" stroke="#8e6d5d" stroke-width="5" stroke-linecap="round" opacity=".55"/>
    <path d="M201 278 L201 146 M201 146 L177 176 M201 146 L225 176" stroke="#c6a56a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity=".82"/>
    <path d="M363 282 L363 136 M363 136 L334 170 M363 136 L393 170" stroke="#c6a56a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity=".82"/>
    <circle cx="211" cy="250" r="12" fill="#8e5f4d" opacity=".66"/><circle cx="363" cy="250" r="12" fill="#8e5f4d" opacity=".66"/>
    <text x="139" y="326" fill="#2f2e32" font-size="19" font-weight="650">remonter</text><text x="306" y="326" fill="#2f2e32" font-size="19" font-weight="650">remonter + volume</text>
  </svg>`,
  volume: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Schéma volume modéré ou important">
    <defs><linearGradient id="skinV" x1="0" x2="1"><stop offset="0" stop-color="#f4d3c3"/><stop offset="1" stop-color="#d6a08c"/></linearGradient></defs>
    <rect x="62" y="60" width="436" height="300" rx="36" fill="rgba(255,255,255,.32)"/>
    <circle cx="180" cy="204" r="58" fill="url(#skinV)" opacity=".82"/><circle cx="380" cy="204" r="88" fill="url(#skinV)" opacity=".82"/>
    <circle cx="180" cy="204" r="10" fill="#8e5f4d" opacity=".68"/><circle cx="380" cy="204" r="13" fill="#8e5f4d" opacity=".68"/>
    <path d="M124 290 C154 306 204 306 235 290" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".74"/><path d="M293 307 C336 335 424 335 468 307" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".74"/>
    <text x="123" y="333" fill="#2f2e32" font-size="19" font-weight="650">modéré</text><text x="326" y="333" fill="#2f2e32" font-size="19" font-weight="650">important</text>
  </svg>`,
  camouflage: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Schéma couverture tissulaire">
    <defs><linearGradient id="skinC" x1="0" x2="1"><stop offset="0" stop-color="#f4d3c3"/><stop offset="1" stop-color="#d6a08c"/></linearGradient></defs>
    <rect x="62" y="60" width="436" height="300" rx="36" fill="rgba(255,255,255,.32)"/>
    <path d="M132 238 C154 190 205 178 236 224" fill="none" stroke="#d1a290" stroke-width="46" stroke-linecap="round" opacity=".82"/>
    <path d="M318 238 C342 183 407 172 444 224" fill="none" stroke="#d1a290" stroke-width="76" stroke-linecap="round" opacity=".82"/>
    <path d="M132 238 C154 190 205 178 236 224" fill="none" stroke="#8e6d5d" stroke-width="4" stroke-linecap="round" opacity=".50"/>
    <path d="M318 238 C342 183 407 172 444 224" fill="none" stroke="#8e6d5d" stroke-width="4" stroke-linecap="round" opacity=".50"/>
    <line x1="160" x2="216" y1="154" y2="154" stroke="#c6a56a" stroke-width="5" stroke-linecap="round"/><line x1="346" x2="432" y1="139" y2="139" stroke="#c6a56a" stroke-width="5" stroke-linecap="round"/>
    <text x="116" y="330" fill="#2f2e32" font-size="18" font-weight="650">tissus fins</text><text x="326" y="330" fill="#2f2e32" font-size="18" font-weight="650">bonne couverture</text>
  </svg>`,
  lipofilling: `
  <svg viewBox="0 0 560 420" role="img" aria-label="Schéma prothèse et lipofilling">
    <defs><linearGradient id="skinL" x1="0" x2="1"><stop offset="0" stop-color="#f4d3c3"/><stop offset="1" stop-color="#d6a08c"/></linearGradient></defs>
    <rect x="62" y="60" width="436" height="300" rx="36" fill="rgba(255,255,255,.32)"/>
    <ellipse cx="214" cy="215" rx="78" ry="62" fill="url(#skinL)" opacity=".86"/><ellipse cx="346" cy="215" rx="78" ry="62" fill="url(#skinL)" opacity=".86"/>
    <path d="M117 145 C145 111 188 109 218 145" fill="none" stroke="#c6a56a" stroke-width="8" stroke-linecap="round" opacity=".82"/>
    <path d="M342 126 C377 103 417 112 442 147" fill="none" stroke="#c6a56a" stroke-width="8" stroke-linecap="round" opacity=".82"/>
    <path d="M126 144 C162 180 184 190 210 201" fill="none" stroke="#8e6d5d" stroke-width="4" stroke-dasharray="8 9" opacity=".6"/>
    <path d="M432 145 C396 180 370 192 350 202" fill="none" stroke="#8e6d5d" stroke-width="4" stroke-dasharray="8 9" opacity=".6"/>
    <circle cx="214" cy="215" r="10" fill="#8e5f4d" opacity=".68"/><circle cx="346" cy="215" r="10" fill="#8e5f4d" opacity=".68"/>
    <text x="165" y="322" fill="#2f2e32" font-size="19" font-weight="650">option composite</text>
  </svg>`
};

const screens = {
  accueil: {
    type: 'question', back: false, step:'Accueil', illustration:'accueil', eyebrow: "L’art du sur-mesure",
    title: "Quelle augmentation mammaire est faite pour vous ?",
    lead: "Un questionnaire court pour identifier les grandes options possibles selon votre morphologie, votre souhait de volume et le rendu recherché.",
    helper:"Répondez en quelques étapes. Le résultat obtenu est une première orientation, à confirmer en consultation.",
    visual: { kicker:"Questionnaire personnalisé", title:"Une première orientation avant votre consultation", caption:"Une approche simple : ptose, volume souhaité, qualité des tissus, puis technique possiblement adaptée." },
    answers: [{ label:"Commencer le questionnaire", next:'ptose', primary:true }]
  },
  ptose: {
    questionKey:'ptose', step:'Étape 1/4', illustration:'ptose', eyebrow:"Étape 1", title:"Ai-je une ptose mammaire ?",
    lead:"La ptose correspond à une descente du sein, souvent après grossesse, allaitement, amaigrissement ou avec le temps.",
    helper:"Repère simple : si l’aréole est au niveau ou sous le sillon sous-mammaire, une correction de ptose peut être nécessaire.",
    visual:{ kicker:"Repère morphologique", title:"Position de l’aréole par rapport au sillon", caption:"La ptose est le premier critère d’orientation : une augmentation seule ne remonte pas toujours suffisamment le sein." },
    answers:[{label:"Oui, mes seins sont tombants", value:'oui', next:'ptose_volume'}, {label:"Non, ou très légèrement", value:'non', next:'volume'}]
  },
  ptose_volume: {
    questionKey:'ptoseVolume', step:'Étape 2/4', illustration:'ptose_volume', eyebrow:"Étape 2", title:"Souhaitez-vous aussi augmenter le volume ?",
    lead:"Lorsqu’il existe une ptose, il faut distinguer le besoin de remonter le sein et le souhait d’ajouter du volume.",
    visual:{ kicker:"Ptose mammaire", title:"Remonter seul ou remonter + augmenter", caption:"La décision dépend du volume actuel, du relâchement cutané et de l’objectif esthétique." },
    answers:[{label:"Oui, je souhaite plus de volume", value:'oui', result:'mastopexie-prothese'}, {label:"Non, je souhaite surtout remonter mes seins", value:'non', result:'mastopexie'}]
  },
  volume: {
    questionKey:'volume', step:'Étape 2/4', illustration:'volume', eyebrow:"Étape 2", title:"Quelle augmentation souhaitez-vous ?",
    lead:"Le volume souhaité est un critère important pour orienter la technique.",
    helper:"Une augmentation légère à modérée correspond généralement à un gain d’environ 1 à 2 bonnets.",
    visual:{ kicker:"Volume souhaité", title:"Une augmentation discrète ou plus marquée", caption:"La technique Preservé® est surtout envisagée pour des augmentations naturelles et modérées." },
    answers:[{label:"Légère à modérée, environ 1 à 2 bonnets", value:'modere', next:'camouflage'}, {label:"Importante, plus de 2 bonnets", value:'important', next:'lipofilling_large'}]
  },
  camouflage: {
    questionKey:'camouflage', step:'Étape 3/4', illustration:'camouflage', eyebrow:"Étape 3", title:"Le camouflage des implants paraît-il suffisant ?",
    lead:"La qualité de couverture par la glande et la graisse aide à choisir le plan de pose.",
    helper:"Repère simple : lorsque vous pincez le haut du sein, au-dessus de l’aréole, l’épaisseur vous semble-t-elle confortable, autour de 2 cm ou plus ?",
    visual:{ kicker:"Couverture tissulaire", title:"Bonne épaisseur ou tissus fins", caption:"En consultation, ce point est évalué précisément par l’examen clinique." },
    answers:[{label:"Oui, j’ai une bonne épaisseur de tissu", value:'oui', result:'preserve'}, {label:"Non, mes tissus semblent fins", value:'non', result:'dual-plan'}]
  },
  lipofilling_large: {
    questionKey:'lipofillingLarge', step:'Étape 3/4', illustration:'lipofilling', eyebrow:"Étape 3", title:"Souhaitez-vous utiliser votre propre graisse ?",
    lead:"Pour les augmentations plus importantes, la technique de référence reste souvent une pose de prothèses. Le lipofilling peut parfois améliorer le naturel du résultat.",
    helper:"Le lipofilling nécessite une réserve graisseuse suffisante prélevable par liposuccion.",
    visual:{ kicker:"Option composite", title:"Prothèse + lipofilling", caption:"Le lipofilling permet d’adoucir les contours de l’implant chez certaines patientes." },
    fields:true,
    answers:[{label:"Oui, je suis intéressée par le lipofilling", value:'oui', result:'composite'}, {label:"Non, je préfère sans lipofilling", value:'non', result:'dual-plan'}]
  }
};

const results = {
  preserve:{ title:"La technique Preservé® pourrait correspondre à votre projet.", tag:"Augmentation mammaire mini-invasive Preservé®", intro:"Cette orientation convient surtout aux patientes sans ptose significative, souhaitant une augmentation naturelle et modérée, avec un camouflage tissulaire favorable.", details:"L’objectif est d’obtenir un résultat harmonieux, avec une cicatrice courte sous-mammaire et une récupération souvent plus simple. L’indication doit être confirmée en consultation par l’examen clinique." },
  'dual-plan':{ title:"Une augmentation mammaire par prothèses en dual plan semble plus adaptée.", tag:"Augmentation mammaire classique / dual plan", intro:"Cette orientation est souvent pertinente lorsqu’une augmentation plus importante est souhaitée ou lorsque les tissus sont fins.", details:"Le dual plan permet d’améliorer la couverture de l’implant au pôle supérieur, avec un résultat naturel lorsque l’indication et le choix de l’implant sont bien posés." },
  composite:{ title:"Une augmentation composite pourrait être intéressante.", tag:"Prothèse + lipofilling", intro:"Cette orientation associe la fiabilité volumétrique d’un implant et l’apport du lipofilling pour adoucir les contours.", details:"Elle nécessite une réserve graisseuse suffisante et une indication adaptée. Elle peut être intéressante pour améliorer le décolleté et le naturel du pôle supérieur." },
  mastopexie:{ title:"Une correction de ptose semble prioritaire.", tag:"Mastopexie seule", intro:"Lorsque le sein est descendu mais que le volume est jugé suffisant, une mastopexie peut permettre de remonter et remodeler la poitrine sans ajouter d’implant.", details:"La cicatrice dépend du degré de ptose : péri-aréolaire, verticale ou en T inversé selon les cas." },
  'mastopexie-prothese':{ title:"Une mastopexie avec prothèses pourrait être adaptée.", tag:"Mastopexie + augmentation mammaire", intro:"Lorsqu’il existe une ptose et un souhait d’augmenter le volume, il faut souvent associer un lifting du sein à une prothèse.", details:"Cette intervention corrige à la fois la position de l’aréole, le relâchement cutané et le manque de volume." }
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
  tpl.querySelector('.eyebrow').textContent = s.eyebrow || '';
  tpl.querySelector('h1').textContent = s.title;
  tpl.querySelector('.lead').textContent = s.lead || '';
  tpl.querySelector('.helper').innerHTML = s.helper || '';
  tpl.querySelector('.step-pill').textContent = s.step || '';
  tpl.querySelector('.visual-kicker').textContent = s.visual?.kicker || '';
  tpl.querySelector('.visual-title').textContent = s.visual?.title || '';
  tpl.querySelector('.visual-caption').textContent = s.visual?.caption || '';
  tpl.querySelector('.visual-illustration').innerHTML = illustrations[s.illustration || 'accueil'];
  const back = tpl.querySelector('.back');
  if(s.back === false || state.history.length===0) back.style.visibility='hidden';
  back.onclick = goBack;
  const fields = tpl.querySelector('.fields');
  if(s.fields){
    fields.innerHTML = `<label class="field-row"><span>Poids (kg)</span><input id="poids" inputmode="decimal" placeholder="70"></label><label class="field-row"><span>Taille (cm)</span><input id="taille" inputmode="decimal" placeholder="170"></label><div class="bmi">Score IMC : <strong id="bmi">—</strong></div>`;
    setTimeout(setupBMI,0);
  }
  const answers = tpl.querySelector('.answers');
  s.answers.forEach(a=>{
    const btn=document.createElement('button');
    btn.className=a.primary?'primary':'answer';
    btn.textContent=a.label;
    btn.onclick=()=>choose(id,a);
    answers.appendChild(btn);
  });
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
  document.getElementById('app').innerHTML = `<section class="result-hero"><div><button class="back" onclick="goBack()">Retour</button><h1>L’intervention adaptée pour vous</h1><p>Voici l’orientation proposée par le questionnaire :</p><div class="result-card">${r.tag}</div></div></section><section class="result-body"><h2>${r.title}</h2><p>${r.intro}</p><p>${r.details}</p><div class="result-note"><p>Cette réponse constitue une aide à la préparation de votre consultation. L’examen clinique permettra de confirmer ou de modifier cette orientation.</p></div><div class="cta-row"><a class="primary" href="https://www.doctolib.fr/" target="_blank" rel="noreferrer">Prendre rendez-vous</a><button class="secondary" onclick="restart()">Recommencer le questionnaire</button></div><p class="disclaimer">Cette proposition ne remplace pas une consultation médicale.</p></section>`;
}
function restart(){ state.history=[]; state.answers={}; location.hash='#/accueil'; }
window.addEventListener('hashchange', render); render();
