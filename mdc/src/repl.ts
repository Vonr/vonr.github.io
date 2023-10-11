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
    'Rust': (lang, mods, code) => {
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
    }
}

export const makeRepl = (lang: string, mods: string[], code: string) => {
    if (mods.includes('ignore')) {
        return undefined;
    }

    let replMaker = replMakers[lang];
    if (replMaker) {
        return replMaker(lang, mods, code);
    }

    return undefined;
}
