module.exports = function(RED) {
    function feiertageDE(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        var checkNewYear = config.neujahr; // checkbox New Year
        var newYearName = config.neujahrName; // New Year Name
        var checkHolyThreeKings = config.heiligeDreiKoenige; // checkboy Holy Three Kings
        var holyThreeKingsName = config.heiligeDreiKoenigeName; // Holy Three Kings Name
        var checkWeiberfastnacht = config.weiberfastnacht; // checkbox Weiberfastnacht
        var weiberfastnachtName = config.weiberfastnachtName; // Weiberfastnacht Name
        var checkValentinstag = config.valentinstag; // checkbox Valentinstag
        var valentinstagName = config.valentinstagName; // Valentinstag Name
        var checkRosenmontag = config.rosenmontag; // checkbox Rosenmontag
        var rosenmontagName = config.rosenmontagName; // Rosenmontag Name
        var checkFastnachtsdienstag = config.fastnachtsdienstag; // checkbox Fastnachtsdienstag
        var fastnachtsdienstagsName = config.fastnachtsdienstagName; // Fastnachtsdienstag Name
        var checkAschermittwoch = config.aschermittwoch; // checkbox Aschermittwoch
        var aschermittwochName = config.aschermittwochName; // Aschermittwoch Name
        var checkGruendonnerstag = config.gruendonnerstag; // checkbox Gründonnerstag
        var gruendonnerstagName = config.gruendonnerstagName; // Gründonnerstag Name
        var checkKarfreitag = config.karfreitag; // checkbox Karfreitag
        var karfreitagName = config.karfreitagName; // Karfreitag Name
        var checkEasterSunday = config.easterSunday; // checkbox Easter Sunday
        var easterSundayName = config.easterSundayName; // Easter Sunday Name
        var checkEasterMonday = config.easterMonday; // checkbox Easter Monday
        var easterMondayName = config.easterMondayName; // Easter Monday Name
        var checkFirstMay = config.firstMay; // checkbox 1. Mai
        var firstMayName = config.firstMayName; // First May Name
        var checkChristiHimmelfahrt = config.christiHimmelfahrt; // checkbox Christihimmelfahrt
        var christiHimmerlfahrtName = config.christiHimmelfahrtName; // Christi Himmelfahrt Name
        var checkPfingstsonntag = config.pfingstsonntag; // checkbox Pfingstsonntag
        var pfingstsonntagName = config.pfingstsonntagName; // Pfingstsonntag Name
        var checkPfingstmontag = config.pfingstmontag; // checkbox Pfingstmontag
        var pfingstmontagName = config.pfingstmontagName; // Pfingstmontag Name
        var checkFronleichnam = config.fronleichnam; // checkbox Fronleichnam
        var fronleichnamName = config.fronleichnamName; // Fronleichnam Name
        var checkMariaHimmelfahrt = config.mariaHimmelfahrt; // checkbox Maria Himmelfahrt
        var mariaHimmelfahrtName = config.mariaHimmelfahrtName; // Maria Himmelfahrt Name
        var checkTagDerDeutschenEinheit = config.tagDerDeutschenEinheit; // checkbox Tag der Deutschen Einheit
        var tagDerDeutschenEinheitName = config.tagDerDeutschenEinheitName; // Tag der Deutschen Einheit Name
        var checkHalloween = config.halloween; // checkbox Halloween
        var halloweenName = config.halloweenName; // Halloween Name
        var checkAllerheiligen = config.allerheiligen; // checkbox Allerheiligen
        var allerheiligenName = config.allerheiligenName; // Allerheiligen Name
        var checkStMartin = config.stMartin; // checkbox St. Martin
        var stMartinName = config.stMartinName; // St. Martin Name
        var checkBussUndBettag = config.bussUndBettag; // checkbox Buß und Bettag
        var bussUndBettagName = config.bussUndBettagName; // Buß und Bettag Name
        var checkSanta = config.nikolaus; // checkbox Nikolaus
        var santaName = config.nikolausName; // Nikolaus Name
        var checkadvent1 = config.advent1; // checkbox 1. Advent
        var advent1Name = config.advent1Name; // 1. Advent Name
        var checkAdvent2 = config.advent2; // checkbox 2. Advent
        var advent2Name = config.advent2Name; // 2. Advent Name
        var checkAdvent3 = config.advent3; // checkbox 3. Advent
        var advent3Name = config.advent3Name; // 3. Advent Name
        var checkAdvent4 = config.advent4; // checkbox 4. Advent
        var advent4Name = config.advent4Name; // 4. Advent Name
        var checkChristmasEve = config.heiligabend; // checkbox Christmas Eve
        var christmasEveName = config.heiligabendName; // Christmas Eve Name
        var checkFirstDayChristmas = config.weihnachten1; // checkbox First day of Chrsitmas
        var firstDayChristmasName = config.weihnachten1Name; // First day of Christmas
        var checkSecondDayChristmas = config.weihnachten2; // checkbox Second day of Christmas
        var secondDayChristmasName = config.weihnachten2Name; // Second day of Christmas
        var checkNewYearsEve = config.silvester; // checkbox New Years Eve
        var newYearsEveName = config.silvesterName; // Silvester Name

        var checkOwnHoliday1 = config.ownHoliday1; // checkbox Own Holiday 1
        var dayOwnHoliday1 = config.ownHoliday1Day; // day Own Holiday 1
        var monthOwnHoliday1 = config.ownHoliday1Month; // month Own Holiday 1
        var nameOwnHoliday1 = config.ownHoliday1Name; // name Own Holiday 1

        var checkOwnHoliday2 = config.ownHoliday2; // checkbox Own Holiday 2
        var dayOwnHoliday2 = config.ownHoliday2Day; // day Own Holiday 2
        var monthOwnHoliday2 = config.ownHoliday2Month; // month Own Holiday 2
        var nameOwnHoliday2 = config.ownHoliday2Name; // name Own Holiday 2

        var checkOwnHoliday3 = config.ownHoliday3; // checkbox Own Holiday 3
        var dayOwnHoliday3 = config.ownHoliday3Day; // day Own Holiday 3
        var monthOwnHoliday3 = config.ownHoliday3Month; // month Own Holiday 3
        var nameOwnHoliday3 = config.ownHoliday3Name; // name Own Holiday 3

        var checkOwnHoliday4 = config.ownHoliday4; // checkbox Own Holiday 4
        var dayOwnHoliday4 = config.ownHoliday4Day; // day Own Holiday 4
        var monthOwnHoliday4 = config.ownHoliday4Month; // month Own Holiday 4
        var nameOwnHoliday4 = config.ownHoliday4Name; // name Own Holiday 4

        var checkOwnHoliday5 = config.ownHoliday5; // checkbox Own Holiday 5
        var dayOwnHoliday5 = config.ownHoliday5Day; // day Own Holiday 5
        var monthOwnHoliday5 = config.ownHoliday5Month; // month Own Holiday 5
        var nameOwnHoliday5 = config.ownHoliday5Name; // name Own Holiday 5

        var checkOwnHoliday6 = config.ownHoliday6; // checkbox Own Holiday 6
        var dayOwnHoliday6 = config.ownHoliday6Day; // day Own Holiday 6
        var monthOwnHoliday6 = config.ownHoliday6Month; // month Own Holiday 6
        var nameOwnHoliday6 = config.ownHoliday6Name; // name Own Holiday 6

        var checkOwnHoliday7 = config.ownHoliday7; // checkbox Own Holiday 7
        var dayOwnHoliday7 = config.ownHoliday7Day; // day Own Holiday 7
        var monthOwnHoliday7 = config.ownHoliday7Month; // month Own Holiday 7
        var nameOwnHoliday7 = config.ownHoliday7Name; // name Own Holiday 7

        var checkOwnHoliday8 = config.ownHoliday8; // checkbox Own Holiday 8
        var dayOwnHoliday8 = config.ownHoliday8Day; // day Own Holiday 8
        var monthOwnHoliday8 = config.ownHoliday8Month; // month Own Holiday 8
        var nameOwnHoliday8 = config.ownHoliday8Name; // name Own Holiday 8

        var checkOwnHoliday9 = config.ownHoliday9; // checkbox Own Holiday 9
        var dayOwnHoliday9 = config.ownHoliday9Day; // day Own Holiday 9
        var monthOwnHoliday9 = config.ownHoliday9Month; // month Own Holiday 9
        var nameOwnHoliday9 = config.ownHoliday9Name; // name Own Holiday 9

        var checkOwnHoliday10 = config.ownHoliday10; // checkbox Own Holiday 10
        var dayOwnHoliday10 = config.ownHoliday10Day; // day Own Holiday 10
        var monthOwnHoliday10 = config.ownHoliday10Month; // month Own Holiday 10
        var nameOwnHoliday10 = config.ownHoliday10Name; // name Own Holiday 10

        setCurrentDate(); // set current date on start

        var currentYear; // current year (yyyy)
        var currentMonth; // current month (1-12)
        var currentDay; // current day
        var currentHour; // current hour
        var currentMinute; // current minute

        const formatDateObj = "dateObj";
        const formatDE = "DE";

        var newYear = []; // day of New Year
        newYear[0] = "New Year"; // id
        newYear[1] = newYearName; // name
        newYear[2] = getNeujahr(formatDateObj, currentYear);
        newYear[3] = getNeujahr(formatDE, currentYear);
        var holyThreeKings = []; // day of Holy Three Kings
        holyThreeKings[0] = "Holy Three Kings"; // id
        holyThreeKings[1] = holyThreeKingsName; // name
        holyThreeKings[2] = getHeiligeDreiKoenige(formatDateObj, currentYear);
        holyThreeKings[3] = getHeiligeDreiKoenige(formatDE, currentYear);
        var weiberfastnacht = []; // day of Weiberfastnacht
        weiberfastnacht[0] = "Weiberfastnacht"; // id
        weiberfastnacht[1] = weiberfastnachtName; // name
        weiberfastnacht[2] = getWeiberfastnacht(formatDateObj, currentYear);
        weiberfastnacht[3] = getWeiberfastnacht(formatDE, currentYear);
        var valentinstag = []; // day of Valentinstag
        valentinstag[0] = "Valentinstag"; // id
        valentinstag[1] = valentinstagName; // name
        valentinstag[2] = getValentinstag(formatDateObj, currentYear);
        valentinstag[3] = getValentinstag(formatDE, currentYear);
        var rosenmontag = []; // day of Rosenmontag
        rosenmontag[0] = "Rosenmontag"; // id
        rosenmontag[1] = rosenmontagName; // name
        rosenmontag[2] = getRosenmontag(formatDateObj, currentYear);
        rosenmontag[3] = getRosenmontag(formatDE, currentYear);
        var fastnachtsdienstag = []; // day of Fastnachtsdienstag
        fastnachtsdienstag[0] = "Fastnachtdienstag"; // id
        fastnachtsdienstag[1] = fastnachtsdienstagsName; // name
        fastnachtsdienstag[2] = getFastnachtsdienstag(formatDateObj, currentYear);
        fastnachtsdienstag[3] = getFastnachtsdienstag(formatDE, currentYear);
        var aschermittwoch = []; // day of Aschermittwoch
        aschermittwoch[0] = "Aschermittwoch"; // id
        aschermittwoch[1] = aschermittwochName; // name
        aschermittwoch[2] = getAschermittwoch(formatDateObj, currentYear);
        aschermittwoch[3] = getAschermittwoch(formatDE, currentYear);
        var gruendonnerstag = []; // day of Gründonnerstag
        gruendonnerstag[0] = "Gründonnerstag"; // id
        gruendonnerstag[1] = gruendonnerstagName; // name
        gruendonnerstag[2] = getGruendonnerstag(formatDateObj, currentYear);
        gruendonnerstag[3] = getGruendonnerstag(formatDE, currentYear);
        var karfreitag = []; // day of Karfreitag
        karfreitag[0] = "Karfreitag"; // id
        karfreitag[1] = karfreitagName; // name
        karfreitag[2] = getKarfreitag(formatDateObj, currentYear);
        karfreitag[3] = getKarfreitag(formatDE, currentYear);
        var easterSunday = []; // day of Easter Sunday
        easterSunday[0] = "Easter Sunday"; // id
        easterSunday[1] = easterSundayName; // name
        easterSunday[2] = getOstersonntag(formatDateObj, currentYear);
        easterSunday[3] = getOstersonntag(formatDE, currentYear);
        var easterMonday = []; // day of easter Sunday
        easterMonday[0] = "Easter Monday"; // id
        easterMonday[1] = easterMondayName; // name
        easterMonday[2] = getOstermontag(formatDateObj, currentYear);
        easterMonday[3] = getOstermontag(formatDE, currentYear);
        var firstMay = []; // day of First May
        firstMay[0] = "First May"; // id
        firstMay[1] = firstMayName; // name
        firstMay[2] = getFirstMay(formatDateObj, currentYear);
        firstMay[3] = getFirstMay(formatDE, currentYear);
        var christiHimmelfahrt = []; // day of Christi Himmelfahrt
        christiHimmelfahrt[0] = "Christi Himmelfahrt"; // id
        christiHimmelfahrt[1] = christiHimmerlfahrtName; // name
        christiHimmelfahrt[2] = getChristiHimmelfahrt(formatDateObj, currentYear);
        christiHimmelfahrt[3] = getChristiHimmelfahrt(formatDE, currentYear);
        var pfingstsonntag = []; // day of Pfingstsonntag
        pfingstsonntag[0] = "Pfingstsonntag"; // id
        pfingstsonntag[1] = pfingstsonntagName; // name
        pfingstsonntag[2] = getPfingstsonntag(formatDateObj, currentYear);
        pfingstsonntag[3] = getPfingstsonntag(formatDE, currentYear);
        var pfingstmontag = []; // day of Pfingstmontag
        pfingstmontag[0] = "Pfingstmontag"; // id
        pfingstmontag[1] = pfingstmontagName; // name
        pfingstmontag[2] = getPfingstmontag(formatDateObj, currentYear);
        pfingstmontag[3] = getPfingstmontag(formatDE, currentYear);
        var fronleichnam = []; // day of Fronleichnam
        fronleichnam[0] = "Fronleichnam"; // id
        fronleichnam[1] = fronleichnamName; // name
        fronleichnam[2] = getFronleichnam(formatDateObj, currentYear);
        fronleichnam[3] = getFronleichnam(formatDE, currentYear);
        var mariaHimmelfahrt = []; // day of Maria Himmelfahrt
        mariaHimmelfahrt[0] = "Maria Himmelfahrt"; // id
        mariaHimmelfahrt[1] = mariaHimmelfahrtName; // name
        mariaHimmelfahrt[2] = getMariaHimmelfahrt(formatDateObj, currentYear);
        mariaHimmelfahrt[3] = getMariaHimmelfahrt(formatDE, currentYear);
        var tagDerDeutschenEinheit = []; // day of Tag der Deutschen Einheit
        tagDerDeutschenEinheit[0] = "Tag der Deutschen Einheit"; // id
        tagDerDeutschenEinheit[1] = tagDerDeutschenEinheitName; // name
        tagDerDeutschenEinheit[2] = getTagDerDeutschenEinheit(formatDateObj, currentYear);
        tagDerDeutschenEinheit[3] = getTagDerDeutschenEinheit(formatDE, currentYear);
        var halloween = []; // day of Halloween
        halloween[0] = "Halloween"; // id
        halloween[1] = halloweenName; // name
        halloween[2] = getHalloween(formatDateObj, currentYear);
        halloween[3] = getHalloween(formatDE, currentYear);
        var allerheiligen = []; // day of Allerheiligen
        allerheiligen[0] = "Allerheiligen"; // id
        allerheiligen[1] = allerheiligenName; // name
        allerheiligen[2] = getAllerheiligen(formatDateObj, currentYear);
        allerheiligen[3] = getAllerheiligen(formatDE, currentYear);
        var stMartin = []; // day of St. Martin
        stMartin[0] = "St. Martin"; // id
        stMartin[1] = stMartinName; // name
        stMartin[2] = getStMartin(formatDateObj, currentYear);
        stMartin[3] = getStMartin(formatDE, currentYear);
        var bussUndBettag = []; // day of Buß und Bettag
        bussUndBettag[0] = "Buß und Bettag"; // id
        bussUndBettag[1] = bussUndBettagName; // name
        bussUndBettag[2] = getBussUndBettag(formatDateObj, currentYear);
        bussUndBettag[3] = getBussUndBettag(formatDE, currentYear);
        var santa = []; // day of Nikolaus
        santa[0] = "Santa Day"; // id
        santa[1] = santaName; // name
        santa[2] = getNikolaus(formatDateObj, currentYear);
        santa[3] = getNikolaus(formatDE, currentYear);
        var advent1 = []; // day of first Advent
        advent1[0] = "1. Advent"; // id
        advent1[1] = advent1Name; // name
        advent1[2] = getAdvent1(formatDateObj, currentYear);
        advent1[3] = getAdvent1(formatDE, currentYear);
        var advent2 = []; // day of second Advent
        advent2[0] = "2. Advent"; // id
        advent2[1] = advent2Name; // name
        advent2[2] = getAdvent2(formatDateObj, currentYear);
        advent2[3] = getAdvent2(formatDE, currentYear);
        var advent3 = []; // day of third Advent
        advent3[0] = "3. Advent"; // id
        advent3[1] = advent3Name; // name
        advent3[2] = getAdvent3(formatDateObj, currentYear);
        advent3[3] = getAdvent3(formatDE, currentYear);
        var advent4 = []; // day of fourth Advent
        advent4[0] = "4. Advent"; // id
        advent4[1] = advent4Name; // name
        advent4[2] = getAdvent4(formatDateObj, 24, currentYear);
        advent4[3] = getAdvent4(formatDE, 24, currentYear);
        var christmasEve = []; // day of Christmas Eve
        christmasEve[0] = "Christmas Eve"; // id
        christmasEve[1] = christmasEveName; // name
        christmasEve[2] = getHeiligabend(formatDateObj, currentYear);
        christmasEve[3] = getHeiligabend(formatDE, currentYear);
        var firstDayChristmas = []; // day of First day of Christmas
        firstDayChristmas[0] = "First day of Christmas"; // id
        firstDayChristmas[1] = firstDayChristmasName; // name
        firstDayChristmas[2] = getWeihnachtsfeiertag1(formatDateObj, currentYear);
        firstDayChristmas[3] = getWeihnachtsfeiertag1(formatDE, currentYear);
        var secondDayChristmas = []; // day of Second day of Christmas
        secondDayChristmas[0] = "Second day of Christmas"; // id
        secondDayChristmas[1] = secondDayChristmasName; // name
        secondDayChristmas[2] = getWeihnachtsfeiertag2(formatDateObj, currentYear);
        secondDayChristmas[3] = getWeihnachtsfeiertag2(formatDE, currentYear);
        var newYearsEve = []; // day of New Years Eve
        newYearsEve[0] = "New Years Eve"; // id
        newYearsEve[1] = newYearsEveName; // name
        newYearsEve[2] = getSilvester(formatDateObj, currentYear);
        newYearsEve[3] = getSilvester(formatDE, currentYear);

        var ownHoliday1 = []; // day of Own Holiday 1
        ownHoliday1[0] = nameOwnHoliday1;
        ownHoliday1[1] = nameOwnHoliday1;
        ownHoliday1[2] = getOwnHoliday1(formatDateObj, currentYear);
        ownHoliday1[3] = getOwnHoliday1(formatDE, currentYear);
        var ownHoliday2 = []; // day of Own Holiday 2
        ownHoliday2[0] = nameOwnHoliday2;
        ownHoliday2[1] = nameOwnHoliday2;
        ownHoliday2[2] = getOwnHoliday2(formatDateObj, currentYear);
        ownHoliday2[3] = getOwnHoliday2(formatDE, currentYear);
        var ownHoliday3 = []; // day of Own Holiday 3
        ownHoliday3[0] = nameOwnHoliday3;
        ownHoliday3[1] = nameOwnHoliday3;
        ownHoliday3[2] = getOwnHoliday3(formatDateObj, currentYear);
        ownHoliday3[3] = getOwnHoliday3(formatDE, currentYear);
        var ownHoliday4 = []; // day of Own Holiday 4
        ownHoliday4[0] = nameOwnHoliday4;
        ownHoliday4[1] = nameOwnHoliday4;
        ownHoliday4[2] = getOwnHoliday4(formatDateObj, currentYear);
        ownHoliday4[3] = getOwnHoliday4(formatDE, currentYear);
        var ownHoliday5 = []; // day of Own Holiday 5
        ownHoliday5[0] = nameOwnHoliday5;
        ownHoliday5[1] = nameOwnHoliday5;
        ownHoliday5[2] = getOwnHoliday5(formatDateObj, currentYear);
        ownHoliday5[3] = getOwnHoliday5(formatDE, currentYear);
        var ownHoliday6 = []; // day of Own Holiday 6
        ownHoliday6[0] = nameOwnHoliday6;
        ownHoliday6[1] = nameOwnHoliday6;
        ownHoliday6[2] = getOwnHoliday6(formatDateObj, currentYear);
        ownHoliday6[3] = getOwnHoliday6(formatDE, currentYear);
        var ownHoliday7 = []; // day of Own Holiday 7
        ownHoliday7[0] = nameOwnHoliday7;
        ownHoliday7[1] = nameOwnHoliday7;
        ownHoliday7[2] = getOwnHoliday7(formatDateObj, currentYear);
        ownHoliday7[3] = getOwnHoliday7(formatDE, currentYear);
        var ownHoliday8 = []; // day of Own Holiday 8
        ownHoliday8[0] = nameOwnHoliday8;
        ownHoliday8[1] = nameOwnHoliday8;
        ownHoliday8[2] = getOwnHoliday8(formatDateObj, currentYear);
        ownHoliday8[3] = getOwnHoliday8(formatDE, currentYear);
        var ownHoliday9 = []; // day of Own Holiday 9
        ownHoliday9[0] = nameOwnHoliday9;
        ownHoliday9[1] = nameOwnHoliday9;
        ownHoliday9[2] = getOwnHoliday9(formatDateObj, currentYear);
        ownHoliday9[3] = getOwnHoliday9(formatDE, currentYear);
        var ownHoliday10 = []; // day of Own Holiday 10
        ownHoliday10[0] = nameOwnHoliday10;
        ownHoliday10[1] = nameOwnHoliday10;
        ownHoliday10[2] = getOwnHoliday10(formatDateObj, currentYear);
        ownHoliday10[3] = getOwnHoliday10(formatDE, currentYear);

        var holiday = [];

        checkbox();

        this.on('input', function(msg) {
            var payload = msg.payload;
            switch (payload) {
                case "all":
                    sendAll(); // outputs all holidays
                    break;
                case "isTodayHoliday":
                    isTodayHoliday(); // outputs boolean wether today is holiday
                    break;
                case "nextHoliday":
                    sendNextHoliday(); // outputs next holiday
                    break;
                case "nextThreeHolidays":
                    sendNextThreeHolidays(); // outputs next 3 holidays
                    break;
            }
        });

        var dailyInterval = setInterval(function () {
            setCurrentDate(); // refresh current date
            // output boolean wether roday is holiday every day at 00:01 o'clock
            if (currentHour == 0 && currentMinute == 1) {
                refreshHoliday(); // refresh holiday
                isTodayHoliday(); // outputs boolean wether today is holiday
            }
        }, 60000);

        function getNeujahr(format, year) {
            if (format == formatDE) {
                return "1.1." + year;
            } else {
                return year + "-1-1";
            }
        }

        function getHeiligeDreiKoenige(format, year) {
            if (format == formatDE) {
                return "6.1." + year;
            } else {
                return year + "-1-6";
            }
        }

        function getWeiberfastnacht(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 52); // Weiberfastnacht = eastersunday - 52 days

            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getValentinstag(format, year) {
            if (format == formatDE) {
                return "14.2." + year;
            } else {
                return year + "-2-14";
            }
        }

        function getRosenmontag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 48); // Rosenmontag = eastersunday - 48

            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getFastnachtsdienstag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 47); // Fastnachtsdienstag = eastersunday - 47
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getAschermittwoch(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 46); // Aschermittwoch = eastersunday - 46
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getGruendonnerstag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 3); // Gründonnerstag = eastersunday - 3
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getKarfreitag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() - 2); // Karfreitag = eastersunday - 2

            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getOstersonntag(format, year) {
            var a = year % 19; // currentYear mod 19
            var b = (19 * a + 24) % 30;
            var easterSundayDay = b + (2 * (year % 4) + 4 * (year % 7) + 6 * b + 5) % 7;
            
            if (easterSundayDay == 35 || (easterSundayDay == 34 && b == 28 && a > 10)) {
                easterSundayDay -= 7;
            }
            // generate easterDate and change Parameters to easter Date
            var easterDate = new Date(year, 2, 22);
            easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);
            var easterMonth = easterDate.getMonth() + 1;
            var easterDay = easterDate.getDate();
            
            if (format == formatDE) {
                return easterDay + "." + easterMonth + "." + year;
            } else {
                return year + "-" + easterMonth + "-" + easterDay;
            }
        }

        function getOstermontag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() + 1); // eastermonday = eastersunday + 1
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getFirstMay(format, year) {
            if (format == formatDE) {
                return "1.5." + year;
            } else {
                return year + "-5-1";
            }
        }

        function getChristiHimmelfahrt(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() + 39); // Christi Himmelfahrt = eastersunday + 39
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getPfingstsonntag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() + 49); // Pfingstsonntag = eastersunday + 49
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getPfingstmontag(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() + 50); // Pfingstmontag = eastersunday + 50
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getFronleichnam(format, year) {
            var refereceDate = new Date(getOstersonntag(formatDateObj, year));
            refereceDate.setDate(refereceDate.getDate() + 60); // Fronleichnam = eastersunday + 60
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getMariaHimmelfahrt(format, year) {
            if (format == formatDE) {
                return "15.8." + year;
            } else {
                return year + "-8-15";
            }
        }

        function getTagDerDeutschenEinheit(format, year) {
            if (format == formatDE) {
                return "3.10." + year;
            } else {
                return year + "-10-3";
            }
        }

        function getHalloween(format, year) {
            if (format == formatDE) {
                return "31.10." + year;
            } else {
                return year + "-10-31";
            }
        }

        function getAllerheiligen(format, year) {
            if (format == formatDE) {
                return "1.11." + year;
            } else {
                return year + "-11-1";
            }
        }

        function getStMartin(format, year) {
            if (format == formatDE) {
                return "11.11." + year;
            } else {
                return year + "-11-11";
            }
        }

        function getBussUndBettag(format, year) {
            var refereceDate = new Date(getAdvent4(formatDateObj, 24, year));
            refereceDate.setDate(refereceDate.getDate() - 32); // Buß und Bettag = 4. Advent - 32
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getNikolaus(format, year) {
            if (format == formatDE) {
                return "6.12." + year;
            } else {
                return year + "-12-6";
            }
        }

        function getAdvent1(format, year) {
            var refereceDate = new Date(getAdvent4(formatDateObj, 24, year));
            refereceDate.setDate(refereceDate.getDate() - 21); // 1. Advent = 4. Advent - 21
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getAdvent2(format, year) {
            var refereceDate = new Date(getAdvent4(formatDateObj, 24, year));
            refereceDate.setDate(refereceDate.getDate() - 14); // 2. Advent = 4. Advent - 14
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getAdvent3(format, year) {
            var refereceDate = new Date(getAdvent4(formatDateObj, 24, year));
            refereceDate.setDate(refereceDate.getDate() - 7); // 3. Advent = 4. Advent - 7
            
            if (format == formatDE) {
                return refereceDate.getDate() + "." + (refereceDate.getMonth() + 1) + "." + year;
            } else {
                return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
            }
        }

        function getAdvent4(format, day, year) {
            // calculates days of advent
            var checkDate = new Date(year + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                if (format == formatDE) {
                    return day + "." + checkMonth + "." + year;
                } else {
                    return year + "-" + checkMonth + "-" + day;
                }
            }
            else {
                return getAdvent4(format, day - 1, year);
            }
        }

        function getHeiligabend(format, year) {
            if (format == formatDE) {
                return "24.12." + year;
            } else {
                return year + "-12-24";
            }
        }

        function getWeihnachtsfeiertag1(format, year) {
            if (format == formatDE) {
                return "25.12." + year;
            } else {
                return year + "-12-25";
            }
        }

        function getWeihnachtsfeiertag2(format, year) {
            if (format == formatDE) {
                return "26.12." + year;
            } else {
                return year + "-12-26";
            }
        }

        function getSilvester(format, year) {
            if (format == formatDE) {
                return "31.12." + year;
            } else {
                return year + "-12-31";
            }
        }

        function getOwnHoliday1(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday1 + "." + monthOwnHoliday1 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday1 + "-" + dayOwnHoliday1;
            }
        }

        function getOwnHoliday2(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday2 + "." + monthOwnHoliday2 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday2 + "-" + dayOwnHoliday2;
            }
        }

        function getOwnHoliday3(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday3 + "." + monthOwnHoliday3 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday3 + "-" + dayOwnHoliday3;
            }
        }

        function getOwnHoliday4(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday4 + "." + monthOwnHoliday4 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday4 + "-" + dayOwnHoliday4;
            }
        }

        function getOwnHoliday5(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday5 + "." + monthOwnHoliday5 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday5 + "-" + dayOwnHoliday5;
            }
        }

        function getOwnHoliday6(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday6 + "." + monthOwnHoliday6 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday6 + "-" + dayOwnHoliday6;
            }
        }

        function getOwnHoliday7(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday7 + "." + monthOwnHoliday7 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday7 + "-" + dayOwnHoliday7;
            }
        }

        function getOwnHoliday8(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday8 + "." + monthOwnHoliday8 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday8 + "-" + dayOwnHoliday8;
            }
        }

        function getOwnHoliday9(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday9 + "." + monthOwnHoliday9 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday9 + "-" + dayOwnHoliday9;
            }
        }

        function getOwnHoliday10(format, year) {
            if (format == formatDE) {
                return dayOwnHoliday10 + "." + monthOwnHoliday10 + "." + year;
            } else {
                return year + "-" + monthOwnHoliday10 + "-" + dayOwnHoliday10;
            }
        }

        function setCurrentDate() {
            var currentDate = new Date(); // create current date
            currentYear = currentDate.getFullYear(); // set current year
            currentMonth = currentDate.getMonth() + 1; // set current month
            currentDay = currentDate.getDate(); // set current day
            currentHour = currentDate.getHours(); // set current hour
            currentMinute = currentDate.getMinutes(); // set current minute
        }

        function sendAll() {
            // outputs all holidays
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            for (let i = 0; i < holiday.length; i++) {
                node.send({payload: holiday[i]}); // send every item of holiday array
            }
        }

        function isTodayHoliday() {
            // outputs boolean wether today is holiday
            refreshHoliday(); // refresh holiday array
            if (holiday.length == 0) {
                todayHoliday = false; // if there aren't items in holiday array today can't be holiday
            }
            else {
                for (let i = 0; i < holiday.length; i++) {
                    var temp = holiday[i];
                    var todayHoliday;
                    // check item of holiday array equals todays date
                    if (new Date(temp[2]).valueOf() == new Date(currentYear + "-" + currentMonth + "-" + currentDay).valueOf()) {
                        todayHoliday = true;
                        break;
                    }
                    else {
                        todayHoliday = false;
                    }
                }
                node.send({payload: todayHoliday}); // send boolean
            }
        }

        function sendNextHoliday() {
            // outputs next holiday
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            node.send({payload: holiday[holiday.length - 1]}); // send last item of holiday array
        }

        function sendNextThreeHolidays() {
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            node.send({payload: holiday[holiday.length - 1]}); // send last item of holiday array
            node.send({payload: holiday[holiday.length - 2]}); // send penultimate item of holiday array
            node.send({payload: holiday[holiday.length - 3]}); // send before penultimate item of holiday array
        }

        function refreshHoliday() {
            // if holiday is already over create new date (next year)
            if ((new Date(newYear[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                newYear[2] = getNeujahr(formatDateObj, currentYear + 1);
                newYear[3] = getNeujahr(formatDE, currentYear + 1);
            }
            if ((new Date(holyThreeKings[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                holyThreeKings[2] = getHeiligeDreiKoenige(formatDateObj, currentYear + 1);
                holyThreeKings[3] = getHeiligeDreiKoenige(formatDE, currentYear + 1);
            }
            
            if ((new Date(weiberfastnacht[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                weiberfastnacht[2] = getWeiberfastnacht(formatDateObj, currentYear + 1);
                weiberfastnacht[3] = getWeiberfastnacht(formatDE, currentYear + 1);
            }
            if ((new Date(valentinstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                valentinstag[2] = getValentinstag(formatDateObj, currentYear + 1);
                valentinstag[3] = getValentinstag(formatDE, currentYear + 1);
            }
            if ((new Date(rosenmontag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                rosenmontag[2] = getRosenmontag(formatDateObj, currentYear + 1);
                rosenmontag[3] = getRosenmontag(formatDE, currentYear + 1);
            }
            if ((new Date(fastnachtsdienstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                fastnachtsdienstag[2] = getFastnachtsdienstag(formatDateObj, currentYear + 1);
                fastnachtsdienstag[3] = getFastnachtsdienstag(formatDE, currentYear + 1);
            }
            if ((new Date(aschermittwoch[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                aschermittwoch[2] = getAschermittwoch(formatDateObj, currentYear + 1);
                aschermittwoch[3] = getAschermittwoch(formatDE, currentYear + 1);
            }
            if ((new Date(gruendonnerstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                gruendonnerstag[2] = getGruendonnerstag(formatDateObj, currentYear + 1);
                gruendonnerstag[3] = getGruendonnerstag(formatDE, currentYear + 1);
            }
            if ((new Date(karfreitag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                karfreitag[2] = getKarfreitag(formatDateObj, currentYear + 1);
                karfreitag[3] = getKarfreitag(formatDE, currentYear + 1);
            }
            if ((new Date(easterSunday[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                easterSunday[2] = getOstersonntag(formatDateObj, currentYear + 1);
                easterSunday[3] = getOstersonntag(formatDE, currentYear + 1);
            }
            if ((new Date(easterMonday[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                easterMonday[2] = getOstermontag(formatDateObj, currentYear + 1);
                easterMonday[3] = getOstermontag(formatDE, currentYear + 1);
            }
            if ((new Date(firstMay[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                firstMay[2] = getFirstMay(formatDateObj, currentYear + 1);
                firstMay[3] = getFirstMay(formatDE, currentYear + 1);
            }
            if ((new Date(christiHimmelfahrt[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                christiHimmelfahrt[2] = getChristiHimmelfahrt(formatDateObj, currentYear + 1);
                christiHimmelfahrt[3] = getChristiHimmelfahrt(formatDE, currentYear + 1);
            }
            if ((new Date(pfingstsonntag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                pfingstsonntag[2] = getPfingstsonntag(formatDateObj, currentYear + 1);
                pfingstsonntag[3] = getPfingstsonntag(formatDE, currentYear + 1);
            }
            if ((new Date(pfingstmontag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                pfingstmontag[2] = getPfingstmontag(formatDateObj, currentYear + 1);
                pfingstmontag[3] = getPfingstmontag(formatDE, currentYear + 1);
            }
            if ((new Date(fronleichnam[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                fronleichnam[2] = getFronleichnam(formatDateObj, currentYear + 1);
                fronleichnam[3] = getFronleichnam(formatDE, currentYear + 1);
            }
            if ((new Date(mariaHimmelfahrt[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                mariaHimmelfahrt[2] = getMariaHimmelfahrt(formatDateObj, currentYear + 1);
                mariaHimmelfahrt[3] = getMariaHimmelfahrt(formatDE, currentYear + 1);
            }
            if ((new Date(tagDerDeutschenEinheit[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                tagDerDeutschenEinheit[2] = getTagDerDeutschenEinheit(formatDateObj, currentYear + 1);
                tagDerDeutschenEinheit[3] = getTagDerDeutschenEinheit(formatDE, currentYear + 1);
            }
            if ((new Date(halloween[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                halloween[2] = getHalloween(formatDateObj, currentYear + 1);
                halloween[3] = getHalloween(formatDE, currentYear + 1);
            }
            if ((new Date(allerheiligen[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                allerheiligen[2] = getAllerheiligen(formatDateObj, currentYear + 1);
                allerheiligen[3] = getAllerheiligen(formatDE, currentYear + 1);
            }
            if ((new Date(stMartin[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                stMartin[2] = getStMartin(formatDateObj, currentYear + 1);
                stMartin[3] = getStMartin(formatDE, currentYear + 1);
            }
            if ((new Date(bussUndBettag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                bussUndBettag[2] = getBussUndBettag(formatDateObj, currentYear + 1);
                bussUndBettag[3] = getBussUndBettag(formatDE, currentYear + 1);
            }
            if ((new Date(santa[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                santa[2] = getNikolaus(formatDateObj, currentYear + 1);
                santa[3] = getNikolaus(formatDE, currentYear + 1);
            }
            if ((new Date(advent1[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent1[2] = getAdvent1(formatDateObj, currentYear + 1);
                advent1[3] = getAdvent1(formatDE, currentYear + 1);
            }
            if ((new Date(advent2[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent2[2] = getAdvent2(formatDateObj, currentYear + 1);
                advent2[3] = getAdvent2(formatDE, currentYear + 1);
            }
            if ((new Date(advent3[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent3[2] = getAdvent3(formatDateObj, currentYear + 1);
                advent3[3] = getAdvent3(formatDE, currentYear + 1);
            }
            if ((new Date(advent4[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent4[2] = getAdvent4(formatDateObj, 24, currentYear + 1);
                advent4[3] = getAdvent4(formatDE, 24, currentYear + 1);
            }
            if ((new Date(christmasEve[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                christmasEve[2] = getHeiligabend(formatDateObj, currentYear + 1);
                christmasEve[3] = getHeiligabend(formatDE, currentYear + 1);
            }
            if ((new Date(firstDayChristmas[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                firstDayChristmas[2] = getWeihnachtsfeiertag1(formatDateObj, currentYear + 1);
                firstDayChristmas[3] = getWeihnachtsfeiertag1(formatDE, currentYear + 1);
            }
            if ((new Date(secondDayChristmas[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                secondDayChristmas[2] = getWeihnachtsfeiertag2(formatDateObj, currentYear + 1);
                secondDayChristmas[3] = getWeihnachtsfeiertag2(formatDE, currentYear + 1);
            }
            if ((new Date(newYearsEve[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                newYearsEve[2] = getSilvester(formatDateObj, currentYear + 1);
                newYearsEve[3] = getSilvester(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday1[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday1[2] = getOwnHoliday1(formatDateObj, currentYear + 1);
                ownHoliday1[3] = getOwnHoliday1(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday2[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday2[2] = getOwnHoliday2(formatDateObj, currentYear + 1);
                ownHoliday2[3] = getOwnHoliday2(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday3[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday3[2] = getOwnHoliday3(formatDateObj, currentYear + 1);
                ownHoliday3[3] = getOwnHoliday3(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday4[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday4[2] = getOwnHoliday4(formatDateObj, currentYear + 1);
                ownHoliday4[3] = getOwnHoliday4(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday5[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday5[2] = getOwnHoliday5(formatDateObj, currentYear + 1);
                ownHoliday5[3] = getOwnHoliday5(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday6[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday6[2] = getOwnHoliday6(formatDateObj, currentYear + 1);
                ownHoliday6[3] = getOwnHoliday6(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday7[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday7[2] = getOwnHoliday7(formatDateObj, currentYear + 1);
                ownHoliday7[3] = getOwnHoliday7(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday8[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday8[2] = getOwnHoliday8(formatDateObj, currentYear + 1);
                ownHoliday8[3] = getOwnHoliday8(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday9[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday9[2] = getOwnHoliday9(formatDateObj, currentYear + 1);
                ownHoliday9[3] = getOwnHoliday9(formatDE, currentYear + 1);
            }
            if ((new Date(ownHoliday10[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday10[2] = getOwnHoliday10(formatDateObj, currentYear + 1);
                ownHoliday10[3] = getOwnHoliday10(formatDE, currentYear + 1);
            }
        }

        function sortHolidayArray() {
            // sorts holiday array
            // latest date at last
            holiday.sort(function(a, b) {
                if (new Date(a[2]) > new Date(b[2])) {
                    return -1;
                }
                if (new Date(a[2]) < new Date(b[2])) {
                    return 1;
                }
                return 0;
            });
        }

        function checkbox() {
            // check New Year is activated
            if (checkNewYear) {
                holiday.push(newYear); // add New Year to holiday array
            } else {
                var index = holiday.indexOf(newYear); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Holy Three Kings is activated
            if (checkHolyThreeKings) {
                holiday.push(holyThreeKings); // add Holy Three Kings to holiday array
            } else {
                var index = holiday.indexOf(holyThreeKings); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Weiberfastnacht is activated
            if (checkWeiberfastnacht) {
                holiday.push(weiberfastnacht); // add Weiberfastnacht to holiday array
            } else {
                var index = holiday.indexOf(weiberfastnacht); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Valentinstag is activated
            if (checkValentinstag) {
                holiday.push(valentinstag); // add Valentinstag to holiday array
            } else {
                var index = holiday.indexOf(valentinstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Rosenmontag is activated
            if (checkRosenmontag) {
                holiday.push(rosenmontag); // add Rosenmontag to holiday array
            } else {
                var index = holiday.indexOf(rosenmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fastnachtsdienstag is activated
            if (checkFastnachtsdienstag) {
                holiday.push(fastnachtsdienstag); // add Fastnachtsdienstag to holiday array
            } else {
                var index = holiday.indexOf(fastnachtsdienstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Aschermittwoch is activated
            if (checkAschermittwoch) {
                holiday.push(aschermittwoch); // add Aschermittwoch to holiday array
            } else {
                var index = holiday.indexOf(aschermittwoch); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Gründonnerstag is activated
            if (checkGruendonnerstag) {
                holiday.push(gruendonnerstag); // add Gründonnerstag to holiday array
            } else {
                var index = holiday.indexOf(gruendonnerstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Karfreitag is activated
            if (checkKarfreitag) {
                holiday.push(karfreitag); // add Karfreitag to holiday array
            } else {
                var index = holiday.indexOf(karfreitag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Easter Sunday is activated
            if (checkEasterSunday) {
                holiday.push(easterSunday); // add Easter Sunday to holiday array
            } else {
                var index = holiday.indexOf(easterSunday); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Easter Monday is activated
            if (checkEasterMonday) {
                holiday.push(easterMonday); // add Easter Monday to holiday array
            } else {
                var index = holiday.indexOf(easterMonday); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check First May is activated
            if (checkFirstMay) {
                holiday.push(firstMay); // add First May to holiday array
            } else {
                var index = holiday.indexOf(firstMay); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Christi Himmelfahrt is activated
            if (checkChristiHimmelfahrt) {
                holiday.push(christiHimmelfahrt); // add Christi Himmelfahrt to holiday array
            } else {
                var index = holiday.indexOf(christiHimmelfahrt); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstsonntag is activated
            if (checkPfingstsonntag) {
                holiday.push(pfingstsonntag); // add Pfingstsonntag to holiday array
            } else {
                var index = holiday.indexOf(pfingstsonntag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstmontag is activated
            if (checkPfingstmontag) {
                holiday.push(pfingstmontag); // add Pfingstmontag to holiday array
            } else {
                var index = holiday.indexOf(pfingstmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fronleichnam is activated
            if (checkFronleichnam) {
                holiday.push(fronleichnam); // add Fronleichnam to holiday array
            } else {
                var index = holiday.indexOf(fronleichnam); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Maria Himmelfahrt is activated
            if (checkMariaHimmelfahrt) {
                holiday.push(mariaHimmelfahrt); // add Maria Himmelfahrt to holiday array
            } else {
                var index = holiday.indexOf(mariaHimmelfahrt); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Tag der Deutschen Einheit is activated
            if (checkTagDerDeutschenEinheit) {
                holiday.push(tagDerDeutschenEinheit); // add Tag der Deutschen Einheit to holiday array
            } else {
                var index = holiday.indexOf(tagDerDeutschenEinheit); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Halloween is activated
            if (checkHalloween) {
                holiday.push(halloween); // add Halloween to holiday array
            } else {
                var index = holiday.indexOf(halloween); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Allerheiligen is activated
            if (checkAllerheiligen) {
                holiday.push(allerheiligen); // add Allerheiligen to holiday array
            } else {
                var index = holiday.indexOf(allerheiligen); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check St. Martin is activated
            if (checkStMartin) {
                holiday.push(stMartin); // add St. Martin to holiday array
            } else {
                var index = holiday.indexOf(stMartin); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Buß und Bettag is activated
            if (checkBussUndBettag) {
                holiday.push(bussUndBettag); // add Buß und Bettag to holiday array
            } else {
                var index = holiday.indexOf(bussUndBettag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Santa is activated
            if (checkSanta) {
                holiday.push(santa); // add Santa to holiday array
            } else {
                var index = holiday.indexOf(santa); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 1. Advent is activated
            if (checkadvent1) {
                holiday.push(advent1); // add 1. Advent to holiday array
            } else {
                var index = holiday.indexOf(advent1); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 2. Advent is activated
            if (checkAdvent2) {
                holiday.push(advent2); // add 2. Advent to holiday array
            } else {
                var index = holiday.indexOf(advent2); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 3. Advent is activated
            if (checkAdvent3) {
                holiday.push(advent3); // add 3. Advent to holiday array
            } else {
                var index = holiday.indexOf(advent3); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 4. Advent is activated
            if (checkAdvent4) {
                holiday.push(advent4); // add 4. Advent to holiday array
            } else {
                var index = holiday.indexOf(advent4); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Christmas Eve is activated
            if (checkChristmasEve) {
                holiday.push(christmasEve); // add Christmas Eve to holiday array
            } else {
                var index = holiday.indexOf(christmasEve); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check First day of Christmas is activted
            if (checkFirstDayChristmas) {
                holiday.push(firstDayChristmas); // add First day of Christmas to holiday array
            } else {
                var index = holiday.indexOf(firstDayChristmas); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Second day of Christmas is activated
            if (checkSecondDayChristmas) {
                holiday.push(secondDayChristmas); // add Second Christmas Day to holiday array
            } else {
                var index = holiday.indexOf(secondDayChristmas); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check New Years Eve is activated
            if (checkNewYearsEve) {
                holiday.push(newYearsEve); // add New Years Eve to holiday array
            } else {
                var index = holiday.indexOf(newYearsEve); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 1 is activated
            if (checkOwnHoliday1) {
                holiday.push(ownHoliday1); // add Won Holiday 1 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday1); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 2 is activated
            if (checkOwnHoliday2) {
                holiday.push(ownHoliday2); // add Won Holiday 2 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday2); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 3 is activated
            if (checkOwnHoliday3) {
                holiday.push(ownHoliday3); // add Won Holiday 3 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday3); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 4 is activated
            if (checkOwnHoliday4) {
                holiday.push(ownHoliday4); // add Won Holiday 4 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday4); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 5 is activated
            if (checkOwnHoliday5) {
                holiday.push(ownHoliday5); // add Won Holiday 5 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday5); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 6 is activated
            if (checkOwnHoliday6) {
                holiday.push(ownHoliday6); // add Won Holiday 6 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday6); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 7 is activated
            if (checkOwnHoliday7) {
                holiday.push(ownHoliday7); // add Won Holiday 7 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday7); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 8 is activated
            if (checkOwnHoliday8) {
                holiday.push(ownHoliday8); // add Won Holiday 8 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday8); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 9 is activated
            if (checkOwnHoliday9) {
                holiday.push(ownHoliday9); // add Won Holiday 9 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday9); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 10 is activated
            if (checkOwnHoliday10) {
                holiday.push(ownHoliday10); // add Won Holiday 10 to holiday array
            } else {
                var index = holiday.indexOf(ownHoliday10); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
        }

        this.on('close', function() {
            if (interval) {
                clearInterval(dailyInterval);
            }
        });
    }
    RED.nodes.registerType("feiertageDE", feiertageDE);
};