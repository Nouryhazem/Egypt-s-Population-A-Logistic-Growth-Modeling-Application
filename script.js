function logistic(t, P0, r, K) {
    return (K * P0) / (P0 + (K - P0) * Math.exp(-r * t));
}

const years = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const population = [27.034499, 27.747867, 28.485022, 29.245936, 30.026648, 30.818469, 31.613132, 32.408414, 33.204629, 33.995955, 34.781986, 35.555969, 36.330768, 37.120776, 37.930374, 38.775584, 39.64905, 40.577356, 41.576636, 42.632458, 43.748556, 44.899573, 46.088647, 47.353665, 48.676443, 50.035843, 51.424313, 52.841319, 54.298446, 55.765843, 57.21463, 58.611032, 59.989142, 61.3822, 62.775847, 64.166908, 65.565195, 66.993728, 68.446011, 69.907887, 71.371371, 72.854261, 74.393759, 75.963322, 77.522427, 79.07531, 80.62967, 82.218755, 83.844783, 85.501064, 87.252413, 89.200054, 91.240376, 93.37789, 95.592324, 97.723799, 99.78403, 101.789386, 103.740765, 105.618671, 107.465134, 109.262178, 110.990103, 112.716598];

function plotGraph() {
    const r = parseFloat(document.getElementById('growth-rate').value);
    const K = parseFloat(document.getElementById('carrying-capacity').value);
    const P0 = population[0];
    const time = Array.from(Array(101).keys());

    const logisticPop = time.map(t => logistic(t, P0, r, K));

    const trace1 = {
        x: years,
        y: population,
        mode: 'markers+lines',
        name: 'Real Data'
    };

    const trace2 = {
        x: time.map(t => years[0] + t),
        y: logisticPop,
        mode: 'lines',
        name: 'Logistic Model'
    };

    const layout = {
        title: 'Logistic Growth Model for Egypt',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Population (millions)' },
        shapes: [{
            type: 'line',
            x0: years[0],
            x1: years[0] + 100,
            y0: K,
            y1: K,
            line: { dash: 'dash', color: 'red' },
            name: 'Carrying Capacity'
        }]
    };

    Plotly.newPlot('plot', [trace1, trace2], layout);
}

document.getElementById('apply-button').addEventListener('click', function() {
    plotGraph();
});

plotGraph();