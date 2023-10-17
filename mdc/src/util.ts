export const getModValue = (mods: string[], mod: string): string | undefined => {
    let prefix = `${mod}=`
    let prop = mods.find((mod) => mod.startsWith(prefix));
    if (prop) {
        return prop.slice(prefix.length);
    } else {
        return undefined;
    }
}
