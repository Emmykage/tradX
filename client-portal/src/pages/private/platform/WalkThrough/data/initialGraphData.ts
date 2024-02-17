function generateRandomDataWithWhitespace(
  count: number,
  startTime: string,
  startValue: number,
  volatility: number,
  whitespaceProbability: number
): { time: number | string; value?: number }[] {
  const data = [];
  let currentTimestamp = new Date(startTime).getTime() / 1000; // Convert to seconds
  let currentValue = startValue;

  for (let i = 0; i < count; i++) {
    let generatedValue;

    if (i < 10) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 20) {
      generatedValue = 10 + Math.random() * 20;
    } else if (i < 30) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 40) {
      generatedValue = 40 + Math.random() * 20;
    } else if (i < 50) {
      generatedValue = 30 + Math.random() * 20;
    } else if (i < 60) {
      generatedValue = 20 + Math.random() * 20;
    } else if (i < 70) {
      generatedValue = 10 + Math.random() * 20;
    } else if (i < 80) {
      generatedValue = -30 + Math.random() * 20;
    } else if (i < 90) {
      generatedValue = -50 + Math.random() * 20;
    } else if (i < 100) {
      generatedValue = -30 + Math.random() * 20;
    } else if (i < 110) {
      generatedValue = 0 + Math.random() * 20;
    } else if (i < 130) {
      generatedValue = 20.567;
    } else {
      generatedValue = undefined;
    }

    data.push({
      time: currentTimestamp,
      value: generatedValue,
    });

    currentTimestamp += 60;
  }

  return data;
}

export const initialData = generateRandomDataWithWhitespace(
  200,
  "2024-02-01T17:52:00.000Z",
  1.164,
  0.01,
  0.5
);

export const staticData = [
  {
    time: 1706809920,
    value: 42.31669247213383,
  },
  {
    time: 1706809980,
    value: 32.06004893039833,
  },
  {
    time: 1706810040,
    value: 32.29072714846694,
  },
  {
    time: 1706810100,
    value: 30.499460710297935,
  },
  {
    time: 1706810160,
    value: 44.70707572497473,
  },
  {
    time: 1706810220,
    value: 38.85931919572356,
  },
  {
    time: 1706810280,
    value: 39.73350690389299,
  },
  {
    time: 1706810340,
    value: 33.47052128624516,
  },
  {
    time: 1706810400,
    value: 45.6648244752663,
  },
  {
    time: 1706810460,
    value: 35.75565022657037,
  },
  {
    time: 1706810520,
    value: 25.60306137974271,
  },
  {
    time: 1706810580,
    value: 24.645200272830508,
  },
  {
    time: 1706810640,
    value: 28.588138978261032,
  },
  {
    time: 1706810700,
    value: 28.515042610479963,
  },
  {
    time: 1706810760,
    value: 28.27993371437134,
  },
  {
    time: 1706810820,
    value: 19.882327276130084,
  },
  {
    time: 1706810880,
    value: 25.420924005111992,
  },
  {
    time: 1706810940,
    value: 10.533363202658359,
  },
  {
    time: 1706811000,
    value: 25.486953310145,
  },
  {
    time: 1706811060,
    value: 26.282715951212346,
  },
  {
    time: 1706811120,
    value: 40.93423751786162,
  },
  {
    time: 1706811180,
    value: 43.44654075349483,
  },
  {
    time: 1706811240,
    value: 43.99373670073801,
  },
  {
    time: 1706811300,
    value: 41.49523388713198,
  },
  {
    time: 1706811360,
    value: 32.73151161890241,
  },
  {
    time: 1706811420,
    value: 38.19675647880818,
  },
  {
    time: 1706811480,
    value: 35.22279985974943,
  },
  {
    time: 1706811540,
    value: 37.15353594749364,
  },
  {
    time: 1706811600,
    value: 32.92120751163057,
  },
  {
    time: 1706811660,
    value: 46.7662230919522,
  },
  {
    time: 1706811720,
    value: 48.7386789558934,
  },
  {
    time: 1706811780,
    value: 48.51639945306452,
  },
  {
    time: 1706811840,
    value: 55.95508291276737,
  },
  {
    time: 1706811900,
    value: 55.666082890160496,
  },
  {
    time: 1706811960,
    value: 40.184843604318296,
  },
  {
    time: 1706812020,
    value: 58.85100658581731,
  },
  {
    time: 1706812080,
    value: 47.6761211579351,
  },
  {
    time: 1706812140,
    value: 53.267174315198915,
  },
  {
    time: 1706812200,
    value: 42.126822030757445,
  },
  {
    time: 1706812260,
    value: 45.2606628997707,
  },
  {
    time: 1706812320,
    value: 46.3613832836517,
  },
  {
    time: 1706812380,
    value: 47.12595769250687,
  },
  {
    time: 1706812440,
    value: 35.06183216872899,
  },
  {
    time: 1706812500,
    value: 33.5522048784825,
  },
  {
    time: 1706812560,
    value: 46.47923647725723,
  },
  {
    time: 1706812620,
    value: 42.48262495150288,
  },
  {
    time: 1706812680,
    value: 45.56022057322993,
  },
  {
    time: 1706812740,
    value: 47.42909796518413,
  },
  {
    time: 1706812800,
    value: 44.067589455978776,
  },
  {
    time: 1706812860,
    value: 42.42798555712256,
  },
  {
    time: 1706812920,
    value: 39.872970183896925,
  },
  {
    time: 1706812980,
    value: 34.45312464334924,
  },
  {
    time: 1706813040,
    value: 22.350676885937702,
  },
  {
    time: 1706813100,
    value: 35.78374964072945,
  },
  {
    time: 1706813160,
    value: 38.0606894493275,
  },
  {
    time: 1706813220,
    value: 34.316040520632086,
  },
  {
    time: 1706813280,
    value: 29.41342153056313,
  },
  {
    time: 1706813340,
    value: 33.633631186162646,
  },
  {
    time: 1706813400,
    value: 33.40366718759486,
  },
  {
    time: 1706813460,
    value: 34.58311021074705,
  },
  {
    time: 1706813520,
    value: 29.7774003084602,
  },
  {
    time: 1706813580,
    value: 25.419136312055507,
  },
  {
    time: 1706813640,
    value: 17.20041642667104,
  },
  {
    time: 1706813700,
    value: 20.345028021695533,
  },
  {
    time: 1706813760,
    value: 12.84833427714184,
  },
  {
    time: 1706813820,
    value: 25.2347407035494,
  },
  {
    time: 1706813880,
    value: 28.378672714282892,
  },
  {
    time: 1706813940,
    value: 11.157162552183406,
  },
  {
    time: 1706814000,
    value: 25.91012997868645,
  },
  {
    time: 1706814060,
    value: 15.167793103470842,
  },
  {
    time: 1706814120,
    value: -16.964833295409413,
  },
  {
    time: 1706814180,
    value: -18.466729006168535,
  },
  {
    time: 1706814240,
    value: -16.137443743306914,
  },
  {
    time: 1706814300,
    value: -20.71041028739813,
  },
  {
    time: 1706814360,
    value: -23.548201126475114,
  },
  {
    time: 1706814420,
    value: -24.644247582735744,
  },
  {
    time: 1706814480,
    value: -29.024617426154755,
  },
  {
    time: 1706814540,
    value: -27.179793297219092,
  },
  {
    time: 1706814600,
    value: -13.696892328609476,
  },
  {
    time: 1706814660,
    value: -23.88980691776422,
  },
  {
    time: 1706814720,
    value: -35.686859696328455,
  },
  {
    time: 1706814780,
    value: -42.82985297235615,
  },
  {
    time: 1706814840,
    value: -32.33254657277266,
  },
  {
    time: 1706814900,
    value: -31.55841032106093,
  },
  {
    time: 1706814960,
    value: -35.91709440184631,
  },
  {
    time: 1706815020,
    value: -45.93555826425315,
  },
  {
    time: 1706815080,
    value: -48.065286646327266,
  },
  {
    time: 1706815140,
    value: -46.454288944097534,
  },
  {
    time: 1706815200,
    value: -48.89592830553886,
  },
  {
    time: 1706815260,
    value: -46.64235105996145,
  },
  {
    time: 1706815320,
    value: -11.754632468147918,
  },
  {
    time: 1706815380,
    value: -27.34202890227809,
  },
  {
    time: 1706815440,
    value: -10.648271476526944,
  },
  {
    time: 1706815500,
    value: -29.411557146876962,
  },
  {
    time: 1706815560,
    value: -14.827398787659885,
  },
  {
    time: 1706815620,
    value: -20.356255184838645,
  },
  {
    time: 1706815680,
    value: -12.998477510563848,
  },
  {
    time: 1706815740,
    value: -19.418210633004847,
  },
  {
    time: 1706815800,
    value: -20.41134562049428,
  },
  {
    time: 1706815860,
    value: -10.962054595528503,
  },
  {
    time: 1706815920,
    value: 16.07286517189158,
  },
  {
    time: 1706815980,
    value: 4.406774104431239,
  },
  {
    time: 1706816040,
    value: 10.718747348319738,
  },
  {
    time: 1706816100,
    value: 5.600225841250159,
  },
  {
    time: 1706816160,
    value: 1.5524074180365144,
  },
  {
    time: 1706816220,
    value: 19.63954611749773,
  },
  {
    time: 1706816280,
    value: 11.746939410226457,
  },
  {
    time: 1706816340,
    value: 11.047107878607228,
  },
  {
    time: 1706816400,
    value: 17.815620891679412,
  },
  {
    time: 1706816460,
    value: 6.577625846137605,
  },
  {
    time: 1706816520,
    value: 20.567,
  },
  {
    time: 1706816580,
    value: 20.567,
  },
  {
    time: 1706816640,
    value: 20.567,
  },
  {
    time: 1706816700,
    value: 20.567,
  },
  {
    time: 1706816760,
    value: 20.567,
  },
  {
    time: 1706816820,
    value: 20.567,
  },
  {
    time: 1706816880,
    value: 20.567,
  },
  {
    time: 1706816940,
    value: 20.567,
  },
  {
    time: 1706817000,
    value: 20.567,
  },
  {
    time: 1706817060,
    value: 20.567,
  },
  {
    time: 1706817120,
    value: 20.567,
  },
  {
    time: 1706817180,
    value: 20.567,
  },
  {
    time: 1706817240,
    value: 20.567,
  },
  {
    time: 1706817300,
    value: 20.567,
  },
  {
    time: 1706817360,
    value: 20.567,
  },
  {
    time: 1706817420,
    value: 20.567,
  },
  {
    time: 1706817480,
    value: 20.567,
  },
  {
    time: 1706817540,
    value: 20.567,
  },
  {
    time: 1706817600,
    value: 20.567,
  },
  {
    time: 1706817660,
    value: 20.567,
  },
];
