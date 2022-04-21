/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    const u = ['a','e','u','i','o','A','E','U','I','O']
    const list = sentence.split(' ')
    let tail = ''
    let i = 0

    while(i < list.length) {
        let item = list[i]

        tail += 'a'

        let flag = u.some(e => item.charAt(0) === e)
        if (!flag) {
            item = item.slice(1, item.length) + item.slice(0, 1)
        }
        item += 'ma' + tail
        list[i] = item
        i++
    }
    return list.join(' ')
};
