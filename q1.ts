function mostWordsFound(sentences: string[]): number {
    let sentence_word: string[]  = [];
    let max_length = 0;
    sentences.map(sentence=> {
        console.log(sentence.split(" ")); 
        sentence_word  = sentence.split(" ")
        max_length = max_length <sentence_word.length ? sentence_word.length: max_length;
        
    })
    return max_length;
    
};
 const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
 
 console.log(mostWordsFound(sentences)) 
