var _0x2233 = ["\x2E\x63\x61\x6E\x76\x61\x73", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x68\x65\x69\x67\x68\x74", "\x77\x69\x64\x74\x68", "\x78", "\x79", "\x78\x53\x70\x65\x65\x64", "\x79\x53\x70\x65\x65\x64", "\x74\x6F\x74\x61\x6C", "\x4F\x62\x6B\x74\x4F\x67\x6E", "\x64\x72\x61\x77", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x23\x30\x30\x66\x66\x66\x66", "\x6C\x65\x6E\x67\x74\x68", "\x66\x69\x6C\x6C\x52\x65\x63\x74", "\x75\x70\x64\x61\x74\x65", "\x63\x64", "\x55\x70", "\x44\x6F\x77\x6E", "\x4C\x65\x66\x74", "\x52\x69\x67\x68\x74", "\x6A\x64\x7A", "\x63\x68\x6B\x43\x6C\x6C\x73\x6E", "\x70\x63\x6B\x4C\x63\x74", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x23\x66\x66\x30\x30\x30\x30", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74", "\x2E\x73\x63\x6F\x72\x65", "\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C", "\x6B\x65\x79\x64\x6F\x77\x6E", "\x41\x72\x72\x6F\x77", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x6B\x65\x79", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];
const canvas = document[_0x2233[1]](_0x2233[0]);
const ctx = canvas[_0x2233[3]](_0x2233[2]);
const scale = 10;
const wrs = canvas[_0x2233[4]] / scale;
const klm = canvas[_0x2233[5]] / scale;
var ObktWz;

function ObktWz() {
    this[_0x2233[6]] = 0;
    this[_0x2233[7]] = 0;
    this[_0x2233[8]] = scale * 1;
    this[_0x2233[9]] = 0;
    this[_0x2233[10]] = 0;
    this[_0x2233[11]] = [];
    this[_0x2233[12]] = function() {
        ctx[_0x2233[13]] = _0x2233[14];
        for (let _0x67f2x7 = 0; _0x67f2x7 < this[_0x2233[11]][_0x2233[15]]; _0x67f2x7++) {
            ctx[_0x2233[16]](this[_0x2233[11]][_0x67f2x7][_0x2233[6]], this[_0x2233[11]][_0x67f2x7][_0x2233[7]], scale, scale)
        };
        ctx[_0x2233[16]](this[_0x2233[6]], this[_0x2233[7]], scale, scale)
    };
    this[_0x2233[17]] = function() {
        for (let _0x67f2x7 = 0; _0x67f2x7 < this[_0x2233[11]][_0x2233[15]] - 1; _0x67f2x7++) {
            this[_0x2233[11]][_0x67f2x7] = this[_0x2233[11]][_0x67f2x7 + 1]
        };
        this[_0x2233[11]][this[_0x2233[10]] - 1] = {
            x: this[_0x2233[6]],
            y: this[_0x2233[7]]
        };
        this[_0x2233[6]] += this[_0x2233[8]];
        this[_0x2233[7]] += this[_0x2233[9]];
        if (this[_0x2233[6]] > canvas[_0x2233[5]]) {
            this[_0x2233[6]] = 0
        };
        if (this[_0x2233[7]] > canvas[_0x2233[4]]) {
            this[_0x2233[7]] = 0
        };
        if (this[_0x2233[6]] < 0) {
            this[_0x2233[6]] = canvas[_0x2233[5]]
        };
        if (this[_0x2233[7]] < 0) {
            this[_0x2233[7]] = canvas[_0x2233[4]]
        }
    };
    this[_0x2233[18]] = function(_0x67f2x8) {
        switch (_0x67f2x8) {
            case _0x2233[19]:
                this[_0x2233[8]] = 0;
                this[_0x2233[9]] = -scale * 1;
                break;
            case _0x2233[20]:
                this[_0x2233[8]] = 0;
                this[_0x2233[9]] = scale * 1;
                break;
            case _0x2233[21]:
                this[_0x2233[8]] = -scale * 1;
                this[_0x2233[9]] = 0;
                break;
            case _0x2233[22]:
                this[_0x2233[8]] = scale * 1;
                this[_0x2233[9]] = 0;
                break
        }
    };
    this[_0x2233[23]] = function(ObktOwc) {
        if (this[_0x2233[6]] === ObktOwc[_0x2233[6]] && this[_0x2233[7]] === ObktOwc[_0x2233[7]]) {
            this[_0x2233[10]]++;
            return true
        };
        return false
    };
    this[_0x2233[24]] = function() {
        for (var _0x67f2x7 = 0; _0x67f2x7 < this[_0x2233[11]][_0x2233[15]]; _0x67f2x7++) {
            if (this[_0x2233[6]] === this[_0x2233[11]][_0x67f2x7][_0x2233[6]] && this[_0x2233[7]] === this[_0x2233[11]][_0x67f2x7][_0x2233[7]]) {
                this[_0x2233[10]] = 0;
                this[_0x2233[11]] = []
            }
        }
    }
}

function ObktOwc() {
    this[_0x2233[6]];
    this[_0x2233[7]];
    this[_0x2233[25]] = function() {
        this[_0x2233[6]] = (Math[_0x2233[27]](Math[_0x2233[26]]() * klm - 1) + 1) * scale;
        this[_0x2233[7]] = (Math[_0x2233[27]](Math[_0x2233[26]]() * wrs - 1) + 1) * scale
    };
    this[_0x2233[12]] = function() {
        ctx[_0x2233[13]] = _0x2233[28];
        ctx[_0x2233[16]](this[_0x2233[6]], this[_0x2233[7]], scale, scale)
    }
}(function setup() {
    ObktWz = new ObktWz();
    ObktOwc = new ObktOwc();
    ObktOwc[_0x2233[25]]();
    window[_0x2233[32]](() => {
        ctx[_0x2233[29]](0, 0, canvas[_0x2233[5]], canvas[_0x2233[4]]);
        ObktOwc[_0x2233[12]]();
        ObktWz[_0x2233[17]]();
        ObktWz[_0x2233[12]]();
        if (ObktWz[_0x2233[23]](ObktOwc)) {
            ObktOwc[_0x2233[25]]()
        };
        ObktWz[_0x2233[24]]();
        document[_0x2233[1]](_0x2233[31])[_0x2233[30]] = ObktWz[_0x2233[10]]
    }, 250)
}());
window[_0x2233[38]](_0x2233[33], ((_0x67f2xb) => {
    const _0x67f2x8 = _0x67f2xb[_0x2233[37]][_0x2233[36]](_0x2233[34], _0x2233[35]);
    ObktWz[_0x2233[18]](_0x67f2x8)
}))