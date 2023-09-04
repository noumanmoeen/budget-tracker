import axios from 'axios';
import React, { useState } from 'react';

function Account() {
  const [WordsMap, setWordsMap] = useState([]);
  let finalStr = ``;
  let last = `Je suis, il est, tu es, tu es, nous sommes, ils sont, je peux, il peut, tu peux, tu peux, nous pouvons, ils peuvent, je mets, il met, tu mets, tu mets, nous mettons , ils mettent, je dois, il doit, vous devez, vous devez, nous devons, ils doivent, je donne, il donne, vous donnez, vous donnez, nous donnons, ils donnent, je sais, il sait, vous savez, vous Sachez, nous savons, ils savent, je vois, il voit, vous voyez, vous voyez, nous voyons, ils voient, je trouve, il trouve, vous trouvez, vous trouvez, nous trouvons, ils trouvent, je viens, il vient, Vous venez, vous venez, nous venons, ils viennent, je comprends, il comprend, vous comprenez, vous comprenez, nous comprenons, ils comprennent, je tiens, il tient, vous tenez, vous tenez, nous tenons, ils tiennent, je parle , il parle, vous parlez, vous parlez, nous parlons, ils parlent, Je vais, il va, tu vas, tu vas, nous allons, ils partent, je pense, il pense, tu penses, tu penses, nous pensons, ils pensent, je sais, il sait, tu sais, tu sais, nous savons , ils savent, je compte, il compte, vous comptez, vous comptez, nous comptons, ils comptent, j'entends, il entend, vous entendez, vous entendez, nous entendons, ils entendent, je remets, il remet, vous entendez plus, vous remettez, nous remettons, ils remettent, je permets, il permet, vous permettez, vous permettez, nous permettons, ils permettent, je deviens, il devient, vous devenez, vous devenez, nous devenons, ils deviennent, Je décide, il décide, vous décidez, vous décidez, nous décidons, ils décident, je sers, il sert, vous servez, vous servez, nous servons, ils servent, je reviens, il revient, vous revenez, vous revenez, nous revenons , ils reviennent, Je reçois, il reçoit, vous recevez, vous recevez, nous recevons, ils reçoivent, je vis, il vit, vous vivez, vous vivez, nous vivons, ils vivent, je présente, il présente, vous présentez, vous présentez, nous présentons , ils présentent, j'agis, il agit, vous agissez, vous agissez, nous agissons, ils agissent, je demande, il demande, vous demandez, vous demandez, nous demandons, ils demandent, je choisis, il choisit, vous choisissez, vous Choisissez, nous choisissons, ils choisissent, j'aime, il aime, vous aimez, vous aimez, nous aimons, ils aiment, je perds, il perd, vous perdez, vous perdez, nous perdons, ils perdent, j'ouvre, il ouvre, vous ouvrez, vous ouvrez, nous ouvrons, ils ouvrent, j'existe, il existe, vous existez, vous existez, nous existons, ils existent, je lis, il a lu, vous lisez, vous lisez, nous lisons, ils lisent, Je travaille, il travaille, vous travaillez, vous travaillez, nous travaillons, ils travaillent, je réussis, il réussit, vous réussissez, vous réussissez, nous réussissons, ils réussissent, je préviens, il prévient, vous prévenez, vous prévenez, nous prévenons , ils préviennent, j'essaye, ça essaie, tu essaies, tu essaies, nous essayons, ils essaient, je reprends, ça reprend, tu reprends, tu reprends, nous reprenons, ils reprennent, j'appartiens, ça Appartenez, vous appartenez, vous appartenez, nous appartenons, ils appartiennent, je m'inquiète, il vous concerne, vous vous inquiétez, nous vous concernons, ils concernent, je rencontre, il rencontre, vous rencontrez, vous rencontrez, nous nous rencontrons, ils se rencontrent, Je cherche, il cherche, vous cherchez, vous cherchez, nous cherchons, ils cherchent,, Je suggère, il suggère, vous suggérez, vous suggérez, nous suggérons, ils suggèrent, j'utilise, il utilise, vous utilisez, vous utilisez, nous utilisons, ils utilisent, je tente, il tente, vous tentez, vous tentez, nous tentons , ils tentent, j'ajoute, il ajoute, vous ajoutez, vous ajoutez, nous ajoutons, ils ajoutent, je tente, il tente, vous tentez, vous tentez, nous tentons, ils tentent, j'ajoute, `;

  // let dataToBeTransalted = {
  //   translated1:
  //     'je  Être, il  Être, tu  Être, vous  Être, nous  Être, ils  Être, je  Pouvoir, il  Pouvoir, tu  Pouvoir, vous  Pouvoir, nous  Pouvoir, ils  Pouvoir, je  Mettre, il  Mettre, tu  Mettre, vous  Mettre, nous  Mettre, ils  Mettre, je  Devoir, il  Devoir, tu  Devoir, vous  Devoir, nous  Devoir, ils  Devoir, je  Donner, il  Donner, tu  Donner, vous  Donner, nous  Donner, ils  Donner, je  Savoir, il  Savoir, tu  Savoir, vous  Savoir, nous  Savoir, ils  Savoir, je  Voir, il  Voir, tu  Voir, vous  Voir, nous  Voir, ils  Voir, je  Trouver, il  Trouver, tu  Trouver, vous  Trouver, nous  Trouver, ils  Trouver, je  Venir, il  Venir, tu  Venir, vous  Venir, nous  Venir, ils  Venir, je  Comprendre, il  Comprendre, tu  Comprendre, vous  Comprendre, nous  Comprendre, ils  Comprendre, je  Tenir, il  Tenir, tu  Tenir, vous  Tenir, nous  Tenir, ils  Tenir, je  Parler, il  Parler, tu  Parler, vous  Parler, nous  Parler, ils  Parler',
  //   translated2:
  //     'je  Aller, il  Aller, tu  Aller, vous  Aller, nous  Aller, ils  Aller, je  Penser, il  Penser, tu  Penser, vous  Penser, nous  Penser, ils  Penser, je  Connaitre, il  Connaitre, tu  Connaitre, vous  Connaitre, nous  Connaitre, ils  Connaitre, je  Compter, il  Compter, tu  Compter, vous  Compter, nous  Compter, ils  Compter, je  Entendre, il  Entendre, tu  Entendre, vous  Entendre, nous  Entendre, ils  Entendre, je  Remettre, il  Remettre, tu  Remettre, vous  Remettre, nous  Remettre, ils  Remettre, je  Permettre, il  Permettre, tu  Permettre, vous  Permettre, nous  Permettre, ils  Permettre, je  Devenir, il  Devenir, tu  Devenir, vous  Devenir, nous  Devenir, ils  Devenir, je  Décider, il  Décider, tu  Décider, vous  Décider, nous  Décider, ils  Décider, je  Servir, il  Servir, tu  Servir, vous  Servir, nous  Servir, ils  Servir, je  Revenir, il  Revenir, tu  Revenir, vous  Revenir, nous  Revenir, ils  Revenir',
  //   translated3:
  //     ' je  Recevoir, il  Recevoir, tu  Recevoir, vous  Recevoir, nous  Recevoir, ils  Recevoir, je  Vivre, il  Vivre, tu  Vivre, vous  Vivre, nous  Vivre, ils  Vivre, je  Présenter, il  Présenter, tu  Présenter, vous  Présenter, nous  Présenter, ils  Présenter, je  Agir, il  Agir, tu  Agir, vous  Agir, nous  Agir, ils  Agir, je  Poser, il  Poser, tu  Poser, vous  Poser, nous  Poser, ils  Poser, je  Choisir, il  Choisir, tu  Choisir, vous  Choisir, nous  Choisir, ils  Choisir, je  Aimer , il  Aimer , tu  Aimer , vous  Aimer , nous  Aimer , ils  Aimer , je  Perdre , il  Perdre , tu  Perdre , vous  Perdre , nous  Perdre , ils  Perdre , je  Ouvrir, il  Ouvrir, tu  Ouvrir, vous  Ouvrir, nous  Ouvrir, ils  Ouvrir, je  Exister, il  Exister, tu  Exister, vous  Exister, nous  Exister, ils  Exister, je  Lire , il  Lire , tu  Lire , vous  Lire , nous  Lire , ils  Lire ',
  //   translated4:
  //     ' je  Travailler, il  Travailler, tu  Travailler, vous  Travailler, nous  Travailler, ils  Travailler, je  Réussir , il  Réussir , tu  Réussir , vous  Réussir , nous  Réussir , ils  Réussir , je  Empêcher, il  Empêcher, tu  Empêcher, vous  Empêcher, nous  Empêcher, ils  Empêcher, je  Essayer, il  Essayer, tu  Essayer, vous  Essayer, nous  Essayer, ils  Essayer, je  Reprendre, il  Reprendre, tu  Reprendre, vous  Reprendre, nous  Reprendre, ils  Reprendre, je  Appartenir, il  Appartenir, tu  Appartenir, vous  Appartenir, nous  Appartenir, ils  Appartenir, je  Concerner, il  Concerner, tu  Concerner, vous  Concerner, nous  Concerner, ils  Concerner, je  Rencontrer, il  Rencontrer, tu  Rencontrer, vous  Rencontrer, nous  Rencontrer, ils  Rencontrer, je  Chercher , il  Chercher , tu  Chercher , vous  Chercher , nous  Chercher , ils  Chercher ,',
  //   traslated5:
  //     ' je  Proposer, il  Proposer, tu  Proposer, vous  Proposer, nous  Proposer, ils  Proposer, je  Utiliser , il  Utiliser , tu  Utiliser , vous  Utiliser , nous  Utiliser , ils  Utiliser , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter , il  Ajouter , tu  Ajouter , vous  Ajouter , nous  Ajouter , ils  Ajouter , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter',
  // };

  // let dataToBeTransaltedInEnglish = {
  //   translated1:
  //   'I be, he be, you be, you be, we be, they be, I can, he can, you can, you can, we can, they can, I put, he put, you put, you put, we put , they Put, I Must, he Must, you Must, you Must, we Must, they Must, I Give, he Give, you Give, you Give, we Give, they Give, I Know, he Know, you Know, you Know, we Know, they Know, I See, he See, you See, you See, we See, they See, I Find, he Find, you Find, you Find, we Find, they Find, I Coming, he Coming, You Come, you Come, we Come, they Come, I Understand, he Understand, you Understand, you Understand, we Understand, they Understand, I Hold, he Hold, you Hold, you Hold, we Hold, they Hold, I Talk ,he Speak, you Speak, you Speak, we Speak, they Speak',
  //   translated2:
  //   'I Go, he Go, you Go, you Go, we Go, they Go, I Think, he Think, you Think, you Think, we Think, they Think, I Know, he Know, you Know, you Know, we Know , they Know, I Count, he Count, you Count, you Count, we Count, they Count, I Hear, he Hear, you Hear, you Hear, we Hear, they Hear, I Hand over, he Hand over, you Hand over, you Hand over, we Hand over, they Hand over, I Allow, he Allow, you Allow, you Allow, we Allow, they Allow, I Become, he Become, you Become, you Become, we Become, they Become, I Decide, he Decide, You Decide, You Decide, We Decide, They Decide, I Serve, He Serve, You Serve, You Serve, We Serve, They Serve, I Return,he Return, you Return, you Return, we Return, they Return',
  //   translated3:
  //   'I Receive, he Receive, you Receive, you Receive, we Receive, they Receive, I Live, he Live, you Live, you Live, we Live, they Live, I Present, he Present, you Present, you Present, we Present , they Present, I Act, he Act, you Act, you Act, we Act, they Act, I Ask, he Ask, you Ask, you Ask, we Ask, they Ask, I Choose, he Choose, you Choose, you Choose, we Choose, they Choose, I Love, he Love, you Love, you Love, we Love, they Love, I Lose, he Lose, you Lose, you Lose, we Lose, they Lose, I Open, he Open, you Open, you Open, we Open, they Open, I Exist, he Exist, you Exist, you Exist, we Exist, they Exist, I Read, he Read, you Read, you Read, we Read,they read',
  //   translated4:
  //   'I Work, he Work, you Work, you Work, we Work, they Work, I Succeed, he Succeed, you Succeed, you Succeed, we Succeed, they Succeed, I Prevent, he Prevent, you Prevent, you Prevent, we Prevent , they Prevent, I Try, it Try, you Try, you Try, we Try, they Try, I Take back, it Take back, you Take back, you Take back, we Take back, they Take back, I Belong, it Belong, you Belong, you Belong, we Belong, they Belong, I Concern, he Concern, you Concern, you concern, we concern, they Concern, I Meet, he Meet, you Meet, you Meet, we Meet, they Meet, I Seek, he Seek, you Seek , you Seek , we Seek , they Seek ,',
  //   traslated5:
  //   'I Suggest, he Suggest, you Suggest, you Suggest, we Suggest, they Suggest, I Use, he Use, you Use, you Use, we Use, they Use, I Tempt, he Tempt, you Tempt, you Tempt, we Tempt , they Tempt, I Add , he Add , you Add , you Add , we Add , they Add , I Tempt, he Tempt, you Tempt, you Tempt, we Tempt, they Tempt, I Add',
  // };

  const mapper = () => {
    let tempStr = `1. Être: to be

    2. Avoirs to have

    3. Pouvoir: to be able to

    4. Faire: to do, to make

    5. Mettre: to put, to practice

    6. Dire: to say, to tell

    7. Devoir: to have to, to must, to owe

    8. Prendre: to take, to capture

    9. Donner: to give

    10. Vouloir to want, to wish

    11. Savoir: to know

    12. Falloir: to have to

    13. Voir: to see

    14. Demander: to ask, to request

    15. Trouver: to find, to discover

    16. Rendre: to return (something), to give back

    17. Venir: to come

    18. Passer to pass, to go past

    19. Comprendre: to understand, to include, to

    comprehend

    20. Rester: to stay, to remain

    21. Tenir: to hold, to keep

    22. Porter: to wear, to carry

    23. Parler: to speak, to talk

    24. Montrer: to show, to display

    25. Aller: to go

    26. Continuer : to continue

    27. Penser: to think

    28. Suivre: to follow, to pay attention

    29. Connaitre: to know, to be acquainted with

    30. Croire: to believe (in)

    31. Compter: to count

    32. Commencer: to begin, to start, to commence

    33. Entendre: to hear, to understand

    34. Attendre: to wait, to expect

    35. Remettre: to put back (on), to replace, to deliver

    36. Appeler: to call, to contact

    37. Permettre: to permit, to allow, to enable

    38. Occuper: to occupy, to take up (time/space)

    39. Devenir: to become, to turn (into)

    40. Partir: to leave, to depart, to proceed

    41. Décider: to decide, to persuade

    42. Arriver: to arrive, to happen

    43. Servir: to serve

    44. Sembler: to seem

    45. Revenir: to return, to come back 46. Laisser to leave, to allow, to let

    17. Recevoir: to receive, to welcome

    48. Répondre to answer, to reply

    49. Vivre: to live

    50. Rappeler: to call back, to remind

    51. Présenter: to present, to introduce

    52. Accepter: to accept

    53. Agir: to act

    54. Jouer: to play, to act, to gamble

    55. Poser: to put down, to pose, to lay (something)

    down

    56. Reconnaitre : to recognise, to acknowledge

    57. Choisir: to choose, to select

    58. Toucher: to touch, to feel, to affect

    59. Aimer to like, to love

    60. Retrouver: to find, to regain, to meet up

    61. Perdre to lose, to waste 62. Expliquer to explain, to account for

    63. Ouvrir: to open (up)

    64. Gagner: to win, to gain, to earn

    65. Exister: to exist

    66. Refuser: to refuse

    67. Lire to read

    68. Changer: to change, to alter

    69. Travailler: to work

    70. Considérer: to consider

    71. Réussir to succeed

    72. Représenter: to represent, to depict, to portray 73. Empêcher: to prevent, to stop

    74. Assurer: to secure, to assure, to insecure

    75. Essayer: to try, to attempt

    76. Sortir: to go out, to leave, to exit

    77. Reprendre: to resume, to recover, to take back

    78. Mener: to lead, to conduct

    79. Appartenir: to belong, to concern

    80. Risquer to risk

    81. Concerner: to concern, to affect

    82. Apprendre: to learn, to teach

    83. Rencontrer: to meet, to encounter

    84. Obtenir: to obtain, to get

    85. Chercher to look for, to seek

    86. Entrer: to enter, to go into

    87. Proposer: to suggest, to propose, to offer

    88. Apporter: to bring, to cause

    89. Utiliser to use, to employ

    90. Atteindre: to reach, to attain, to achieve

    91. Tenter: to tempt

    92. Importer: to import

    93. Ajouter to add

    94. Produire: to produce

    91. Tenter: to tempt

    92. Importer: to import

    93. Ajouter to add

    94. Produire: to produce 95. Relever: to raise, to stand up, to pick up

    96. Tirer: to pull, to draw, to fire

    97. Créer: to create, to build

    98. Préparer to prepare (something), to make

    99. Écrire: to write

    100. Défendre: to defend, to stand up for, to forbid
    `;

    tempStr = tempStr.split('.');

    let wordsArr = [];
    let conjugations = ['je', 'il', 'tu', 'vous', 'nous', 'ils'];

    tempStr.forEach((element, i) => {
      // console.log(i)
      if (i % 2 !== 0) {
        wordsArr.push(element.split('\n')[0]);
      }
    });

    console.log(wordsArr)
    // setWordsMap(wordsArr);
    let onlyWords = wordsArr.map((word) => {
      if (word.includes(':')) {
        return word.split(':')[0];
      } else {
        return word.split('to')[0];
      }
    });
    const conjugatedArr = {};
    let strToTransalate = ``;

    for (let i = 0; i < onlyWords.length; i++) {
      for (let j = 0; j < conjugations.length; j++) {
        strToTransalate =
          strToTransalate + `${conjugations[j]} ${onlyWords[i]}, `;
      }
    }

    let trimStr = ``;
    for (let count = 0; count < strToTransalate.length; count++) {
      trimStr = trimStr + strToTransalate[count];

      if (count % 1000 === 0 && count !== 0) {
        let nameIndex = `translated${Math.floor(count / 1000)}`;
        conjugatedArr[nameIndex] = trimStr;
        trimStr = ``;
      }
    }
    // const temp = Object.keys(conjugatedArr);
    // console.log(conjugatedArr);
  };

  const translate = async (from, to, key, json, again) => {
    const url = 'https://nlp-translation.p.rapidapi.com/v1/jsontranslate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com',
      },
      body: new URLSearchParams({
        from,
        to,
        json: `{"${key}":"${json}"}`,
      }),
    };
    try {
      const response = await fetch(url, options);
      let result = await response.text();
      result = JSON.parse(result);
      debugger;
      let toTranslate = result.translated_json[to];
      toTranslate = JSON.parse(toTranslate);
      debugger;
      finalStr = `${finalStr + toTranslate[key]}, `;
      debugger;
      console.log(finalStr);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    console.log(WordsMap.length);
  }, [WordsMap]);

  return (
    <div>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        onClick={async () => {
          // for (const traslator in dataToBeTransaltedInEnglish) {
          //   await translate(
          //     'en',
          //     'fr',
          //     traslator,
          //     dataToBeTransaltedInEnglish[traslator],
          //     true
          //   );
          // }
        }}
      >
        Click
      </button>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        onClick={() => {
          mapper();
        }}
      >
        Click Again
      </button>
      <table className='table border-2 border-black '>
        <tr className='border-2 border-black'>
          <th className='border-2 border-black'>Verb</th>
          <th className='border-2 border-black'>Je ( I )</th>
          <th className='border-2 border-black'>Il/elle/on (He , She , We)</th>
          <th className='border-2 border-black'>Tu ( You )</th>
          <th className='border-2 border-black'>Vous (You)</th>
          <th className='border-2 border-black'>Nous (We)</th>
          <th className='border-2 border-black'>Ils/elles (They)</th>
        </tr>
        {WordsMap.map((word) => (
          <>
            <tr className='border-2 border-black'>
              <td className='border-2 border-black'>{word}</td>
              <td className='border-2 border-black'>s</td>
              <td className='border-2 border-black'>s</td>
              <td className='border-2 border-black'>s</td>
              <td className='border-2 border-black'>s</td>
              <td className='border-2 border-black'>s`</td>
              <td className='border-2 border-black'>s</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default Account;

// {
//   "translated1": "je  Être, il  Être, tu  Être, vous  Être, nous  Être, ils  Être, je  Pouvoir, il  Pouvoir, tu  Pouvoir, vous  Pouvoir, nous  Pouvoir, ils  Pouvoir, je  Mettre, il  Mettre, tu  Mettre, vous  Mettre, nous  Mettre, ils  Mettre, je  Devoir, il  Devoir, tu  Devoir, vous  Devoir, nous  Devoir, ils  Devoir, je  Donner, il  Donner, tu  Donner, vous  Donner, nous  Donner, ils  Donner, je  Savoir, il  Savoir, tu  Savoir, vous  Savoir, nous  Savoir, ils  Savoir, je  Voir, il  Voir, tu  Voir, vous  Voir, nous  Voir, ils  Voir, je  Trouver, il  Trouver, tu  Trouver, vous  Trouver, nous  Trouver, ils  Trouver, je  Venir, il  Venir, tu  Venir, vous  Venir, nous  Venir, ils  Venir, je  Comprendre, il  Comprendre, tu  Comprendre, vous  Comprendre, nous  Comprendre, ils  Comprendre, je  Tenir, il  Tenir, tu  Tenir, vous  Tenir, nous  Tenir, ils  Tenir, je  Parler, il  Parler, tu  Parler, vous  Parler, nous  Parler, ils  Parler, je  Aller, il  Aller, tu  Aller, vous  Aller, nous  Aller, ils  Aller,",
//   "translated2": "je  Penser, il  Penser, tu  Penser, vous  Penser, nous  Penser, ils  Penser, je  Connaitre, il  Connaitre, tu  Connaitre, vous  Connaitre, nous  Connaitre, ils  Connaitre, je  Compter, il  Compter, tu  Compter, vous  Compter, nous  Compter, ils  Compter, je  Entendre, il  Entendre, tu  Entendre, vous  Entendre, nous  Entendre, ils  Entendre, je  Remettre, il  Remettre, tu  Remettre, vous  Remettre, nous  Remettre, ils  Remettre, je  Permettre, il  Permettre, tu  Permettre, vous  Permettre, nous  Permettre, ils  Permettre, je  Devenir, il  Devenir, tu  Devenir, vous  Devenir, nous  Devenir, ils  Devenir, je  Décider, il  Décider, tu  Décider, vous  Décider, nous  Décider, ils  Décider, je  Servir, il  Servir, tu  Servir, vous  Servir, nous  Servir, ils  Servir, je  Revenir, il  Revenir, tu  Revenir, vous  Revenir, nous  Revenir, ils  Revenir, je  Recevoir, il  Recevoir, tu  Recevoir, vous  Recevoir, nous  Recevoir, ils  Recevoir, je  Vivre, il  Vivre, tu  Vivre, vous  Vivre, nous  Vivre,",
//   "translated3": " ils  Vivre, je  Présenter, il  Présenter, tu  Présenter, vous  Présenter, nous  Présenter, ils  Présenter, je  Agir, il  Agir, tu  Agir, vous  Agir, nous  Agir, ils  Agir, je  Poser, il  Poser, tu  Poser, vous  Poser, nous  Poser, ils  Poser, je  Choisir, il  Choisir, tu  Choisir, vous  Choisir, nous  Choisir, ils  Choisir, je  Aimer , il  Aimer , tu  Aimer , vous  Aimer , nous  Aimer , ils  Aimer , je  Perdre , il  Perdre , tu  Perdre , vous  Perdre , nous  Perdre , ils  Perdre , je  Ouvrir, il  Ouvrir, tu  Ouvrir, vous  Ouvrir, nous  Ouvrir, ils  Ouvrir, je  Exister, il  Exister, tu  Exister, vous  Exister, nous  Exister, ils  Exister, je  Lire , il  Lire , tu  Lire , vous  Lire , nous  Lire , ils  Lire , je  Travailler, il  Travailler, tu  Travailler, vous  Travailler, nous  Travailler, ils  Travailler, je  Réussir , il  Réussir , tu  Réussir , vous  Réussir , nous  Réussir , ils  Réussir , je  Empêcher, il  Empêcher, tu  Empêcher, vous  Empêcher, nous  Empêcher, ils  Empêcher, je  Essa",
//   "translated4": "yer, il  Essayer, tu  Essayer, vous  Essayer, nous  Essayer, ils  Essayer, je  Reprendre, il  Reprendre, tu  Reprendre, vous  Reprendre, nous  Reprendre, ils  Reprendre, je  Appartenir, il  Appartenir, tu  Appartenir, vous  Appartenir, nous  Appartenir, ils  Appartenir, je  Concerner, il  Concerner, tu  Concerner, vous  Concerner, nous  Concerner, ils  Concerner, je  Rencontrer, il  Rencontrer, tu  Rencontrer, vous  Rencontrer, nous  Rencontrer, ils  Rencontrer, je  Chercher , il  Chercher , tu  Chercher , vous  Chercher , nous  Chercher , ils  Chercher , je  Proposer, il  Proposer, tu  Proposer, vous  Proposer, nous  Proposer, ils  Proposer, je  Utiliser , il  Utiliser , tu  Utiliser , vous  Utiliser , nous  Utiliser , ils  Utiliser , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter , il  Ajouter , tu  Ajouter , vous  Ajouter , nous  Ajouter , ils  Ajouter , je  Tenter, il  Tenter, tu  Tenter, vous  Tenter, nous  Tenter, ils  Tenter, je  Ajouter"
// }
