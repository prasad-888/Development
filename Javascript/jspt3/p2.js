// start : ['january', 'july', 'march', 'august']
// final : ['july', 'june', 'march', 'august']


let months = ['january', 'july', 'march', 'august'];
months.shift(); // remove first element i.e january
months.shift(); // remove first element i.e july
months.unshift('june'); // add to start i.e june
months.unshift('july'); // add to start i.e july

months // ['july', 'june', 'march', 'august']