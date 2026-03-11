function mostWordsFound(sentences: string[]): number {
    return sentences.reduce((max,x)=>{
                const sentence_words  = x.split(" ").length
                return  max = max < sentence_words ? sentence_words: max;
    },0)
    
};
 const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
 console.log(mostWordsFound(sentences)) 
