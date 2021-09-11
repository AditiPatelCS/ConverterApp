// let idsArray = ["#lengthTitle", "#weightTitle", "#timeTitle", "#areaTitle", "#volumeTitle", "#temperatureTitle", "#speedTitle", "#angleTitle", "#forceTitle"]
const cm = {
    title: document.querySelector("#cmTitle"),
    list: document.querySelector("#cm"),
    subTopic: [
        cmTom = document.querySelector(".cmTom"),
        cmTokm = document.querySelector(".cmTokm"),
        cmToft = document.querySelector(".cmToft"),
        cmToin = document.querySelector(".cmToin"),
        cmToyd = document.querySelector(".cmToyd"),
        cmTomi = document.querySelector(".cmTomi"),
        cmTomm = document.querySelector(".cmTomm")
    ]
};


const m = {
    title: document.querySelector("#mTitle"),
    list: document.querySelector("#m"),
    subTopic: [
        mTocm = document.querySelector(".mTocm"),
        mTokm = document.querySelector(".mTokm"),
        mToft = document.querySelector(".mToft"),
        mToin = document.querySelector(".mToin"),
        mToyd = document.querySelector(".mToyd"),
        mTomi = document.querySelector(".mTomi"),
        mTomm = document.querySelector(".mTomm")
    ]
};
const km = {
    title: document.querySelector("#kmTitle"),
    list: document.querySelector("#km"),
    subTopic: [
        kmTocm = document.querySelector(".kmTocm"),
        kmTom = document.querySelector(".kmTom"),
        kmToft = document.querySelector(".kmToft"),
        kmToin = document.querySelector(".kmToin"),
        kmToyd = document.querySelector(".kmToyd"),
        kmTomi = document.querySelector(".kmTomi"),
        kmTomm = document.querySelector(".kmTomm")
    ]
};
const ft = {
    title: document.querySelector("#ftTitle"),
    list: document.querySelector("#ft"),
    subTopic: [
        ftTocm = document.querySelector(".ftTocm"),
        ftTom = document.querySelector(".ftTom"),
        ftTokm = document.querySelector(".ftTokm"),
        ftToin = document.querySelector(".ftToin"),
        ftToyd = document.querySelector(".ftToyd"),
        ftTomi = document.querySelector(".ftTomi"),
        ftTomm = document.querySelector(".ftTomm")
    ]
};
const inch = {
    title: document.querySelector("#inTitle"),
    list: document.querySelector("#in"),
    subTopic: [
        inTocm = document.querySelector(".inTocm"),
        inTom = document.querySelector(".inTom"),
        inTokm = document.querySelector(".inTokm"),
        inToft = document.querySelector(".inToft"),
        inToyd = document.querySelector(".inToyd"),
        inTomi = document.querySelector(".inTomi"),
        inTomm = document.querySelector(".inTomm")
    ]
};
const yd = {
    title: document.querySelector("#ydTitle"),
    list: document.querySelector("#yd"),
    subTopic: [
        ydTocm = document.querySelector(".ydTocm"),
        ydTom = document.querySelector(".ydTom"),
        ydTokm = document.querySelector(".ydTokm"),
        ydToft = document.querySelector(".ydToft"),
        ydToin = document.querySelector(".ydToin"),
        ydTomi = document.querySelector(".ydTomi"),
        ydTomm = document.querySelector(".ydTomm")
    ]
};
const mi = {
    title: document.querySelector("#miTitle"),
    list: document.querySelector("#mi"),
    subTopic: [
        miTocm = document.querySelector(".miTocm"),
        miTom = document.querySelector(".miTom"),
        miTokm = document.querySelector(".miTokm"),
        miToft = document.querySelector(".miToft"),
        miToin = document.querySelector(".miToin"),
        miToyd = document.querySelector(".miToyd"),
        miTomm = document.querySelector(".miTomm")
    ]
};
const mm = {
    title: document.querySelector("#mmTitle"),
    list: document.querySelector("#mm"),
    subTopic: [
        mmTocm = document.querySelector(".mmTocm"),
        mmTom = document.querySelector(".mmTom"),
        mmTokm = document.querySelector(".mmTokm"),
        mmToft = document.querySelector(".mmToft"),
        mmToin = document.querySelector(".mmToin"),
        mmToyd = document.querySelector(".mmToyd"),
        mmTomi = document.querySelector(".mmTomi")
    ]
};
const length1 = {
    title: document.querySelector("#lengthTitle"),
    list: document.querySelector(".length"),
    arr: [cm, m, km, ft, inch, yd, mi, mm],
    // subList: [cm.subTopic.cmTom, cm.subTopic.cmTokm, cm.subTopic.cmToft, cm.subTopic.cmToin, cm.subTopic.cmToyd, cm.subTopic.cmTomi, cm.subTopic.cmTomm]

};
// length subs done

const mg = {
    title: document.querySelector("#mgTitle"),
    list: document.querySelector("#mg"),

    subTopic: [
        mgTog = document.querySelector(".mgTog"),
        mgTokg = document.querySelector(".mgTokg"),
        mgTooz = document.querySelector(".mgTooz"),
        mgTolb = document.querySelector(".mgTolb"),
        mgTost = document.querySelector(".mgTost"),
        mgTomt = document.querySelector(".mgTomt")]
};
const g = {
    title: document.querySelector("#gTitle"),
    list: document.querySelector("#g"),

    subTopic: [
        gTomg = document.querySelector(".gTomg"),
        gTokg = document.querySelector(".gTokg"),
        gTooz = document.querySelector(".gTooz"),
        gTolb = document.querySelector(".gTolb"),
        gTost = document.querySelector(".gTost"),
        gTomt = document.querySelector(".gTomt")]

};
const kg = {
    title: document.querySelector("#kgTitle"),
    list: document.querySelector("#kg"),

    subTopic: [
        kgTomg = document.querySelector(".kgTomg"),
        kgTog = document.querySelector(".kgTog"),
        kgTooz = document.querySelector(".kgTooz"),
        kgTolb = document.querySelector(".kgTolb"),
        kgTost = document.querySelector(".kgTost"),
        kgTomt = document.querySelector(".kgTomt")
    ]
};
const oz = {
    title: document.querySelector("#OzTitle"),
    list: document.querySelector("#oz"),

    subTopic: [
        ozTomg = document.querySelector(".ozTomg"),
        ozTog = document.querySelector(".ozTog"),
        ozTokg = document.querySelector(".ozTokg"),
        ozTolb = document.querySelector(".ozTolb"),
        ozTost = document.querySelector(".ozTost"),
        ozTomt = document.querySelector(".ozTomt")
    ]
};
const lb = {
    title: document.querySelector("#lbTitle"),
    list: document.querySelector("#lb"),

    subTopic: [
        lbTomg = document.querySelector(".lbTomg"),
        lbTog = document.querySelector(".lbTog"),
        lbTokg = document.querySelector(".lbTokg"),
        lbTooz = document.querySelector(".lbToOz"),
        lbTost = document.querySelector(".lbTost"),
        lbTomt = document.querySelector(".lbTomt"),
    ]
};
const st = {
    title: document.querySelector("#stTitle"),
    list: document.querySelector("#st"),

    subTopic: [
        stTomg = document.querySelector(".stTomg"),
        stTog = document.querySelector(".stTog"),
        stTokg = document.querySelector(".stTokg"),
        stTooz = document.querySelector(".stToOz"),
        stTolb = document.querySelector(".stTolb"),
        stTomt = document.querySelector(".stTomt"),
    ]
};
const mt = {
    title: document.querySelector("#mtTitle"),
    list: document.querySelector("#mt"),

    subTopic: [
        mtTomg = document.querySelector(".mtTomg"),
        mtTog = document.querySelector(".mtTog"),
        mtTokg = document.querySelector(".mtTokg"),
        mtTooz = document.querySelector(".mtToOz"),
        mtTolb = document.querySelector(".mtTolb"),
        mtTost = document.querySelector(".mtTost"),
    ]
};
const weight = {
    title: document.querySelector("#weightTitle"),
    list: document.querySelector(".weight"),
    arr: [mg, g, kg, oz, lb, st, mt]
};
// Weight sub done


const s = {
    title: document.querySelector("#sTitle"),
    list: document.querySelector("#s"),

    subTopic: [
        sTomin = document.querySelector(".sTomin"),
        sTohr = document.querySelector(".sTohr"),
        sToday = document.querySelector(".sToday"),
        sTowk = document.querySelector(".sTowk"),
        sTomonth = document.querySelector(".sTomonth"),
        sToyr = document.querySelector(".sToyr")
    ]
};
const min = {
    title: document.querySelector("#minTitle"),
    list: document.querySelector("#min"),

    subTopic: [
        minTos = document.querySelector(".minTos"),
        minTohr = document.querySelector(".minTohr"),
        minToday = document.querySelector(".minToday"),
        minTowk = document.querySelector(".minTowk"),
        minTomonth = document.querySelector(".minTomonth"),
        minToyr = document.querySelector(".minToyr"),
    ]
};
const hr = {
    title: document.querySelector("#hrTitle"),
    list: document.querySelector("#hr"),

    subTopic: [
        hrTos = document.querySelector(".hrTos"),
        hrTomin = document.querySelector(".hrTomin"),
        hrToday = document.querySelector(".hrToday"),
        hrTowk = document.querySelector(".hrTowk"),
        hrTomonth = document.querySelector(".hrTomonth"),
        hrToyr = document.querySelector(".hrToyr")
    ]
};
const day = {
    title: document.querySelector("#dayTitle"),
    list: document.querySelector("#day"),

    subTopic: [
        dayTos = document.querySelector(".dayTos"),
        dayTomin = document.querySelector(".dayTomin"),
        dayTohr = document.querySelector(".dayTohr"),
        dayTowk = document.querySelector(".dayTowk"),
        dayTomonth = document.querySelector(".dayTomonth"),
        dayToyr = document.querySelector(".dayToyr"),]
};
const wk = {
    title: document.querySelector("#wkTitle"),
    list: document.querySelector("#wk"),

    subTopic: [
        wkTos = document.querySelector(".wkTos"),
        wkTomin = document.querySelector(".wkTomin"),
        wkTohr = document.querySelector(".wkTohr"),
        wkToday = document.querySelector(".wkToday"),
        wkTomonth = document.querySelector(".wkTomonth"),
        wkToyr = document.querySelector(".wkToyr"),]
};
const month = {
    title: document.querySelector("#monthTitle"),
    list: document.querySelector("#month"),

    subTopic: [
        monthTos = document.querySelector(".monthTos"),
        monthTomin = document.querySelector(".monthTomin"),
        monthTohr = document.querySelector(".monthTohr"),
        monthToday = document.querySelector(".monthToday"),
        monthTowk = document.querySelector(".monthTowk"),
        monthToyr = document.querySelector(".monthToyr"),]
};
const yr = {
    title: document.querySelector("#yrTitle"),
    list: document.querySelector("#yr"),

    subTopic: [
        yrTos = document.querySelector(".yrTos"),
        yrTomin = document.querySelector(".yrTomin"),
        yrTohr = document.querySelector(".yrTohr"),
        yrToday = document.querySelector(".yrToday"),
        yrTowk = document.querySelector(".yrTowk"),
        yrTomonth = document.querySelector(".yrTomonth"),]
};
const time = {
    title: document.querySelector("#timeTitle"),
    list: document.querySelector(".time"),
    arr: [s, min, hr, day, wk, month, yr]
};
// Time sub done


const sqIn = {
    title: document.querySelector("#sqInTitle"),
    list: document.querySelector("#sqIn"),
    subTopic: [
        sqInTosqFt = document.querySelector(".sqInTosqFt"),
        sqInTosqYd = document.querySelector(".sqInTosqYd"),
        sqInTosqM = document.querySelector(".sqInTosqM"),
        sqInToKm = document.querySelector(".sqInTosqKm"),
        sqInTosqMi = document.querySelector(".sqInTosqMi"),
        sqInToac = document.querySelector(".sqInToac")
    ]

};
const sqFt = {
    title: document.querySelector("#sqFtTitle"),
    list: document.querySelector("#sqFt"),
    subTopic: [
        sqFtTosqIn = document.querySelector(".sqFtTosqIn"),
        sqFtTosqYd = document.querySelector(".sqFtTosqYd"),
        sqFtTosqM = document.querySelector(".sqFtTosqM"),
        sqFtTosqKm = document.querySelector(".sqFtTosqKm"),
        sqFtTosqMi = document.querySelector(".sqFtTosqMi"),
        sqFtToac = document.querySelector(".sqFtToac")
    ]
};
const sqYd = {
    title: document.querySelector("#sqYdTitle"),
    list: document.querySelector("#sqYd"),
    subTopic: [
        sqYdTosqIn = document.querySelector(".sqYdTosqIn"),
        sqYdTosqFt = document.querySelector(".sqYdTosqFt"),
        sqYdTosqM = document.querySelector(".sqYdTosqM"),
        sqYdTosqKm = document.querySelector(".sqYdTosqKm"),
        sqYdTosqMi = document.querySelector(".sqYdTosqMi"),
        sqYdToac = document.querySelector(".sqYdToac")
    ]
};
const sqM = {
    title: document.querySelector("#sqMTitle"),
    list: document.querySelector("#sqM"),
    subTopic: [
        sqMTosqIn = document.querySelector(".sqMTosqIn"),
        sqMTosqFt = document.querySelector(".sqMTosqFt"),
        sqMTosqYd = document.querySelector(".sqMTosqYd"),
        sqMTosqKm = document.querySelector(".sqMTosqKm"),
        sqMTosqMi = document.querySelector(".sqMTosqMi"),
        sqMToac = document.querySelector(".sqMToac"),
    ]
};
const sqKm = {
    title: document.querySelector("#sqKmTitle"),
    list: document.querySelector("#sqKm"),
    subTopic: [
        sqKmTosqIn = document.querySelector(".sqKmTosqIn"),
        sqKmTosqFt = document.querySelector(".sqKmTosqFt"),
        sqKmTosqYd = document.querySelector(".sqKmTosqYd"),
        sqKmTosqM = document.querySelector(".sqKmTosqM"),
        sqKmTosqMi = document.querySelector(".sqKmTosqMi"),
        sqKmToac = document.querySelector(".sqKmToac"),
    ]
};
const sqMi = {
    title: document.querySelector("#sqMiTitle"),
    list: document.querySelector("#sqMi"),
    subTopic: [
        sqMiTosqIn = document.querySelector(".sqMiTosqIn"),
        sqMiTosqFt = document.querySelector(".sqMiTosqFt"),
        sqMiTosqYd = document.querySelector(".sqMiTosqYd"),
        sqMiTosqM = document.querySelector(".sqMiTosqM"),
        sqMiTosqKm = document.querySelector(".sqMiTosqKm"),
        sqMiToac = document.querySelector(".sqMiToac")
    ]
};
const ac = {
    title: document.querySelector("#acTitle"),
    list: document.querySelector("#ac"),
    subTopic: [
        acTosqIn = document.querySelector(".acTosqIn"),
        acTosqFt = document.querySelector(".acTosqFt"),
        acTosqYd = document.querySelector(".acTosqYd"),
        acTosqM = document.querySelector(".acTosqM"),
        acTosqKm = document.querySelector(".acTosqKm"),
        acTosqMi = document.querySelector(".acTosqMi")
    ]
};
const area = {
    title: document.querySelector("#areaTitle"),
    list: document.querySelector(".area"),
    arr: [sqIn, sqFt, sqYd, sqM, sqKm, sqMi, ac]
};
// Area sub done


const ml = {
    title: document.querySelector("#mlTitle"),
    list: document.querySelector("#ml"),
    subTopic: [
        mlTol = document.querySelector(".mlTol"),
        mlTocuIn = document.querySelector(".mlTocuIn"),
        mlTocuFt = document.querySelector(".mlTocuFt"),
        mlTocuM = document.querySelector(".mlTocuM"),
        mlTotsp = document.querySelector(".mlTotsp"),
        mlTotbsp = document.querySelector(".mlTotbsp"),
        mlTogal = document.querySelector(".mlTogal"),
        mlToqt = document.querySelector(".mlToqt"),
        mlTopt = document.querySelector(".mlTopt"),
        mlToc = document.querySelector(".mlToc"),
        mlToOz = document.querySelector(".mlToOz")
    ]
};
const l = {
    title: document.querySelector("#lTitle"),
    list: document.querySelector("#l"),
    subTopic: [
        lToml = document.querySelector(".lToml"),
        lTocuIn = document.querySelector(".lTocuIn"),
        lTocuFt = document.querySelector(".lTocuFt"),
        lTocuM = document.querySelector(".lTocuM"),
        lTotsp = document.querySelector(".lTotsp"),
        lTotbsp = document.querySelector(".lTotbsp"),
        lTogal = document.querySelector(".lTogal"),
        lToqt = document.querySelector(".lToqt"),
        lTopt = document.querySelector(".lTopt"),
        lToc = document.querySelector(".lToc"),
        lToOz = document.querySelector(".lToOz"),
    ]
};
const cuIn = {
    title: document.querySelector("#cuInTitle"),
    list: document.querySelector("#cuIn"),
    subTopic: [
        cuInToml = document.querySelector(".cuInToml"),
        cuInTol = document.querySelector(".cuInTol"),
        cuInTocuFt = document.querySelector(".cuInTocuFt"),
        cuInTocuM = document.querySelector(".cuInTocuM"),
        cuInTotsp = document.querySelector(".cuInTotsp"),
        cuInTotbsp = document.querySelector(".cuInTotbsp"),
        cuInTogal = document.querySelector(".cuInTogal"),
        cuInToqt = document.querySelector(".cuInToqt"),
        cuInTopt = document.querySelector(".cuInTopt"),
        cuInToc = document.querySelector(".cuInToc"),
        cuInToOz = document.querySelector(".cuInToOz"),

    ]
};
const cuFt = {
    title: document.querySelector("#cuFtTitle"),
    list: document.querySelector("#cuFt"),
    subTopic: [
        cuFtToml = document.querySelector(".cuFtToml"),
        cuFtTol = document.querySelector(".cuFtTol"),
        cuFtTocuIn = document.querySelector(".cuFtTocuIn"),
        cuFtTocuM = document.querySelector(".cuFtTocuM"),
        cuFtTotsp = document.querySelector(".cuFtTotsp"),
        cuFtTotbsp = document.querySelector(".cuFtTotbsp"),
        cuFtTogal = document.querySelector(".cuFtTogal"),
        cuFtToqt = document.querySelector(".cuFtToqt"),
        cuFtTopt = document.querySelector(".cuFtTopt"),
        cuFtToc = document.querySelector(".cuFtToc"),
        cuFtToOz = document.querySelector(".cuFtToOz")
    ]
};
const cuM = {
    title: document.querySelector("#cuMTitle"),
    list: document.querySelector("#cuM"),
    subTopic: [
        cuMToml = document.querySelector(".cuMToml"),
        cuMTol = document.querySelector(".cuMTol"),
        cuMTocuIn = document.querySelector(".cuMTocuIn"),
        cuMTocuFt = document.querySelector(".cuMTocuFt"),
        cuMTotsp = document.querySelector(".cuMTotsp"),
        cuMTotbsp = document.querySelector(".cuMTotbsp"),
        cuMTogal = document.querySelector(".cuMTogal"),
        cuMToqt = document.querySelector(".cuMToqt"),
        cuMTopt = document.querySelector(".cuMTopt"),
        cuMToc = document.querySelector(".cuMToc"),
        cuMToOz = document.querySelector(".cuMToOz")
    ]
};
const tsp = {
    title: document.querySelector("#tspTitle"),
    list: document.querySelector("#tsp"),
    subTopic: [
        tspToml = document.querySelector(".tspToml"),
        tspTol = document.querySelector(".tspTol"),
        tspTocuIn = document.querySelector(".tspTocuIn"),
        tspTocuFt = document.querySelector(".tspTocuFt"),
        tspTocuM = document.querySelector(".tspTocuM"),
        tspTotbps = document.querySelector(".tspTotbsp"),
        tspTogal = document.querySelector(".tspTogal"),
        tspToqt = document.querySelector(".tspToqt"),
        tspTopt = document.querySelector(".tspTopt"),
        tspToc = document.querySelector(".tspToc"),
        tspToOz = document.querySelector(".tspToOz")

    ]
};
const tbsp = {
    title: document.querySelector("#tbspTitle"),
    list: document.querySelector("#tbsp"),
    subTopic: [
        tbspToml = document.querySelector(".tbspToml"),
        tbspTol = document.querySelector(".tbspTol"),
        tbspTocuIn = document.querySelector(".tbspTocuIn"),
        tbspTocuFt = document.querySelector(".tbspTocuFt"),
        tbspTocuM = document.querySelector(".tbspTocuM"),
        tbspTotsp = document.querySelector(".tbspTotsp"),
        tbspTogal = document.querySelector(".tbspTogal"),
        tbspToqt = document.querySelector(".tbspToqt"),
        tbspTopt = document.querySelector(".tbspTopt"),
        tbspToc = document.querySelector(".tbspToc"),
        tbspToOz = document.querySelector(".tbspToOz")
    ]
};
const gal = {
    title: document.querySelector("#galTitle"),
    list: document.querySelector("#gal"),
    subTopic: [
        galToml = document.querySelector(".galToml"),
        galTol = document.querySelector(".galTol"),
        galTocuIn = document.querySelector(".galTocuIn"),
        galTocuFt = document.querySelector(".galTocuFt"),
        galTocuM = document.querySelector(".galTocuM"),
        galTotsp = document.querySelector(".galTotsp"),
        galTotbsp = document.querySelector(".galTotbsp"),
        galToqt = document.querySelector(".galToqt"),
        galTopt = document.querySelector(".galTopt"),
        galToc = document.querySelector(".galToc"),
        galToOz = document.querySelector(".galToOz")
    ]
};
const qt = {
    title: document.querySelector("#qtTitle"),
    list: document.querySelector("#qt"),
    subTopic: [
        qtToml = document.querySelector(".qtToml"),
        qtTol = document.querySelector(".qtTol"),
        qtTocuIn = document.querySelector(".qtTocuIn"),
        qtTocuFt = document.querySelector(".qtTocuFt"),
        qtTocuM = document.querySelector(".qtTocuM"),
        qtTotsp = document.querySelector(".qtTotsp"),
        qtTotbsp = document.querySelector(".qtTotbsp"),
        qtTogal = document.querySelector(".qtTogal"),
        qtTopt = document.querySelector(".qtTopt"),
        qtToc = document.querySelector(".qtToc"),
        qtToOz = document.querySelector(".qtToOz")
    ]
};
const pt = {
    title: document.querySelector("#ptTitle"),
    list: document.querySelector("#pt"),
    subTopic: [
        ptToml = document.querySelector(".ptToml"),
        ptTol = document.querySelector(".ptTol"),
        ptTocuIn = document.querySelector(".ptTocuIn"),
        ptTocuFt = document.querySelector(".ptTocuFt"),
        ptTocuM = document.querySelector(".ptTocuM"),
        ptTotsp = document.querySelector(".ptTotsp"),
        ptTotbsp = document.querySelector(".ptTotbsp"),
        ptTogal = document.querySelector(".ptTogal"),
        ptToqt = document.querySelector(".ptToqt"),
        ptToc = document.querySelector(".ptToc"),
        ptToOz = document.querySelector(".ptToOz")
    ]
};
const c = {
    title: document.querySelector("#cTitle"),
    list: document.querySelector("#c"),
    subTopic: [
        cToml = document.querySelector(".cToml"),
        cTol = document.querySelector(".cTol"),
        cTocuIn = document.querySelector(".cTocuIn"),
        cTocuFt = document.querySelector(".cTocuFt"),
        cTocuM = document.querySelector(".cTocuM"),
        cTotsp = document.querySelector(".cTotsp"),
        cTotbsp = document.querySelector(".cTotbsp"),
        cTogal = document.querySelector(".cTogal"),
        cToqt = document.querySelector(".cToqt"),
        cTopt = document.querySelector(".cTopt"),
        cToOz = document.querySelector(".cToOz")
    ]
};
const Oz = {
    title: document.querySelector("#ozTitle"),
    list: document.querySelector("#Oz"),
    subTopic: [
        OzToml = document.querySelector(".OzToml"),
        OzTol = document.querySelector(".OzTol"),
        OzTocuIn = document.querySelector(".OzTocuIn"),
        OzTocuFt = document.querySelector(".OzTocuFt"),
        OzTocuM = document.querySelector(".OzTocuM"),
        OzTotsp = document.querySelector(".OzTotsp"),
        OzTotbsp = document.querySelector(".OzTotbsp"),
        OzTogal = document.querySelector(".OzTogal"),
        OzToqt = document.querySelector(".OzToqt"),
        OzTopt = document.querySelector(".OzTopt"),
        OzToc = document.querySelector(".OzToc"),
    ]
};
const volume = {
    title: document.querySelector("#volumeTitle"),
    list: document.querySelector(".volume"),
    arr: [ml, l, cuIn, cuFt, cuM, tsp, tbsp, gal, qt, pt, c, Oz]
};
// Volume sub done


const Cel = {
    title: document.querySelector("#CTitle"),
    list: document.querySelector("#C"),
    subTopic: [
        CelToFah = document.querySelector(".CToF"),
        CelToKel = document.querySelector(".CToK")

    ]
};
const Fah = {
    title: document.querySelector("#fTitle"),
    list: document.querySelector("#F"),
    subTopic: [
        FahToCel = document.querySelector(".FToC"),
        FahToKel = document.querySelector(".FToK")
    ]
};
const Kel = {
    title: document.querySelector("#kTitle"),
    list: document.querySelector("#K"),
    subTopic: [
        KelToCel = document.querySelector(".KToC"),
        KelToFah = document.querySelector(".KToF")
    ]
};
const temperature = {
    title: document.querySelector("#temperatureTitle"),
    list: document.querySelector(".temperature"),
    arr: [Cel, Fah, Kel]
};
// Temperature sub done


const mps = {
    title: document.querySelector("#mpsTitle"),
    list: document.querySelector("#mps"),
    subTopic: [
        mpsToftps = document.querySelector(".mpsToftps"),
        mpsTokmphr = document.querySelector(".mpsTokmphr"),
        mpsTomiphr = document.querySelector(".mpsTomiphr"),
        mpsTokt = document.querySelector(".mpsTokt")
    ]
};
const ftps = {
    title: document.querySelector("#ftpsTitle"),
    list: document.querySelector("#ftps"),
    subTopic: [
        ftpsTomps = document.querySelector(".ftpsTomps"),
        ftpsTokmphr = document.querySelector(".ftpsTokmphr"),
        ftpsTomiphr = document.querySelector(".ftpsTomiphr"),
        ftpsTokt = document.querySelector(".ftpsTokt")
    ]
};
const kmphr = {
    title: document.querySelector("#kmphrTitle"),
    list: document.querySelector("#kmphr"),
    subTopic: [
        kmphrTomps = document.querySelector(".kmphrTomps"),
        kmphrToftps = document.querySelector(".kmphrToftps"),
        kmphrTomiphr = document.querySelector(".kmphrTomiphr"),
        kmphrTokt = document.querySelector(".kmphrTokt")
    ]
};
const miphr = {
    title: document.querySelector("#miphrTitle"),
    list: document.querySelector("#miphr"),
    subTopic: [
        miphrTomps = document.querySelector(".miphrTomps"),
        miphrToftps = document.querySelector(".miphrToftps"),
        miphrTokmphr = document.querySelector(".miphrTokmphr"),
        miphrTokt = document.querySelector(".miphrTokt")
    ]
};
const kt = {
    title: document.querySelector("#ktTitle"),
    list: document.querySelector("#kt"),
    subTopic: [
        ktTomps = document.querySelector(".ktTomps"),
        ktToftps = document.querySelector(".ktToftps"),
        ktTokmphr = document.querySelector(".ktTokmphr"),
        ktTomiphr = document.querySelector(".ktTomiphr")
    ]
};
const speed = {
    title: document.querySelector("#speedTitle"),
    list: document.querySelector(".speed"),
    arr: [mps, ftps, kmphr, miphr, kt]
};
// Speed sub done


const deg = {
    title: document.querySelector("#degTitle"),
    list: document.querySelector("#deg"),
    subTopic: [
        degToRad = document.querySelector(".degTorad")
    ]
};
const rad = {
    title: document.querySelector("#radTitle"),
    list: document.querySelector("#rad"),
    subTopic: [
        RadToDeg = document.querySelector(".radTodeg")
    ]
};
const angle = {
    title: document.querySelector("#angleTitle"),
    list: document.querySelector(".angle"),
    arr: [deg, rad]
};
// Angle sub done


const Newton = {
    title: document.querySelector("#nTitle"),
    list: document.querySelector("#N"),
    subTopic: [
        NewtonTokN = document.querySelector(".NTokN"),
        NewtonTolbf = document.querySelector(".NTolbf")
    ]
};
const kN = {
    title: document.querySelector("#kNTitle"),
    list: document.querySelector("#kN"),
    subTopic: [
        kNToNewton = document.querySelector(".kNToN"),
        kNTolbf = document.querySelector(".kNTolbf")
    ]
};
const lbf = {
    title: document.querySelector("#lbfTitle"),
    list: document.querySelector("#lbf"),
    subTopic: [
        lbfToNewton = document.querySelector(".lbfToN"),
        lbfTokN = document.querySelector(".lbfTokN")
    ]
};
const force = {
    title: document.querySelector("#forceTitle"),
    list: document.querySelector(".force"),
    arr: [Newton, kN, lbf]
};
// Force sub done


const radps = {
    title: document.querySelector("#radpsTitle"),
    list: document.querySelector("#radps"),
    subTopic: [
        radpsTodegps = document.querySelector(".radpsTodps"),
        radpsToradpmin = document.querySelector(".radpsToradpmin"),
        radpsTodegpmin = document.querySelector(".radpsTodpmin"),
        radpsTorps = document.querySelector(".radpsTorps"),
        radpsTorpmin = document.querySelector(".radpsTorpmin")
    ]
};
const degps = {
    title: document.querySelector("#degpsTitle"),
    list: document.querySelector("#dps"),
    subTopic: [
        degpsToradps = document.querySelector(".dpsToradps"),
        degpsToradpmin = document.querySelector(".dpsToradpmin"),
        degpsTodegpmin = document.querySelector(".dpsTodpmin"),
        degpsTorps = document.querySelector(".dpsTorps"),
        degpsTorpmin = document.querySelector(".dpsTorpmin")
    ]
};
const radpmin = {
    title: document.querySelector("#radpminTitle"),
    list: document.querySelector("#radpmin"),
    subTopic: [
        radpminToradps = document.querySelector(".radpminToradps"),
        radpminTodegps = document.querySelector(".radpminTodps"),
        radpminTodegpmin = document.querySelector(".radpminTodpmin"),
        radpminTorps = document.querySelector(".radpminTorps"),
        radpminTorpmin = document.querySelector(".radpminTorpmin")
    ]
};
const degpmin = {
    title: document.querySelector("#degpminTitle"),
    list: document.querySelector("#dpmin"),
    subTopic: [
        degpminToradps = document.querySelector(".dpminToradps"),
        degpminTodegps = document.querySelector(".dpminTodps"),
        degpminToradpmin = document.querySelector(".dpminToradpmin"),
        degpminTorps = document.querySelector(".dpminTorps"),
        degpminTorpmin = document.querySelector(".dpminTorpmin")
    ]
};
const rps = {
    title: document.querySelector("#rpsTitle"),
    list: document.querySelector("#rps"),
    subTopic: [
        rpsToradps = document.querySelector(".rpsToradps"),
        rpsTodegps = document.querySelector(".rpsTodps"),
        rpsToradpmin = document.querySelector(".rpsToradpmin"),
        rpsTodegpmin = document.querySelector(".rpsTodpmin"),
        rpsTorpmin = document.querySelector(".rpsTorpmin")
    ]
};
const rpmin = {
    title: document.querySelector("#rpminTitle"),
    list: document.querySelector("#rpmin"),
    subTopic: [
        rpminToradps = document.querySelector(".rpminToradps"),
        rpminTodegps = document.querySelector(".rpminTodps"),
        rpminToradpmin = document.querySelector(".rpminToradpmin"),
        rpminTodegpmin = document.querySelector(".rpminTodpmin"),
        rpminTorps = document.querySelector(".rpminTorps")
    ]
};
const angularVelocity = {
    title: document.querySelector("#angularVelocityTitle"),
    list: document.querySelector(".angularVelocity"),
    arr: [radps, degps, radpmin, degpmin, rps, rpmin]
};
// Angular velocity sub done


const Joule = {
    title: document.querySelector("#jTitle"),
    list: document.querySelector("#J"),
    subTopic: [
        JouleTokcal = document.querySelector(".JTokcal"),
        JouleTokJ = document.querySelector(".JTokJ"),
        JouleToWh = document.querySelector(".JToWh"),
        JouleTokWh = document.querySelector(".JTokWh")

    ]
};
const kcal = {
    title: document.querySelector("#kcalTitle"),
    list: document.querySelector("#kcal"),
    subTopic: [
        kcalToJoule = document.querySelector(".kcalToJ"),
        kcalTokJ = document.querySelector(".kcalTokJ"),
        kcalToWh = document.querySelector(".kcalToWh"),
        kcalTokWh = document.querySelector(".kcalTokWh")
    ]
};
const kJ = {
    title: document.querySelector("#kJTitle"),
    list: document.querySelector("#kJ"),
    subTopic: [
        kJToJoule = document.querySelector(".kJToJ"),
        kJTokcal = document.querySelector(".kJTokcal"),
        kJToWh = document.querySelector(".kJToWh"),
        kJTokWh = document.querySelector(".kJTokWh")
    ]
};
const Wh = {
    title: document.querySelector("#WhTitle"),
    list: document.querySelector("#Wh"),
    subTopic: [
        WhToJoule = document.querySelector(".WhToJ"),
        WhTokcal = document.querySelector(".WhTokcal"),
        WhTokJ = document.querySelector(".WhTokJ"),
        WhTokWh = document.querySelector(".WhTokWh")
    ]
};
const kWh = {
    title: document.querySelector("#kWhTitle"),
    list: document.querySelector("#kWh"),
    subTopic: [
        kWhToJoule = document.querySelector(".kWhToJ"),
        kWhTokcal = document.querySelector(".kWhTokcal"),
        kWhTokJ = document.querySelector(".kWhTokJ"),
        kWhToWh = document.querySelector(".kWhToWh")
    ]
};
const energy = {
    title: document.querySelector("#energyTitle"),
    list: document.querySelector(".energy"),
    arr: [Joule, kcal, kJ, Wh, kWh]
};
// Energy sub done


const pa = {
    title: document.querySelector("#paTitle"),
    list: document.querySelector("#pa"),
    subTopic: [
        paToba = document.querySelector(".paToba"),
        paTopsi = document.querySelector(".paTopsi"),
        paTotorr = document.querySelector(".paTotorr")
    ]
};
const ba = {
    title: document.querySelector("#baTitle"),
    list: document.querySelector("#ba"),
    subTopic: [
        baTopa = document.querySelector(".baTopa"),
        baTopsi = document.querySelector(".baTopsi"),
        baTotorr = document.querySelector(".baTotorr")
    ]
};
const psi = {
    title: document.querySelector("#psiTitle"),
    list: document.querySelector("#psi"),
    subTopic: [
        psiTopa = document.querySelector(".psiTopa"),
        psiToba = document.querySelector(".psiToba"),
        psiTotorr = document.querySelector(".psiTotorr")

    ]
};
const torr = {
    title: document.querySelector("#torrTitle"),
    list: document.querySelector("#torr"),
    subTopic: [
        torrTopa = document.querySelector(".torrTopa"),
        torrToba = document.querySelector(".torrToba"),
        torrTopsi = document.querySelector(".torrTopsi")
    ]
};
const pressure = {
    title: document.querySelector("#pressureTitle"),
    list: document.querySelector(".pressure"),
    arr: [pa, ba, psi, torr]
};
// Pressure sub done


const Hz = {
    title: document.querySelector("#hzTitle"),
    list: document.querySelector("#Hz"),
    subTopic: [
        HzTokHz = document.querySelector(".HzTokHz"),
        HzToMHz = document.querySelector(".HzToMHz"),
        HzToGHz = document.querySelector(".HzToGHz")
    ]
};
const kHz = {
    title: document.querySelector("#khzTitle"),
    list: document.querySelector("#kHz"),
    subTopic: [
        kHzToHz = document.querySelector(".kHzToHz"),
        kHzToMHz = document.querySelector(".kHzToMHz"),
        kHzToGHz = document.querySelector(".kHzToGHz")
    ]
};
const MHz = {
    title: document.querySelector("#mhzTitle"),
    list: document.querySelector("#MHz"),
    subTopic: [
        MHzToHz = document.querySelector(".MHzToHz"),
        MHzTokHz = document.querySelector(".MHzTokHz"),
        MHzToGHz = document.querySelector(".MHzToGHz")
    ]
};
const GHz = {
    title: document.querySelector("#ghzTitle"),
    list: document.querySelector("#GHz"),
    subTopic: [
        GHzToHz = document.querySelector(".GHzToHz"),
        GHzTokHz = document.querySelector(".GHzTokHz"),
        GHzToMHz = document.querySelector(".GHzToMHz")
    ]
};
const frequency = {
    title: document.querySelector("#frequencyTitle"),
    list: document.querySelector(".frequency"),
    arr: [Hz, kHz, MHz, GHz]
};
// Frequency sub done


const Byte = {
    title: document.querySelector("#BTitle"),
    list: document.querySelector("#B"),
    subTopic: [
        ByteTobit = document.querySelector(".BTobit"),
        ByteToKB = document.querySelector(".BToKB"),
        ByteToMB = document.querySelector(".BToMB"),
        ByteToGB = document.querySelector(".BToGB"),
        ByteToTB = document.querySelector(".BToTB"),
        ByteToPB = document.querySelector(".BToPB")
    ]
};
const bit = {
    title: document.querySelector("#bitTitle"),
    list: document.querySelector("#bit"),
    subTopic: [
        bitToByte = document.querySelector(".bitToB"),
        bitToKb = document.querySelector(".bitToKB"),
        bitToMb = document.querySelector(".bitToMB"),
        bitToGb = document.querySelector(".bitToGB"),
        bitToTb = document.querySelector(".bitToTB"),
        bitToPb = document.querySelector(".bitToPB")
    ]
};
const Kb = {
    title: document.querySelector("#KBTitle"),
    list: document.querySelector("#KB"),
    subTopic: [
        KbToByte = document.querySelector(".KBToB"),
        KbTobit = document.querySelector(".KBTobit"),
        KbToMb = document.querySelector(".KBToMB"),
        KbToGb = document.querySelector(".KBToGB"),
        KbToTb = document.querySelector(".KBToTB"),
        KbToPb = document.querySelector(".KBToPB")
    ]
};
const Mb = {
    title: document.querySelector("#MBTitle"),
    list: document.querySelector("#MB"),
    subTopic: [
        MbToByte = document.querySelector(".MBToB"),
        MbTobit = document.querySelector(".MBTobit"),
        MbToKb = document.querySelector(".MBToKB"),
        MbToGb = document.querySelector(".MBToGB"),
        MbToTb = document.querySelector(".MBToTB"),
        MbToPb = document.querySelector(".MBToPB")
    ]
};
const Gb = {
    title: document.querySelector("#GBTitle"),
    list: document.querySelector("#GB"),
    subTopic: [
        GbToByte = document.querySelector(".GBToB"),
        GbTobit = document.querySelector(".GBTobit"),
        GbToKb = document.querySelector(".GBToKB"),
        GbToMb = document.querySelector(".GBToMB"),
        GbToTb = document.querySelector(".GBToTB"),
        GbToPb = document.querySelector(".GBToPB")
    ]

};
const Tb = {
    title: document.querySelector("#TBTitle"),
    list: document.querySelector("#TB"),
    subTopic: [
        TbToByte = document.querySelector(".TBToB"),
        TbTobit = document.querySelector(".TBTobit"),
        TbToKb = document.querySelector(".TBToKB"),
        TbToMb = document.querySelector(".TBToMB"),
        TbToGb = document.querySelector(".TBToGB"),
        TbToPb = document.querySelector(".TBToPB")
    ]
};
const Pb = {
    title: document.querySelector("#PBTitle"),
    list: document.querySelector("#PB"),
    subTopic: [
        PbToByte = document.querySelector(".PBToB"),
        PbTobit = document.querySelector(".PBTobit"),
        PbToKb = document.querySelector(".PBToKB"),
        PbToMb = document.querySelector(".PBToMB"),
        PbToGb = document.querySelector(".PBToGB"),
        PbToTb = document.querySelector(".PBToTB")
    ]
};
const dataStorage = {
    title: document.querySelector("#dataStorageTitle"),
    list: document.querySelector(".dataStorage"),
    arr: [Byte, bit, Kb, Mb, Gb, Tb, Pb]
};
// Data Storage sub done


const bps = {
    title: document.querySelector("#bpsTitle"),
    list: document.querySelector("#bps"),
    subTopic: [
        bpsToKBps = document.querySelector(".bpsToKBps"),
        bpsToMBps = document.querySelector(".bpsToMBps"),
        bpsToGBps = document.querySelector(".bpsToGBps"),
        bpsToTBps = document.querySelector(".bpsToTBps")
    ]
};
const KBps = {
    title: document.querySelector("#KBpsTitle"),
    list: document.querySelector("#KBps"),
    subTopic: [
        KBpsTobps = document.querySelector(".KBpsTobps"),
        KBpsToMBps = document.querySelector(".KBpsToMBps"),
        KBpsToGBps = document.querySelector(".KBpsToGBps"),
        KBpsToTBps = document.querySelector(".KBpsToTBps")
    ]
};
const MBps = {
    title: document.querySelector("#MBpsTitle"),
    list: document.querySelector("#MBps"),
    subTopic: [
        MBpsTobps = document.querySelector(".MBpsTobps"),
        MBpsToKBps = document.querySelector(".MBpsToKBps"),
        MBpsToGBps = document.querySelector(".MBpsToGBps"),
        MBpsToTBps = document.querySelector(".MBpsToTBps")
    ]
};
const GBps = {
    title: document.querySelector("#GBpsTitle"),
    list: document.querySelector("#GBps"),
    subTopic: [
        GBpsTobps = document.querySelector(".GBpsTobps"),
        GBpsToKBps = document.querySelector(".GBpsToKBps"),
        GBpsToMBps = document.querySelector(".GBpsToMBps"),
        GBpsToTBps = document.querySelector(".GBpsToTBps")
    ]
};
const TBps = {
    title: document.querySelector("#TBpsTitle"),
    list: document.querySelector("#TBps"),
    subTopic: [
        TBpsTobps = document.querySelector(".TBpsTobps"),
        TBpsToKBps = document.querySelector(".TBpsToKBps"),
        TBpsToMBps = document.querySelector(".TBpsToMBps"),
        TBpsToGBps = document.querySelector(".TBpsToGBps")
    ]
};
const dataTransferRate = {
    title: document.querySelector("#dataTransferRateTitle"),
    list: document.querySelector(".dataTransferRate"),
    arr: [bps, KBps, MBps, GBps, TBps]
};
const beginScreen = document.querySelector("#beginScreen");
const wrapperDiv = document.querySelector("#wrapper3");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const convertBtn = document.querySelector("#convertBtn");
const clear = document.querySelector("#clear");
const heading = document.querySelector("#name");
const formulaP = document.querySelector("#formula");
// let historyArr = [];
const listUl = document.querySelector(".ulList");
const historyList = document.querySelector("#historyList");
// historyList.appendChild(listOl);
// import data from './conversions.js';
// import conversion from './conversions.json';
// console.log(data)
// const data = JSON.parse(conversions);
heading.addEventListener("click", function () {
    beginScreen.style.display = "block";
    wrapperDiv.style.display = "none";
})

// Data Transfer Rate sub done
// let lenInput = document.querySelector(".searchBar");
// let filter = lenInput.value.toUpperCase();
// let ul = document.querySelector(".length");
// let li = ul.children;
// for (let i = 1; i < li.length; i++) {
//     let a = li[i].getElementsByTagName("a");
//     for (let j = 0; j < a.length; j++) {
//         let anchor = a[j];
//         if (anchor.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             anchor[j].style.display = "";
//         }
//         else {
//             anchor[j].style.display = "none"
//         }
//     }
// }
// lenInput.addEventListener("keyup", function () {
//     console.log("search")
//     let filter = lenInput.value.toUpperCase();
//     let ul = document.querySelector(".length");
//     let li = ul.getElementsByTagName("li");
//     for (let i = 0; i < li.length; i++) {
//         let a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         }
//         else {
//             li[i].style.display = "none"
//         }
//     }
// })
let conversion = {
    cmTom: 0.01,
    cmTokm: 0.00001,
    cmToft: 0.032808,
    cmToin: 0.393701,
    cmToyd: 0.0109361,
    cmTomi: 0.0000062137,
    cmTomm: 10,
    mTocm: 100,
    mTokm: 0.001,
    mToft: 3.28084,
    mToin: 39.3701,
    mToyd: 1.09361,
    mTomi: 0.000621371,
    mTomm: 1000,
    kmTocm: 100000,
    kmTom: 1000,
    kmToft: 3280.84,
    kmToin: 39370.1,
    kmToyd: 1093.61,
    kmTomi: 0.621371,
    kmTomm: 1000000,
    ftTocm: 30.48,
    ftTom: 0.3048,
    ftTokm: 0.0003048,
    ftToin: 12,
    ftToyd: 0.333333,
    ftTomi: 0.000189394,
    ftTomm: 304.8,
    inTocm: 2.54,
    inTom: 0.0254,
    inTokm: 0.0000254,
    inToft: 0.0833,
    inToyd: 0.0277778,
    inTomi: 0.000015783,
    inTomm: 25.4,
    ydTocm: 91.44,
    ydTom: 0.9144,
    ydTokm: 0.0009144,
    ydToft: 3,
    ydToin: 36,
    ydTomi: 0.000568182,
    ydTomm: 914.4,
    miTocm: 160934,
    miTom: 1609.34,
    miTokm: 1.60934,
    miToft: 5280,
    miToin: 63360,
    miToyd: 1760,
    miTomm: 1609000,
    mmTocm: 0.1,
    mmTom: 0.001,
    mmTokm: 0.000001,
    mmToft: 0.00328084,
    mmToin: 0.0393701,
    mmToyd: 0.00109361,
    mmTomi: 0.00000062137,
    mgTog: 0.001,
    mgTokg: 0.000001,
    mgTooz: 0.000035274,

};
let topicArray = [length1, weight, time, area, volume, temperature, speed, angle, force, angularVelocity, energy, pressure, frequency, dataStorage, dataTransferRate];

// let subTopicArray = []
console.log("before for loops");
for (let i = 0; i < topicArray.length; i++) {
    addEvent(topicArray[i]);
    console.log(topicArray[i]);
    for (let k = 0; k < topicArray[i].arr.length; k++) {
        addEvent(topicArray[i].arr[k]);
        console.log(topicArray[i].arr[k].subTopic);
        subEvent(topicArray[i].arr[k].subTopic);
    }

    // topicArray[i].title.addEventListener("click", function () {
    //     topicArray[i].list.classList.toggle("show");//when closing the topic, all its subtopics should also close.
    //     console.log("title works")
    //     for (let k = 0; k < topicArray[i].arr.length; k++) {
    //         topicArray[i].arr[k].subTitle.addEventListener("click", function () {
    //             topicArray[i].arr[k].inTable.classList.toggle("show");
    // //         //         for(let m = 0; m < objArray[i].arr.length; m++ ){
    // //         //             if(m === i){
    // //         //                 continue
    // //         //             }
    // //         //             else if (objArray[i].arr[m].inTable.classList.contains("show")){
    // //         //                 objArray[i].arr[m].inTable.classList.remove("show");
    // //         //                 console.log('work!')
    // //         //             }
    // //         //         }
    //     });
    // } //other outer topics are not closing
    // for (let j = 0; j < topicArray.length; j++) {
    //     if (j === i) {
    //         continue;
    //     }
    //     else if (topicArray[j].list.classList.contains("show")) {
    //         topicArray[j].list.classList.remove("show");
    //     }
    // }
    // if (objArray[i].list.style.display === "none") {
    //     objArray[i].list.classList.add("show");
    // }
    // else {
    //     objArray[i].list.classList.add("hide") ;
    // }
    // })
    // window.addEventListener("change", function(event){
    //     if(!event.target.matches(objArray[i].title)){
    //         objArray[i].list.classList.toggle("show");
    //     }
    // })
}
// function clickSub(prop){
//     changeScreen();
//     changeLabel(prop);
// }
function subEvent(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", function () {
            // console.log(arr[i]);
            changeScreen();
            clearInputs();
            changeLabel(arr[i]);
            console.log("all subevent added!!");
            // convertClick(arr[i]);

        })
    }
    // for(const prop in obj){
    //     console.log(obj[prop]);
    //     obj[prop].addEventListener("click", clickSub(prop));
    // }
}

function changeScreen() {
    beginScreen.style.display = "none"
    wrapperDiv.style.display = "block";
}
function changeLabel(str) {
    let className = str.className;
    label1.innerText = className.slice(0, className.indexOf("To"));
    label2.innerText = className.slice(className.indexOf("To") + 2);
    formulaP.innerText = "1 " + label1.innerText + " = " + conversion[className] + "" + label2.innerText;
    // formulaP.innerText = `1 ${label1.innerText} = ${conversion[str.className].toString(), label2.innerText}`;
    changeInput(className);
    // convertClick(className);
}
function changeInput(className) {
    input1.addEventListener("keyup", function (event) {
        input2.value = Math.round((parseFloat(input1.value) * conversion[className]) * 100000) / 100000;
        let pastConv = input1.value + label1.innerText + " = " + input2.value + label2.innerText;
        event.preventDefault();
        if ((event.key !== "Backspace" && event.key !== "Delete")) {
            addToHistory(pastConv);
        }
        // input1.addEventListener("change", addToHistory(pastConv));
        // setTimeout(() => {
        //     addToHistory(pastConv);
        //     console.log(pastConv);
        // }, 2000)
        // historyArr.push(pastConv);
        // console.log(pastConv);
    });
    input2.addEventListener("keyup", function (event) {
        input1.value = parseFloat(input2.value) / conversion[className];
        pastConv = input2.value + label2.innerText + " = " + input1.value + label1.innerText;
        event.preventDefault();
        if ((event.key !== "Backspace" && event.key !== "Delete")) {
            addToHistory(pastConv);
        }
        // input2.addEventListener("change", addToHistory(pastConv));
        // setTimeout(() => {
        //     addToHistory(pastConv);
        //     console.log(pastConv);
        // })
        // historyArr.push(pastConv);
        // console.log(pastConv)
    })

}
function addToHistory(pastConv) {
    console.log("change worked!!");
    if (input1.value !== "" && input2.value !== "") {
        let listItem = document.createElement("LI");
        listItem.innerText = pastConv;
        listUl.append(listItem);
        // console.log("UL works!")

        // console.log(historyArr.push(pastConv));
    }

}
// function convertClick(str) {
//     // let className = str.className;
//     convertBtn.addEventListener("click", function () {
//         if (input1.value === "" && input2.value === "") {
//             alert("Please Enter a Number");
//         }
//         else {
//             convert(str);
//         }
//     })
// }
// function convert(className) {
//     if (input2.value === "") {
//         input2.value = parseFloat(input1.value) * conversion[className];
//     }
//     else if (input1.value === "") {
//         input1.value = parseFloat(input2.value) / conversion[className];
//     }
//     else {
//         changeInput(className);
//     }
// }
clear.addEventListener("click", clearInputs());
function clearInputs() {
    input1.value = "";
    input2.value = "";
    
}
function addEvent(obj) {
    // console.log(obj);
    obj.title.addEventListener("click", function () {

        // subEvent(obj.subTopic);
        toggleTopic(obj);
        if (obj.title.nextElementSibling.id === "") {
            hideOtherTopics(obj);
        }
        else {
            hideSubTopics(obj);
        }


    })
}
function toggleTopic(obj) {
    obj.list.classList.toggle("show");
    // subEvent(obj.subTopic);
};
function hideOtherTopics(obj) {
    for (let j = 0; j < topicArray.length; j++) {
        if (topicArray[j] === obj) {
            continue;
        }
        else if (topicArray[j].list.classList.contains("show")) {
            topicArray[j].list.classList.remove("show");
            for (let k = 0; k < topicArray[j].arr.length; k++) {
                if (topicArray[j].arr[k].list.classList.contains("show")) {
                    topicArray[j].arr[k].list.classList.remove("show")
                    console.log("hides all subtopics!!")
                }
            }
        }
    }
}
function hideSubTopics(obj) {
    for (let i = 0; i < topicArray.length; i++) {
        for (let j = 0; j < topicArray[i].arr.length; j++) {
            if (topicArray[i].arr[j] === obj) {
                continue;
            }
            else if (topicArray[i].arr[j].list.classList.contains("show")) {
                topicArray[i].arr[j].list.classList.remove("show")
            }
        }
    }
}

// for(let i = 0; i < objArray.length; i++) {
//     for (let k = 0; k < objArray[i].arr.length; k++) {
//         objArray[i].arr[k].subTitle.addEventListener("click", function () {
//             objArray[i].arr[k].inTable.classList.toggle("show");
//             for(let m = 0; m < objArray[i].arr.length; m++ ){
//                 if(m === i){
//                     continue
//                 }
//                 else if (objArray[i].arr[m].inTable.classList.contains("show")){
//                     objArray[i].arr[m].inTable.classList.remove("show");
//                     console.log('work!')
//                 }
//             }
//         });
//     }
// }
// length.title.addEventListener("click", function () {
//     if (length.list.style.display === "none") {
//         length.list.style.display = "block";
//     }
//     else {
//         length.list.style.display = "none";
//     }
// })
