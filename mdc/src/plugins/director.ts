// @ts-nocheck

import { h } from 'hastscript'
import { Root } from 'hast'
import { visit } from 'unist-util-visit'

export default function directorPlugin() {
    return (tree: Root) => {
        visit(tree, (node: unknown) => {
            if (
                node.type === 'containerDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'textDirective'
            ) {
                if (
                    node.children.length === 1 &&
                    node.children[0].type === 'paragraph' &&
                    node.children[0].attributes == null
                ) {
                    node.children = node.children[0].children
                }
                const data = node.data || (node.data = {})
                const hast = h(node.name, node.attributes || {})

                data.hName = hast.tagName
                data.hProperties = hast.properties
            }
        })
    }
}
