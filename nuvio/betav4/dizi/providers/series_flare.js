/**
 * AETHELON ENTERPRISE EDGE PROTOCOL - BETA V4
 * Node: Aethelon Series Flare [TV]
 * Architecture: Hardened Resolver Proxy
 * (C) 2026 Aethelon TV Network (https://tv.aethelondev.workers.dev)
 */
"use strict";

var RESOLVER_API = "https://tv.aethelondev.workers.dev/api/v3/nuvio/streams";
var PROVIDER_CODE = "series_flare";
var SALT = "Aethelon_Ultra_Secure_Salt_2026_x99";

function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value >>> amount) | (value << (32 - amount));
    }
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = "length";
    var i, j;
    var result = "";
    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;
    var hash = [], k = [];
    var primeCounter = 0;
    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
            }
            hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
            k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
        }
    }
    ascii += "\x80";
    while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00";
    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j >> 8) return "";
        words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;
    for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16);
        var oldHash = hash;
        hash = hash.slice(0, 8);
        for (i = 0; i < 64; i++) {
            var i2 = i + j;
            var w15 = w[i - 15], w2 = w[i - 2];
            var a = hash[0], e = hash[4];
            var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
                + ((e & hash[5]) ^ ((~e) & hash[6]))
                + k[i]
                + (w[i] = (i < 16) ? w[i] : (
                        w[i - 16]
                        + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
                        + w[i - 7]
                        + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
                    ) | 0
                );
            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
                + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
            hash = [(temp1 + temp2) | 0].concat(hash);
            hash[4] = (hash[4] + temp1) | 0;
        }
        for (i = 0; i < 8; i++) {
            hash[i] = (hash[i] + oldHash[i]) | 0;
        }
    }
    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
            var b = (hash[i] >> (j * 8)) & 255;
            result += ((b < 16) ? 0 : "") + b.toString(16);
        }
    }
    return result;
}

function getStreams(tmdbId, mediaType, seasonNum, episodeNum) {
    var rawId = tmdbId;
    var rawType = mediaType;
    var rawS = seasonNum;
    var rawE = episodeNum;

    if (typeof tmdbId === "object" && tmdbId !== null) {
        rawId = tmdbId.tmdbId || tmdbId.id;
        rawType = tmdbId.mediaType || tmdbId.type;
        rawS = tmdbId.seasonNum || tmdbId.season;
        rawE = tmdbId.episodeNum || tmdbId.episode;
    }

    if (!rawId) return Promise.resolve([]);

    var type = (rawType === "series" || rawType === "tv") ? "tv" : "movie";
    var s = rawS || 1;
    var e = rawE || 1;
    var ts = Date.now();
    var payload = rawId + ":" + PROVIDER_CODE + ":" + type + ":" + ts + ":" + SALT;
    var sig = sha256(payload);

    var url = RESOLVER_API + "?provider=" + encodeURIComponent(PROVIDER_CODE) +
              "&tmdbId=" + encodeURIComponent(rawId) +
              "&type=" + encodeURIComponent(type) +
              "&s=" + encodeURIComponent(s) +
              "&e=" + encodeURIComponent(e) +
              "&ts=" + ts +
              "&sig=" + sig;

    return fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(function(res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
    })
    .then(function(data) {
        if (data && Array.isArray(data.streams)) return data.streams;
        if (Array.isArray(data)) return data;
        return [];
    })
    .catch(function(err) {
        return [];
    });
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { getStreams: getStreams };
}
if (typeof global !== "undefined") {
    global.getStreams = getStreams;
}
if (typeof globalThis !== "undefined") {
    globalThis.getStreams = getStreams;
}
if (typeof window !== "undefined") {
    window.getStreams = getStreams;
}
