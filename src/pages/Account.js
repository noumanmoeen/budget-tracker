// import axios from 'axios';
// import React, { useState } from 'react';

// const finalRes = [
//   {
//     verb: ' Être: to be',
//     conjugations:
//       'Je Sois, il Sois, tu Sois, tu Sois, nous Soyons, ils Soient ',
//   },
//   {
//     verb: ' Avoirs to have',
//     conjugations: "j'ai, il a, tu as, tu as, nous avons, ils ont ",
//   },
//   {
//     verb: ' Pouvoir: to be able to',
//     conjugations:
//       'je peux, il peut, vous pouvez, vous pouvez, nous pouvons , ils ont le pouvoir ',
//   },
//   {
//     verb: ' Faire: to do, to make',
//     conjugations:
//       'je fais, il fait, vous faites, vous faites, nous faisons, ils font ',
//   },
//   {
//     verb: ' Mettre: to put, to practice',
//     conjugations:
//       'je mets, il met, vous mettez, vous mettez, nous mettons, ils mettent ',
//   },
//   {
//     verb: ' Dire: to say, to tell',
//     conjugations:
//       'je dis, il dit, vous dites, vous Dis, nous disons, ils disent ',
//   },
//   {
//     verb: ' Devoir: to have to, to must, to owe',
//     conjugations:
//       'je dois, il faut, vous devez, vous devez, nous devons, ils doivent ',
//   },
//   {
//     verb: ' Prendre: to take, to capture',
//     conjugations:
//       'je prends, il prend, vous prenez, vous prenez, nous prenons, ils prennent ',
//   },
//   {
//     verb: ' Donner: to give',
//     conjugations:
//       'je donne, il donne, Vous donnez, vous donnez, nous donnons, ils donnent ',
//   },
//   {
//     verb: ' Vouloir to want, to wish',
//     conjugations:
//       'je veux, il veut, vous voulez, vous voulez, nous voulons, ils veulent ',
//   },
//   {
//     verb: ' Savoir: to know',
//     conjugations:
//       'je sais, il sait, vous savez, vous savez, nous savons, ils savent',
//   },
//   {
//     verb: ' Falloir: to have to',
//     conjugations:
//       'Je dois, il faut, tu dois, tu dois, nous devons, ils doivent ',
//   },
//   {
//     verb: ' Voir: to see',
//     conjugations:
//       'je vois, il voit, tu vois, tu vois, nous voyons, ils voient ',
//   },
//   {
//     verb: ' Demander: to ask, to request',
//     conjugations:
//       'je demande, il demande, vous demandez, vous demandez, nous demandons , ils demandent ',
//   },
//   {
//     verb: ' Trouver: to find, to discover',
//     conjugations:
//       'je trouve, il trouve, vous trouvez, vous trouvez, nous trouvons, ils trouvent ',
//   },
//   {
//     verb: ' Rendre: to return (something), to give back',
//     conjugations:
//       'je reviens, il revient, vous revenez, vous revenez, nous revenons, ils reviennent ',
//   },
//   {
//     verb: ' Venir: to come',
//     conjugations:
//       'je viens, il vient, vous venez, vous Viens, nous venons, ils viennent ',
//   },
//   {
//     verb: ' Passer to pass, to go past',
//     conjugations:
//       'je passe, il passe, tu passes, tu passes, nous passons, ils passent ',
//   },
//   {
//     verb: ' Comprendre: to understand, to include, to comprehend',
//     conjugations:
//       'je comprends, il comprend, tu comprends, tu comprends, nous comprenons, ils comprennent ',
//   },
//   {
//     verb: ' Rester: to stay, to remain',
//     conjugations:
//       'je reste, il reste, Tu restes, tu restes, nous restons, ils restent ',
//   },
//   {
//     verb: ' Tenir: to hold, to keep',
//     conjugations:
//       'je tiens, il tient, vous tenez, vous tenez, nous tenons, ils tiennent',
//   },
//   {
//     verb: ' Porter: to wear, to carry',
//     conjugations:
//       'Je porte, il porte, vous portez, vous portez, nous portons, ils portent ',
//   },
//   {
//     verb: ' Parler: to speak, to talk',
//     conjugations:
//       'je parle, il parle, vous parlez, vous parlez, nous parlons, ils parlent ',
//   },
//   {
//     verb: ' Montrer: to show, to display',
//     conjugations:
//       'je montre, il montre, vous montrez, vous montrez, nous montrons , ils montrent ',
//   },
//   {
//     verb: ' Aller: to go',
//     conjugations:
//       'je pars, il part, vous partez, vous partez, nous partons, ils partent ',
//   },
//   {
//     verb: ' Continuer : to continue',
//     conjugations:
//       'je continue, il continue, vous continuez, vous continuez, nous continuons, ils continuent ',
//   },
//   {
//     verb: ' Penser: to think',
//     conjugations:
//       'je pense, il pense, vous pensez, vous Pensez, nous pensons, ils pensent ',
//   },
//   {
//     verb: ' Suivre: to follow, to pay attention',
//     conjugations:
//       'je suis, il suit, vous suivez, vous suivez, nous suivons, ils suivent ',
//   },
//   {
//     verb: ' Connaitre: to know, to be acquainted with',
//     conjugations:
//       'je sais, il sait, vous savez, vous savez, nous savons, ils savent ',
//   },
//   {
//     verb: ' Croire: to believe (in)',
//     conjugations:
//       'je crois, il croit, vous croyez, vous croyez, nous croyons, ils croient ',
//   },
//   {
//     verb: ' Compter: to count',
//     conjugations:
//       'je compte, il compte, vous comptez, vous comptez, nous comptons, ils comptent ',
//   },
//   {
//     verb: ' Commencer: to begin, to start, to commence',
//     conjugations:
//       'je commence, il commence, vous commencez, vous commencez, nous commençons, ils commencent',
//   },
//   {
//     verb: ' Entendre: to hear, to understand',
//     conjugations:
//       "J'entends, il entend, vous entendez, vous entendez, nous entendons, ils entendent ",
//   },
//   {
//     verb: ' Attendre: to wait, to expect',
//     conjugations:
//       "j'attends, il attend, vous attendez, vous attendez, nous attendons, ils attendent ",
//   },
//   {
//     verb: ' Remettre: to put back (on), to replace, to deliver',
//     conjugations:
//       'je livre, il livre, vous livrez, vous livrez, nous livrons , ils remettent ',
//   },
//   {
//     verb: ' Appeler: to call, to contact',
//     conjugations:
//       "J'appelle, il appelle, vous appelez, vous appelez, nous appelons, ils appellent ",
//   },
//   {
//     verb: ' Permettre: to permit, to allow, to enable',
//     conjugations:
//       'je permets, il permet, vous permettez, vous permettez, nous permettons, ils permettent ',
//   },
//   {
//     verb: ' Occuper: to occupy, to take up (time/space)',
//     conjugations:
//       "j'occupe, il occupe, vous occupez, vous occupez, nous occupons, ils occupent ",
//   },
//   {
//     verb: ' Devenir: to become, to turn (into)',
//     conjugations:
//       'je deviens, il devient, vous devenez, vous devenez, nous devenons, ils deviennent ',
//   },
//   {
//     verb: ' Partir: to leave, to depart, to proceed',
//     conjugations:
//       'je pars, il part, vous partez, vous partez, nous partons, ils partent ',
//   },
//   {
//     verb: ' Décider: to decide, to persuade',
//     conjugations:
//       'je décide, il décide , Vous décidez, vous décidez, nous décidons, ils décident',
//   },
//   {
//     verb: ' Arriver: to arrive, to happen',
//     conjugations:
//       "J'arrive, il arrive, vous arrivez, vous arrivez, nous arrivons, ils arrivent ",
//   },
//   {
//     verb: ' Servir: to serve',
//     conjugations:
//       'je sers, il sert, vous servez, vous servez, nous servons, ils servent ',
//   },
//   {
//     verb: ' Sembler: to seem',
//     conjugations:
//       'il me semble, il semble, vous semblez, vous semblez, nous semblons , ils semblent ',
//   },
//   {
//     verb: ' Revenir: to return, to come back 46',
//     conjugations:
//       'Je reviens, il revient, vous revenez, vous revenez, nous revenons, ils reviennent ',
//   },
//   {
//     verb: ' Recevoir: to receive, to welcome',
//     conjugations:
//       'je reçois, il reçoit, vous recevez, vous recevez, nous recevons, ils reçoivent ',
//   },
//   {
//     verb: ' Répondre to answer, to reply',
//     conjugations:
//       'je réponds, il répond, vous répondez, vous Répondez, nous répondons, ils répondent ',
//   },
//   {
//     verb: ' Vivre: to live',
//     conjugations:
//       'je vis, il vit, vous vivez, vous vivez, nous vivons, ils vivent ',
//   },
//   {
//     verb: ' Rappeler: to call back, to remind',
//     conjugations:
//       'je rappelle, il rappelle, vous rappellez, vous rappelez, nous rappelons, ils rappellent ',
//   },
//   {
//     verb: ' Présenter: to present, to introduce',
//     conjugations:
//       'je présente, il rappelle, vous présentez, vous présentez, nous présentons, ils présentent ',
//   },
//   {
//     verb: ' Accepter: to accept',
//     conjugations:
//       "j'accepte, il accepte, vous acceptez, vous acceptez, nous acceptons, ils acceptent",
//   },
//   {
//     verb: ' Agir: to act',
//     conjugations:
//       "J'agis, il agit, vous agissez, vous agissez, nous agissons, ils agissent ",
//   },
//   {
//     verb: ' Jouer: to play, to act, to gamble',
//     conjugations:
//       'je joue, il joue, vous jouez, vous jouez, nous jouons, ils jouent ',
//   },
//   {
//     verb: ' Poser: to put down, to pose, to lay (something) down',
//     conjugations:
//       'je pose, il pose, vous posez, vous posez, nous posons , ils demandent ',
//   },
//   {
//     verb: ' Reconnaitre : to recognise, to acknowledge',
//     conjugations:
//       'je reconnais, il reconnaît, vous reconnaissez, vous reconnaissez, nous reconnaissons, ils reconnaissent ',
//   },
//   {
//     verb: ' Choisir: to choose, to select',
//     conjugations:
//       'je choisis, il choisit, vous choisissez, vous choisissez, nous choisissons, ils choisissent ',
//   },
//   {
//     verb: ' Toucher: to touch, to feel, to affect',
//     conjugations:
//       'je touche, il touche, vous touchez, vous Touchons, nous touchons, ils touchent ',
//   },
//   {
//     verb: ' Aimer to like, to love',
//     conjugations:
//       "J'aime, il aime, tu aimes, tu aimes, nous aimons, ils aiment ",
//   },
//   {
//     verb: ' Retrouver: to find, to regain, to meet up',
//     conjugations:
//       'je retrouve, il retrouve, tu retrouves, tu retrouves, nous reprenons, ils reprennent ',
//   },
//   {
//     verb: ' Perdre to lose, to waste 62',
//     conjugations:
//       'je perds, il perd, tu perds, tu perds, nous perdons, ils perdent ',
//   },
//   {
//     verb: ' Ouvrir: to open (up)',
//     conjugations:
//       "j'ouvre, il ouvre, tu ouvres, tu ouvres, nous ouvrons, ils ouvrent",
//   },
//   {
//     verb: ' Gagner: to win, to gain, to earn',
//     conjugations:
//       'Je gagne, il gagne, tu gagnes, tu gagnes, nous gagnons, ils gagnent ',
//   },
//   {
//     verb: ' Exister: to exist',
//     conjugations:
//       "J'existe, il existe, vous existez, vous existez, nous existons, ils existent ",
//   },
//   {
//     verb: ' Refuser: to refuse',
//     conjugations:
//       'je refuse, il refuse, vous refusez, vous refusez, nous refusons , ils refusent ',
//   },
//   {
//     verb: ' Lire to read',
//     conjugations:
//       'je lis, il lit, vous lisez, vous lisez, nous lisons, ils lisent ',
//   },
//   {
//     verb: ' Changer: to change, to alter',
//     conjugations:
//       'je change, il change, vous changez, vous changez, nous changeons, ils changent ',
//   },
//   {
//     verb: ' Travailler: to work',
//     conjugations:
//       'je travaille, il travaille, vous travaillez, vous Travaillons, nous travaillons, ils travaillent ',
//   },
//   {
//     verb: ' Considérer: to consider',
//     conjugations:
//       'je considère, il considère, vous considérez, vous considérez, nous considérons, ils considèrent ',
//   },
//   {
//     verb: ' Réussir to succeed',
//     conjugations:
//       'je réussis, il réussit, vous réussissez, vous réussissez, nous réussissons, ils réussissent ',
//   },
//   {
//     verb: ' Représenter: to represent, to depict, to portray 73',
//     conjugations:
//       'je représente, il représente, Vous représentez, vous représentez, nous représentons, ils représentent',
//   },
//   {
//     verb: ' Assurer: to secure, to assure, to insecure',
//     conjugations:
//       "J'assure, il assure, vous assure, vous assurez, nous assurons, ils assurent ",
//   },
//   {
//     verb: ' Essayer: to try, to attempt',
//     conjugations:
//       "j'essaye, il essaie, vous essayez, vous essayez, nous essayons, ils essaient ",
//   },
//   {
//     verb: ' Sortir: to go out, to leave, to exit',
//     conjugations:
//       'je sors, il sort, vous retirez, vous prenez dehors, nous retirons, ils retirent ',
//   },
//   {
//     verb: ' Reprendre: to resume, to recover, to take back',
//     conjugations:
//       'je reprends, il reprend, vous reprenez, vous reprenez, nous reprenons, ils reprennent ',
//   },
//   {
//     verb: ' Mener: to lead, to conduct',
//     conjugations:
//       'je mène, il mène, vous dirigez, vous dirigez, nous menons, ils Lead ',
//   },
//   {
//     verb: ' Appartenir: to belong, to concern',
//     conjugations:
//       "J'appartiens, il appartient, vous appartenez, vous appartenez, nous appartenons, ils appartiennent ",
//   },
//   {
//     verb: ' Risquer to risk',
//     conjugations:
//       'je risque, il risque, vous risquez, vous risquez, nous risquons, ils risquent ',
//   },
//   {
//     verb: ' Concerner: to concern, to affect',
//     conjugations:
//       "je m'inquiète, il s'inquiète, vous vous inquiétez, vous vous inquiétez, nous nous soucions, ils nous concernent ",
//   },
//   {
//     verb: ' Apprendre: to learn, to teach',
//     conjugations:
//       "j'apprends, il apprend, vous apprenez, vous apprenez, nous apprenons, ils apprennent",
//   },
//   {
//     verb: ' Rencontrer: to meet, to encounter',
//     conjugations:
//       'Je rencontre, il rencontre, vous rencontrez, vous rencontrez, nous rencontrons, ils se rencontrent ',
//   },
//   {
//     verb: ' Obtenir: to obtain, to get',
//     conjugations:
//       'je reçois, il reçois, vous recevez, vous recevez, nous recevons, ils obtiennent ',
//   },
//   {
//     verb: ' Chercher to look for, to seek',
//     conjugations:
//       'je cherche, il cherche, vous cherchez, vous cherchez, nous cherchons , ils cherchent ',
//   },
//   {
//     verb: ' Entrer: to enter, to go into',
//     conjugations:
//       "J'entre, il entre, vous entrez, vous entrez, nous entrons, ils entrent ",
//   },
//   {
//     verb: ' Proposer: to suggest, to propose, to offer',
//     conjugations:
//       'je propose, il propose, vous proposez, vous proposez, nous proposons, ils proposent ',
//   },
//   {
//     verb: ' Apporter: to bring, to cause',
//     conjugations:
//       "j'apporte, il amène, vous apportez, vous Apportez, nous apportons, ils apportent ",
//   },
//   {
//     verb: ' Utiliser to use, to employ',
//     conjugations:
//       "J'utilise, il utilise, vous utilisez, vous utilisez, nous utilisons, ils utilisent ",
//   },
//   {
//     verb: ' Atteindre: to reach, to attain, to achieve',
//     conjugations:
//       "j'atteins, il atteint, vous atteignez, vous atteignez, nous atteignons, ils atteignent ",
//   },
//   {
//     verb: ' Tenter: to tempt',
//     conjugations:
//       "j'essaie, il essaie, tu tentes, tu tentes, nous tentons, ils tentent",
//   },
//   {
//     verb: ' Importer: to import',
//     conjugations:
//       "J'importe, il importe, vous importez, vous importez, nous importons, ils importent ",
//   },
//   {
//     verb: ' Ajouter to add',
//     conjugations:
//       "j'ajoute, il ajoute, vous ajoutez, vous ajoutez, nous ajoutons, ils ajoutent ",
//   },
//   {
//     verb: ' Produire: to produce',
//     conjugations:
//       'je produis, il produit, vous produisez, vous produisez, nous produisons , ils produisent ',
//   },
//   {
//     verb: ' Tenter: to tempt',
//     conjugations:
//       'je tente, il tente, vous tentez, vous tentez, nous essayons, ils tentent ',
//   },
//   {
//     verb: ' Importer: to import',
//     conjugations:
//       "j'importe, il importe, vous importez, vous importez, nous importons, ils importent ",
//   },
//   {
//     verb: ' Ajouter to add',
//     conjugations:
//       "j'ajoute, il ajoute, vous ajoutez, ajoutez vous, ajoutez-nous, ils ajoutent ",
//   },
//   {
//     verb: ' Produire: to produce 95',
//     conjugations:
//       'je produis, il produit, vous produisez, vous produisez, nous produisons, ils produisent ',
//   },
//   {
//     verb: ' Tirer: to pull, to draw, to fire',
//     conjugations: 'je',
//   },
//   {
//     verb: ' Créer: to create, to build',
//     conjugations: '',
//   },
//   {
//     verb: ' Préparer to prepare (something), to make',
//     conjugations: '',
//   },
//   {
//     verb: ' Écrire: to write',
//     conjugations: '',
//   },
//   {
//     verb: ' Défendre: to defend, to stand up for, to forbid',
//     conjugations: '',
//   },
// ];

// function Account() {
//   const [WordsARR, setWordsARR] = useState([]);
//   const [WordsMap, setWordsMap] = useState([]);
//   let finalStr = ``;
//   let last = `Je suis, il est, tu es, tu es, nous sommes, ils sont, je peux, il peut, tu peux, tu peux, nous pouvons, ils peuvent, je mets, il met, tu mets, tu mets, nous mettons , ils mettent, je dois, il doit, vous devez, vous devez, nous devons, ils doivent, je donne, il donne, vous donnez, vous donnez, nous donnons, ils donnent, je sais, il sait, vous savez, vous Sachez, nous savons, ils savent, je vois, il voit, vous voyez, vous voyez, nous voyons, ils voient, je trouve, il trouve, vous trouvez, vous trouvez, nous trouvons, ils trouvent, je viens, il vient, Vous venez, vous venez, nous venons, ils viennent, je comprends, il comprend, vous comprenez, vous comprenez, nous comprenons, ils comprennent, je tiens, il tient, vous tenez, vous tenez, nous tenons, ils tiennent, je parle , il parle, vous parlez, vous parlez, nous parlons, ils parlent, Je vais, il va, tu vas, tu vas, nous allons, ils partent, je pense, il pense, tu penses, tu penses, nous pensons, ils pensent, je sais, il sait, tu sais, tu sais, nous savons , ils savent, je compte, il compte, vous comptez, vous comptez, nous comptons, ils comptent, j'entends, il entend, vous entendez, vous entendez, nous entendons, ils entendent, je remets, il remet, vous entendez plus, vous remettez, nous remettons, ils remettent, je permets, il permet, vous permettez, vous permettez, nous permettons, ils permettent, je deviens, il devient, vous devenez, vous devenez, nous devenons, ils deviennent, Je décide, il décide, vous décidez, vous décidez, nous décidons, ils décident, je sers, il sert, vous servez, vous servez, nous servons, ils servent, je reviens, il revient, vous revenez, vous revenez, nous revenons , ils reviennent, Je reçois, il reçoit, vous recevez, vous recevez, nous recevons, ils reçoivent, je vis, il vit, vous vivez, vous vivez, nous vivons, ils vivent, je présente, il présente, vous présentez, vous présentez, nous présentons , ils présentent, j'agis, il agit, vous agissez, vous agissez, nous agissons, ils agissent, je demande, il demande, vous demandez, vous demandez, nous demandons, ils demandent, je choisis, il choisit, vous choisissez, vous Choisissez, nous choisissons, ils choisissent, j'aime, il aime, vous aimez, vous aimez, nous aimons, ils aiment, je perds, il perd, vous perdez, vous perdez, nous perdons, ils perdent, j'ouvre, il ouvre, vous ouvrez, vous ouvrez, nous ouvrons, ils ouvrent, j'existe, il existe, vous existez, vous existez, nous existons, ils existent, je lis, il a lu, vous lisez, vous lisez, nous lisons, ils lisent, Je travaille, il travaille, vous travaillez, vous travaillez, nous travaillons, ils travaillent, je réussis, il réussit, vous réussissez, vous réussissez, nous réussissons, ils réussissent, je préviens, il prévient, vous prévenez, vous prévenez, nous prévenons , ils préviennent, j'essaye, ça essaie, tu essaies, tu essaies, nous essayons, ils essaient, je reprends, ça reprend, tu reprends, tu reprends, nous reprenons, ils reprennent, j'appartiens, ça Appartenez, vous appartenez, vous appartenez, nous appartenons, ils appartiennent, je m'inquiète, il vous concerne, vous vous inquiétez, nous vous concernons, ils concernent, je rencontre, il rencontre, vous rencontrez, vous rencontrez, nous nous rencontrons, ils se rencontrent, Je cherche, il cherche, vous cherchez, vous cherchez, nous cherchons, ils cherchent,, Je suggère, il suggère, vous suggérez, vous suggérez, nous suggérons, ils suggèrent, j'utilise, il utilise, vous utilisez, vous utilisez, nous utilisons, ils utilisent, je tente, il tente, vous tentez, vous tentez, nous tentons , ils tentent, j'ajoute, il ajoute, vous ajoutez, vous ajoutez, nous ajoutons, ils ajoutent, je tente, il tente, vous tentez, vous tentez, nous tentons, ils tentent, j'ajoute, `;

//   let dataToBeTransalted = {
//     translated1:
//       'je  Être, il  Être, tu  Être, vous  Être, nous  Être, ils  Être: je  Avoirs , il  Avoirs , tu  Avoirs , vous  Avoirs , nous  Avoirs , ils  Avoirs : je  Pouvoir, il  Pouvoir, tu  Pouvoir, vous  Pouvoir, nous  Pouvoir, ils  Pouvoir: je  Faire, il  Faire, tu  Faire, vous  Faire, nous  Faire, ils  Faire: je  Mettre, il  Mettre, tu  Mettre, vous  Mettre, nous  Mettre, ils  Mettre: je  Dire, il  Dire, tu  Dire, vous  Dire, nous  Dire, ils  Dire: je  Devoir, il  Devoir, tu  Devoir, vous  Devoir, nous  Devoir, ils  Devoir: je  Prendre, il  Prendre, tu  Prendre, vous  Prendre, nous  Prendre, ils  Prendre: je  Donner, il  Donner, tu  Donner, vous  Donner, nous  Donner, ils  Donner: je  Vouloir , il  Vouloir , tu  Vouloir , vous  Vouloir , nous  Vouloir , ils  Vouloir : je  Savoir, il  Savoir, tu  Savoir, vous  Savoir, nous  Savoir, ils  Savoir',
//     translated2:
//       'je  Falloir, il  Falloir, tu  Falloir, vous  Falloir, nous  Falloir, ils  Falloir: je  Voir, il  Voir, tu  Voir, vous  Voir, nous  Voir, ils  Voir: je  Demander, il  Demander, tu  Demander, vous  Demander, nous  Demander, ils  Demander: je  Trouver, il  Trouver, tu  Trouver, vous  Trouver, nous  Trouver, ils  Trouver: je  Rendre, il  Rendre, tu  Rendre, vous  Rendre, nous  Rendre, ils  Rendre: je  Venir, il  Venir, tu  Venir, vous  Venir, nous  Venir, ils  Venir: je  Passer , il  Passer , tu  Passer , vous  Passer , nous  Passer , ils  Passer : je  Comprendre, il  Comprendre, tu  Comprendre, vous  Comprendre, nous  Comprendre, ils  Comprendre: je  Rester, il  Rester, tu  Rester, vous  Rester, nous  Rester, ils  Rester: je  Tenir, il  Tenir, tu  Tenir, vous  Tenir, nous  Tenir, ils  Tenir',
//     translated3:
//       'je  Porter, il  Porter, tu  Porter, vous  Porter, nous  Porter, ils  Porter: je  Parler, il  Parler, tu  Parler, vous  Parler, nous  Parler, ils  Parler: je  Montrer, il  Montrer, tu  Montrer, vous  Montrer, nous  Montrer, ils  Montrer: je  Aller, il  Aller, tu  Aller, vous  Aller, nous  Aller, ils  Aller: je  Continuer , il  Continuer , tu  Continuer, vous  Continuer , nous  Continuer , ils  Continuer : je  Penser, il  Penser, tu  Penser, vous  Penser, nous  Penser, ils  Penser: je  Suivre, il  Suivre, tu  Suivre, vous  Suivre, nous  Suivre, ils  Suivre: je  Connaitre, il  Connaitre, tu  Connaitre, vous  Connaitre, nous  Connaitre, ils  Connaitre: je  Croire, il  Croire, tu  Croire, vous  Croire, nous  Croire, ils  Croire: je  Compter, il  Compter, tu  Compter, vous  Compter, nous  Compter, ils  Compter: je  Commencer, il  Commencer, tu  Commencer, vous  Commencer, nous  Commencer, ils  Commencer',
//     translated4:
//       'je  Entendre, il  Entendre, tu  Entendre, vous  Entendre, nous  Entendre, ils  Entendre: je  Attendre, il  Attendre, tu  Attendre, vous  Attendre, nous  Attendre, ils  Attendre: je  Remettre, il  Remettre, tu  Remettre, vous  Remettre, nous  Remettre, ils  Remettre: je  Appeler, il  Appeler, tu  Appeler, vous  Appeler, nous  Appeler, ils  Appeler: je  Permettre, il  Permettre, tu  Permettre, vous  Permettre, nous  Permettre, ils  Permettre: je  Occuper, il  Occuper, tu  Occuper, vous  Occuper, nous  Occuper, ils  Occuper: je  Devenir, il  Devenir, tu  Devenir, vous  Devenir, nous  Devenir, ils  Devenir: je  Partir, il  Partir, tu  Partir, vous  Partir, nous  Partir, ils  Partir: je  Décider, il  Décider, tu  Décider, vous  Décider, nous  Décider, ils  Décider',
//     translated5:
//       'je  Arriver, il  Arriver, tu  Arriver, vous  Arriver, nous  Arriver, ils  Arriver: je  Servir, il  Servir, tu  Servir, vous  Servir, nous  Servir, ils  Servir: je  Sembler, il  Sembler, tu  Sembler, vous  Sembler, nous  Sembler, ils  Sembler: je  Revenir, il  Revenir, tu  Revenir, vous  Revenir, nous  Revenir, ils  Revenir: je  Recevoir, il  Recevoir, tu  Recevoir, vous  Recevoir, nous  Recevoir, ils  Recevoir: je  Répondre , il  Répondre , tu  Répondre , vous  Répondre , nous  Répondre , ils  Répondre : je  Vivre, il  Vivre, tu  Vivre, vous  Vivre, nous  Vivre, ils  Vivre: je  Rappeler, il  Rappeler, tu  Rappeler, vous  Rappeler, nous  Rappeler, ils  Rappeler: je  Présenter, il  Présenter, tu  Présenter, vous  Présenter, nous  Présenter, ils  Présenter: je  Accepter, il  Accepter, tu  Accepter, vous  Accepter, nous  Accepter, ils  Accepter',
//     translated6:
//       'je  Agir, il  Agir, tu  Agir, vous  Agir, nous  Agir, ils  Agir: je  Jouer, il  Jouer, tu  Jouer, vous  Jouer, nous  Jouer, ils  Jouer: je  Poser, il  Poser, tu  Poser, vous  Poser, nous  Poser, ils  Poser: je  Reconnaitre , il  Reconnaitre , tu  Reconnaitre , vous  Reconnaitre , nous  Reconnaitre , ils  Reconnaitre : je  Choisir, il  Choisir, tu  Choisir, vous  Choisir, nous  Choisir, ils  Choisir: je  Toucher, il  Toucher, tu  Toucher, vous  Toucher, nous  Toucher, ils  Toucher: je  Aimer , il  Aimer , tu  Aimer , vous  Aimer , nous  Aimer , ils  Aimer : je  Retrouver, il  Retrouver, tu  Retrouver, vous  Retrouver, nous  Retrouver, ils  Retrouver: je  Perdre , il  Perdre , tu  Perdre , vous  Perdre , nous  Perdre , ils  Perdre : je  Ouvrir, il  Ouvrir, tu  Ouvrir, vous  Ouvrir, nous  Ouvrir, ils  Ouvrir',
//     translated7:
//       'je  Gagner, il  Gagner, tu  Gagner, vous  Gagner, nous  Gagner, ils  Gagner: je  Exister, il  Exister, tu  Exister, vous  Exister, nous  Exister, ils  Exister: je  Refuser, il  Refuser, tu  Refuser, vous  Refuser, nous  Refuser, ils  Refuser: je  Lire , il  Lire , tu  Lire , vous  Lire , nous  Lire , ils  Lire : je  Changer, il  Changer, tu  Changer, vous  Changer, nous  Changer, ils  Changer: je  Travailler, il  Travailler, tu  Travailler, vous  Travailler, nous  Travailler, ils  Travailler: je  Considérer, il  Considérer, tu  Considérer, vous  Considérer, nous  Considérer, ils  Considérer: je  Réussir , il  Réussir , tu  Réussir , vous  Réussir , nous  Réussir , ils  Réussir : je  Représenter, il  Représenter, tu  Représenter, vous  Représenter, nous  Représenter, ils  Représenter',
//     translated8:
//       'je  Assurer, il  Assurer, tu  Assurer, vous  Assurer, nous  Assurer, ils  Assurer: je  Essayer, il  Essayer, tu  Essayer, vous  Essayer, nous  Essayer, ils  Essayer: je  Sortir, il  Sortir, tu  Sortir, vous  Sortir, nous  Sortir, ils  Sortir: je  Reprendre, il  Reprendre, tu  Reprendre, vous  Reprendre, nous  Reprendre, ils  Reprendre: je  Mener, il  Mener, tu  Mener, vous  Mener, nous  Mener, ils  Mener: je  Appartenir, il  Appartenir, tu  Appartenir, vous  Appartenir, nous  Appartenir, ils  Appartenir: je  Risquer , il  Risquer , tu  Risquer , vous  Risquer , nous  Risquer , ils  Risquer : je  Concerner, il  Concerner, tu  Concerner, vous  Concerner, nous  Concerner, ils  Concerner: je  Apprendre, il  Apprendre, tu  Apprendre, vous  Apprendre, nous  Apprendre, ils  Apprendre',
//     translated9:
//       'je  Rencontrer, il  Rencontrer, tu  Rencontrer, vous  Rencontrer, nous  Rencontrer, ils  Rencontrer: je  Obtenir, il  Obtenir, tu  Obtenir, vous  Obtenir, nous  Obtenir, ils  Obtenir: je  Chercher , il  Chercher , tu  Chercher , vous  Chercher , nous  Chercher , ils  Chercher : je  Entrer, il  Entrer, tu  Entrer, vous  Entrer, nous  Entrer, ils  Entrer: je  Proposer, il  Proposer, tu  Proposer, vous  Proposer, nous  Proposer, ils  Proposer: je  Apporter, il  Apporter, tu  Apporter, vous  Apporter, nous  Apporter, ils  Apporter: je  Utiliser , il  Utiliser , tu  Utiliser , vous  Utiliser , nous  Utiliser , ils  Utiliser : je  Atteindre, il  Atteindre, tu  Atteindre, vous  Atteindre, nous  Atteindre, ils  Atteindre: je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter',
//     translated10:
//       ': je  Importer, il  Importer, tu  Importer, vous  Importer, nous  Importer, ils  Importer: je  Ajouter , il  Ajouter , tu  Ajouter , vous  Ajouter , nous  Ajouter , ils  Ajouter : je  Produire, il  Produire, tu  Produire, vous  Produire, nous  Produire, ils  Produire: je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter: je  Importer, il  Importer, tu  Importer, vous  Importer, nous  Importer, ils  Importer: je  Ajouter , il  Ajouter , tu  Ajouter , vous  Ajouter , nous  Ajouter , ils  Ajouter : je  Produire, il  Produire, tu  Produire, vous  Produire, nous  Produire, ils  Produire: je',
//   };

//   // let dataToBeTransaltedInEnglish = {
//   //   "translated1":"I be, he be, you be, you be, we be, they be, I have, he have, you have, you have, we have, they have, I can, he can, you can, you can, we can , they Can, I Do, he Do, you Do, you Do, we Do, they Do, I Put, he Put, you Put, you Put, we Put, they Put, I Say, he Say, you Say, you Say, we Say, they Say, I must, he must, you must, you must, we must, they must, I take, he take, you take, you take, we take, they take, I give, he give, You Give, you Give, we Give, they Give, I Want, he Want, you Want, you Want, we Want, they Want, I Know, he Know, you Know, you Know, we Know, they Know,",
//   //   translated2:
//   //   'I Go, he Go, you Go, you Go, we Go, they Go, I Think, he Think, you Think, you Think, we Think, they Think, I Know, he Know, you Know, you Know, we Know , they Know, I Count, he Count, you Count, you Count, we Count, they Count, I Hear, he Hear, you Hear, you Hear, we Hear, they Hear, I Hand over, he Hand over, you Hand over, you Hand over, we Hand over, they Hand over, I Allow, he Allow, you Allow, you Allow, we Allow, they Allow, I Become, he Become, you Become, you Become, we Become, they Become, I Decide, he Decide, You Decide, You Decide, We Decide, They Decide, I Serve, He Serve, You Serve, You Serve, We Serve, They Serve, I Return,he Return, you Return, you Return, we Return, they Return',
//   //   translated3:
//   //   'I Receive, he Receive, you Receive, you Receive, we Receive, they Receive, I Live, he Live, you Live, you Live, we Live, they Live, I Present, he Present, you Present, you Present, we Present , they Present, I Act, he Act, you Act, you Act, we Act, they Act, I Ask, he Ask, you Ask, you Ask, we Ask, they Ask, I Choose, he Choose, you Choose, you Choose, we Choose, they Choose, I Love, he Love, you Love, you Love, we Love, they Love, I Lose, he Lose, you Lose, you Lose, we Lose, they Lose, I Open, he Open, you Open, you Open, we Open, they Open, I Exist, he Exist, you Exist, you Exist, we Exist, they Exist, I Read, he Read, you Read, you Read, we Read,they read',
//   //   translated4:
//   //   'I Work, he Work, you Work, you Work, we Work, they Work, I Succeed, he Succeed, you Succeed, you Succeed, we Succeed, they Succeed, I Prevent, he Prevent, you Prevent, you Prevent, we Prevent , they Prevent, I Try, it Try, you Try, you Try, we Try, they Try, I Take back, it Take back, you Take back, you Take back, we Take back, they Take back, I Belong, it Belong, you Belong, you Belong, we Belong, they Belong, I Concern, he Concern, you Concern, you concern, we concern, they Concern, I Meet, he Meet, you Meet, you Meet, we Meet, they Meet, I Seek, he Seek, you Seek , you Seek , we Seek , they Seek ,',
//   //   traslated5:
//   //   'I Suggest, he Suggest, you Suggest, you Suggest, we Suggest, they Suggest, I Use, he Use, you Use, you Use, we Use, they Use, I Tempt, he Tempt, you Tempt, you Tempt, we Tempt , they Tempt, I Add , he Add , you Add , you Add , we Add , they Add , I Tempt, he Tempt, you Tempt, you Tempt, we Tempt, they Tempt, I Add',
//   // };
//   let dataToBeTransaltedInEnglish = {
//     translated1:
//       'I Be, he Be, you Be, you Be, we Be, they Be: I have, he have, you have, you have, we have, they have: I can, he can, you can, you can, we can , they Power: I Do, he Do, you Do, you Do, we Do, they Do: I Put, he Put, you Put, you Put, we Put, they Put: I Say, he Say, you Say, you Say, we Say, they Say: I must, he must, you must, you must, we must, they must: I take, he take, you take, you take, we take, they take: I give, he give, You Give, you Give, we Give, they Give: I Want, he Want, you Want, you Want, we Want, they Want: I Know, he Know, you Know, you Know, we Know, they Know',
//     translated2:
//       'I must, it must, you must, you must, we must, they must: I see, he see, you see, you see, we see, they see: I ask, he asks, you ask, you ask, we ask , they Ask: I Find, he Find, you Find, you Find, we Find, they Find: I Return, he Return, you Return, you Return, we Return, they Return: I Come, he Come, you Come, you Come, we Come, they Come: I Pass, he Pass, you Pass, you Pass, we Pass, they Pass: I Understand, he Understand, you Understand, you Understand, we Understand, they Understand: I Stay, he Stay, You Stay, you Stay, we Stay, they Stay: I Hold, he Hold, you Hold, you Hold, we Hold, they Hold',
//     translated3:
//       'I Carry, he Carry, you Carry, you Carry, we Carry, they Carry: I Talk, he Talk, you Talk, you Talk, we Talk, they Talk: I Show, he Show, you Show, you Show, we Show , they Show: I Go, he Go, you Go, you Go, we Go, they Go: I Continue, he Continue, you Continue, you Continue, we Continue, they Continue: I Think, he Think, you Think, you Think, we Think, they Think: I Follow, he Follow, you Follow, you Follow, we Follow, they Follow: I Know, he Know, you Know, you Know, we Know, they Know: I Believe, he Believe, you Believe, you Believe, we Believe, they Believe: I Count, he Count, you Count, you Count, we Count, they Count: I Start, he Start,you Start, you Start, we Start, they Start',
//     translated4:
//       'I Hear, he Hear, you Hear, you Hear, we Hear, they Hear: I Wait, he Wait, you Wait, you Wait, we Wait, they Wait: I Deliver, he Deliver, you Deliver, you deliver, we Deliver , they Hand over: I Call, he Call, you Call, you Call, we Call, they Call: I Allow, he Allow, you Allow, you Allow, we Allow, they Allow: I Occupy, he Occupy, you Occupy, you Occupy, we Occupy, they Occupy: I Become, he Become, you Become, you Become, we Become, they Become: I Go, he Go, you Go, you Go, we Go, they Go: I Decide, he Decide, You Decide, you Decide, we Decide, they Decide',
//     translated5:
//       'I Arrive, he Arrive, you Arrive, you Arrive, we Arrive, they Arrive: I Serve, he Serve, you Serve, you Serve, we Serve, they Serve: I Seem, he Seem, you Seem, you Seem, we Seem , they Seem: I Return, he Return, you Return, you Return, we Return, they Return: I Receive, he Receive, you Receive, you Receive, we Receive, they Receive: I Reply, he Reply, you Reply, you Answer, we Answer, they Answer: I Live, he Live, you Live, you Live, we Live, they Live: I Remind, he Remind, you Remind, you Remind, we Remind, they Remind: I Present, he Present, you Introduce, you Introduce, we Introduce, they Introduce: I Accept, he Accept, you Accept, you Accept, we Accept, they Accept',
//     translated6:
//       'I Act, he Act, you Act, you Act, we Act, they Act: I Play, he Play, you Play, you Play, we Play, they Play: I Pose, he Pose, you Pose, you Pose, we Pose , they Ask: I Recognize, he Recognize, you Recognize, you Recognize, we Recognize, they Recognize: I Choose, he Choose, you Choose, you Choose, we Choose, they Choose: I Touch, he Touch, you Touch, you Touch, we Touch, they Touch: I Loving, he Loving, you Loving, you Loving, we Loving, they Loving: I Regain, he Regain, you Regain, you Regain, we Regain, they Regain: I Lose, he Lose, you Lose, you Lose, we Lose, they Lose: I Open, he Open, you Open, you Open, we Open, they Open',
//     translated7:
//       'I Win, he Win, you Win, you Win, we Win, they Win: I Exist, he Exist, you Exist, you Exist, we Exist, they Exist: I Refuse, he Refuse, you Refuse, you Refuse, we Refuse , they Refuse: I Read, he Read, you Read, you Read, we Read, they Read: I Change, he Change, you Change, you Change, we Change, they Change: I Work, he Work, you Work, you Work, we Work, they Work: I Consider, he Consider, you Consider, you Consider, we Consider, they Consider: I Succeed, he Succeed, you Succeed, you Succeed, we Succeed, they Succeed: I Represent, he Represent, You Represent, You Represent, We Represent, They Represent',
//     translated8:
//       'I Ensure, he Ensure, you Ensure, you Ensure, we Ensure, they Ensure: I Try, he Try, you Try, you Try, we Try, they Try: I Take out, he Take out, you Take out, you Take out, we Take out , they Take Out: I Take Back, he Take Back, you Take Back, you Take Back, we Take Back, they Take Back: I Lead, he Lead, you Lead, you Lead, we Lead, they Lead: I Belong, he Belong, you Belong, you Belong, we Belong, they Belong: I Risk, he Risk, you Risk, you Risk, we Risk, they Risk: I Concern, he Concern, you Concern, you Concern, us Concern, they Concern: I Learn, he Learn, you Learn, you Learn, we Learn, they Learn',
//     translated9:
//       'I Meet, He Meet, You Meet, You Meet, We Meet, They Meet: I Get, He Get, You Get, You Get, We Get, They Get: I Seek, He Seek, You Seek, You Seek, We Seek , they Search: I Enter, he Enter, you Enter, you Enter, we Enter, they Enter: I Propose, he Propose, you Propose, you Propose, we Propose, they Propose: I Bring, he Bring, you Bring, you Bring, we Bring, they Bring: I Use, he Use, you Use, you Use, we Use, they Use: I Reach, he Reach, you Reach, you Reach, we Reach, they Reach: I Attempt, he Attempt, you tempt, you tempt, we tempt, they tempt',
//     translated10:
//       'I Import, he Import, you Import, you Import, we Import, they Import: I Add, he Add, you Add, you Add, we Add, they Add : I Produce, he Produce, you Produce, you Produce, we Produce, they Produce: I Attempt, he Attempt, you Attempt, you Attempt, we Attempt, they Attempt: I Import, he Import, you Import, you Import, we Import, they Import: I Add, he Add, you Add, Add you, Add us, they Add: I Produce, he Produce, you Produce, you Produce, we Produce, they Produce: I',
//   };
//   let finalDataTranslated = {
//     translated1:
//       "Je Sois, il Sois, tu Sois, tu Sois, nous Soyons, ils Soient : j'ai, il a, tu as, tu as, nous avons, ils ont : je peux, il peut, vous pouvez, vous pouvez, nous pouvons , ils ont le pouvoir : je fais, il fait, vous faites, vous faites, nous faisons, ils font : je mets, il met, vous mettez, vous mettez, nous mettons, ils mettent : je dis, il dit, vous dites, vous Dis, nous disons, ils disent : je dois, il faut, vous devez, vous devez, nous devons, ils doivent : je prends, il prend, vous prenez, vous prenez, nous prenons, ils prennent : je donne, il donne, Vous donnez, vous donnez, nous donnons, ils donnent : je veux, il veut, vous voulez, vous voulez, nous voulons, ils veulent : je sais, il sait, vous savez, vous savez, nous savons, ils savent",
//     translated2:
//       'Je dois, il faut, tu dois, tu dois, nous devons, ils doivent : je vois, il voit, tu vois, tu vois, nous voyons, ils voient : je demande, il demande, vous demandez, vous demandez, nous demandons , ils demandent : je trouve, il trouve, vous trouvez, vous trouvez, nous trouvons, ils trouvent : je reviens, il revient, vous revenez, vous revenez, nous revenons, ils reviennent : je viens, il vient, vous venez, vous Viens, nous venons, ils viennent : je passe, il passe, tu passes, tu passes, nous passons, ils passent : je comprends, il comprend, tu comprends, tu comprends, nous comprenons, ils comprennent : je reste, il reste, Tu restes, tu restes, nous restons, ils restent : je tiens, il tient, vous tenez, vous tenez, nous tenons, ils tiennent',
//     translated3:
//       'Je porte, il porte, vous portez, vous portez, nous portons, ils portent : je parle, il parle, vous parlez, vous parlez, nous parlons, ils parlent : je montre, il montre, vous montrez, vous montrez, nous montrons , ils montrent : je pars, il part, vous partez, vous partez, nous partons, ils partent : je continue, il continue, vous continuez, vous continuez, nous continuons, ils continuent : je pense, il pense, vous pensez, vous Pensez, nous pensons, ils pensent : je suis, il suit, vous suivez, vous suivez, nous suivons, ils suivent : je sais, il sait, vous savez, vous savez, nous savons, ils savent : je crois, il croit, vous croyez, vous croyez, nous croyons, ils croient : je compte, il compte, vous comptez, vous comptez, nous comptons, ils comptent : je commence, il commence, vous commencez, vous commencez, nous commençons, ils commencent',
//     translated4:
//       "J'entends, il entend, vous entendez, vous entendez, nous entendons, ils entendent : j'attends, il attend, vous attendez, vous attendez, nous attendons, ils attendent : je livre, il livre, vous livrez, vous livrez, nous livrons , ils remettent : J'appelle, il appelle, vous appelez, vous appelez, nous appelons, ils appellent : je permets, il permet, vous permettez, vous permettez, nous permettons, ils permettent : j'occupe, il occupe, vous occupez, vous occupez, nous occupons, ils occupent : je deviens, il devient, vous devenez, vous devenez, nous devenons, ils deviennent : je pars, il part, vous partez, vous partez, nous partons, ils partent : je décide, il décide , Vous décidez, vous décidez, nous décidons, ils décident",
//     translated5:
//       "J'arrive, il arrive, vous arrivez, vous arrivez, nous arrivons, ils arrivent : je sers, il sert, vous servez, vous servez, nous servons, ils servent : il me semble, il semble, vous semblez, vous semblez, nous semblons , ils semblent : Je reviens, il revient, vous revenez, vous revenez, nous revenons, ils reviennent : je reçois, il reçoit, vous recevez, vous recevez, nous recevons, ils reçoivent : je réponds, il répond, vous répondez, vous Répondez, nous répondons, ils répondent : je vis, il vit, vous vivez, vous vivez, nous vivons, ils vivent : je rappelle, il rappelle, vous rappellez, vous rappelez, nous rappelons, ils rappellent : je présente, il rappelle, vous présentez, vous présentez, nous présentons, ils présentent : j'accepte, il accepte, vous acceptez, vous acceptez, nous acceptons, ils acceptent",
//     translated6:
//       "J'agis, il agit, vous agissez, vous agissez, nous agissons, ils agissent : je joue, il joue, vous jouez, vous jouez, nous jouons, ils jouent : je pose, il pose, vous posez, vous posez, nous posons , ils demandent : je reconnais, il reconnaît, vous reconnaissez, vous reconnaissez, nous reconnaissons, ils reconnaissent : je choisis, il choisit, vous choisissez, vous choisissez, nous choisissons, ils choisissent : je touche, il touche, vous touchez, vous Touchons, nous touchons, ils touchent : J'aime, il aime, tu aimes, tu aimes, nous aimons, ils aiment : je retrouve, il retrouve, tu retrouves, tu retrouves, nous reprenons, ils reprennent : je perds, il perd, tu perds, tu perds, nous perdons, ils perdent : j'ouvre, il ouvre, tu ouvres, tu ouvres, nous ouvrons, ils ouvrent",
//     translated7:
//       "Je gagne, il gagne, tu gagnes, tu gagnes, nous gagnons, ils gagnent : J'existe, il existe, vous existez, vous existez, nous existons, ils existent : je refuse, il refuse, vous refusez, vous refusez, nous refusons , ils refusent : je lis, il lit, vous lisez, vous lisez, nous lisons, ils lisent : je change, il change, vous changez, vous changez, nous changeons, ils changent : je travaille, il travaille, vous travaillez, vous Travaillons, nous travaillons, ils travaillent : je considère, il considère, vous considérez, vous considérez, nous considérons, ils considèrent : je réussis, il réussit, vous réussissez, vous réussissez, nous réussissons, ils réussissent : je représente, il représente, Vous représentez, vous représentez, nous représentons, ils représentent",
//     translated8:
//       "J'assure, il assure, vous assure, vous assurez, nous assurons, ils assurent : j'essaye, il essaie, vous essayez, vous essayez, nous essayons, ils essaient : je sors, il sort, vous retirez, vous prenez dehors, nous retirons, ils retirent : je reprends, il reprend, vous reprenez, vous reprenez, nous reprenons, ils reprennent : je mène, il mène, vous dirigez, vous dirigez, nous menons, ils Lead : J'appartiens, il appartient, vous appartenez, vous appartenez, nous appartenons, ils appartiennent : je risque, il risque, vous risquez, vous risquez, nous risquons, ils risquent : je m'inquiète, il s'inquiète, vous vous inquiétez, vous vous inquiétez, nous nous soucions, ils nous concernent : j'apprends, il apprend, vous apprenez, vous apprenez, nous apprenons, ils apprennent",
//     translated9:
//       "Je rencontre, il rencontre, vous rencontrez, vous rencontrez, nous rencontrons, ils se rencontrent : je reçois, il reçois, vous recevez, vous recevez, nous recevons, ils obtiennent : je cherche, il cherche, vous cherchez, vous cherchez, nous cherchons , ils cherchent : J'entre, il entre, vous entrez, vous entrez, nous entrons, ils entrent : je propose, il propose, vous proposez, vous proposez, nous proposons, ils proposent : j'apporte, il amène, vous apportez, vous Apportez, nous apportons, ils apportent : J'utilise, il utilise, vous utilisez, vous utilisez, nous utilisons, ils utilisent : j'atteins, il atteint, vous atteignez, vous atteignez, nous atteignons, ils atteignent : j'essaie, il essaie, tu tentes, tu tentes, nous tentons, ils tentent",
//     translated10:
//       "J'importe, il importe, vous importez, vous importez, nous importons, ils importent : j'ajoute, il ajoute, vous ajoutez, vous ajoutez, nous ajoutons, ils ajoutent : je produis, il produit, vous produisez, vous produisez, nous produisons , ils produisent : je tente, il tente, vous tentez, vous tentez, nous essayons, ils tentent : j'importe, il importe, vous importez, vous importez, nous importons, ils importent : j'ajoute, il ajoute, vous ajoutez, ajoutez vous, ajoutez-nous, ils ajoutent : je produis, il produit, vous produisez, vous produisez, nous produisons, ils produisent : je",
//   };
//   const mapper = () => {
//     let tempStr = `1. Être: to be

//     2. Avoirs to have

//     3. Pouvoir: to be able to

//     4. Faire: to do, to make

//     5. Mettre: to put, to practice

//     6. Dire: to say, to tell

//     7. Devoir: to have to, to must, to owe

//     8. Prendre: to take, to capture

//     9. Donner: to give

//     10. Vouloir to want, to wish

//     11. Savoir: to know

//     12. Falloir: to have to

//     13. Voir: to see

//     14. Demander: to ask, to request

//     15. Trouver: to find, to discover

//     16. Rendre: to return (something), to give back

//     17. Venir: to come

//     18. Passer to pass, to go past

//     19. Comprendre: to understand, to include, to comprehend

//     20. Rester: to stay, to remain

//     21. Tenir: to hold, to keep

//     22. Porter: to wear, to carry

//     23. Parler: to speak, to talk

//     24. Montrer: to show, to display

//     25. Aller: to go

//     26. Continuer : to continue

//     27. Penser: to think

//     28. Suivre: to follow, to pay attention

//     29. Connaitre: to know, to be acquainted with

//     30. Croire: to believe (in)

//     31. Compter: to count

//     32. Commencer: to begin, to start, to commence

//     33. Entendre: to hear, to understand

//     34. Attendre: to wait, to expect

//     35. Remettre: to put back (on), to replace, to deliver

//     36. Appeler: to call, to contact

//     37. Permettre: to permit, to allow, to enable

//     38. Occuper: to occupy, to take up (time/space)

//     39. Devenir: to become, to turn (into)

//     40. Partir: to leave, to depart, to proceed

//     41. Décider: to decide, to persuade

//     42. Arriver: to arrive, to happen

//     43. Servir: to serve

//     44. Sembler: to seem

//     45. Revenir: to return, to come back 46. Laisser to leave, to allow, to let

//     17. Recevoir: to receive, to welcome

//     48. Répondre to answer, to reply

//     49. Vivre: to live

//     50. Rappeler: to call back, to remind

//     51. Présenter: to present, to introduce

//     52. Accepter: to accept

//     53. Agir: to act

//     54. Jouer: to play, to act, to gamble

//     55. Poser: to put down, to pose, to lay (something) down

//     56. Reconnaitre : to recognise, to acknowledge

//     57. Choisir: to choose, to select

//     58. Toucher: to touch, to feel, to affect

//     59. Aimer to like, to love

//     60. Retrouver: to find, to regain, to meet up

//     61. Perdre to lose, to waste 62. Expliquer to explain, to account for

//     63. Ouvrir: to open (up)

//     64. Gagner: to win, to gain, to earn

//     65. Exister: to exist

//     66. Refuser: to refuse

//     67. Lire to read

//     68. Changer: to change, to alter

//     69. Travailler: to work

//     70. Considérer: to consider

//     71. Réussir to succeed

//     72. Représenter: to represent, to depict, to portray 73. Empêcher: to prevent, to stop

//     74. Assurer: to secure, to assure, to insecure

//     75. Essayer: to try, to attempt

//     76. Sortir: to go out, to leave, to exit

//     77. Reprendre: to resume, to recover, to take back

//     78. Mener: to lead, to conduct

//     79. Appartenir: to belong, to concern

//     80. Risquer to risk

//     81. Concerner: to concern, to affect

//     82. Apprendre: to learn, to teach

//     83. Rencontrer: to meet, to encounter

//     84. Obtenir: to obtain, to get

//     85. Chercher to look for, to seek

//     86. Entrer: to enter, to go into

//     87. Proposer: to suggest, to propose, to offer

//     88. Apporter: to bring, to cause

//     89. Utiliser to use, to employ

//     90. Atteindre: to reach, to attain, to achieve

//     91. Tenter: to tempt

//     92. Importer: to import

//     93. Ajouter to add

//     94. Produire: to produce

//     91. Tenter: to tempt

//     92. Importer: to import

//     93. Ajouter to add

//     94. Produire: to produce 95. Relever: to raise, to stand up, to pick up

//     96. Tirer: to pull, to draw, to fire

//     97. Créer: to create, to build

//     98. Préparer to prepare (something), to make

//     99. Écrire: to write

//     100. Défendre: to defend, to stand up for, to forbid
//     `;

//     const splitStr = tempStr.split('\n');
//     let wordsArr = [];
//     let conjugations = ['je', 'il', 'tu', 'vous', 'nous', 'ils'];

//     splitStr.forEach((element, i) => {
//       if (i % 2 === 0) {
//         wordsArr.push(element.split('.')[1]);
//       }
//     });

//     let onlyWords = wordsArr.map((word) => {
//       if (word.includes(':')) {
//         return word.split(':')[0];
//       } else {
//         return word.split('to')[0];
//       }
//     });
//     setWordsARR(wordsArr);
//     const conjugatedArr = {};
//     let strToTransalate = ``;

//     for (let i = 0; i < onlyWords.length; i++) {
//       for (let j = 0; j < conjugations.length; j++) {
//         if (conjugations[j] === 'ils') {
//           strToTransalate =
//             strToTransalate + `${conjugations[j]} ${onlyWords[i]}: `;
//         } else {
//           strToTransalate =
//             strToTransalate + `${conjugations[j]} ${onlyWords[i]}, `;
//         }
//       }
//     }

//     let trimStr = ``;
//     for (let count = 0; count < strToTransalate.length; count++) {
//       trimStr = trimStr + strToTransalate[count];

//       if (count % 1000 === 0 && count !== 0) {
//         let nameIndex = `translated${Math.floor(count / 1000)}`;
//         conjugatedArr[nameIndex] = trimStr;
//         trimStr = ``;
//       }
//     }
//     // const temp = Object.keys(conjugatedArr);
//     console.log(conjugatedArr);
//     debugger;
//   };

//   const translate = async (from, to, key, json, again) => {
//     const url = 'https://nlp-translation.p.rapidapi.com/v1/jsontranslate';
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         from,
//         to,
//         json: `{"${key}":"${json}"}`,
//       }),
//     };
//     try {
//       const response = await fetch(url, options);
//       let result = await response.text();
//       result = JSON.parse(result);
//       debugger;
//       let toTranslate = result.translated_json[to];
//       toTranslate = JSON.parse(toTranslate);
//       debugger;
//       finalDataTranslated[key] = toTranslate[key];
//       debugger;
//       console.log(finalDataTranslated);
//       debugger;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   React.useEffect(() => {
//     console.log(WordsMap.length);
//   }, [WordsMap]);

//   return (
//     <div>
//       <button
//         type='button'
//         className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
//         onClick={async () => {
//           // for (const traslator in dataToBeTransaltedInEnglish) {
//           //   await translate(
//           //     'en',
//           //     'fr',
//           //     traslator,
//           //     dataToBeTransaltedInEnglish[traslator]
//           //   );
//           // }
//         }}
//       >
//         Click to translate
//       </button>
//       <button
//         type='button'
//         className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
//         onClick={() => {
//           setWordsMap(finalRes);
//         }}
//       >
//         Click to print
//       </button>
//       <button
//         type='button'
//         className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
//         onClick={() => {
//           mapper();
//         }}
//       >
//         Click to format
//       </button>
//       <table className='table border-2 border-black '>
//         <thead>
//           <tr className='border-2 border-black'>
//             <th className='border-2 border-black'>Verb</th>
//             <th className='border-2 border-black'>Je ( I )</th>
//             <th className='border-2 border-black'>
//               Il/elle/on (He , She , We)
//             </th>
//             <th className='border-2 border-black'>Tu ( You )</th>
//             <th className='border-2 border-black'>Vous (You)</th>
//             <th className='border-2 border-black'>Nous (We)</th>
//             <th className='border-2 border-black'>Ils/elles (They)</th>
//           </tr>
//         </thead>
//         {WordsMap.map(({ verb, conjugations }) => {
          
//           let temp = conjugations.split(', ')
//           return (
//           <>
//             <tr className='border-2 border-black'>
//               <td className='border-2 border-black'>{verb}</td>
//               <td className='border-2 border-black'>{temp[0] || ''}</td>
//               <td className='border-2 border-black'>{temp[1] || ''}</td>
//               <td className='border-2 border-black'>{temp[2] || ''}</td>
//               <td className='border-2 border-black'>{temp[3] || ''}</td>
//               <td className='border-2 border-black'>{temp[4] || ''}</td>
//               <td className='border-2 border-black'>{temp[5] || ''}</td>            </tr>
//           </>
//         )})}
//       </table>
//     </div>
//   );
// }

// export default Account;

// // {
// //   "translated1": "je  Être, il  Être, tu  Être, vous  Être, nous  Être, ils  Être, je  Pouvoir, il  Pouvoir, tu  Pouvoir, vous  Pouvoir, nous  Pouvoir, ils  Pouvoir, je  Mettre, il  Mettre, tu  Mettre, vous  Mettre, nous  Mettre, ils  Mettre, je  Devoir, il  Devoir, tu  Devoir, vous  Devoir, nous  Devoir, ils  Devoir, je  Donner, il  Donner, tu  Donner, vous  Donner, nous  Donner, ils  Donner, je  Savoir, il  Savoir, tu  Savoir, vous  Savoir, nous  Savoir, ils  Savoir, je  Voir, il  Voir, tu  Voir, vous  Voir, nous  Voir, ils  Voir, je  Trouver, il  Trouver, tu  Trouver, vous  Trouver, nous  Trouver, ils  Trouver, je  Venir, il  Venir, tu  Venir, vous  Venir, nous  Venir, ils  Venir, je  Comprendre, il  Comprendre, tu  Comprendre, vous  Comprendre, nous  Comprendre, ils  Comprendre, je  Tenir, il  Tenir, tu  Tenir, vous  Tenir, nous  Tenir, ils  Tenir, je  Parler, il  Parler, tu  Parler, vous  Parler, nous  Parler, ils  Parler, je  Aller, il  Aller, tu  Aller, vous  Aller, nous  Aller, ils  Aller,",
// //   "translated2": "je  Penser, il  Penser, tu  Penser, vous  Penser, nous  Penser, ils  Penser, je  Connaitre, il  Connaitre, tu  Connaitre, vous  Connaitre, nous  Connaitre, ils  Connaitre, je  Compter, il  Compter, tu  Compter, vous  Compter, nous  Compter, ils  Compter, je  Entendre, il  Entendre, tu  Entendre, vous  Entendre, nous  Entendre, ils  Entendre, je  Remettre, il  Remettre, tu  Remettre, vous  Remettre, nous  Remettre, ils  Remettre, je  Permettre, il  Permettre, tu  Permettre, vous  Permettre, nous  Permettre, ils  Permettre, je  Devenir, il  Devenir, tu  Devenir, vous  Devenir, nous  Devenir, ils  Devenir, je  Décider, il  Décider, tu  Décider, vous  Décider, nous  Décider, ils  Décider, je  Servir, il  Servir, tu  Servir, vous  Servir, nous  Servir, ils  Servir, je  Revenir, il  Revenir, tu  Revenir, vous  Revenir, nous  Revenir, ils  Revenir, je  Recevoir, il  Recevoir, tu  Recevoir, vous  Recevoir, nous  Recevoir, ils  Recevoir, je  Vivre, il  Vivre, tu  Vivre, vous  Vivre, nous  Vivre,",
// //   "translated3": " ils  Vivre, je  Présenter, il  Présenter, tu  Présenter, vous  Présenter, nous  Présenter, ils  Présenter, je  Agir, il  Agir, tu  Agir, vous  Agir, nous  Agir, ils  Agir, je  Poser, il  Poser, tu  Poser, vous  Poser, nous  Poser, ils  Poser, je  Choisir, il  Choisir, tu  Choisir, vous  Choisir, nous  Choisir, ils  Choisir, je  Aimer , il  Aimer , tu  Aimer , vous  Aimer , nous  Aimer , ils  Aimer , je  Perdre , il  Perdre , tu  Perdre , vous  Perdre , nous  Perdre , ils  Perdre , je  Ouvrir, il  Ouvrir, tu  Ouvrir, vous  Ouvrir, nous  Ouvrir, ils  Ouvrir, je  Exister, il  Exister, tu  Exister, vous  Exister, nous  Exister, ils  Exister, je  Lire , il  Lire , tu  Lire , vous  Lire , nous  Lire , ils  Lire , je  Travailler, il  Travailler, tu  Travailler, vous  Travailler, nous  Travailler, ils  Travailler, je  Réussir , il  Réussir , tu  Réussir , vous  Réussir , nous  Réussir , ils  Réussir , je  Empêcher, il  Empêcher, tu  Empêcher, vous  Empêcher, nous  Empêcher, ils  Empêcher, je  Essa",
// //   "translated4": "yer, il  Essayer, tu  Essayer, vous  Essayer, nous  Essayer, ils  Essayer, je  Reprendre, il  Reprendre, tu  Reprendre, vous  Reprendre, nous  Reprendre, ils  Reprendre, je  Appartenir, il  Appartenir, tu  Appartenir, vous  Appartenir, nous  Appartenir, ils  Appartenir, je  Concerner, il  Concerner, tu  Concerner, vous  Concerner, nous  Concerner, ils  Concerner, je  Rencontrer, il  Rencontrer, tu  Rencontrer, vous  Rencontrer, nous  Rencontrer, ils  Rencontrer, je  Chercher , il  Chercher , tu  Chercher , vous  Chercher , nous  Chercher , ils  Chercher , je  Proposer, il  Proposer, tu  Proposer, vous  Proposer, nous  Proposer, ils  Proposer, je  Utiliser , il  Utiliser , tu  Utiliser , vous  Utiliser , nous  Utiliser , ils  Utiliser , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter , il  Ajouter , tu  Ajouter , vous  Ajouter , nous  Ajouter , ils  Ajouter , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter"
// // }
