const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2006
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const sortCompaniesAsc = companies.sort((a, b) => a.start > b.start ? 1 : -1);
const sortCompaniesDsc = companies.sort((a, b) => a.start < b.start ? 1 : -1);
const sortAgesAsc = ages.sort((a, b) => a - b);
const sortAgesDsc = ages.sort((a, b) => b - a);

const totalAge = ages.reduce((total, number) => total + number, 0);
const liveYears = companies.reduce((a, b) => a + (b.end - b.start), 0);

// console.log(liveYears);