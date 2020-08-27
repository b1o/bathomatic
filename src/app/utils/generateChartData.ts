export const generateChartData = (startDate: Date, endDate: Date) => {
  const water = {
    name: 'water',
    series: [],
  };

  const energy = {
    name: 'energy',
    series: [],
  };

  const cost = {
    name: 'cost',
    series: [],
  };

  const typicalCost = {
    name: 'typical cost',
    series: [],
  };

  for (
    const date: Date = startDate;
    startDate < endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const name = new Date(date);

    water.series.push({
      name,
      value: Math.random() * 100,
    });

    energy.series.push({
      name,
      value: Math.random() * 150,
    });

    cost.series.push({
      name,
      value: Math.random() * 10,
    });

    typicalCost.series.push({
      name,
      value: Math.random() * 300,
    });
  }

  return [water, energy, cost, typicalCost];
};

export const generateTableData = (count) => {
  const res = []
  for (let i = 0; i < count; i++) {
    res.push({
      Bathomatic: 'alarm',
      presets: 'morning',
      depth: getRandomInt(100),
      temp: getRandomInt(60),
      scent: getRandomInt(100),
      drop: getRandomInt(20)
    })
  }

  console.log(res)
  return res;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
