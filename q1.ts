function mostWordsFound(sentences: string[]): number {

    let max = 0;
    sentences.forEach((sentence) => {
        const sentenceWords = sentence.split(" ").length
        max = Math.max(max, sentenceWords)
    })
    return max;
};
const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences)) 
