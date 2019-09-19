import marked from 'marked'
import hljs from 'highlight.js'
import xss from 'xss'

export const translateMarkdown = (plainText, isGuardXss = false) => {
    return marked(isGuardXss ? xss(plainText) : plainText, {
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })
}