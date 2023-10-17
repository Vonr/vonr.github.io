import { getModValue } from "./util";

const choose = <T>(map: Record<string, T>, mods: string[]): T | undefined => {
    let lastIdx = 0;
    let result;
    for (let [k, v] of Object.entries(map)) {
        for (let [idx, mod] of mods.slice(lastIdx).entries()) {
            if (k === mod) {
                lastIdx += idx;
                result = v;
                break;
            }
        }
    }

    return result;
}

const replMakers: Record<string, (lang: string, mods: string[], code: string) => string> = {
    'rust': (_lang, mods, code) => {
        const channelMap = {
            'stable': 'stable',
            'beta': 'beta',
            'nightly': 'nightly',
        } as const;
        let channel = choose(channelMap, mods) ?? 'stable';

        const modeMap = {
            'debug': 'debug',
            'release': 'release',
        } as const;
        let mode = choose(modeMap, mods) ?? 'debug';

        const editionMap = {
            'e2015': 2015,
            'e2018': 2018,
            'e2021': 2021,
        } as const;
        let edition = choose(editionMap, mods) ?? 2021;

        if (mods.includes('nomain')) {
            code = `fn main() {
    ${code.replace(/\n$/, '').replaceAll(/\n/g, '\n    ')}
}`
        }

        return `https://play.rust-lang.org/?version=${channel}&mode=${mode}&edition=${edition}&code=${encodeURIComponent(code)}"`
    },

    'javascript': (_lang, _mods, code) => {
        return `https://www.typescriptlang.org/play?filetype=js&#src=${encodeURIComponent(code)}`;
    },

    'typescript': (_lang, _mods, code) => {
        return `https://www.typescriptlang.org/play?filetype=ts&#src=${encodeURIComponent(code)}`;
    },

    'haskell': (_lang, mods, code) => {
        if (mods.includes('nomain')) {
            code = `main :: IO ()
main = ${code.replace(/\n$/, '').replaceAll(/\n/g, '\n  ')}`;
        }

        return `https://play.haskell.org/?code=${encodeURIComponent(code)}`;
    },

    'zig': (_lang, _mods, code) => {
        return `https://codapi.org/zig/#${encodeURIComponent(code)}`
    },
};

export const makeRepl = (lang: string, mods: string[], code: string): string | undefined => {
    if (mods.includes('ignore')) {
        return undefined;
    }

    let defined = getModValue(mods, 'repl')
    if (defined) {
        return defined;
    }

    lang = lang.toLowerCase();
    let replMaker = replMakers[lang];
    if (replMaker) {
        return replMaker(lang, mods, code);
    }

    return undefined;
}
