function mostWordsFound(sentences: string[]): number {
    return sentences.reduce((max,sentence)=>{
                const sentenceWords  = sentence.split(" ").length
                return  max = max < sentenceWords ? sentenceWords: max;
    },0)
    
};
 const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
 console.log(mostWordsFound(sentences)) 
