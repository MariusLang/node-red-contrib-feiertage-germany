/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
// eslint-disable-next-line func-names
module.exports = function (RED) {
  function feiertageDE(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    const Feiertage = require('getfeiertage.js').Feiertage;

    const checkNewYear = config.neujahr; // checkbox New Year
    const newYearName = config.neujahrName; // New Year Name
    const checkEpiphany = config.heiligeDreiKoenige; // checkboy Epiphany
    const epiphanyName = config.heiligeDreiKoenigeName; // Epiphany Name
    const checkWeiberfastnacht = config.weiberfastnacht; // checkbox Weiberfastnacht
    const weiberfastnachtName = config.weiberfastnachtName; // Weiberfastnacht Name
    const checkValentinstag = config.valentinstag; // checkbox Valentinstag
    const valentinstagName = config.valentinstagName; // Valentinstag Name
    const checkRosenmontag = config.rosenmontag; // checkbox Rosenmontag
    const rosenmontagName = config.rosenmontagName; // Rosenmontag Name
    const checkFastnachtsdienstag = config.fastnachtsdienstag; // checkbox Fastnachtsdienstag
    const fastnachtsdienstagsName = config.fastnachtsdienstagName; // Fastnachtsdienstag Name
    const checkAschermittwoch = config.aschermittwoch; // checkbox Aschermittwoch
    const aschermittwochName = config.aschermittwochName; // Aschermittwoch Name
    const checkGruendonnerstag = config.gruendonnerstag; // checkbox Gründonnerstag
    const gruendonnerstagName = config.gruendonnerstagName; // Gründonnerstag Name
    const checkKarfreitag = config.karfreitag; // checkbox Karfreitag
    const karfreitagName = config.karfreitagName; // Karfreitag Name
    const checkEasterSunday = config.easterSunday; // checkbox Easter Sunday
    const easterSundayName = config.easterSundayName; // Easter Sunday Name
    const checkEasterMonday = config.easterMonday; // checkbox Easter Monday
    const easterMondayName = config.easterMondayName; // Easter Monday Name
    const checkFirstMay = config.firstMay; // checkbox 1. Mai
    const firstMayName = config.firstMayName; // First May Name
    const checkChristiHimmelfahrt = config.christiHimmelfahrt; // checkbox Christihimmelfahrt
    const christiHimmerlfahrtName = config.christiHimmelfahrtName; // Christi Himmelfahrt Name
    const checkPfingstsonntag = config.pfingstsonntag; // checkbox Pfingstsonntag
    const pfingstsonntagName = config.pfingstsonntagName; // Pfingstsonntag Name
    const checkPfingstmontag = config.pfingstmontag; // checkbox Pfingstmontag
    const pfingstmontagName = config.pfingstmontagName; // Pfingstmontag Name
    const checkFronleichnam = config.fronleichnam; // checkbox Fronleichnam
    const fronleichnamName = config.fronleichnamName; // Fronleichnam Name
    const checkMariaHimmelfahrt = config.mariaHimmelfahrt; // checkbox Maria Himmelfahrt
    const mariaHimmelfahrtName = config.mariaHimmelfahrtName; // Maria Himmelfahrt Name
    // checkbox Tag der Deutschen Einheit
    const checkTagDerDeutschenEinheit = config.tagDerDeutschenEinheit;
    // Tag der Deutschen Einheit Name
    const tagDerDeutschenEinheitName = config.tagDerDeutschenEinheitName;
    const checkHalloween = config.halloween; // checkbox Halloween
    const halloweenName = config.halloweenName; // Halloween Name
    const checkAllerheiligen = config.allerheiligen; // checkbox Allerheiligen
    const allerheiligenName = config.allerheiligenName; // Allerheiligen Name
    const checkStMartin = config.stMartin; // checkbox St. Martin
    const stMartinName = config.stMartinName; // St. Martin Name
    const checkBussUndBettag = config.bussUndBettag; // checkbox Buß und Bettag
    const bussUndBettagName = config.bussUndBettagName; // Buß und Bettag Name
    const checkSanta = config.nikolaus; // checkbox Nikolaus
    const santaName = config.nikolausName; // Nikolaus Name
    const checkadvent1 = config.advent1; // checkbox 1. Advent
    const advent1Name = config.advent1Name; // 1. Advent Name
    const checkAdvent2 = config.advent2; // checkbox 2. Advent
    const advent2Name = config.advent2Name; // 2. Advent Name
    const checkAdvent3 = config.advent3; // checkbox 3. Advent
    const advent3Name = config.advent3Name; // 3. Advent Name
    const checkAdvent4 = config.advent4; // checkbox 4. Advent
    const advent4Name = config.advent4Name; // 4. Advent Name
    const checkChristmasEve = config.heiligabend; // checkbox Christmas Eve
    const christmasEveName = config.heiligabendName; // Christmas Eve Name
    const checkFirstDayChristmas = config.weihnachten1; // checkbox First day of Chrsitmas
    const firstDayChristmasName = config.weihnachten1Name; // First day of Christmas
    const checkSecondDayChristmas = config.weihnachten2; // checkbox Second day of Christmas
    const secondDayChristmasName = config.weihnachten2Name; // Second day of Christmas
    const checkNewYearsEve = config.silvester; // checkbox New Years Eve
    const newYearsEveName = config.silvesterName; // Silvester Name

    const checkOwnHoliday1 = config.ownHoliday1; // checkbox Own Holiday 1
    const dayOwnHoliday1 = config.ownHoliday1Day.toString().length === 1 ? `0${config.ownHoliday1Day}` : config.ownHoliday1Day; // day Own Holiday 1
    const monthOwnHoliday1 = config.ownHoliday1Month.toString().length === 1 ? `0${config.ownHoliday1Month}` : config.ownHoliday1Month; // month Own Holiday 1
    const nameOwnHoliday1 = config.ownHoliday1Name; // name Own Holiday 1

    const checkOwnHoliday2 = config.ownHoliday2; // checkbox Own Holiday 2
    const dayOwnHoliday2 = config.ownHoliday2Day.toString().length === 1 ? `0${config.ownHoliday2Day}` : config.ownHoliday2Day; // day Own Holiday 2
    const monthOwnHoliday2 = config.ownHoliday2Month.toString().length === 1 ? `0${config.ownHoliday2Month}` : config.ownHoliday2Month; // month Own Holiday 2
    const nameOwnHoliday2 = config.ownHoliday2Name; // name Own Holiday 2

    const checkOwnHoliday3 = config.ownHoliday3; // checkbox Own Holiday 3
    const dayOwnHoliday3 = config.ownHoliday3Day.toString().length === 1 ? `0${config.ownHoliday3Day}` : config.ownHoliday3Day; // day Own Holiday 3
    const monthOwnHoliday3 = config.ownHoliday3Month.toString().length === 1 ? `0${config.ownHoliday3Month}` : config.ownHoliday3Month; // month Own Holiday 3
    const nameOwnHoliday3 = config.ownHoliday3Name; // name Own Holiday 3

    const checkOwnHoliday4 = config.ownHoliday4; // checkbox Own Holiday 4
    const dayOwnHoliday4 = config.ownHoliday4Day.toString().length === 1 ? `0${config.ownHoliday4Day}` : config.ownHoliday4Day; // day Own Holiday 4
    const monthOwnHoliday4 = config.ownHoliday4Month.toString().length === 1 ? `0${config.ownHoliday4Month}` : config.ownHoliday4Month; // month Own Holiday 4
    const nameOwnHoliday4 = config.ownHoliday4Name; // name Own Holiday 4

    const checkOwnHoliday5 = config.ownHoliday5; // checkbox Own Holiday 5
    const dayOwnHoliday5 = config.ownHoliday5Day.toString().length === 1 ? `0${config.ownHoliday5Day}` : config.ownHoliday5Day; // day Own Holiday 5
    const monthOwnHoliday5 = config.ownHoliday5Month.toString().length === 1 ? `0${config.ownHoliday5Month}` : config.ownHoliday5Month; // month Own Holiday 5
    const nameOwnHoliday5 = config.ownHoliday5Name; // name Own Holiday 5

    const checkOwnHoliday6 = config.ownHoliday6; // checkbox Own Holiday 6
    const dayOwnHoliday6 = config.ownHoliday6Day.toString().length === 1 ? `0${config.ownHoliday6Day}` : config.ownHoliday6Day; // day Own Holiday 6
    const monthOwnHoliday6 = config.ownHoliday6Month.toString().length === 1 ? `0${config.ownHoliday6Month}` : config.ownHoliday6Month; // month Own Holiday 6
    const nameOwnHoliday6 = config.ownHoliday6Name; // name Own Holiday 6

    const checkOwnHoliday7 = config.ownHoliday7; // checkbox Own Holiday 7
    const dayOwnHoliday7 = config.ownHoliday7Day.toString().length === 1 ? `0${config.ownHoliday7Day}` : config.ownHoliday7Day; // day Own Holiday 7
    const monthOwnHoliday7 = config.ownHoliday7Month.toString().length === 1 ? `0${config.ownHoliday7Month}` : config.ownHoliday7Month; // month Own Holiday 7
    const nameOwnHoliday7 = config.ownHoliday7Name; // name Own Holiday 7

    const checkOwnHoliday8 = config.ownHoliday8; // checkbox Own Holiday 8
    const dayOwnHoliday8 = config.ownHoliday8Day.toString().length === 1 ? `0${config.ownHoliday8Day}` : config.ownHoliday8Day; // day Own Holiday 8
    const monthOwnHoliday8 = config.ownHoliday8Month.toString().length === 1 ? `0${config.ownHoliday8Month}` : config.ownHoliday8Month; // month Own Holiday 8
    const nameOwnHoliday8 = config.ownHoliday8Name; // name Own Holiday 8

    const checkOwnHoliday9 = config.ownHoliday9; // checkbox Own Holiday 9
    const dayOwnHoliday9 = config.ownHoliday9Day.toString().length === 1 ? `0${config.ownHoliday9Day}` : config.ownHoliday9Day; // day Own Holiday 9
    const monthOwnHoliday9 = config.ownHoliday9Month.toString().length === 1 ? `0${config.ownHoliday9Month}` : config.ownHoliday9Month; // month Own Holiday 9
    const nameOwnHoliday9 = config.ownHoliday9Name; // name Own Holiday 9

    const checkOwnHoliday10 = config.ownHoliday10; // checkbox Own Holiday 10
    const dayOwnHoliday10 = config.ownHoliday10Day.toString().length === 1 ? `0${config.ownHoliday10Day}` : config.ownHoliday10Day; // day Own Holiday 10
    const monthOwnHoliday10 = config.ownHoliday10Month.toString().length === 1 ? `0${config.ownHoliday10Month}` : config.ownHoliday10Month; // month Own Holiday 10
    const nameOwnHoliday10 = config.ownHoliday10Name; // name Own Holiday 10

    const checkArray = config.array; // checkbox array or object
    const dailyOutput = config.dailyOutput;

    let currentYear;
    let currentMonth;
    let currentDay;
    let currentHour;
    let currentMinute;

    function setCurrentDate() {
      const currentDate = new Date(); // create current date
      currentYear = currentDate.getFullYear(); // set current year
      currentMonth = currentDate.getMonth() + 1; // set current month
      currentDay = currentDate.getDate(); // set current day
      currentHour = currentDate.getHours(); // set current hour
      currentMinute = currentDate.getMinutes(); // set current minute
    }

    setCurrentDate();

    const formatDateObj = 'dateObj';
    const formatDE = 'DE';

    const newYear = {
      id: 'New Year',
      name: newYearName,
      dateObj: Feiertage.getNeujahr(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getNeujahr(Feiertage.formatDateObj, currentYear),
    };
    const epiphany = {
      id: 'Epiphany',
      name: epiphanyName,
      dateObj: Feiertage.getHeiligeDreiKoenige(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getHeiligeDreiKoenige(Feiertage.formatDE, currentYear),
    };
    const weiberfastnacht = {
      id: 'Weiberfastnacht',
      name: weiberfastnachtName,
      dateObj: Feiertage.getWeiberfastnacht(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getWeiberfastnacht(Feiertage.formatDE, currentYear),
    };
    const valentinstag = {
      id: 'Valentinstag',
      name: valentinstagName,
      dateObj: Feiertage.getValentinstag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getValentinstag(Feiertage.formatDE, currentYear),
    };
    const rosenmontag = {
      id: 'Rosenmontag',
      name: rosenmontagName,
      dateObj: Feiertage.getRosenmontag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getRosenmontag(Feiertage.formatDE, currentYear),
    };
    const fastnachtsdienstag = {
      id: 'Fastnachtdienstag',
      name: fastnachtsdienstagsName,
      dateObj: Feiertage.getFastnachtsdienstag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getFastnachtsdienstag(Feiertage.formatDE, currentYear),
    };
    const aschermittwoch = {
      id: 'Aschermittwoch',
      name: aschermittwochName,
      dateObj: Feiertage.getAschermittwoch(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAschermittwoch(Feiertage.formatDE, currentYear),
    };
    const gruendonnerstag = {
      id: 'Gründonnerstag',
      name: gruendonnerstagName,
      dateObj: Feiertage.getGruendonnerstag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getGruendonnerstag(Feiertage.formatDE, currentYear),
    };
    const karfreitag = {
      id: 'Karfreitag',
      name: karfreitagName,
      dateObj: Feiertage.getKarfreitag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getKarfreitag(Feiertage.formatDE, currentYear),
    };
    const easterSunday = {
      id: 'Easter Sunday',
      name: easterSundayName,
      dateObj: Feiertage.getOstersonntag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getOstersonntag(Feiertage.formatDE, currentYear),
    };
    const easterMonday = {
      id: 'Easter Monday',
      name: easterMondayName,
      dateObj: Feiertage.getOstermontag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getOstermontag(Feiertage.formatDE, currentYear),
    };
    const firstMay = {
      id: 'First May',
      name: firstMayName,
      dateObj: Feiertage.getFirstMay(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getFirstMay(Feiertage.formatDE, currentYear),
    };
    const christiHimmelfahrt = {
      id: 'Christi Himmelfahrt',
      name: christiHimmerlfahrtName,
      dateObj: Feiertage.getChristiHimmelfahrt(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getChristiHimmelfahrt(Feiertage.formatDE, currentYear),
    };
    const pfingstsonntag = {
      id: 'Pfingstsonntag',
      name: pfingstsonntagName,
      dateObj: Feiertage.getPfingstsonntag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getPfingstsonntag(Feiertage.formatDE, currentYear),
    };
    const pfingstmontag = {
      id: 'Pfingstmontag',
      name: pfingstmontagName,
      dateObj: Feiertage.getPfingstmontag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getPfingstmontag(Feiertage.formatDE, currentYear),
    };
    const fronleichnam = {
      id: 'Fronleichnam',
      name: fronleichnamName,
      dateObj: Feiertage.getFronleichnam(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getFronleichnam(Feiertage.formatDE, currentYear),
    };
    const mariaHimmelfahrt = {
      id: 'Maria Himmelfahrt',
      name: mariaHimmelfahrtName,
      dateObj: Feiertage.getMariaHimmelfahrt(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getMariaHimmelfahrt(Feiertage.formatDE, currentYear),
    };
    const tagDerDeutschenEinheit = {
      id: 'Tag der Deutschen Einheit',
      name: tagDerDeutschenEinheitName,
      dateObj: Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDE, currentYear),
    };
    const halloween = {
      id: 'Halloween',
      name: halloweenName,
      dateObj: Feiertage.getHalloween(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getHalloween(Feiertage.formatDE, currentYear),
    };
    const allerheiligen = {
      id: 'Allerheiligen',
      name: allerheiligenName,
      dateObj: Feiertage.getAllerheiligen(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAllerheiligen(Feiertage.formatDE, currentYear),
    };
    const stMartin = {
      id: 'St. Martin',
      name: stMartinName,
      dateObj: Feiertage.getStMartin(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getStMartin(Feiertage.formatDE, currentYear),
    };
    const bussUndBettag = {
      id: 'Buß und Bettag',
      name: bussUndBettagName,
      dateObj: Feiertage.getBussUndBettag(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getBussUndBettag(Feiertage.formatDE, currentYear),
    };
    const santa = {
      id: 'Santa Day',
      name: santaName,
      dateObj: Feiertage.getNikolaus(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getNikolaus(Feiertage.formatDE, currentYear),
    };
    const advent1 = {
      id: '1. Advent',
      name: advent1Name,
      dateObj: Feiertage.getAdvent1(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAdvent1(Feiertage.formatDE, currentYear),
    };
    const advent2 = {
      id: '2. Advent',
      name: advent2Name,
      dateObj: Feiertage.getAdvent2(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAdvent2(Feiertage.formatDE, currentYear),
    };
    const advent3 = {
      id: '3. Advent',
      name: advent3Name,
      dateObj: Feiertage.getAdvent3(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAdvent3(Feiertage.formatDE, currentYear),
    };
    const advent4 = {
      id: '4. Advent',
      name: advent4Name,
      dateObj: Feiertage.getAdvent4(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getAdvent4(Feiertage.formatDE, currentYear),
    };
    const christmasEve = {
      id: 'Christmas Eve',
      name: christmasEveName,
      dateObj: Feiertage.getHeiligabend(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getHeiligabend(Feiertage.formatDE, currentYear),
    };
    const firstDayChristmas = {
      id: 'First day of Christmas',
      name: firstDayChristmasName,
      dateObj: Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDE, currentYear),
    };
    const secondDayChristmas = {
      id: 'Second day of Christmas',
      name: secondDayChristmasName,
      dateObj: Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDE, currentYear),
    };
    const newYearsEve = {
      id: 'New Years Eve',
      name: newYearsEveName,
      dateObj: Feiertage.getSilvester(Feiertage.formatDateObj, currentYear),
      dateDE: Feiertage.getSilvester(Feiertage.formatDE, currentYear),
    };

    function getOwnHoliday1(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday1}.${monthOwnHoliday1}.${year}`;
      }
      return `${year}-${monthOwnHoliday1}-${dayOwnHoliday1}`;
    }

    function getOwnHoliday2(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday2}.${monthOwnHoliday2}.${year}`;
      }
      return `${year}-${monthOwnHoliday2}-${dayOwnHoliday2}`;
    }

    function getOwnHoliday3(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday3}.${monthOwnHoliday3}.${year}`;
      }
      return `${year}-${monthOwnHoliday3}-${dayOwnHoliday3}`;
    }

    function getOwnHoliday4(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday4}.${monthOwnHoliday4}.${year}`;
      }
      return `${year}-${monthOwnHoliday4}-${dayOwnHoliday4}`;
    }

    function getOwnHoliday5(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday5}.${monthOwnHoliday5}.${year}`;
      }
      return `${year}-${monthOwnHoliday5}-${dayOwnHoliday5}`;
    }

    function getOwnHoliday6(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday6}.${monthOwnHoliday6}.${year}`;
      }
      return `${year}-${monthOwnHoliday6}-${dayOwnHoliday6}`;
    }

    function getOwnHoliday7(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday7}.${monthOwnHoliday7}.${year}`;
      }
      return `${year}-${monthOwnHoliday7}-${dayOwnHoliday7}`;
    }

    function getOwnHoliday8(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday8}.${monthOwnHoliday8}.${year}`;
      }
      return `${year}-${monthOwnHoliday8}-${dayOwnHoliday8}`;
    }

    function getOwnHoliday9(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday9}.${monthOwnHoliday9}.${year}`;
      }
      return `${year}-${monthOwnHoliday9}-${dayOwnHoliday9}`;
    }

    function getOwnHoliday10(format, year) {
      if (format === formatDE) {
        return `${dayOwnHoliday10}.${monthOwnHoliday10}.${year}`;
      }
      return `${year}-${monthOwnHoliday10}-${dayOwnHoliday10}`;
    }

    const ownHoliday1 = {
      id: nameOwnHoliday1,
      name: nameOwnHoliday1,
      dateObj: getOwnHoliday1(formatDateObj, currentYear),
      dateDE: getOwnHoliday1(formatDE, currentYear),
    };
    const ownHoliday2 = {
      id: nameOwnHoliday2,
      name: nameOwnHoliday2,
      dateObj: getOwnHoliday2(formatDateObj, currentYear),
      dateDE: getOwnHoliday2(formatDE, currentYear),
    };
    const ownHoliday3 = {
      id: nameOwnHoliday3,
      name: nameOwnHoliday3,
      dateObj: getOwnHoliday3(formatDateObj, currentYear),
      dateDE: getOwnHoliday3(formatDE, currentYear),
    };
    const ownHoliday4 = {
      id: nameOwnHoliday4,
      name: nameOwnHoliday4,
      dateObj: getOwnHoliday4(formatDateObj, currentYear),
      dateDE: getOwnHoliday4(formatDE, currentYear),
    };
    const ownHoliday5 = {
      id: nameOwnHoliday5,
      name: nameOwnHoliday5,
      dateObj: getOwnHoliday5(formatDateObj, currentYear),
      dateDE: getOwnHoliday5(formatDE, currentYear),
    };
    const ownHoliday6 = {
      id: nameOwnHoliday6,
      name: nameOwnHoliday6,
      dateObj: getOwnHoliday6(formatDateObj, currentYear),
      dateDE: getOwnHoliday6(formatDE, currentYear),
    };
    const ownHoliday7 = {
      id: nameOwnHoliday7,
      name: nameOwnHoliday7,
      dateObj: getOwnHoliday7(formatDateObj, currentYear),
      dateDE: getOwnHoliday7(formatDE, currentYear),
    };
    const ownHoliday8 = {
      id: nameOwnHoliday8,
      name: nameOwnHoliday8,
      dateObj: getOwnHoliday8(formatDateObj, currentYear),
      dateDE: getOwnHoliday8(formatDE, currentYear),
    };
    const ownHoliday9 = {
      id: nameOwnHoliday9,
      name: nameOwnHoliday9,
      dateObj: getOwnHoliday9(formatDateObj, currentYear),
      dateDE: getOwnHoliday9(formatDE, currentYear),
    };
    const ownHoliday10 = {
      id: nameOwnHoliday10,
      name: nameOwnHoliday10,
      dateObj: getOwnHoliday10(formatDateObj, currentYear),
      dateDE: getOwnHoliday10(formatDE, currentYear),
    };

    const holiday = [];

    function checkbox() {
      // check New Year is activated
      if (checkNewYear) {
        holiday.push(newYear); // add New Year to holiday array
      } else {
        const index = holiday.indexOf(newYear); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Epiphany is activated
      if (checkEpiphany) {
        holiday.push(epiphany); // add Epiphany to holiday array
      } else {
        const index = holiday.indexOf(epiphany); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Weiberfastnacht is activated
      if (checkWeiberfastnacht) {
        holiday.push(weiberfastnacht); // add Weiberfastnacht to holiday array
      } else {
        const index = holiday.indexOf(weiberfastnacht); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Valentinstag is activated
      if (checkValentinstag) {
        holiday.push(valentinstag); // add Valentinstag to holiday array
      } else {
        const index = holiday.indexOf(valentinstag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Rosenmontag is activated
      if (checkRosenmontag) {
        holiday.push(rosenmontag); // add Rosenmontag to holiday array
      } else {
        const index = holiday.indexOf(rosenmontag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Fastnachtsdienstag is activated
      if (checkFastnachtsdienstag) {
        holiday.push(fastnachtsdienstag); // add Fastnachtsdienstag to holiday array
      } else {
        const index = holiday.indexOf(fastnachtsdienstag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Aschermittwoch is activated
      if (checkAschermittwoch) {
        holiday.push(aschermittwoch); // add Aschermittwoch to holiday array
      } else {
        const index = holiday.indexOf(aschermittwoch); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Gründonnerstag is activated
      if (checkGruendonnerstag) {
        holiday.push(gruendonnerstag); // add Gründonnerstag to holiday array
      } else {
        const index = holiday.indexOf(gruendonnerstag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Karfreitag is activated
      if (checkKarfreitag) {
        holiday.push(karfreitag); // add Karfreitag to holiday array
      } else {
        const index = holiday.indexOf(karfreitag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Easter Sunday is activated
      if (checkEasterSunday) {
        holiday.push(easterSunday); // add Easter Sunday to holiday array
      } else {
        const index = holiday.indexOf(easterSunday); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Easter Monday is activated
      if (checkEasterMonday) {
        holiday.push(easterMonday); // add Easter Monday to holiday array
      } else {
        const index = holiday.indexOf(easterMonday); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check First May is activated
      if (checkFirstMay) {
        holiday.push(firstMay); // add First May to holiday array
      } else {
        const index = holiday.indexOf(firstMay); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Christi Himmelfahrt is activated
      if (checkChristiHimmelfahrt) {
        holiday.push(christiHimmelfahrt); // add Christi Himmelfahrt to holiday array
      } else {
        const index = holiday.indexOf(christiHimmelfahrt); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Pfingstsonntag is activated
      if (checkPfingstsonntag) {
        holiday.push(pfingstsonntag); // add Pfingstsonntag to holiday array
      } else {
        const index = holiday.indexOf(pfingstsonntag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Pfingstmontag is activated
      if (checkPfingstmontag) {
        holiday.push(pfingstmontag); // add Pfingstmontag to holiday array
      } else {
        const index = holiday.indexOf(pfingstmontag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Fronleichnam is activated
      if (checkFronleichnam) {
        holiday.push(fronleichnam); // add Fronleichnam to holiday array
      } else {
        const index = holiday.indexOf(fronleichnam); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Maria Himmelfahrt is activated
      if (checkMariaHimmelfahrt) {
        holiday.push(mariaHimmelfahrt); // add Maria Himmelfahrt to holiday array
      } else {
        const index = holiday.indexOf(mariaHimmelfahrt); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Tag der Deutschen Einheit is activated
      if (checkTagDerDeutschenEinheit) {
        holiday.push(tagDerDeutschenEinheit); // add Tag der Deutschen Einheit to holiday array
      } else {
        const index = holiday.indexOf(tagDerDeutschenEinheit); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Halloween is activated
      if (checkHalloween) {
        holiday.push(halloween); // add Halloween to holiday array
      } else {
        const index = holiday.indexOf(halloween); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Allerheiligen is activated
      if (checkAllerheiligen) {
        holiday.push(allerheiligen); // add Allerheiligen to holiday array
      } else {
        const index = holiday.indexOf(allerheiligen); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check St. Martin is activated
      if (checkStMartin) {
        holiday.push(stMartin); // add St. Martin to holiday array
      } else {
        const index = holiday.indexOf(stMartin); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Buß und Bettag is activated
      if (checkBussUndBettag) {
        holiday.push(bussUndBettag); // add Buß und Bettag to holiday array
      } else {
        const index = holiday.indexOf(bussUndBettag); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Santa is activated
      if (checkSanta) {
        holiday.push(santa); // add Santa to holiday array
      } else {
        const index = holiday.indexOf(santa); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check 1. Advent is activated
      if (checkadvent1) {
        holiday.push(advent1); // add 1. Advent to holiday array
      } else {
        const index = holiday.indexOf(advent1); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check 2. Advent is activated
      if (checkAdvent2) {
        holiday.push(advent2); // add 2. Advent to holiday array
      } else {
        const index = holiday.indexOf(advent2); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check 3. Advent is activated
      if (checkAdvent3) {
        holiday.push(advent3); // add 3. Advent to holiday array
      } else {
        const index = holiday.indexOf(advent3); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check 4. Advent is activated
      if (checkAdvent4) {
        holiday.push(advent4); // add 4. Advent to holiday array
      } else {
        const index = holiday.indexOf(advent4); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Christmas Eve is activated
      if (checkChristmasEve) {
        holiday.push(christmasEve); // add Christmas Eve to holiday array
      } else {
        const index = holiday.indexOf(christmasEve); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check First day of Christmas is activted
      if (checkFirstDayChristmas) {
        holiday.push(firstDayChristmas); // add First day of Christmas to holiday array
      } else {
        const index = holiday.indexOf(firstDayChristmas); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Second day of Christmas is activated
      if (checkSecondDayChristmas) {
        holiday.push(secondDayChristmas); // add Second Christmas Day to holiday array
      } else {
        const index = holiday.indexOf(secondDayChristmas); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check New Years Eve is activated
      if (checkNewYearsEve) {
        holiday.push(newYearsEve); // add New Years Eve to holiday array
      } else {
        const index = holiday.indexOf(newYearsEve); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 1 is activated
      if (checkOwnHoliday1) {
        holiday.push(ownHoliday1); // add Won Holiday 1 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday1); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 2 is activated
      if (checkOwnHoliday2) {
        holiday.push(ownHoliday2); // add Won Holiday 2 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday2); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 3 is activated
      if (checkOwnHoliday3) {
        holiday.push(ownHoliday3); // add Won Holiday 3 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday3); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 4 is activated
      if (checkOwnHoliday4) {
        holiday.push(ownHoliday4); // add Won Holiday 4 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday4); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 5 is activated
      if (checkOwnHoliday5) {
        holiday.push(ownHoliday5); // add Won Holiday 5 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday5); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 6 is activated
      if (checkOwnHoliday6) {
        holiday.push(ownHoliday6); // add Won Holiday 6 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday6); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 7 is activated
      if (checkOwnHoliday7) {
        holiday.push(ownHoliday7); // add Won Holiday 7 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday7); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 8 is activated
      if (checkOwnHoliday8) {
        holiday.push(ownHoliday8); // add Won Holiday 8 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday8); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 9 is activated
      if (checkOwnHoliday9) {
        holiday.push(ownHoliday9); // add Won Holiday 9 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday9); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }

      // check Own Holiday 10 is activated
      if (checkOwnHoliday10) {
        holiday.push(ownHoliday10); // add Won Holiday 10 to holiday array
      } else {
        const index = holiday.indexOf(ownHoliday10); // get index of item
        if (index >= 0) {
          holiday.splice(index); // remove item at index
        }
      }
    }

    checkbox();

    function sortHolidayArray() {
      // sorts holiday array
      // latest date at last
      holiday.sort((a, b) => {
        if (new Date(a.dateObj) > new Date(b.dateObj)) {
          return -1;
        }
        if (new Date(a.dateObj) < new Date(b.dateObj)) {
          return 1;
        }
        return 0;
      });
    }

    function refreshHoliday() {
      // if holiday is already over create new date (next year)
      if ((new Date(newYear.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        newYear.dateObj = Feiertage.getNeujahr(Feiertage.formatDateObj, currentYear + 1);
        newYear.dateDE = Feiertage.getNeujahr(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(epiphany.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        epiphany.dateObj = Feiertage.getHeiligeDreiKoenige(Feiertage.formatDateObj, currentYear + 1);
        epiphany.dateDE = Feiertage.getHeiligeDreiKoenige(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(weiberfastnacht.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        weiberfastnacht.dateObj = Feiertage.getWeiberfastnacht(Feiertage.formatDateObj, currentYear + 1);
        weiberfastnacht.datedE = Feiertage.getWeiberfastnacht(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(valentinstag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        valentinstag.dateObj = Feiertage.getValentinstag(Feiertage.formatDateObj, currentYear + 1);
        valentinstag.dateDE = Feiertage.getValentinstag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(rosenmontag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        rosenmontag.dateObj = Feiertage.getRosenmontag(Feiertage.formatDateObj, currentYear + 1);
        rosenmontag.dateDE = Feiertage.getRosenmontag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(fastnachtsdienstag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        fastnachtsdienstag.dateObj = Feiertage.getFastnachtsdienstag(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        fastnachtsdienstag.dateDE = Feiertage.getFastnachtsdienstag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(aschermittwoch.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        aschermittwoch.dateObj = Feiertage.getAschermittwoch(Feiertage.formatDateObj, currentYear + 1);
        aschermittwoch.dateDE = Feiertage.getAschermittwoch(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(gruendonnerstag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        gruendonnerstag.dateObj = Feiertage.getGruendonnerstag(Feiertage.formatDateObj, currentYear + 1);
        gruendonnerstag.dateDE = Feiertage.getGruendonnerstag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(karfreitag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        karfreitag.dateObj = Feiertage.getKarfreitag(Feiertage.formatDateObj, currentYear + 1);
        karfreitag.dateDE = Feiertage.getKarfreitag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(easterSunday.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        easterSunday.dateObj = Feiertage.getOstersonntag(Feiertage.formatDateObj, currentYear + 1);
        easterSunday.dateDE = Feiertage.getOstersonntag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(easterMonday.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        easterMonday.dateObj = Feiertage.getOstermontag(Feiertage.formatDateObj, currentYear + 1);
        easterMonday.dateDE = Feiertage.getOstermontag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(firstMay.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        firstMay.dateObj = Feiertage.getFirstMay(Feiertage.formatDateObj, currentYear + 1);
        firstMay.dateDE = Feiertage.getFirstMay(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(christiHimmelfahrt.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        christiHimmelfahrt.dateObj = Feiertage.getChristiHimmelfahrt(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        christiHimmelfahrt.dateDE = Feiertage.getChristiHimmelfahrt(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(pfingstsonntag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        pfingstsonntag.dateObj = Feiertage.getPfingstsonntag(Feiertage.formatDateObj, currentYear + 1);
        pfingstsonntag.dateDE = Feiertage.getPfingstsonntag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(pfingstmontag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        pfingstmontag.dateObj = Feiertage.getPfingstmontag(Feiertage.formatDateObj, currentYear + 1);
        pfingstmontag.dateDE = Feiertage.getPfingstmontag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(fronleichnam.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        fronleichnam.dateObj = Feiertage.getFronleichnam(Feiertage.formatDateObj, currentYear + 1);
        fronleichnam.dateDE = Feiertage.getFronleichnam(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(mariaHimmelfahrt.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        mariaHimmelfahrt.dateObj = Feiertage.getMariaHimmelfahrt(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        mariaHimmelfahrt.dateDE = Feiertage.getMariaHimmelfahrt(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(tagDerDeutschenEinheit.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        tagDerDeutschenEinheit.dateObj = Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        tagDerDeutschenEinheit.dateDE = Feiertage.getTagDerDeutschenEinheit(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(halloween.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        halloween.dateObj = Feiertage.getHalloween(Feiertage.formatDateObj, currentYear + 1);
        halloween.dateDE = Feiertage.getHalloween(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(allerheiligen.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        allerheiligen.dateObj = Feiertage.getAllerheiligen(Feiertage.formatDateObj, currentYear + 1);
        allerheiligen.dateDE = Feiertage.getAllerheiligen(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(stMartin.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        stMartin.dateObj = Feiertage.getStMartin(Feiertage.formatDateObj, currentYear + 1);
        stMartin.dateDE = Feiertage.getStMartin(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(bussUndBettag.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        bussUndBettag.dateObj = Feiertage.getBussUndBettag(Feiertage.formatDateObj, currentYear + 1);
        bussUndBettag.dateDE = Feiertage.getBussUndBettag(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(santa.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        santa.dateObj = Feiertage.getNikolaus(Feiertage.formatDateObj, currentYear + 1);
        santa.dateDE = Feiertage.getNikolaus(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(advent1.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        advent1.dateObj = Feiertage.getAdvent1(Feiertage.formatDateObj, currentYear + 1);
        advent1.dateDE = Feiertage.getAdvent1(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(advent2.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        advent2.dateObj = Feiertage.getAdvent2(Feiertage.formatDateObj, currentYear + 1);
        advent2.dateDE = Feiertage.getAdvent2(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(advent3.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        advent3.dateObj = Feiertage.getAdvent3(Feiertage.formatDateObj, currentYear + 1);
        advent3.dateDE = Feiertage.getAdvent3(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(advent4.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        advent4.dateObj = Feiertage.getAdvent4(Feiertage.formatDateObj, currentYear + 1);
        advent4.dateDE = Feiertage.getAdvent4(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(christmasEve.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        christmasEve.dateObj = Feiertage.getHeiligabend(Feiertage.formatDateObj, currentYear + 1);
        christmasEve.dateDE = Feiertage.getHeiligabend(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(firstDayChristmas.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        firstDayChristmas.dateObj = Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        firstDayChristmas.dateDE = Feiertage.getWeihnachtsfeiertag1(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(secondDayChristmas.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        // eslint-disable-next-line max-len
        secondDayChristmas.dateObj = Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDateObj, currentYear + 1);
        // eslint-disable-next-line max-len
        secondDayChristmas.dateDE = Feiertage.getWeihnachtsfeiertag2(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(newYearsEve.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        newYearsEve.dateObj = Feiertage.getSilvester(Feiertage.formatDateObj, currentYear + 1);
        newYearsEve.dateDE = Feiertage.getSilvester(Feiertage.formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday1.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday1.dateObj = getOwnHoliday1(formatDateObj, currentYear + 1);
        ownHoliday1.dateDE = getOwnHoliday1(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday2.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday2.dateObj = getOwnHoliday2(formatDateObj, currentYear + 1);
        ownHoliday2.dateDE = getOwnHoliday2(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday3.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday3.dateObj = getOwnHoliday3(formatDateObj, currentYear + 1);
        ownHoliday3.dateDE = getOwnHoliday3(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday4.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday4.dateObj = getOwnHoliday4(formatDateObj, currentYear + 1);
        ownHoliday4.dateDE = getOwnHoliday4(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday5.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday5.dateObj = getOwnHoliday5(formatDateObj, currentYear + 1);
        ownHoliday5.dateDE = getOwnHoliday5(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday6.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday6.dateObj = getOwnHoliday6(formatDateObj, currentYear + 1);
        ownHoliday6.dateDE = getOwnHoliday6(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday7.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday7.dateObj = getOwnHoliday7(formatDateObj, currentYear + 1);
        ownHoliday7.dateDE = getOwnHoliday7(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday8.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday8.dateObj = getOwnHoliday8(formatDateObj, currentYear + 1);
        ownHoliday8.dateDE = getOwnHoliday8(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday9.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday9.dateObj = getOwnHoliday9(formatDateObj, currentYear + 1);
        ownHoliday9.dateDE = getOwnHoliday9(formatDE, currentYear + 1);
      }
      if ((new Date(ownHoliday10.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) < 0) {
        ownHoliday10.dateObj = getOwnHoliday10(formatDateObj, currentYear + 1);
        ownHoliday10.dateDE = getOwnHoliday10(formatDE, currentYear + 1);
      }
    }

    function sendAll() {
      // outputs all holidays
      refreshHoliday();
      sortHolidayArray();
      for (let i = 0; i < holiday.length; i += 1) {
        if (checkArray) {
          node.send({ payload: Object.values(holiday[i]) });
        } else {
          node.send({ payload: holiday[i] });
        }
      }
    }

    function isTodayHoliday() {
      // outputs boolean wether today is holiday
      refreshHoliday(); // refresh holiday array
      let todayHoliday;
      if (holiday.length === 0) {
        todayHoliday = false; // if there aren't items in holiday array --> today cant' be holiday
      } else {
        for (let i = 0; i < holiday.length; i += 1) {
          const element = holiday[i];
          if (new Date(element.dateObj).valueOf() - new Date(`${currentYear}-${currentMonth}-${currentDay}T00:00:00.000Z`).valueOf() === 0) {
            todayHoliday = true;
            break;
          } else {
            todayHoliday = false;
          }
        }
        node.send({ payload: todayHoliday });
      }
    }

    function sendNextHoliday() {
      // outputs next holiday
      refreshHoliday(); // refresh holiday array
      sortHolidayArray(); // sort holiday array
      if (checkArray) {
        // send last item of holiday array as Array
        node.send({ payload: Object.values(holiday[holiday.length - 1]) });
      } else {
        // send last item of holiday array as Object
        node.send({ payload: holiday[holiday.length - 1] });
      }
    }

    function sendNextThreeHolidays() {
      refreshHoliday(); // refresh holiday array
      sortHolidayArray(); // sort holiday array
      if (checkArray) {
        // send last item of holiday as Array
        node.send({ payload: Object.values(holiday[holiday.length - 1]) });
        // send penultimate item of holiday as Array
        node.send({ payload: Object.values(holiday[holiday.length - 2]) });
        // send before penultimate item of holiday as Array
        node.send({ payload: Object.values(holiday[holiday.length - 3]) });
      } else {
        // send last item of holiday as Object
        node.send({ payload: holiday[holiday.length - 1] });
        // send penultimate item of holiday as Object
        node.send({ payload: holiday[holiday.length - 2] });
        // send before penultimate item of holiday as Object
        node.send({ payload: holiday[holiday.length - 3] });
      }
    }

    function isChristmasTime() {
      if (new Date(Feiertage.getAdvent1(
        Feiertage.formatDateObj, currentYear,
      )).valueOf() <= new Date().valueOf()
        && new Date(Feiertage.getSilvester(
          Feiertage.formatDateObj, currentYear,
        )).valueOf() >= new Date().valueOf()) {
        node.send({ payload: true });
      } else if (new Date(Feiertage.getNeujahr(
        Feiertage.formatDateObj, currentYear,
      )).valueOf() <= new Date().valueOf()
        && new Date(Feiertage.getHeiligeDreiKoenige(
          Feiertage.formatDateObj, currentYear,
        )).valueOf() >= new Date().valueOf()) {
        node.send({ payload: true });
      } else {
        node.send({ payload: false });
      }
    }

    function daysUntilNextHoliday() {
      refreshHoliday();
      sortHolidayArray();
      const checkDate = holiday[holiday.length - 1];
      const difference = (new Date(checkDate.dateObj) - new Date(`${currentYear}-${currentMonth}-${currentDay}`)) / 86400000;
      node.send({ payload: difference });
    }

    this.on('input', (msg) => {
      const payload = msg.payload;
      switch (payload) {
        case 'all':
          sendAll();
          break;
        case 'isTodayHoliday':
          isTodayHoliday();
          break;
        case 'nextHoliday':
          sendNextHoliday();
          break;
        case 'nextThreeHolidays':
          sendNextThreeHolidays();
          break;
        case 'isChristmasTime':
          isChristmasTime();
          break;
        case 'daysUntilNextHoliday':
          daysUntilNextHoliday();
          break;
        default:
          isTodayHoliday();
          break;
      }
    });

    const dailyInterval = setInterval(() => {
      setCurrentDate(); // refresh current date
      if (dailyOutput) {
        if (currentHour === 0 && currentMinute === 0) {
          refreshHoliday();
          isTodayHoliday();
        }
      }
    }, 60000);

    this.on('close', () => {
      clearInterval(dailyInterval);
    });
  }
  RED.nodes.registerType('feiertageDE', feiertageDE);
};
