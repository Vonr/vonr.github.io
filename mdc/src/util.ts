export const getModValue = (
    mods: string[],
    mod: string
): string | undefined => {
    const prefix = `${mod}=`
    const prop = mods.find((mod) => mod.startsWith(prefix))
    if (prop) {
        return prop.slice(prefix.length)
    } else {
        return undefined
    }
}
