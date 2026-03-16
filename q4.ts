
type LetterInfo = {
  first: number,
  last: number,
  middle: Set<string>
}

function countPalindromicSubsequence(s: string): number {
  const map = new Map<string, LetterInfo>();
  const set = new Set<string>();
  for (let index = 0; index < s.length; index++) {
    const c = s.charAt(index);
    if (!map.get(c)) {
      map.set(c, { first: index, last: index, middle: new Set() })
    }
    else {
      map.get(c)!.last = index;
    }
  }
  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    const c = s.charAt(j);
    set.forEach(letter=> {
      const letterInfo = map.get(letter)
      if(j> letterInfo!.first && j< letterInfo!.last){
        letterInfo?.middle.add(c)
      }
    });
    let info = map.get(c)!
    if(j===info.first || j===info.last){
      j===info.first?set.add(c): set.delete(c);
    }
  }

  map.forEach(info => {
    sum += info.middle.size;
  });

  return sum;

};

console.log(countPalindromicSubsequence("bbcbaba"));
